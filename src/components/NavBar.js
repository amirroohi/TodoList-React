import { useState } from "react";

const NavBar = ({ unCompletedTodos, filterTodos }) => {
  const [status, setStatus] = useState("All");

  const changeHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };

  if (!unCompletedTodos) {
    return <h2>ready to set TODOS!</h2>;
  }
  return (
    <div className="header">
      <span>{unCompletedTodos}</span> <h2>not completed</h2>
      <select onChange={changeHandler} value={status}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default NavBar;
