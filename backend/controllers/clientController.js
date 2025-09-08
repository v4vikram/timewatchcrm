import asyncHandler from "express-async-handler";
import Client from "../models/client.js";
import { successResponse, errorResponse } from "../utils/response.js";

// @desc    Get all clients
// @route   GET /api/clients
export const getClients = asyncHandler(async (req, res) => {
  const clients = await Client.find().populate("user", "name email");
  return successResponse(res, clients, "Clients fetched successfully");
});

// @desc    Get single client
// @route   GET /api/clients/:id
export const getClient = asyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.id).populate("user", "name email");
  if (!client) return errorResponse(res, "Client not found", 404);
  return successResponse(res, client, "Client fetched successfully");
});

// @desc    Create a new client
// @route   POST /api/clients
export const createClient = asyncHandler(async (req, res) => {
  const newClient = await Client.create(req.body);
  return successResponse(res, newClient, "Client created successfully", 201);
});

// @desc    Update client
// @route   PUT /api/clients/:id
export const updateClient = asyncHandler(async (req, res) => {
  const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedClient) return errorResponse(res, "Client not found", 404);
  return successResponse(res, updatedClient, "Client updated successfully");
});

// @desc    Delete client
// @route   DELETE /api/clients/:id
export const deleteClient = asyncHandler(async (req, res) => {
  const deletedClient = await Client.findByIdAndDelete(req.params.id);
  if (!deletedClient) return errorResponse(res, "Client not found", 404);
  return successResponse(res, {}, "Client deleted successfully");
});
