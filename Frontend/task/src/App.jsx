import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import useTasks from "./hooks/useTasks";

function App() {
  const {
    tasks,
    loading,
    editingTask,
    setEditingTask,
    handleSubmit,
    handleDelete,
    handleToggle,
  } = useTasks();

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1f2937",
            color: "#fff",
          },
        }}
      />

      <Layout>
        <TaskForm onSubmit={handleSubmit} editingTask={editingTask} />

        {loading ? (
          <p className="text-center text-gray-500">Loading tasks...</p>
        ) : (
          <TaskList
            tasks={tasks}
            onDelete={handleDelete}
            onEdit={setEditingTask}
            onToggle={handleToggle}
          />
        )}
      </Layout>
    </>
  );
}

export default App;
