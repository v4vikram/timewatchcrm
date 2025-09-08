import asyncHandler from "express-async-handler";
import User from "../models/user.js";

// @desc    Get all users
// @route   GET /api/users
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password"); // hide password
  res.json(users);
});

// @desc    Get single user
// @route   GET /api/users/:id
export const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.json(user);
});

// @desc    Create a new user
// @route   POST /api/users
export const createUser = asyncHandler(async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
});

// @desc    Update user
// @route   PUT /api/users/:id
export const updateUser = asyncHandler(async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).select("-password");

  if (!updatedUser) {
    res.status(404);
    throw new Error("User not found");
  }

  res.json(updatedUser);
});

// @desc    Delete user
// @route   DELETE /api/users/:id
export const deleteUser = asyncHandler(async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);

  if (!deletedUser) {
    res.status(404);
    throw new Error("User not found");
  }

  res.json({ message: "User deleted successfully" });
});
