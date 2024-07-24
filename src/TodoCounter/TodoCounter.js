import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';


function TodoCounter() {

  const {
    CompletedTodos,
    TotalTodos,
  }=React.useContext(TodoContext);

  return(
    <h1 className='Title'>
      Has completado <span> {CompletedTodos} </span> 
        de <span> {TotalTodos} </span> Todos
    </h1>
  );  
}

export { TodoCounter };