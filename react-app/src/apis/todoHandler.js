import { axiosInstance as axios } from "../config";
import URL from "./constants";

/**
 * Fetches all todos from database and returns it as an array of todo objects.
 * @returns {[]} todos
 */
export const fetchAllTodos = async () => {
  console.log("Fetching todos");
  const rawTodos = axios
    .get(URL.getAllTodos)
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
    .post(URL.addTodo, {
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
    .post(URL.deleteTodo, null, {
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
 * Updates the todo.
 * @param {Todo} todoId
 * @returns {{status, message}}
 */
export const updateTodo = async (todo) => {
  console.log(`Updating todo (${todo?.id ?? ""})`);
  const response = axios
    .get(URL.updateTodo, {
      params: {
        id: todo?.id,
        name: todo?.name,
        active: todo?.active,
      },
    })
    .then((res) => {
      const { data } = res;
      console.log(data);
      return {
        status: data?.statusCode,
        message: data?.message,
      };
    })
    .catch((err) => {
      console.error(err);
    });
  return response;
};
