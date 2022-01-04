import { useState } from 'react';
import './App.css';
import TodoApp from './components/TodoApp';

function App() {
const [todos,setTodos]=useState([])

  return (
    <div className="App">
      <h1>todolist app</h1>
      <TodoApp/>
    </div>
  );
}

export default App;
