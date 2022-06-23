import React from "react";
import useInstallPrompt from "../hooks/useInstallPrompt";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [installPrompt, installable] = useInstallPrompt();
  return (
    <div className="container my-5">
      <h1 className="text-center display-4 mb-4">Todos </h1>
      {installable ? (
        <div className="my-4 d-flex">
          <div className="mx-auto">
            <button
              className="btn btn-sm btn-dark rounded-pill py-1 px-3"
              onClick={installPrompt}
            >
              <i className="bi bi-download"></i> Install
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodoContainer;
