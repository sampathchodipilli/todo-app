import { createContext, useEffect, useState } from "react";
import {
  addNewTodo,
  fetchAllTodos,
  updateTodo,
  deleteTodo,
} from "./apis/todoHandler";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Bounce } from "react-toastify";

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
    let todoDelete = todos.find((t) => t.id === todoId);
    deleteTodo(todoDelete).then((res) => {
      if (res.status === 200) {
        loadTodos();
      }
    });
  };

  const toggleCompleteStatus = async (todoId) => {
    let updatedTodo = todos.find((t) => t.id === todoId);
    updatedTodo = {
      ...updatedTodo,
      active: !updatedTodo?.active,
    };
    const response = updateTodo(updatedTodo).then((res) => {
      if (res?.status === 200) {
        loadTodos();
      }
      return res;
    });
    toast.promise(response, {
      pending: updatedTodo?.active
        ? "Marking todo incomplete"
        : "Marking todo complete",
      success: "Update successful",
      error: "Unable to update at the moment",
    });
  };

  const saveEditContent = async (todoId, content) => {
    let updatedTodo = todos.find((t) => t.id === todoId);
    updatedTodo = {
      ...updatedTodo,
      name: content,
    };
    const response = updateTodo(updatedTodo).then((res) => {
      if (res?.status === 200) {
        loadTodos();
      }
      return res;
    });
    toast.promise(response, {
      pending: "Saving todo",
      success: "Save successful",
      error: "Unable to save at the moment",
    });
  };

  useEffect(() => {
    console.log("App rendered");
    loadTodos();
  }, []);

  return (
    <div className="container-fluid">
      <TodoContext.Provider
        value={{
          todos,
          addTodo,
          deleteSelectedTodo,
          toggleCompleteStatus,
          saveEditContent,
        }}
      >
        <TodoContainer />
      </TodoContext.Provider>
      <ToastContainer
        position="bottom-center"
        limit={3}
        closeOnClick={true}
        hideProgressBar={true}
        transition={Bounce}
        theme={"colored"}
        autoClose={1500}
      />
    </div>
  );
}

export default App;
