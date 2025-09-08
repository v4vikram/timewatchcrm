// models/client.js
import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    company: { type: String },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Client", clientSchema);
