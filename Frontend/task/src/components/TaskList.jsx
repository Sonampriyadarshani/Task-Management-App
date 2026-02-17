import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onEdit, onToggle }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks found</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
            onToggle={onToggle}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
