import React from "react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "./DatePick.css";
require("react-datepicker/dist/react-datepicker.css");

const DatePick = ({ todo, onSettingDate }) => {
  const [startDate, setStartDate] = useState(
    todo.dday ? new Date(todo.dday) : null
  );

  const onClickDate = (date) => {
    setStartDate(date);
    onSettingDate(todo.id, date);
  };
  const CustomInput = ({ value, onClick }) => (
    <button className="datePickBtn" onClick={onClick}>
      {value}
    </button>
  );

  return (
    <ReactDatePicker
      placeholderText="dsaf"
      dateFormat="yyyy / MM / dd"
      selected={startDate}
      onChange={(date) => onClickDate(date)}
      customInput={<CustomInput />}
    />
  );
};

export default DatePick;
