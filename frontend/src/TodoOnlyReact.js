import React, { useState, useRef } from "react";
import "./TodoOnlyReact.css";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { BiEditAlt } from "react-icons/bi";

const InsertTodo = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(1);
  const inputEl = useRef(null);

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
    inputEl.current.focus();
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      //onClick();
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
    setTodos((todos) => nextTodos);
  };
  const onRemove = (id) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    if (window.confirm("해당 ToDo를 삭제하시겠습니까?")) {
      setTodos((todos) => nextTodos);
    }
  };
  const onEdit = (id) => {
    const checkTodo = todos.filter((todo) => todo.id === id);
    const checkTodoIndex = todos.findIndex((todo) => todo.id === id);
    const selected = checkTodo[0];
    console.log(selected.text);
    let newtext = window.prompt("ToDo 수정", selected.text);
    {
      const nextTodos = [...todos];

      nextTodos[checkTodoIndex] = {
        ...selected,
        text: newtext,
      };
      setTodos(nextTodos);
    }
  };

  const todosList = todos.map((todo) => (
    <div
      key={todo.id}
      className="listItem"
      onDoubleClick={() => onEdit(todo.id)}
    >
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
      <BiEditAlt
        size="30"
        className="editBtn"
        onClick={() => onEdit(todo.id)}
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
        <textarea
          value={inputText}
          onChange={onChange}
          onKeyPress={onKeyPress}
          ref={inputEl}
        />
        <button className="createBtn" onClick={onClick}>
          추가
        </button>
      </div>
      <div className="todoList">{todosList}</div>
    </>
  );
};

export default InsertTodo;
