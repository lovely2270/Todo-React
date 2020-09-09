import React from "react";
import Clock from "react-live-clock";

const Today = () => {
  return (
    <div>
      <Clock format={"YYYY년 MM월 DD일 HH:mm:ss"} timezone={"Asia/Seoul"} />
    </div>
  );
};

export default Today;
