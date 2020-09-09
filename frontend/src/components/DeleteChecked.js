import React from "react";
import { deleteCheckedTodo } from "../lib/api/todoApi";

//완료체크가 된 ToDo들을 한번에 삭제해주는 함수
const DeleteChecked = () => {
  const onClickDeleteChecked = () => {
    if (window.confirm("완료가 된 Todo들을 모두 삭제하시겠습니까?")) {
      //api호출에서 deleteCheckesTodo를 실행시킨 후
      deleteCheckedTodo()
        .then(function (response) {
          console.log(response);
          //새로고침
          window.history.go(0);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <button className="Todo-Delete-Btn" onClick={onClickDeleteChecked}>
      완료Todo삭제
    </button>
  );
};

export default DeleteChecked;
