import './CreateTodoButton.css';

function CreateTodoButton(){

        return(
            <button 
            className="buttonCreate" 
            onClick={
                (event)=> {
                console.log('Le diste Click')
                console.log(event.target)
                }
            }>
                +
            </button>
        );

}


export {CreateTodoButton};