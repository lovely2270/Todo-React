import React from "react";
import "./App.css";
import TodosContainer from "./containers/TodosContainer";
import DeleteChecked from "./components/DeleteChecked";
import ColorPickContainer from "./containers/ColorPickContainer";
import Today from "./components/common/Today";

function App() {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/todos")
  //     .then((response) => console.log(response));
  // });
  return (
    <div className="Todo">
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
