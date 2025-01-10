import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./TodoListsDetail.css";

function TodoListDetail({ lists, updateLists }) {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [listName, setListName] = useState("");

  useEffect(() => {
    const currentList = lists.find((list) => list.id === parseInt(id));
    if (currentList) {
      setListName(currentList.name);
      setTasks(currentList.tasks || []);
    }
  }, [id, lists]);

  // Handle adding a new task
  const handleAddTask = () => {
    if (newTaskName.trim()) {
      const updatedTasks = [...tasks, { id: Date.now(), name: newTaskName }];
      setTasks(updatedTasks);

      const updatedLists = lists.map((list) =>
        list.id === parseInt(id) ? { ...list, tasks: updatedTasks } : list
      );
      updateLists(updatedLists);
      setNewTaskName("");
    }
  };

  // Handle deletion of a task
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);

    const updatedLists = lists.map((list) =>
      list.id === parseInt(id) ? { ...list, tasks: updatedTasks } : list
    );
    updateLists(updatedLists);
  };

  return (
    <div className="todolist-detail-container">
      <div className="todolist-detail-card">
        <h1>Tasks for "{listName || "Untitled List"}"</h1>
        <div className="task-input-container">
          <input
            type="text"
            placeholder="New Task Name"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>

        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="todolist-task-item">
              {task.name}
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <Link to="/todolists" className="back-link">
          Back to To-Do Lists
        </Link>
      </div>
    </div>
  );
}

export default TodoListDetail;
