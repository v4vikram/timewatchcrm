import express from "express";
import { register, login, getMe, logout } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";
import {validate} from "../middlewares/validateMiddleware.js";
import { loginSchema } from "../schema/authSchema.js";

const router = express.Router();

// REGISTER a new user
router.post("/register", register);

// LOGIN user and get token
router.post("/login", validate(loginSchema), login);

// GET logged-in user info (protected route)
router.get("/me", protect, getMe);

// POST logout (protected route)
router.post("/logout", protect, logout);

export default router;
