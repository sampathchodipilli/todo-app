import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return (
    <div className="container">
      <h1 className="text-center display-4 mb-4">Todos</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodoContainer;
