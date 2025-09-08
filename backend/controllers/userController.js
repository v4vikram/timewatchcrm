import asyncHandler from "express-async-handler";
import User from "../models/user.js";
import { successResponse, errorResponse } from "../utils/response.js";

// @desc    Get all users
// @route   GET /api/users
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");
  return successResponse(res, users, "Users fetched successfully");
});

// @desc    Get single user
// @route   GET /api/users/:id
export const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) {
    return errorResponse(res, "User not found", 404);
  }
  return successResponse(res, user, "User fetched successfully");
});

// @desc    Create a new user
// @route   POST /api/users
export const createUser = asyncHandler(async (req, res) => {

  const user = await User.find({ email: req.email });

  if (user) {
    return errorResponse(res, "User already exists", 409);
  }
  const newUser = await User.create(req.body);
  return successResponse(res, newUser, "User created successfully", 201);
});

// @desc    Update user
// @route   PUT /api/users/:id
export const updateUser = asyncHandler(async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).select("-password");

  if (!updatedUser) {
    return errorResponse(res, "User not found", 404);
  }

  return successResponse(res, updatedUser, "User updated successfully");
});

// @desc    Delete user
// @route   DELETE /api/users/:id
export const deleteUser = asyncHandler(async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);

  if (!deletedUser) {
    return errorResponse(res, "User not found", 404);
  }

  return successResponse(res, {}, "User deleted successfully");
});
