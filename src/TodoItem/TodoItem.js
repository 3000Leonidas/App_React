import {CompletedIcon } from './CompletedIcon'
import {DeleteIcon } from './DeleteIcon'
import './TodoItem.css';

function TodoItem(props) {
    return(
      <li>
        <CompletedIcon
        completed = {props.Completed}
        onComplete = {props.onComplete}
        />

        <p className={` ${props.Completed && "TodoItem-p--complete"}`}>
          {props.Text}
        </p>

        <DeleteIcon 
        onDelete = {props.onDelete}
        />
      </li>
    );
  }
  
export { TodoItem };