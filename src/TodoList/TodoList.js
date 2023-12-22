import './TodoList.css';

function TodoList({children}){
    return(
        <h2>
            {children}
        </h2>
    );
}   
export { TodoList };