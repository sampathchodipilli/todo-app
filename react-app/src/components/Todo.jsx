import React, { useContext } from "react";
import { TodoContext } from "../App";

const Todo = ({ data }) => {
  const { toggleCompleteStatus, deleteSelectedTodo } = useContext(TodoContext);

  const deleteHandler = (id) => {
    deleteSelectedTodo(id);
  };

  const checkHandler = (id) => {};

  return (
    <div style={{ margin: "10px" }}>
      <span style={{ cursor: "pointer" }}>{data.active ? "✅ " : "⬜ "}</span>
      <span
        style={
          data.active
            ? { textDecoration: "line-through", cursor: "pointer" }
            : { cursor: "text" }
        }
        onClick={() => checkHandler(data.id)}
      >
        {data?.name}
      </span>{" "}
      <button
        onClick={() => deleteHandler(data.id)}
        style={{ cursor: "pointer" }}
      >
        ❌
      </button>
    </div>
  );
};

export default Todo;
