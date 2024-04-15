import { NextFunction, Request, Response } from "express";

type CustomError = {
    message: string;
    status?: number;
};
   
export function pageNotFoundError(req: Request, nes: Response, next: NextFunction) {
  const error: CustomError = new Error("Page not found");
  error.status = 404;
  next(error);
   }