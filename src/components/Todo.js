import React from "react";

import "./Todo.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  return (
    <div className="todo">
      <div className="todo_inner">
        todo
        <div className="icons">
          <FontAwesomeIcon icon={faPenToSquare} />
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
