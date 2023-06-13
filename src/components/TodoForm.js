import React from "react";

import "./TodoForm.css";

const TodoForm = () => {
  return (
    <div className="todo_form">
      <input type="text" placeholder="what is the task today?" />
      <button>Add Task</button>
    </div>
  );
};

export default TodoForm;
