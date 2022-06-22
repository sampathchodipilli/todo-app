import React, { useContext } from "react";
import { TodoContext } from "../App";
import CenterLayout from "./CenterLayout";
import Todo from "./Todo";

const TodoList = () => {
  const { todos: todoList } = useContext(TodoContext);
  const remaining = todoList?.filter((t) => t.active === true);
  const completed = todoList?.filter((t) => t.active === false);

  return (
    <CenterLayout>
      <h2 className="h3">Tasks to do</h2>
      <div>
        {remaining?.length === 0
          ? "No tasks pending. Add some to keep track!"
          : ""}
        {remaining?.map((todo, index) => (
          <Todo key={index} data={todo} />
        ))}
      </div>
      {completed?.length > 0 ? (
        <>
          <hr className="my-4" />
          <h2 className="h3">Completed tasks</h2>
          <div className="mb-4">
            {remaining?.length === 0
              ? "All pending tasks completed. Good work!🎉"
              : ""}
          </div>
          <div>
            {completed?.map((todo, index) => (
              <Todo key={index} data={todo} />
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </CenterLayout>
  );
};

export default TodoList;
