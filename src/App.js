import React from "react";
import "./App.css";
import InsertTodo from "./js/InsertTodo";

function App() {
  return (
    <div className="Todo">
      <div className="Todo-Header">ToDo</div>
      <InsertTodo />
    </div>
  );
}

export default App;
