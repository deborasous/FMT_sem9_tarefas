import React from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ name, list, onClick }) => {
  console.log(list, 'ddd')
  return (
    <section>
      <h4>{name}</h4>
      <ul className="col px-4 py-2 border rounded-1">
        {list.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} onClick={onClick} />
        ))}
      </ul>
    </section>
  );
};
