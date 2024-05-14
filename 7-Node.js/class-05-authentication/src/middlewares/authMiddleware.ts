import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { cookie } = req.headers;
  if (!cookie) return res.status(401).json({ message: "token obrigatório!" });

  const splitCookieToken = cookie.split("=");
  if (splitCookieToken.length != 2) {
    return res.status(401).json({ message: "token mal formatado!" });
  }

  const [key, token] = splitCookieToken;

  if (key != process.env.KEY_TOKEN) {
    return res.status(401).json({ message: "chave do token inválido!" });
  }

  verify(token, process.env.SECRET_TOKEN, (error, decoded) => {
    if (error)
      throw res
        .status(401)
        .json({ message: error.message || "Erro no token!" });
    const { id } = decoded as JwtPayload;
    req.userID = id;
    return next();
  });
}
