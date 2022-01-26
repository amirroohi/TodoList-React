import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];

const NavBar = ({ unCompletedTodos, selectedOption, onChange }) => {
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
