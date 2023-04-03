import { useContext } from "react";
import { todosContext } from "./ToDoProvider";

export const useToDos = () => {
  const todoContext = useContext(todosContext);
  return todoContext;
};
