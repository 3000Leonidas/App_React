import React from "react";
import { useLocalStorage } from "./useLocalstorage";

const TodoContext = React.createContext();

function TodoProvider({children}){

    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = 
      React.useState('');
      const [openModal, setOpenModal] = 
      React.useState(false);

      const CompletedTodos = todos.filter(
        todo => !!todo.Completed).length
        ;
      const TotalTodos = todos.length;
    
      const searchTodos = todos.filter(
        (todo) => {
          const todoText = todo.Text.toLowerCase();
          const searchtext = searchValue.toLowerCase();
      
          return todoText.includes(searchtext);
      })

      const addTodo = (Text) =>{
        const newTodos = [...todos];
        newTodos.push({
          Text,
          Completed: false,
        }
        );
        saveTodos(newTodos);
      };
    
      const CompletedTodo = (Text) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.Text === Text
        )
        newTodos[todoIndex].Completed = true;
        saveTodos(newTodos)
      }
    
      const DeleteTodo = (Text) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.Text === Text
        )
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
      }

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            CompletedTodos,
            TotalTodos,
            searchValue,
            setSearchValue,
            searchTodos,
            addTodo,
            CompletedTodo,
            DeleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}



export {TodoContext, TodoProvider};