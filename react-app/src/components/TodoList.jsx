import React, { useContext } from "react";
import { TodoContext } from "../App";
import Todo from "./Todo";

const TodoList = () => {
  const { todos: todoList } = useContext(TodoContext);

  return (
    <>
      <h2 style={{ margin: "10px", marginTop: "30px" }}>Tasks to do</h2>
      <div style={{ textAlign: "start" }}>
        {todoList
          ?.filter((t) => t.active === true)
          ?.map((todo, index) => (
            <Todo key={index} data={todo} />
          ))}
      </div>
      <hr />
      <h2 style={{ margin: "10px", marginTop: "30px" }}>Completed tasks</h2>
      <div style={{ textAlign: "start" }}>
        {todoList
          ?.filter((t) => t.active === false)
          ?.map((todo, index) => (
            <Todo key={index} data={todo} />
          ))}
      </div>
    </>
  );
};

export default TodoList;
