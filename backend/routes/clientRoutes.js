  import express from "express";
  import {
    getClients,
    getClient,
    createClient,
    updateClient,
    deleteClient,
  } from "../controllers/clientController.js";
  import { protect, authorize} from "../middlewares/authMiddleware.js";

  const router = express.Router();

// GET all clients - Admin/Manager only
router.get("/", protect, authorize("admin", "manager"), getClients);

// GET single client by ID - Owner/Admin/Manager
router.get("/:id", protect, getClient);

// CREATE a new client - Any logged-in user
router.post("/", protect, createClient);

// UPDATE client - Owner/Admin/Manager
router.put("/:id", protect, updateClient);

// DELETE client - Admin or Owner
router.delete("/:id", protect, deleteClient);

  export default router;
