import { useRef } from "react";
import { useToDos } from "../context/useToDos";

export const Formulary = () => {
  const { addToDo } = useToDos();
  const textElementRef = useRef();

  //ao clicar no formulario será acionado a função addToDo que está no ToDoProvider
  const handleSubmit = (e) => {
    e.preventDefault();

    addToDo(textElementRef.current.value);
    textElementRef.current.value = "";
  };

  return (
    <div className="mb-5 bg-secondary-subtle bg bg-gradient rounded p-4">
      <h5>Adicionar Tarefa</h5>
      <form className="input-group mb-3" onSubmit={handleSubmit}>
        <span className="input-group-text" id="fild_add_task">
          Texto da Tarefa:
        </span>
        <input
          type="text"
          ref={textElementRef}
          className="form-control"
          aria-label="Adicionar tarefa"
          aria-describedby="campo-adicionar-tarefa"
        />
        <button
          className="btn btn-outline-primary bg-light"
          type="submit"
          id="button-addon2"
        >
          Adicionar Tarefa
        </button>
      </form>
    </div>
  );
};
