import { combineReducers } from "redux";
import todos from "./todos";
// import apiModule from "./apiModule";
import loading from "./loading";
import color from "./color";

const rootReducer = combineReducers({
  todos,
  color,
  loading,
});

export default rootReducer;
