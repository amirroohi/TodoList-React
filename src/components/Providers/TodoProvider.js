import React, { useContext, useState } from "react";

export const TodoContext = React.createContext();
export const TodoContextDispatcher = React.createContext();

export const FilteredTodoContext = React.createContext();
export const FilteredTodoContextDispatcher = React.createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  return (
    <TodoContext.Provider value={todos}>
      <TodoContextDispatcher.Provider value={setTodos}>
        <FilteredTodoContext.Provider value={filteredTodos}>
          <FilteredTodoContextDispatcher.Provider value={setFilteredTodos}>
          {children}
          </FilteredTodoContextDispatcher.Provider>
        </FilteredTodoContext.Provider>
      </TodoContextDispatcher.Provider>
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export const useTodos = () => useContext(TodoContext);

export const useTodosActions = () => useContext(TodoContextDispatcher);

export const useFilteredTodos = () => useContext(FilteredTodoContext);

export const useFilteredTodosActions = () => useContext(FilteredTodoContextDispatcher);