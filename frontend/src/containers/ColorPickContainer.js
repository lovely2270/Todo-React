import React from "react";
import { connect } from "react-redux";
import ColorPick from "../components/ColorPick";
import { getColor, clickColor } from "../modules/color";

const { useEffect } = React;
//색상 컨테이너 (구현된 컴포넌트를 담을 수 있는 하나의 큰 틀의 컴포넌트)
const ColorPickContainer = ({ color, getColor, clickColor }) => {
  //실행될때 DB에 저장된 색상을 가져옴
  useEffect(() => {
    //비동기 함수
    const fn = async () => {
      try {
        //색상 가져오는 것을 기다림
        await getColor();
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getColor]);
  //색상 선택 div함수을 부름
  return <ColorPick color={color} onClick={clickColor} />;
};

//컴포넌트를 리덕스와 연동하기 위한 connect함수
/**
 * connect(
 *  리덕스 스토어 안의 상태를 컴포넌트를 props로 넘기기 위해,
 *  액션 생성 함수를 컴포넌트의 props로 넘기기 위해
 * )(연동할 컴포넌트)
 */
export default connect(
  ({ color }) => ({
    color: color,
  }),
  {
    getColor,
    clickColor,
  }
)(ColorPickContainer);
