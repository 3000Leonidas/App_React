import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){
    const {
        // addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onSubmit =(event) =>{
        event.preventDefault();
        setOpenModal(false)
    }

    
    const onCancel =() =>{
        setOpenModal(false)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Ingrese tu TODO por DEMACIA!!!"/>
            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
                <button type="" className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm }

