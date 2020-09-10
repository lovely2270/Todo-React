import { handleActions, createAction } from "redux-actions";
import produce from "immer";
import { clickcolor } from "../lib/api/colorApi";
import * as colorApi from "../lib/api/colorApi";
import createRequestThunk from "../lib/createRequestThunk";

//액션타입 정의하기
const INSERT_COLOR = "color/INSERT_COLOR";

const GET_COLOR = "color/GET_COLOR";
const GET_COLOR_SUCCESS = "color/GET_COLOR_SUCCESS";

//액션 생성함수 만들기
export const clickColor = createAction(INSERT_COLOR, (colorId) => colorId);
export const getColor = createRequestThunk(GET_COLOR, colorApi.getColor);

//초기값
const initialState = {
  color: [],
};

//리듀서함수 만들기
const color = handleActions(
  {
    [INSERT_COLOR]: (state, { payload: colorId }) =>
      produce(state, (draft) => {
        clickcolor(colorId);
      }),
    [GET_COLOR_SUCCESS]: (state, action) => ({
      ...state,
      colorId: action.payload,
    }),
  },
  initialState
);

export default color;
