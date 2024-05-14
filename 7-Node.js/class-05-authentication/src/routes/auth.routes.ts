import { Router } from "express";
import { userControllers } from "../controllers/usercontrollers";
import { authControllers } from "../controllers/authControllers";

export const authRoutes = Router();

authRoutes.post("/login", authControllers.login);
