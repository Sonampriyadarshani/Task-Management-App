import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, // Automatically removes extra spaces from start and end.
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
  },
  { timestamps: true } // This automatically adds:createdAt,updatedAt

);

export default mongoose.model("Task", taskSchema);
