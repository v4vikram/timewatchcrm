// models/payment.js
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    client: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
