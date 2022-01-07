import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("please enter todo !");
      return;
    }
    props.submitTodoHandler(input);
    setInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      {props.edit ? (
        <>
          <input
            type="text"
            value={input}
            onChange={changeHandler}
            placeholder="update todo..."
          />
          <button type="submit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={input}
            onChange={changeHandler}
            placeholder="add todo..."
          />
          <button type="submit">Add</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
