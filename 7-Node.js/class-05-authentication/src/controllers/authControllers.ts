import { Request, Response, NextFunction } from "express";
import { userRepository } from "../repositories/userRepositories";
import { compare } from "bcrypt";
import { z } from "zod";
import { sign } from "jsonwebtoken";

export const authControllers = {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z
        .object({
          email: z
            .string({
              invalid_type_error: "only text!",
            })
            .email({ message: "badly email format" })
            .max(255, "tamanho maximo atingido para o email"),

          password: z
            .string({
              invalid_type_error: "Para a senha use o tipo string!",
            })
            .max(255, { message: "tamanho máximo atingido para a senha!" }),
        })
        .strict();
        
      const { email, password } = userSchema.parse(req.body);

      const user = await userRepository.getByEmail(email);

      if (!user) throw res.status(401).json({ message: "email or password invalid!" });

      const passwordCheck = await compare(password, user.password);

      if (!passwordCheck) {
        throw res.status(401).json({ message: "password invalid!" });
      }

      const token = sign({ id: user.id }, process.env.SECRET_TOKEN, {
        expiresIn: process.env.EXPIRESIN_TOKEN,
      });

      res.cookie(process.env.KEY_TOKEN, token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 1000 * 60 * 15,
      });

      return res.status(200).json({ message: "user logged in!" });
    } catch (error) {
      return next(error);
    }
  },
};