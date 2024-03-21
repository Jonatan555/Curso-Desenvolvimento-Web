import { Request, Response, NextFunction } from "express";

type AppErrors = {
  message: string;
  status: number;
};

export function appErrors(
  error: AppErrors,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("middleware error _", error);
  return res
    .status(error.status || 500)
    .json({ message: error.message || "server error" });
}
