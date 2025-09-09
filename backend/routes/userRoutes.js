import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/userController.js";
import { protect, authorize } from "../middlewares/authMiddleware.js";

const router = express.Router();


// GET all users - ADMIN only
router.get("/", protect, authorize("admin"), getUsers);

// GET a single user by ID - ADMIN only
router.get("/:id", protect, authorize("admin"), getUser);

// CREATE a new user - ADMIN only
router.post("/", protect, authorize("admin"), createUser);

// UPDATE a user - ADMIN or SELF
router.put("/:id", protect, updateUser); 
// (inside controller, check if req.user.id === req.params.id OR req.user.role === 'admin')

// DELETE a user - ADMIN only
router.delete("/:id", protect, authorize("admin"), deleteUser);

export default router;
