import React from "react";
import { connect } from "react-redux";
import ColorPick from "../components/ColorPick";
import { getColor, clickColor } from "../modules/color";

const { useEffect } = React;
const ColorPickContainer = ({ color, getColor, clickColor }) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getColor();
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getColor]);
  return <ColorPick color={color} onClick={clickColor} />;
};

export default connect(
  ({ color, loading }) => ({
    color: color,
    loadingTodos: loading["color/GET_COLOR"],
  }),
  {
    getColor,
    clickColor,
  }
)(ColorPickContainer);
