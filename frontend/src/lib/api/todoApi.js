import axios from "axios";

//서버와 연결
//기본 주소
const TODO_API_BASE_URL = "http://localhost:8080/todos";

//해당 주소로 매핑된 서버에 요청하는 함수
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
