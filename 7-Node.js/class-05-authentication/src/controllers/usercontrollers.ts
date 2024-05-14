import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { userRepository } from "../repositories/userRepositories";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z
        .object({
          name: z
            .string({
              required_error: "Nome obrigatório",
              invalid_type_error: "Somente texto",
            })
            .min(3, { message: "Minimo de 3 caracteres" })
            .max(255, { message: "tamanho máximo atingido para o nome!" }),

          email: z
            .string({
              required_error: "Email obrigatório!",
              invalid_type_error: "Somente texto!",
            })
            .email({ message: "Email inválido!" }),

          password: z
            .string({
              required_error: "Senha obrigatório",
              invalid_type_error: "Para a senha use o tipo string!",
            })
            .max(255, { message: "tamanho máximo atingido para o nome!" })
            .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{7,}$/, {
              message:
                "a senha deve conter uma letra maiuscula, um número e um caractere especial.",
            }),
        })
        .strict();

      const { name, email, password } = userSchema.parse(req.body);

      const userExists = await userRepository.getByEmail(email);
      if (userExists)
        throw res.status(400).json({ message: "email already exists " });

      const userCreated = await userRepository.create({
        name,
        email,
        password,
      });

      return res.status(201).json({ message: "user created!", userCreated });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const userID = req.userID;

      const user = await userRepository.getByID(userID);
      if (!user) throw res.status(401).json({ message: "user not found" });

      const { name, email } = user;
      console.log(user);

      return res.status(200).json({ name, email });
    } catch (error) {
      return next(error);
    }
  },
};