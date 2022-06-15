import React, { useContext } from "react";
import { TodoContext } from "../App";
import Todo from "./Todo";

const TodoList = () => {
  const { todos: todoList } = useContext(TodoContext);

  return (
    <>
      <h2 style={{ margin: "10px", marginTop: "30px" }}>Tasks to do</h2>
      <div style={{ textAlign: "start" }}>
        {todoList?.map((todo, index) => (
          <Todo key={index} data={todo} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
