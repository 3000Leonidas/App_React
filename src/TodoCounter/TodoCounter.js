import './TodoCounter.css';


function TodoCounter({ Total, Completed }) {
  return(
    <h1 className='Title'>
      Has completado <span> {Completed} </span> 
        de <span> {Total} </span> Todos
    </h1>
  );  
}

export { TodoCounter };