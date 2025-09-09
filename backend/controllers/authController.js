import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import { generateToken } from "../utils/jwt.js";
import { successResponse, errorResponse } from "../utils/response.js";

// @route POST /api/auth/register
export const register = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) {
    return errorResponse(res, "Please provide name, email and password", 400);
  }

  const existing = await User.findOne({ email });
  if (existing) return errorResponse(res, "Email already in use", 400);

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hashed, role });
  const token = generateToken({ id: user._id, role: user.role });

  const userRes = user.toObject();
  delete userRes.password;

  return successResponse(res, { user: userRes, token }, "Registered", 201);
});

// @route POST /api/auth/login
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return errorResponse(res, {email:"Email and password required"}, 400);

  const user = await User.findOne({ email });
  if (!user) return errorResponse(res, {email:"Email not exists"}, 401);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return errorResponse(res, {password: "Invalid credentials"}, 401);

  const token = generateToken({ id: user._id, role: user.role });

  // Convert mongoose document to plain object
  const userRes = user.toObject();
  delete userRes.password;

  // ✅ Set token in HTTP-only cookie
  res.cookie("token", token, {
    httpOnly: true,        // cannot be accessed via JS
    secure: process.env.NODE_ENV === "production", // only send over https
    sameSite: "strict",    // helps against CSRF
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  return successResponse(res, { user: userRes }, "Logged in", 200);
});


// @route GET /api/auth/me
export const getMe = asyncHandler(async (req, res) => {
  // authMiddleware attaches req.user
  const user = await User.findById(req.user.id).select("-password");
  if (!user) return errorResponse(res, "User not found", 404);
  return successResponse(res, user, "Profile fetched");
});

// @route POST /api/auth/logout
export const logout = asyncHandler(async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // only over HTTPS in prod
    sameSite: "strict",
  });

  return successResponse(res, null, "Logged out successfully");
});
