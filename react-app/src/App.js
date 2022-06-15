import { useEffect } from "react";
import { fetchAllTodos } from "./apis/todoHandler";
import "./App.css";
import TodoContainer from "./components/TodoContainer";

function App() {
  useEffect(() => {
    console.log("App rendered");
    fetchAllTodos();
  }, []);

  return (
    <div className="App">
      <TodoContainer />
    </div>
  );
}

export default App;
