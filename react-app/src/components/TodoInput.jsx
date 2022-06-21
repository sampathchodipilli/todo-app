import React, { useContext, useState } from "react";
import { TodoContext } from "../App";
import CenterLayout from "./CenterLayout";

const TodoInput = () => {
  const [newTodo, setNewTodo] = useState("");

  const { addTodo } = useContext(TodoContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (newTodo.length > 0) {
      //handle submit
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <CenterLayout>
      <form onSubmit={submitHandler} className="form-floating">
        <label htmlFor="todo-input" class="form-control">
          New Todo
        </label>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="e.g. Buy eggs"
            name="todo-input"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            class="btn btn-lg btn-outline-success rounded-end"
            type="button"
          >
            <i className="bi bi-plus-lg"></i> Add todo
          </button>
        </div>
        {/* <input
          type="text"
          placeholder="e.g. Buy eggs"
          // name="todo-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{
            height: "60px",
            width: "25vw",
            padding: "5px",
            border: "1px solid #1f1f1f",
            borderRadius: "15px",
            marginRight: "30px",
            paddingLeft: "15px",
            boxShadow: "8px 10px 16px -14px rgba(94,94,94,0.52)",
          }}
        />
        <button
          type="submit"
          style={{
            height: "70px",
            padding: "10px",
            border: "0",
            borderRadius: "15px 15px",
            cursor: "pointer",
            backgroundColor: "violet",
            boxShadow: "8px 10px 16px -12px rgba(94,94,94,0.52)",
          }}
        >
          {"➕ Add Todo"}
        </button> */}
      </form>
    </CenterLayout>
  );
};

export default TodoInput;
