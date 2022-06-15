import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return (
    <>
      <h1>Todos</h1>
      <TodoInput />
      <TodoList />
    </>
  );
};

export default TodoContainer;
