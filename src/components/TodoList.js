import { useState } from "react";
import { useFilteredTodos } from "./Providers/TodoProvider";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ onComplete, onDelete, onEdit }) => {
  const todos = useFilteredTodos();
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });
  const editTodoHandler = (updateText) => {
    onEdit(edit.id, updateText);
    setEdit({ id: null, text: "" });
  };

  const renderTodos = () => {
    if (todos.length === 0) {
      return <p className="emptyTodo">Empty ...</p>;
    }
    return todos.map((todo) => {
      return (
        <Todo
          todo={todo}
          key={todo.id}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };

  return (
    <div>
      {edit.id ? (
        <TodoForm submitTodoHandler={editTodoHandler} edit={edit} />
      ) : (
        renderTodos()
      )}
    </div>
  );
};

export default TodoList;
