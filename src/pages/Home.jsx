import React from "react";
import { Formulary } from "../components/Formulary";
import { ToDoList } from "../components/ToDoList";
import { TodoProvider } from "../context/ToDoProvider";

export const Home = () => {

  return (
    <TodoProvider>
      <div className="row">
        <Formulary onSubmit={addToDo} />
      </div>
      <div className="row">
        <ToDoList
          name="A fazer"
          list={pendingToDos}
          onClick={markToDo}
        />
        <ToDoList
          name="Finalizado"
          list={completedToDos}
          onClick={markToDo}
        />
      </div>
    </TodoProvider>
  );
};

//list envia os status das tarefas (se a fazer ou se finalizado) para o componenteToDoList
