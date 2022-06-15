import { createContext, useEffect, useReducer, useState } from "react";
import {
  addNewTodo,
  fetchAllTodos,
  deleteTodo,
  toggleComplete,
} from "./apis/todoHandler";
import "./App.css";
import TodoContainer from "./components/TodoContainer";

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    try {
      const fetchedTodos = await fetchAllTodos();
      console.log(fetchedTodos);
      setTodos(fetchedTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async (newTodo) => {
    // Add todo to the database and load.
    addNewTodo(newTodo).then((res) => {
      if (res.status === 200) {
        loadTodos();
      }
    });
  };

  const deleteSelectedTodo = async (todoId) => {
    deleteTodo(Number(todoId)).then((res) => {
      if (res.status === 200) {
        loadTodos();
      }
    });
  };

  const toggleCompleteStatus = async (todoId) => {
    console.log("Code to complete todo is not yet implemented");
  };

  useEffect(() => {
    console.log("App rendered");
    loadTodos();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        alignItems: "center",
      }}
    >
      <TodoContext.Provider
        value={{
          todos,
          addTodo,
          deleteSelectedTodo,
          toggleCompleteStatus,
        }}
      >
        <TodoContainer />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
