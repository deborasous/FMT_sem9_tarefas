import React, { useState } from "react";
import { Formulary } from "../components/Formulary";
import { ToDoList } from "../components/ToDoList";

export const Home = () => {
  const [toDos, setToDos] = useState([
    //true é a fazer / false é finalizado
    { id: 1, text: "Estudar React", done: false },
    { id: 2, text: "Praticar com um projeto", done: true },
    { id: 3, text: "Divulgar resultado no Linkedin", done: false },
  ]);

  const addToDo = (text) => {
    const newToDo = {
      id: Date.now(),
      text,
      done: false,
    };
    setToDos([...toDos, newToDo]);
  };

  const markToDo = (id) => {
    const newToDos = toDos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setToDos(newToDos);
  };

  const pendingToDos = toDos.filter((todo) => todo.done);
  const completedToDos = toDos.filter((todo) => !todo.done);

  return (
    <div>
      <div className="row">
        <Formulary onSubmit={addToDo} />
      </div>
      <div className="row">
        <ToDoList name="A fazer" list={pendingToDos} onClick={markToDo} />
        <ToDoList name="Finalizado" list={completedToDos} onClick={markToDo} />
      </div>
    </div>
  );
};

//list envia os status das tarefas (se a fazer ou se finalizado) para o componenteToDoList
