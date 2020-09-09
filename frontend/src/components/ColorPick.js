import React from "react";
import "./ColorPick.css";

const ColorPick = ({ color, onClick }) => {
  //색 변수값으로 색상변경 함수
  const checkColor = (colorID) => {
    var selectedColor = null;
    var selectedBackColor = null;
    if (colorID === "blue") {
      selectedColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--blueColor");
      selectedBackColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--blueBackColor");
    } else if (colorID === "purple") {
      selectedColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--purpleColor");
      selectedBackColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--purpleBackColor");
    } else if (colorID === "green") {
      selectedColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--greenColor");
      selectedBackColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--greenBackColor");
    } else if (colorID === "gray") {
      selectedColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--grayColor");
      selectedBackColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--grayBackColor");
    }

    document.documentElement.style.setProperty(
      "--todoBackgroundColor",
      selectedColor
    );
    document.documentElement.style.setProperty(
      "--backgroundColor",
      selectedBackColor
    );
  };

  //처음 get해온 (현재 DB에 저장되어있는 색상 값으로 설정)
  checkColor(color.colorId);

  //클릭 했을 때, DB에 클릭한 색상 값 저장
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
