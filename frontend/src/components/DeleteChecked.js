import React from "react";
// import { deleteCheckedTodo } from "../lib/api/todoApi";
// import { removeChecked } from "../modules/todos";

//완료체크가 된 ToDo들을 한번에 삭제해주는 함수
const DeleteChecked = ({ onRemoveChecked }) => {
  const onClickDeleteChecked = () => {
    if (window.confirm("완료가 된 Todo들을 모두 삭제하시겠습니까?")) {
      //비동기 처리 함수
      const rmcfn = async () => {
        try {
          //검색한 후, 기다렸다가 검색 결과를 response에 담음
          const response = await onRemoveChecked();
          console.log(response);
        } catch (e) {
          console.log(e);
        }
      };
      rmcfn();
    }
  };
  return (
    <button className="Todo-Delete-Btn" onClick={onClickDeleteChecked}>
      완료Todo삭제
    </button>
  );
};

export default DeleteChecked;
