import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }){

    return(
        <button 
            className="buttonCreate" 
            onClick={
                ()=>{
                    setOpenModal(state=>!state);
                }
            }
        >*</button>
    );
}
export {CreateTodoButton};