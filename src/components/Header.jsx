import React from "react";
import { Link } from "react-router-dom";
import { useToDos } from "../context/useToDos";

export const Header = () => {
  return (
    <header className="header bg-body-secondary w-100">
      <nav className="navbar navbar-expand-lg container d-flex w-auto">
        <span className="flex-grow-1">Tarefas.Dev</span>
        <ul className="navbar-nav">
          <li className="nav-item me-auto">
            <Link to="/" aria-current="page" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item me-auto">
            <Link to="/quem-sou" className="nav-link">
              Quem Sou
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
