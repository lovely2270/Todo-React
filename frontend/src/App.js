import React from "react";
import "./App.css";
import TodosContainer from "./containers/TodosContainer";
import DeleteChecked from "./components/DeleteChecked";
import ColorPickContainer from "./containers/ColorPickContainer";
import Today from "./components/common/Today";

function App() {
  return (
    <div
      className="Todo"
      onContextMenu={(e) => {
        //우클릭의 기본 메뉴 안나오도록
        e.preventDefault();
      }}
    >
      <div className="Templates">
        <ColorPickContainer />
      </div>
      <div className="Todo-Delete-Btn-Div">
        <DeleteChecked />
      </div>
      <div className="Today-Div">
        <Today />
      </div>

      <div className="Todo-Header">ToDo</div>
      <div className="Todo-Form">
        <TodosContainer />
      </div>
    </div>
  );
}

export default App;
