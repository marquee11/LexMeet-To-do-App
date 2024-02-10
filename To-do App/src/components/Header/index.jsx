import React, { useState } from 'react';
import LexMeetLogo from '../../assets/Icons/LexMeet Logo.svg';
import {styles} from './header.css';

export function Header({ handleAddTask }) {
    const [title, setTitle] = useState('');
     
    function handleSubmit(event) {
        event.preventDefault();
        handleAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={LexMeetLogo} alt="LexMeet Logo" />

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input type="text" placeholder="Add A New Task" onChange={onChangeTitle} value={title} />
                <button className="btn"><img src="../../assets/Icons/Add.png" alt="Add" /> Create</button>
            </form>
        </header>
    );
}



























// import LexMeetLogo from '../../assets/Icons/LexMeet Logo.svg';
// import styles from './header.css';
// import { useState } from 'react';

// export function Header({handleAddTask}){
//     const [title, setTitle] = useState('');
     
//     function handleSubmit(event){
//         event.preventDefault();
//         handleAddTask(title);
//         setTitle('');
//     }
//     function onChangeTitle(event){
//         setTitle(event.target.value);
//     }
//     return(
//         <header className={styles.header}>
//             <img src={LexMeetLogo}/>

//             <form onSubmit={handleSubmit} className={styles.newTaskForm}>
//                 <input type="text" placeholer="Add A New Task" onChange={onChangeTitle} value={title} />
//                 <button class="btn"><image src="../../assets/Icons/Add.png"></image>Create</button>
//             </form>
//         </header>
//     )
//  }

