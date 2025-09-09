import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { errorResponse } from "../utils/response.js";

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Expect Authorization: Bearer <token>
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return errorResponse(res, "Not authorized, token missing", 401);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return errorResponse(res, "Not authorized", 401);
    req.user = { id: user._id.toString(), role: user.role };
    next();
  } catch (err) {
    return errorResponse(res, "Not authorized, token invalid", 401);
  }
});

// RBAC: allowedRoles is array or string(s)
export const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) return errorResponse(res, "Not authorized", 401);
    const role = req.user.role;
    if (!allowedRoles.length) return next(); // if no roles specified => allow
    const allowed = allowedRoles.some(r => r === role);
    if (!allowed) return errorResponse(res, "Forbidden - insufficient permissions", 403);
    next();
  };
};
