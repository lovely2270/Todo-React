import React, { useState } from "react";

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
  const onRemove = (id) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nextTodos);
  };

  const todosList = todos.map((todo) => (
    <li key={todo.id}>
      {todo.text}
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{todosList}</ul>
    </>
  );
};

export default InsertTodo;
