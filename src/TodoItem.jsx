import React, { useState } from "react";

function TodoItem() {
  return (
    <div className="todo">
      <div className="text">To Do</div>
      <div className="delete-todo">
        <span>✓</span>
      </div>
    </div>
  );
}

export default TodoItem;
