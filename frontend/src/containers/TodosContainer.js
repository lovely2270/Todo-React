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
  removeChecked,
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
  removeChecked,
}) => {
  //실행될때 DB에 저장된 todos를 가져옴
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
    //할일들을 보여주는 컴포넌트 호출
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
      onRemoveChecked={removeChecked}
      loadingTodos={loadingTodos}
    />
  );
};

//컴포넌트를 리덕스와 연동하기 위한 connect함수
/**
 * connect(
 *  리덕스 스토어 안의 상태를 컴포넌트를 props로 넘기기 위해,
 *  액션 생성 함수를 컴포넌트의 props로 넘기기 위해
 * )(연동할 컴포넌트)
 */
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
    removeChecked,
  }
)(TodosContainer);
