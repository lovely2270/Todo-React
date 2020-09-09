import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { updateTodo, deleteTodo } from "../lib/api/todoApi";
import * as todoApi from "../lib/api/todoApi";
import createRequestThunk from "../lib/createRequestThunk";

//액션타입 정의하기
const CHANGE_INPUT = "todos/CHANGE_INPUT"; //인풋 값을 변경

const INSERT = "todos/INSERT"; //todo 등록
const INSERT_SUCCESS = "todos/INSERT_SUCCESS";

const TOGGLE = "todos/TOGGLE"; //todo 체크
const REMOVE = "todos/REMOVE"; //todo제거
const EDIT = "todos/Edit"; //todo수정
const SETTING_DATE = "todos/SETTING_DATE";

const SEARCH = "todos/SEARCH";
const SEARCH_SUCCESS = "todos/SEARCH_SUCCESS";

const GET_TODOS = "todos/GET_TODOS";
const GET_TODOS_SUCCESS = "todos/GET_TODOS_SUCCESS";

//액션 생성함수 만들기
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

export const insert = createRequestThunk(INSERT, todoApi.insertTodo);

export const toggle = createAction(TOGGLE, (id) => id);

export const remove = createAction(REMOVE, (id) => id);

export const edit = createAction(EDIT, (id) => id);

export const settingDate = createAction(SETTING_DATE, (id, date) => ({
  id,
  date,
}));

export const search = createRequestThunk(SEARCH, todoApi.getSearchTodo);

export const getTodos = createRequestThunk(GET_TODOS, todoApi.getTodos);

const initialState = {
  input: "",
  todos: [],
};

//리듀서함수 만들기 (immer사용)
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT_SUCCESS]: (state, action) => ({
      ...state,
      todos: state.todos.concat(action.payload),
    }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.checked = !todo.checked;
        updateTodo(todo);
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        if (window.confirm("해당 ToDo를 삭제하시겠습니까?")) {
          draft.todos.splice(index, 1);
          deleteTodo(id);
        }
      }),
    [EDIT]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);

        let newtext = window.prompt("ToDo 수정", todo.text);
        if (newtext === "") alert("공백으로 수정할 수 없습니다.");
        else if (newtext.length > 100) alert("100자 이하로 작성해주세요.");
        else if (newtext != null) todo.text = newtext;
        updateTodo(todo);
      }),
    [SETTING_DATE]: (state, { payload: { id, date } }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);

        todo.dday = date;

        updateTodo(todo);
      }),
    [SEARCH_SUCCESS]: (state, action) => ({
      ...state,
      todos: action.payload,
    }),
    [GET_TODOS_SUCCESS]: (state, action) => ({
      ...state,
      todos: action.payload,
    }),
  },
  initialState
);

export default todos;
