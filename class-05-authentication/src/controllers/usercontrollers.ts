import { Request, Response, NextFunction } from "express";
import { z } from "zod";

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

      console.log(name, email, password);

      return res.status(201).json({ message: "user created!" });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json({ message: "user read!" });
    } catch (error) {
      return next(error);
    }
  },
};
