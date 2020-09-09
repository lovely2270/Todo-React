import React from "react";
import { connect } from "react-redux";
import {
  changeInput,
  insert,
  toggle,
  remove,
  edit,
  settingDate,
  search,
  getTodos,
} from "../modules/todos";
import Todos from "../components/Todos";

const { useEffect } = React;
const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
  edit,
  settingDate,
  search,
  getTodos,
  loadingTodos,
}) => {
  useEffect(() => {
    const fn = async () => {
      try {
        const response = await getTodos();
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };

    fn();
  }, [getTodos]);
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
      onEdit={edit}
      onSettingDate={settingDate}
      onSearch={search}
      loadingTodos={loadingTodos}
    />
  );
};

export default connect(
  ({ todos, loading }) => ({
    input: todos.input,
    todos: todos.todos,
    loadingTodos: loading["todos/GET_TODOS"],
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
    edit,
    settingDate,
    search,
    getTodos,
  }
)(TodosContainer);
