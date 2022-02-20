const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className="todo" key={todo.id}>
      <div
        onClick={onComplete}
        className={`todoText ${todo.isCompleted ? "completed" : ""}`}
      >
        {todo.text}
      </div>
      <div>
        <button onClick={onEdit} className="button edit">
          Edit
        </button>
        <button onClick={onDelete} className="button remove">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
