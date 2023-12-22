// import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';
import { TodoItem } from './TodoItem/TodoItem';
import './index.css';
import React from 'react';


const defaultTodos = [
  { Text:'cortar cebolla', Completed:true },
  { Text:'tomar el curso de intro a react.js', Completed:false },
  { Text:'llorar con la llorona', Completed:false },
  { Text:'Cristofer esta castigado', Completed:false},
  { Text:'Usar estados devirados', Completed:true},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const CompletedTodos = todos.filter(
    todo => !!todo.Completed).length
    ;
  const TotalTodos = todos.length;

  const searchTodos =todos.filter(
    (todos) => {
      const todotext = todos.Text.toLowerCase();
      const searchtext = searchValue.toLowerCase();
  
      return todotext.includes(searchtext);
  })

  const CompletedTodo = (Text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todos) => todos.Text === Text
    )
    newTodos[todoIndex].Completed = true;
    setTodos(newTodos)
  }
  const DeleteTodo = (Text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todos) => todos.Text === Text
    )
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }
  return (
    <>
    <TodoCounter 
    Completed={CompletedTodos}
    Total={TotalTodos}/>
    <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    /> 

    <TodoList>
      {searchTodos.map(todo => (
        <TodoItem 
        key={todo.Text} 
        Text={todo.Text}
        Completed={todo.Completed}
        onComplete={() => CompletedTodo(todo.Text)}
        onDelete={() => DeleteTodo(todo.Text)}
        />
        ))}
    </TodoList>

    <CreateTodoButton />

    </>
  );
}


export default App;
