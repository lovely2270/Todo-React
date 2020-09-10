import React from "react";
import ReactDOM from "react-dom";
import "./color.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

//logger미들웨어 생성
const logger = createLogger();
//store생성
//logger미들웨어와 redux-thunk미들웨어 적용
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

ReactDOM.render(
  // 리액트 프로젝트에 리덕스 적용
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
