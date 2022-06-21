import React, { useContext } from "react";
import { TodoContext } from "../App";
import CenterLayout from "./CenterLayout";
import Todo from "./Todo";

const TodoList = () => {
  const { todos: todoList } = useContext(TodoContext);

  return (
    <CenterLayout>
      <h2 className="h3">Tasks to do</h2>
      <div>
        {todoList
          ?.filter((t) => t.active === true)
          ?.map((todo, index) => (
            <Todo key={index} data={todo} />
          ))}
      </div>
      <hr className="my-4" />
      <h2 className="h3">Completed tasks</h2>
      <div>
        {todoList
          ?.filter((t) => t.active === false)
          ?.map((todo, index) => (
            <Todo key={index} data={todo} />
          ))}
      </div>
    </CenterLayout>
  );
};

export default TodoList;
