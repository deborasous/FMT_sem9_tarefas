import React from "react";
import { useToDos } from "../context/useToDos";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ name }) => {
  const { pendingToDos, completedToDos } = useToDos();

  return (
    <section className="col p-2 m-2 border rounded-1">
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        {name === "Finalizado"
          ? completedToDos.map((todo) => <ToDoItem key={todo.id} todo={todo} />)
          : pendingToDos.map((todo) => <ToDoItem key={todo.id} todo={todo} />)}
      </ul>
    </section>
  );
};
