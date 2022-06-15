import React, { useContext, useState } from "react";
import { TodoContext } from "../App";

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
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="todo-input"></label>
        <input
          type="text"
          name="todo-input"
          placeholder="e.g. Buy eggs"
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
          }}
        >
          {"➕ Add Todo"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
