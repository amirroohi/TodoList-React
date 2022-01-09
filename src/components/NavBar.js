const NavBar = (props) => {
    return ( <div className="header">
        <span>{props.unCompletedTodos}</span> <h2>not completed</h2>
    </div> );
}
 
export default NavBar;