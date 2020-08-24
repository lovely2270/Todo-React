import React, { useState } from "react";
import "/home/jihyeon/React/todo/src/css/InsertTodo.css";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";

const InsertTodo = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(1);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextTodos = todos.concat({
      id: nextId,
      text: inputText,
      checked: false,
    });
    setNextId(nextId + 1);
    setTodos(nextTodos);
    setInputText("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  const onToggle = (id) => {
    const checkTodo = todos.filter((todo) => todo.id === id);
    const checkTodoIndex = todos.findIndex((todo) => todo.id === id);
    const selected = checkTodo[0];
    const nextTodos = [...todos];

    nextTodos[checkTodoIndex] = {
      ...selected,
      checked: !selected.checked,
    };
    setTodos(nextTodos);
  };
  const onRemove = (id) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nextTodos);
  };

  const todosList = todos.map((todo) => (
    <div key={todo.id} className="listItem">
      {todo.checked ? (
        <div className="todoItemChecked">{todo.text}</div>
      ) : (
        <div className="todoItem">{todo.text}</div>
      )}
      <IoMdCheckmark
        size="30"
        className="checkBtn"
        onClick={() => onToggle(todo.id)}
      />
      <IoMdClose
        size="30"
        className="deleteBtn"
        onClick={() => onRemove(todo.id)}
      />
    </div>
  ));

  return (
    <>
      <div className="form">
        <input value={inputText} onChange={onChange} onKeyPress={onKeyPress} />
        <button className="createBtn" onClick={onClick}>
          추가
        </button>
      </div>
      <div className="todoList">{todosList}</div>
    </>
  );
};

export default InsertTodo;
