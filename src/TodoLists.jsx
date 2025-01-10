import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RandomFact from "./components/RandomFact.jsx";
import "./TodoLists.css";

function TodoLists({ lists, updateLists }) {
  const [newListName, setNewListName] = useState("");

  // Handle deletion of a Todo List
  const handleDeleteList = (id) => {
    const updatedLists = lists.filter((list) => list.id !== id);
    updateLists(updatedLists); // Update the state and localStorage
  };

  const handleAddList = () => {
    if (newListName.trim()) {
      const newList = { id: Date.now(), name: newListName, tasks: [] };
      const updatedLists = [...lists, newList];
      updateLists(updatedLists);
      setNewListName("");
    }
  };

  return (
    <div className="todolists-page">
      <div className="todolists-container">
        <h1 className="todolists-title">To-Do List</h1>
        <div className="todolists-input-container">
          <input
            type="text"
            placeholder="New List Name"
            value={newListName}
            className="todolists-input"
            onChange={(e) => setNewListName(e.target.value)}
          />
          <button onClick={handleAddList} className="todolists-add-button">
            Add List
          </button>
        </div>

        <ul className="todolists-list">
          {lists.map((list) => (
            <li key={list.id} className="todolists-list-item">
              <Link
                to={`/todolist/${list.id}`}
                state={{ listName: list.name }}
                className="todolists-link"
              >
                {list.name}
              </Link>
              {/* Delete button for Todo List */}
              <button
                onClick={() => handleDeleteList(list.id)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="randomfact-container">
        <RandomFact />
      </div>
    </div>
  );
}

export default TodoLists;
