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
  onSearch,
  loadingTodos, //로딩
}) => {
  const onChange = (e) => onChangeInput(e.target.value);

  //추가 버튼을 눌렀을 때
  const onSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      alert("공백은 추가할 수 없습니다.");
    } else {
      //비동기 처리 함수
      const isfn = async () => {
        try {
          //삽입한 후, 결과가 처리되는 것을 기다렸다가 결과를 response에 담음
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

  //검색 버튼 눌렀을 때
  const onSearchClick = (e) => {
    e.preventDefault();

    //비동기 처리 함수
    const scfn = async () => {
      try {
        //검색한 후, 기다렸다가 검색 결과를 response에 담음
        const response = await onSearch(input);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    scfn();

    onChangeInput("");
  };

  return (
    <>
      <div>
        <form className="form">
          <textarea
            value={input}
            onChange={onChange}
            placeholder="추가할 ToDo 또는 검색할 단어를 입력하세요."
          />
          <button className="createBtn" onClick={onSubmit}>
            추가
          </button>
          <button className="searchBtn" onClick={onSearchClick}>
            검색
          </button>
        </form>
      </div>

      <div className="todoList">
        {loadingTodos && null}
        {!loadingTodos && todos && (
          <div>
            {/* todos배열에서 배열 하나 당 TodoItem을 생성 */}
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
