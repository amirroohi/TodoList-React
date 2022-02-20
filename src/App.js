import React from "react";
import "./App.css";
import TodoProvider from "./components/Providers/TodoProvider";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <h1>TodoList app</h1>
        <TodoProvider>
          <TodoApp />
        </TodoProvider>
      </div>
    </React.StrictMode>
  );
}

export default App;
