import React, { useContext, useState } from "react";
import { TodoContext } from "../App";

const Todo = ({ data }) => {
  const { toggleCompleteStatus, deleteSelectedTodo, saveEditContent } =
    useContext(TodoContext);
  const [editing, setEditing] = useState(false);
  const [editContent, setEditContent] = useState(data?.name ?? "");

  const deleteHandler = (id) => {
    deleteSelectedTodo(id);
  };

  const checkHandler = (id) => {
    toggleCompleteStatus(id);
  };

  const saveHandler = (id) => {
    saveEditContent(data?.id, editContent);
    setEditing(false);
  };

  const editHandler = () => {
    setEditing(true);
  };

  const discardHandler = () => {
    setEditing(false);
    setEditContent(data?.name ?? "");
  };

  return (
    <div style={{ margin: "10px" }}>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => checkHandler(data.id)}
        title={data?.active ? "Mark complete" : "Mark incomplete"}
      >
        {data.active ? "⬜" : "✅ "}
      </span>
      {editing ? (
        <input
          type="text"
          defaultValue={data?.name}
          value={editContent}
          onChange={(event) => setEditContent(event.target.value)}
        />
      ) : (
        <span
          style={
            data.active
              ? { cursor: "text" }
              : { textDecoration: "line-through", cursor: "pointer" }
          }
        >
          {data?.name}
        </span>
      )}{" "}
      {editing ? (
        <>
          <button
            style={{ cursor: "pointer" }}
            title="Save content"
            onClick={saveHandler}
          >
            💾 Save
          </button>
          <button
            style={{ cursor: "pointer" }}
            title="Discard content"
            onClick={discardHandler}
          >
            🗑️ Discard
          </button>
        </>
      ) : (
        <button
          style={{ cursor: "pointer" }}
          title={editing ? "Save content" : "Edit content"}
          onClick={editHandler}
        >
          🖊 Edit
        </button>
      )}
      <button
        onClick={() => deleteHandler(data.id)}
        style={{ cursor: "pointer" }}
        title="Delete todo"
      >
        ❌ Delete
      </button>
    </div>
  );
};

export default Todo;
