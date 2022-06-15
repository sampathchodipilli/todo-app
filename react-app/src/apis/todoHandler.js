import axios from "axios";
import { act } from "react-dom/test-utils";

const apiAction = (action) => {
  return `http://localhost:8080/todo-app/${action}`;
};

const actions = {
  getAllTodos: "getAllTodos",
  deleteTodo: "deleteTodo",
  addTodo: "saveTodo",
};

/**
 * Fetches all todos from database and returns it as an array of todo objects.
 * @returns {[]} todos
 */
export const fetchAllTodos = async () => {
  console.log("Fetching todos");
  const rawTodos = axios
    .get(apiAction(actions.getAllTodos))
    .then((response) => {
      //   console.log(response.data);
      return response.data;
    })
    .catch((e) => {
      console.error(e);
    });
  return rawTodos;
};

/**
 * Adds the new todo to database
 * @param {{}} todo
 * @returns {{status, message}}
 */
export const addNewTodo = async (todo) => {
  console.log(`Adding todo "${todo}"`);
  const response = axios
    .post(apiAction(actions.addTodo), {
      name: todo,
      active: false,
    })
    .then((res) => {
      const { data } = res;
      return {
        status: data.statusCode,
        message: data.message,
      };
    })
    .catch((err) => {
      console.error(err);
    });
  return response;
};

/**
 * Deletes the todo from database.
 * @param {Number} todoId
 */
export const deleteTodo = async (todoId) => {
  console.log(`Deleting todo (${todoId ?? ""})`);
  const response = axios
    .post(apiAction(actions.deleteTodo), null, {
      params: {
        id: todoId,
      },
    })
    .then((res) => {
      const { data } = res;
      return {
        status: data.statusCode,
        message: data.message,
      };
    })
    .catch((err) => {
      console.error(err);
    });
  return response;
};

/**
 * Toggles completion status of the todo.
 * @param {Number} todoId
 * @returns {{status, message}}
 */
export const toggleComplete = async (todoId) => {
  console.log(`Toggling completion for todo (${todoId ?? ""})`);
};
