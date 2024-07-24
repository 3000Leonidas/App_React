import React from "react";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoSearch } from "../TodoSearch/TodoSearch"
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext"

function AppUI(){

    const {
        loading,
        error,
        searchTodos,
        CompletedTodo,
        DeleteTodo,
        openModal,
        setOpenModal,
   } = React.useContext(TodoContext);

    return(
        <>
        <TodoCounter />
        <TodoSearch /> 

        <TodoList>
        {loading && (
            <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
            </>
            )}
            {error && <TodosError />}
            {(!loading && searchTodos.length === 0) && <EmptyTodos />}

            {searchTodos.map(todo =>(
                <TodoItem 
                key={todo.Text} 
                text={todo.Text}
                Completed={todo.Completed}
                onComplete={() => CompletedTodo(todo.Text)}
                onDelete={() => DeleteTodo(todo.Text)}
            />
            ))}
        </TodoList> 

        <CreateTodoButton/>

        {openModal && ( 
        <Modal>
            La funcionalidad de agregar TODO
        </Modal>
        )}
        </>
    );
}

export {AppUI}