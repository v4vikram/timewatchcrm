import asyncHandler from "express-async-handler";
import Lead from "../models/lead.js";
import { successResponse, errorResponse } from "../utils/response.js";

// @desc    Get all leads
// @route   GET /api/leads
export const getLeads = asyncHandler(async (req, res) => {
  const leads = await Lead.find()
    .populate("client", "name email phone")
    .populate("user", "name email");
  return successResponse(res, leads, "Leads fetched successfully");
});

// @desc    Get single lead
// @route   GET /api/leads/:id
export const getLead = asyncHandler(async (req, res) => {
  const lead = await Lead.findById(req.params.id)
    .populate("client", "name email phone")
    .populate("user", "name email");
  if (!lead) return errorResponse(res, "Lead not found", 404);
  return successResponse(res, lead, "Lead fetched successfully");
});

// @desc    Create a new lead
// @route   POST /api/leads
export const createLead = asyncHandler(async (req, res) => {
  const newLead = await Lead.create(req.body);
  return successResponse(res, newLead, "Lead created successfully", 201);
});

// @desc    Update lead
// @route   PUT /api/leads/:id
export const updateLead = asyncHandler(async (req, res) => {
  const updatedLead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedLead) return errorResponse(res, "Lead not found", 404);
  return successResponse(res, updatedLead, "Lead updated successfully");
});

// @desc    Delete lead
// @route   DELETE /api/leads/:id
export const deleteLead = asyncHandler(async (req, res) => {
  const deletedLead = await Lead.findByIdAndDelete(req.params.id);
  if (!deletedLead) return errorResponse(res, "Lead not found", 404);
  return successResponse(res, {}, "Lead deleted successfully");
});
