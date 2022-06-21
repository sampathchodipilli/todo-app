import { axiosInstance as axios } from "../config";
import { toast } from "react-toastify";
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
      return response.data;
    })
    .catch((e) => {
      console.error(e);
    });
  toast.promise(rawTodos, {
    pending: "Fetching todos...",
    success: "Fetched todos successfully!",
    error: "Unable to fetch todos at this moment!",
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
  toast.promise(response, {
    pending: `Adding ${todo?.name ?? "-nothing-"} to the list!`,
    success: `Successfully added ${todo?.name ?? "-nothing-"} to the list!`,
    error: `Error adding ${todo?.name ?? "-nothing-"} to the list!`,
  });
  return response;
};

/**
 * Deletes the todo from database.
 * @param {Number} todoId
 */
export const deleteTodo = async (todo) => {
  console.log(`Deleting todo (${todo?.name ?? ""})`);
  const response = axios
    .post(URL.deleteTodo, null, {
      params: {
        id: todo?.id,
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
  toast.promise(response, {
    pending: `Deleting todo (${todo?.name ?? ""})!`,
    success: `Successfully deleted todo (${todo?.name ?? ""})!`,
    error: `Error deleting todo (${todo?.name ?? ""})!`,
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
