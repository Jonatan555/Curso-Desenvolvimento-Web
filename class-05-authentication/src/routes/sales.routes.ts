import { Router } from "express";
import { salesCrontrollers } from "../controllers/salesCrontrollers";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleAuthorizationMiddleware } from "../middlewares/roleAuthorizationMiddleware";

export const salesRoutes = Router();

salesRoutes.use(authMiddleware, roleAuthorizationMiddleware(["admin"]));

salesRoutes.get("/sales", salesCrontrollers.read);