import React from "react";
import "./ColorPick.css";

//색상 선택 div함수
const ColorPick = ({ color, onClick }) => {
  //색 변수값으로 색상변경 함수
  const checkColor = (colorID) => {
    var selectedColor = null;
    var selectedBackColor = null;
    //선택한 colorID가 blue일 때
    if (colorID === "blue") {
      //css변수(--blueColor)에 저장되어있는 값을 불러 저장
      selectedColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--blueColor");
      //css변수(--blueBackColor)에 저장되어있는 값을 불러 저장
      selectedBackColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--blueBackColor");
    }
    //선택한 colorID가 purple일 때
    else if (colorID === "purple") {
      //css변수(--blueColor)에 저장되어있는 값을 불러 저장
      selectedColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--purpleColor");
      //css변수(--blueBackColor)에 저장되어있는 값을 불러 저장
      selectedBackColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--purpleBackColor");
    }
    //선택한 colorID가 green일 때
    else if (colorID === "green") {
      //css변수(--blueColor)에 저장되어있는 값을 불러 저장
      selectedColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--greenColor");
      //css변수(--blueBackColor)에 저장되어있는 값을 불러 저장
      selectedBackColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--greenBackColor");
    }
    //선택한 colorID가 gray일 때
    else if (colorID === "gray") {
      //css변수(--blueColor)에 저장되어있는 값을 불러 저장
      selectedColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--grayColor");
      //css변수(--blueBackColor)에 저장되어있는 값을 불러 저장
      selectedBackColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--grayBackColor");
    }

    //위에 변수에 저장된 색들을 css변수에 저장
    document.documentElement.style.setProperty(
      "--todoBackgroundColor",
      selectedColor
    );
    document.documentElement.style.setProperty(
      "--backgroundColor",
      selectedBackColor
    );
  };

  //처음 get해온 (현재 DB에 저장되어있는 색상 값)으로 배경색 설정
  checkColor(color.colorId);

  //클릭 했을 때, 클릭한 색상 값을 DB에 저장
  const onChangeColor = (colorID) => {
    checkColor(colorID);
    onClick(colorID);
  };
  return (
    <table className="ColorTable">
      <tbody>
        <tr>
          <td>
            <div
              className="blueTemplate"
              onClick={(e) => onChangeColor("blue")}
            ></div>
          </td>
          <td>
            <div
              className="purpleTemplate"
              onClick={(e) => onChangeColor("purple")}
            ></div>
          </td>
          <td>
            <div
              className="greenTemplate"
              onClick={(e) => onChangeColor("green")}
            ></div>
          </td>
          <td>
            <div
              className="grayTemplate"
              onClick={(e) => onChangeColor("gray")}
            ></div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ColorPick;
