import { useEffect, useState } from "react";
import {
  
  useFilteredTodosActions,
  useTodos,
  useTodosActions,
} from "./Providers/TodoProvider";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  // const [todos, setTodos] = useState([]);
  const todos = useTodos();
  const setTodos = useTodosActions();
  // const [filteredTodos, setFilteredTodos] = useState([]);
  const setFilteredTodos = useFilteredTodosActions();

  const [selectedOption, setSelectedOption] = useState("All");
  useEffect(() => {
    const filterTodos = (selectedOption) => {
      switch (selectedOption) {
        case "Completed":
          setFilteredTodos(todos.filter((todo) => todo.isCompleted));
          break;
        case "Uncompleted":
          setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
          break;
        default:
          setFilteredTodos(todos);
      }
    };
    filterTodos(selectedOption.value);
  }, [todos, selectedOption, setFilteredTodos]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
      date:new Date().toISOString(),
    };
    setTodos([...todos, newTodo]);
  };

  const completedTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = (id, updateText) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = updateText;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodos = (selectedOption) => {
    switch (selectedOption) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const changeHandler = (e) => {
    setSelectedOption(e);
    filterTodos(e.value);
  };




  return (
    <div className="container">
      <NavBar selectedOption={selectedOption} onChange={changeHandler} />
      <TodoForm submitTodoHandler={addTodoHandler} />
      <TodoList
        onComplete={completedTodo}
        onDelete={deleteTodo}
        onEdit={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
