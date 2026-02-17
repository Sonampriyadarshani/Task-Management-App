import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function TaskForm({ onSubmit, editingTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // ===============================
  // Populate form when editing
  // ===============================
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || "");
      setDescription(editingTask.description || "");
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTask]);

  // ===============================
  // Submit Handler
  // ===============================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Title is required");
      return;
    }

    onSubmit({
      title,
      description,
    });

    // Reset only when adding new task
    if (!editingTask) {
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        {editingTask ? "Edit Task" : "Add New Task"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Enter task title..."
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description */}
        <div>
          <textarea
            placeholder="Enter task description..."
            rows="3"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className={`w-full py-3 rounded-xl text-white font-medium transition ${
            editingTask
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {editingTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
}
