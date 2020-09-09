import React from "react";
import "./Todos.css";
import TodoItem from "./TodoItem";

//할일들
const Todos = ({
  input, //입력된 텍스트
  todos, //할일 목록
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
  onEdit,
  onSettingDate,
  loadingTodos, //로딩
}) => {
  const onSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      alert("공백은 추가할 수 없습니다.");
    } else {
      const isfn = async () => {
        try {
          const response = await onInsert(input);
          console.log(response);
        } catch (e) {
          console.log(e);
        }
      };
      isfn();
    }
    onChangeInput("");
  };
  const onChange = (e) => onChangeInput(e.target.value);

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <textarea
          value={input}
          onChange={onChange}
          placeholder="할 일을 입력하세요."
        />
        <button className="createBtn" type="submit">
          추가
        </button>
      </form>
      <div className="todoList">
        {loadingTodos && null}
        {!loadingTodos && todos && (
          <div>
            {todos.map((todo, index) => (
              <TodoItem
                todo={todo}
                key={index}
                onToggle={onToggle}
                onRemove={onRemove}
                onEdit={onEdit}
                onSettingDate={onSettingDate}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Todos;
