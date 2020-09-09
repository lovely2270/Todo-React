import React from "react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "./DatePick.css";
import moment from "moment";
require("react-datepicker/dist/react-datepicker.css");

//마감일 또는 해당일을 선택하기 위한 함수
const DatePick = ({ todo, onSettingDate }) => {
  //처음 보여줄때
  //todo에 이미 저장된 dday가 있으면 그 날짜를 보여주기
  //없다면 null
  const [startDate, setStartDate] = useState(
    todo.dday ? new Date(todo.dday) : null
  );

  //날짜를 선택했을 때
  const onClickDate = (date) => {
    //state에 startDate를 선택한 날짜로 변경
    setStartDate(date);
    //date가 null이 아니면
    if (date != null) {
      //해당 날짜를 정해준 format으로 만들어서 저장
      const dday = moment(date).format("YYYY / MM / DD");
      //선택 날짜를 저장하기 위해 api함수
      onSettingDate(todo.id, dday);
    } else {
      //date가 null일때
      //null을 저장하기 위해 api함수
      onSettingDate(todo.id, date);
    }
  };

  //날짜 선택을 아예 없애기 위해
  //초기상태인 null로 만들어서 아무것도 띄우지 않기위해
  const onDeleteDDay = () => {
    if (startDate != null) {
      if (window.confirm("해당 마감일을 없애시겠습니까?")) {
        onClickDate(null);
      }
    }
  };

  //날짜가 보이는 것을 커스텀하는 함수
  const CustomInput = ({ value, onClick }) => (
    <button
      className="datePickBtn"
      onClick={onClick}
      onContextMenu={onDeleteDDay}
    >
      {value}
    </button>
  );

  return (
    <div>
      <ReactDatePicker
        dateFormat="yyyy / MM / dd"
        selected={startDate}
        onChange={(date) => onClickDate(date)}
        showMonthDropdown
        showYearDropdown
        customInput={<CustomInput />}
        todayButton="Today"
      />
    </div>
  );
};

export default DatePick;
