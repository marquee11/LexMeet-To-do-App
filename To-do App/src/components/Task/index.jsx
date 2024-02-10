import './task.css';
import DeleteIcon from '../../assets/Icons/Delete.png';
import CheckIcon from '../../assets/Icons/Check.png';

export function Task({task, onDelete, onComplete}){
    return(
        <div className={task}>
            <button className={checkCon} onClick={() => onComplete(task.id)}>
                 <CheckIcon size={20} /> : <div/>
            </button>
            <p className={task.isCompleted ? textComplete : " "}>
                {task.title}
            </p>
            <button className={deleteBtn}onClick={() => onDelete(task.id)}>
                <DeleteIcon size={20} />
                </button>
                </div>
    )
}






