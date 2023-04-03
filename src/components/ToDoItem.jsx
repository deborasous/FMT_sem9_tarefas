import React from "react";

export const ToDoItem = ({ todo, onClick }) => {
  return (
    <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
      <label className="form-check-label" htmlFor={`${todo.id}-done-checkbox`}>
        {todo.text}
      </label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onClick(todo.id)}
        role="button"
        className="form-check-input m-0"
        id={`${todo.id}-done-checkbox`}
      />
    </li>
  );
};
