import axios from "axios";

const TODO_API_BASE_URL = "http://localhost:8080/todos";

export const getTodos = () => axios.get(TODO_API_BASE_URL);

export const insertTodo = (text) =>
  axios.post(
    TODO_API_BASE_URL,
    { text: text },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

export const updateTodo = (todo) =>
  axios.put(TODO_API_BASE_URL + "/" + todo.id, todo);

export const deleteTodo = (id) => axios.delete(TODO_API_BASE_URL + "/" + id);

export const deleteCheckedTodo = () => axios.delete(TODO_API_BASE_URL);

export const getSearchTodo = (searchText) =>
  axios.get(TODO_API_BASE_URL + "/" + searchText);
