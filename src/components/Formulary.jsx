import React, { useRef } from "react";


export const Formulary = ({ onSubmit }) => {
  const textElementRef = useRef();

  const handleSubmit = (e) => {
    e.preventdefault();

    onSubmit(textElementRef.current.value);
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
          arua-aria-describedby="campo-adicionar-tarefa"
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
