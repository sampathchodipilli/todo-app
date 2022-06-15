import React, { useContext } from "react";
import { TodoContext } from "../App";
import Todo from "./Todo";

const TodoList = () => {
  const { todos: todoList } = useContext(TodoContext);

  return (
    <>
      <h2 style={{ margin: "10px", marginTop: "30px" }}>Tasks to do</h2>
      <ul style={{ margin: "10px" }}>
        {todoList?.map((todo, index) => (
          <Todo key={index} data={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
