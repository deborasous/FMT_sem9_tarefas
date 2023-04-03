import React from "react";
import { useToDos } from "../context/useToDos";

export const ToDoItem = ({ todo }) => {
  const { markToDo } = useToDos();

  return (
    <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
      <label className="form-check-label" htmlFor={`${todo.id}-done-checkbox`}>
        {todo.text}
      </label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => markToDo(todo.id)}
        role="button"
        className="form-check-input m-0"
        id={`${todo.id}-done-checkbox`}
      />
    </li>
  );
};
