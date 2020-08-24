import React, { useState } from "react";
import "/home/jihyeon/React/todo/src/css/InsertTodo.css";
import { IoMdClose } from "react-icons/io";

const InsertTodo = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(1);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextTodos = todos.concat({
      id: nextId,
      text: inputText,
      check: false,
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
  const onRemove = (id) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nextTodos);
  };

  const todosList = todos.map((todo) => (
    <div key={todo.id} className="listItem">
      <div className="todoItem">{todo.text}</div>

      <IoMdClose
        size="30"
        className="deleteBtn"
        onClick={() => onRemove(todo.id)}
      >
        삭제
      </IoMdClose>
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
