import express from "express";
import {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
} from "../controllers/clientController.js";

const router = express.Router();

// GET all clients
router.get("/", getClients);

// GET single client by ID
router.get("/:id", getClient);

// CREATE a new client
router.post("/", createClient);

// UPDATE client
router.put("/:id", updateClient);

// DELETE client
router.delete("/:id", deleteClient);

export default router;
