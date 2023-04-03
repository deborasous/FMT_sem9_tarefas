import React, { useContext } from "react";
import { Formulary } from "../components/Formulary";
import { ToDoList } from "../components/ToDoList";
import { todoContext } from "../context/Contexts";

export const Home = () => {
  const context = useContext(todoContext);

  return (
    <>
      <div className="row">
        <Formulary onSubmit={context.addToDo} />
      </div>
      <div className="row">
        <ToDoList
          name="A fazer"
          list={context.pendingToDos}
          onClick={context.markToDo}
        />
        <ToDoList
          name="Finalizado"
          list={context.completedToDos}
          onClick={context.markToDo}
        />
      </div>
    </>
  );
};

//list envia os status das tarefas (se a fazer ou se finalizado) para o componenteToDoList
