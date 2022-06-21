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
    setEditContent(data?.name ?? "");
    setEditing(true);
  };

  const discardHandler = () => {
    setEditing(false);
    setEditContent(data?.name ?? "");
  };

  return (
    <div className="row d-flex">
      <span
        style={{ cursor: "pointer" }}
        onClick={() => checkHandler(data.id)}
        title={data?.active ? "Mark complete" : "Mark incomplete"}
        className="col-1 align-content-end align-self-center"
      >
        {data.active ? (
          <i className="bi bi-square"></i>
        ) : (
          <i className="bi bi-check-square-fill"></i>
        )}
      </span>
      <div className="col-7 align-self-center">
        {editing ? (
          <input
            type="text"
            defaultValue={data?.name}
            value={editContent}
            style={{
              width: "100%",
              border: "dotted .5px",
            }}
            className="rounded p-1"
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
      </div>

      {editing ? (
        <>
          <button
            style={{ cursor: "pointer" }}
            title="Save changes"
            onClick={saveHandler}
            className="col-1 btn btn-sm btn-outline-primary"
          >
            💾
          </button>
          <button
            style={{ cursor: "pointer" }}
            title="Discard changes"
            onClick={discardHandler}
            className="col-1 btn btn-sm btn-outline-warning"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </>
      ) : (
        <button
          style={{ cursor: "pointer" }}
          title={editing ? "Save content" : "Edit content"}
          onClick={editHandler}
          className="col-2 btn btn-sm btn-outline-dark"
        >
          <i className="bi bi-pencil-square"></i> Edit
        </button>
      )}
      <button
        onClick={() => deleteHandler(data.id)}
        style={{ cursor: "pointer" }}
        title="Delete todo"
        className="col-2 btn btn-sm btn-outline-danger"
      >
        <i className="bi bi-trash-fill"></i> Delete
      </button>
    </div>
  );
};

export default Todo;
