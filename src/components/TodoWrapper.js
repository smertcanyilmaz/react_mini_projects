import React from "react";

import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

const TodoWrapper = () => {
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm />
      <Todo />
      <EditTodoForm />
    </div>
  );
};

export default TodoWrapper;
