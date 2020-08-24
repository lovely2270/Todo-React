import React from "react";
import "./App.css";
import InsertTodo from "./js/InsertTodo";

function App() {
  return (
    <div className="Todo">
      <div className="Todo-Header">ToDo</div>
      <div className="Todo-Form">
        <InsertTodo />
      </div>
    </div>
  );
}

export default App;
