import { useContext } from "react";
import { todosContext } from "./ToDoProvider";

export const useToDos = () => {
  const context = useContext(todosContext);

  //verificar se o provider está englobando os componentes certos
  if (context) {
    return context;
  } else {
    throw new Error("useToDos não está dentro do TodoProvider");
  }
};
