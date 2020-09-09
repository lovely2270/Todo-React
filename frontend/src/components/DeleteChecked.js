import React from "react";
import { deleteCheckedTodo } from "../lib/api/todoApi";

const DeleteChecked = () => {
  const onClickDeleteChecked = () => {
    window.confirm("완료가 된 Todo들을 모두 삭제하시겠습니까?");
    deleteCheckedTodo()
      .then(function (response) {
        console.log(response);
        window.history.go(0);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <button className="Todo-Delete-Btn" onClick={onClickDeleteChecked}>
      완료Todo삭제
    </button>
  );
};

export default DeleteChecked;
