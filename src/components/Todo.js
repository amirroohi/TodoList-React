const Todo = ({ todo, onComplete ,onDelete,onEdit}) => {
  return (
    <div className="todo" key={todo.id}>
      <div onClick={onComplete} className={todo.isCompleted ? "completed" : ""}>{todo.text}</div>
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
