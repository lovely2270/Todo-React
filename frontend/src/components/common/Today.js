import React from "react";
import Clock from "react-live-clock";

//현재 날짜, 시간을 실시간으로 보여주는 함수
const Today = () => {
  return (
    <div>
      <Clock format={"YYYY년 MM월 DD일 HH:mm:ss"} timezone={"Asia/Seoul"} />
    </div>
  );
};

export default Today;
