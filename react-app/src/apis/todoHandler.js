/**
 * Fetches all todos from database and returns it as an array of todo objects.
 * @returns {[]} todos
 */
export const fetchAllTodos = () => {
  console.log("Fetching todos");
};

/**
 * Adds the new todo to database
 * @param {{}} todo
 * @returns {{status, message}}
 */
export const addNewTodo = (todo) => {
  console.log(`Adding todo`, todo);
};

/**
 * Deletes the todo from database.
 * @param {Number} todoId
 */
export const deleteTodo = (todoId) => {
  console.log(`Deleting todo (${todoId ?? ""})`);
};

/**
 * Toggles completion status of the todo.
 * @param {Number} todoId
 * @returns {{status, message}}
 */
export const toggleComplete = (todoId) => {
  console.log(`Toggling completion for todo (${todoId ?? ""})`);
};
