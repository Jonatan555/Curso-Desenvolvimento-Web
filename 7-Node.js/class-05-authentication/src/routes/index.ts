import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { userRoutes } from "./user.routes";
import { salesRoutes } from "./sales.routes";

export const router = Router();

router.use(authRoutes);
router.use(userRoutes);
router.use(salesRoutes);