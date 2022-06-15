import React, { useContext } from "react";
import { TodoContext } from "../App";

const Todo = ({ data }) => {
  const { toggleCompleteStatus, deleteSelectedTodo } = useContext(TodoContext);

  const deleteHandler = (id) => {
    deleteSelectedTodo(id);
  };

  const checkHandler = (id) => {};

  return (
    <li style={{ margin: "10px" }}>
      <div>
        <span
          style={
            data.active
              ? { textDecoration: "line-through", cursor: "pointer" }
              : { cursor: "pointer" }
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
    </li>
  );
};

export default Todo;
