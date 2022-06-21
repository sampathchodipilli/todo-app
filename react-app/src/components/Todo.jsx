import React, { useContext } from "react";
import { TodoContext } from "../App";

const Todo = ({ data }) => {
  const { toggleCompleteStatus, deleteSelectedTodo } = useContext(TodoContext);

  const deleteHandler = (id) => {
    deleteSelectedTodo(id);
  };

  const checkHandler = (id) => {
    toggleCompleteStatus(id);
  };

  return (
    <div style={{ margin: "10px" }}>
      <span style={{ cursor: "pointer" }} onClick={() => checkHandler(data.id)}>
        {data.active ? "⬜" : "✅ "}
      </span>
      <span
        style={
          data.active
            ? { cursor: "text" }
            : { textDecoration: "line-through", cursor: "pointer" }
        }
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
