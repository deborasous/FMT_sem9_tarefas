import { createContext, useState } from "react";

export const todosContext = createContext();

export const TodoProvider = ({ children }) => {
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

  const contextValues = {
    toDos,
    addToDo,
    markToDo,
    pendingToDos,
    completedToDos,
  };

  return (
    <todosContext.Provider value={contextValues}>
      {children}
    </todosContext.Provider>
  );
};
