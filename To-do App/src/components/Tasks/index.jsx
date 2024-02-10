import {Task} from '../Task';
import './tasks.css';

export function Tasks({tasks, onDelete, onComplete}){
    const TaskQuantity=tasks.length;
    const completedTasks=tasks.filter(task=> task.isComnpleted).length;


return (
    <section className={stasks}>
        <header className={styles.header}>
            <div>
                <p>Created Tasks</p>
                <span>{taskQuantity}</span>
            </div>
            <div>
                <p className={textPurple}>Complete Tasks</p>
                <span>{completeTasks}of{tasksQuantity}</span>
            </div>
        </header>
        <div className={list}>
            {tasks.map((task) =>{
                <Task key={Task.id} task={task} onDelete={onDelete} 
                onComplete={onComplete}/>
            })}
        </div>
    </section>
)
}

