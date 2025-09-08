import express from "express";
import {
  getLeads,
  getLead,
  createLead,
  updateLead,
  deleteLead,
} from "../controllers/leadController.js";

const router = express.Router();

// GET all leads
router.get("/", getLeads);

// GET single lead by ID
router.get("/:id", getLead);

// CREATE a new lead
router.post("/", createLead);

// UPDATE lead
router.put("/:id", updateLead);

// DELETE lead
router.delete("/:id", deleteLead);

export default router;
