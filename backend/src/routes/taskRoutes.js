import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

import {
  validateCreateTask,
  validateUpdateTask,
} from "../middleware/taskValidation.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", validateCreateTask, createTask);
router.put("/:id", validateUpdateTask, updateTask);
router.delete("/:id", deleteTask);

export default router;
