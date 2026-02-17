import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "http://localhost:5000/api/tasks";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // Fetch All Tasks

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(API_URL);
      setTasks(data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  // Add / Update Task

  const handleSubmit = async (formData) => {
    try {
      if (editingTask) {
        // Update
        const { data } = await axios.put(`${API_URL}/${editingTask._id}`, {
          ...formData, // updated title & description
          status: "pending", // reset status to pending
        });

        setTasks((prev) =>
          prev.map((task) => (task._id === editingTask._id ? data : task)),
        );

        toast.success("Task updated successfully");
        setEditingTask(null);
      } else {
        // Create
        const { data } = await axios.post(API_URL, formData);
        setTasks((prev) => [data, ...prev]);
        toast.success("Task added successfully");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  // Delete Task

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks((prev) => prev.filter((task) => task._id !== id));
      toast.success("Task deleted");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete task");
    }
  };

  // ==============================
  // Toggle Complete
  // ==============================
  const handleToggle = async (id) => {
    try {
      const task = tasks.find((t) => t._id === id);
      if (!task) return;

      // Only send allowed fields for update
      const { data } = await axios.put(`${API_URL}/${id}`, {
        title: task.title,
        description: task.description,
        status: "completed", // force completed
      });

      setTasks((prev) => prev.map((t) => (t._id === id ? data : t)));
      toast.success("Task marked as completed");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update task");
    }
  };

  // ==============================
  // Load tasks on mount

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    editingTask,
    setEditingTask,
    handleSubmit,
    handleDelete,
    handleToggle,
  };
}
