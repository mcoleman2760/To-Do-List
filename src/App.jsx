import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TopNavigation from "./TopNavigation.jsx";
import Login from "./Login.jsx";
import TodoLists from "./TodoLists.jsx";
import TodoListDetail from "./TodoListsDetail.jsx";
import { useState } from "react";

function App() {
  const [lists, setLists] = useState(() => {
    const storedLists = localStorage.getItem("todolists");
    return storedLists ? JSON.parse(storedLists) : [];
  });

  const updateLists = (updatedLists) => {
    setLists(updatedLists);
    localStorage.setItem("todolists", JSON.stringify(updatedLists));
  };

  return (
    <Router>
      <div id="root">
        <TopNavigation />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/todolists"
            element={<TodoLists lists={lists} updateLists={updateLists} />}
          />
          <Route
            path="/todolist/:id"
            element={<TodoListDetail lists={lists} updateLists={updateLists} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
