import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onComplete, onDelete, onEdit }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodoHandler = () => {
    onEdit(edit.id);
  };

  const renderTodos = () => {
    if (todos.length === 0) {
      return <p>Empty ...</p>;
    }
    return todos.map((todo) => {
      return (
        <Todo
          todo={todo}
          key={todo.id}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={()=>setEdit(todo)}
        />
      );
    });
  };

  return (
    <div>
      {edit.id ? (
        <TodoForm submitTodoHandler={editTodoHandler} edit={edit}/>
      ) : (
        renderTodos()
      )}
    </div>
  );
};

export default TodoList;
