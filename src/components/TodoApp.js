import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    return ( <div className="container">
        <TodoForm value="amir"/>
        <TodoList/>

    </div> );
}
 
export default TodoApp;