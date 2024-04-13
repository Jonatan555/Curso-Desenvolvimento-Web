import { NextFunction, Request, Response } from "express";

export const salesCrontrollers = {
 read(_req: Request, res: Response) {
    return res.status(200).json({
   reportes: {
    sale1: "10000",
    sale2: "20000",
    sale3: "30000",
   }
    })
 },
}