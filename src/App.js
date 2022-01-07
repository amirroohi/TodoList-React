import React from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <h1>todolist app</h1>
        <TodoApp />
      </div>
    </React.StrictMode>
  );
}

export default App;
