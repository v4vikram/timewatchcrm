import express from "express";
import { register, login, getMe } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// REGISTER a new user
router.post("/register", register);

// LOGIN user and get token
router.post("/login", login);

// GET logged-in user info (protected route)
router.get("/me", protect, getMe);

export default router;
