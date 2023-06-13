import React from "react";

import TodoForm from "./TodoForm";
import Todo from "./Todo";
//import EditTodoForm from "./EditTodoForm";

import "./TodoWrapper.css";

const TodoWrapper = () => {
  return (
    <div className="todo_wrapper">
      <h1>Add a assignment</h1>
      <TodoForm />
      <Todo />
      {/* <EditTodoForm /> */}
    </div>
  );
};

export default TodoWrapper;
