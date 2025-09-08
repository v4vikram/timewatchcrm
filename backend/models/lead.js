// models/lead.js
import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    client: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    status: {
      type: String,
      enum: ["new", "contacted", "converted", "lost"],
      default: "new",
    },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);
