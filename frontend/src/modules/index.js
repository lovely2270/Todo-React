import { combineReducers } from "redux";
import todos from "./todos";
// import apiModule from "./apiModule";
import loading from "./loading";
import color from "./color";

//루트 리듀서
//createStore에선 리듀설ㄹ 하나만 사용해야 하기 때문에
//리듀서들을 하나로 합침
const rootReducer = combineReducers({
  todos,
  color,
  loading,
});

export default rootReducer;
