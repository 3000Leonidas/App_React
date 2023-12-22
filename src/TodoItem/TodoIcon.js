import { ReactComponent as Check} from "./d8tih77-247f7960-350d-4cc8-ac20-79e86c385169.svg";
import { ReactComponent as Delete } from "./2061132.svg";
import './TodoIcon.css'

const iconTypes={
    "Check": (color) => <Check className="Icon-svg" fill={color}/>,
    "Delete": (color) => <Delete className="Icon-svg" fill={color}/>
}

function TodoIcon({type, color, onClick}){
    return(
    <span 
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
    >
        {iconTypes[type](color)}
    </span>
    )
};

export {TodoIcon };