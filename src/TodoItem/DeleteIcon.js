import React from "react";
import {TodoIcon} from './TodoIcon'

function DeleteIcon({onDelete}){
    return (
    <TodoIcon
    type="Delete"
    color="white"
    onClick={onDelete}
    />
    );
}

export {DeleteIcon};