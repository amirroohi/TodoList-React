import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    console.log(input);
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completedTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = {...todos[index]};
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
const deleteTodo = (id)=>{
  const filteredTodos= todos.filter(todo => todo.id !==id)
  setTodos(filteredTodos)
}

const updateTodo=(id)=>{
  console.log(id);

}

  return (
    <div className="container">
      <TodoForm submitTodoHandler={addTodoHandler} />
      <TodoList todos={todos} onComplete={completedTodo} onDelete={deleteTodo} onEdit={updateTodo} />
    </div>
  );
};

export default TodoApp;
