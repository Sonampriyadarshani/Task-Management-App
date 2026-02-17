const TaskItem = ({ task, onDelete, onEdit, onToggle }) => {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition duration-200 flex justify-between items-center mb-3">
      <div>
        <h3
          className={`text-lg font-semibold ${
            task.status === "completed"
              ? "line-through text-gray-400"
              : "text-gray-800"
          }`}
        >
          {task.title}
        </h3>
        <p className="text-sm text-gray-500">{task.description}</p>

        <span
          className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
            task.status === "completed"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {task.status}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task._id)}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm transition"
        >
          ✓
        </button>

        <button
          onClick={() => onEdit(task)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-sm transition"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
