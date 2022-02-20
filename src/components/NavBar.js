import Select from "react-select";
import { useTodos } from "./Providers/TodoProvider";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];

const NavBar = ({ selectedOption, onChange }) => {
  const todos = useTodos();
  const unCompletedTodos = todos.filter((todo) => !todo.isCompleted).length;
  if (!unCompletedTodos) {
    return <h2>Ready to set TODOS!</h2>;
  }
  return (
    <div className="header">
      <span className="counter">{unCompletedTodos}</span> <h2>Remained</h2>
      <Select
        onChange={onChange}
        value={selectedOption}
        options={options}
        className="select"
      />
      {/* <select onChange={onChange} value={status}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select> */}
    </div>
  );
};

export default NavBar;
