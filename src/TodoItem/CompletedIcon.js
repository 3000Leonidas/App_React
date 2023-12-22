import React from "react";
import { TodoIcon} from './TodoIcon.js';


function CompletedIcon({completed, onComplete}){
    return (
        <TodoIcon
        type="Check"
        color= {completed ? 'green' : 'white'}
        onClick={onComplete}
        />
    );

}
export { CompletedIcon }