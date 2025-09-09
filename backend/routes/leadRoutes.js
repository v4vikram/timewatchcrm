import express from "express";
import {
  getLeads,
  getLead,
  createLead,
  updateLead,
  deleteLead,
} from "../controllers/leadController.js";
import { protect, authorize } from "../middlewares/authMiddleware.js";


const router = express.Router();

// GET all leads - Admin/Manager/Sales
router.get("/", protect, authorize("admin", "manager", "sales"), getLeads);

// GET single lead by ID - Assigned user/Admin/Manager
router.get("/:id", protect, getLead);

// CREATE a new lead - Any logged-in user
router.post("/", protect, createLead);

// UPDATE lead - Assigned user/Admin/Manager
router.put("/:id", protect, updateLead);

// DELETE lead - Admin only
router.delete("/:id", protect, authorize("admin"), deleteLead);

export default router;
