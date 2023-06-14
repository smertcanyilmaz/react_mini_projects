import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    addTodo(value);
    setValue("");
  };

  return (
    <form className="TodoForm " onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="what is the task today"
        value={value}
        onChange={changeHandler}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
