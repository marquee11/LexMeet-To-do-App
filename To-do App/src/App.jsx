 import { useEffect,useState } from "react";
 import { Header } from "./components/Header";
 import { Tasks } from "./components/Tasks";

 const LOCAL_STORAGE_KEY='todo:tasks';

 function App(){
    const[task,setTask]=useState();

    function loadSavedTask(){
        const saved=localStorage.getItem(LOCAL_STORAGE_KEY);
        if(saved) {
            setTask(JSON.parse(saved));
        }
    }
    function setTasksAndSave(newTasks){
        setTask(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newTasks));
    }

    useEffect(() =>{
        loadSavedTask();
    }, [])

    function addTask(taskTitle){
        setTasksAndSave([...task, {
            id: crypto.randomUUID(),
            title: taskTitle,
            isCompleted: false
        }]);
    }

    function deleteTaskById(taskId) {
        const newTasks = task.filter(task => task.id !== taskId);
        setTasksAndSave(newTasks);
    }

    function toggleTaskCompletedById(taskId) {
        const newTasks = tasks.map(task => {
          if(task.id === taskId) {
            return {
              ...task,
              isCompleted: !task.isCompleted
            }
          }
          return task;
        });
        setTasksAndSave(newTasks);
      }

        return(
            <>
            <Header handleAddTask={addTask} />
            <Tasks 
            tasks={task}
            onDelete={deleteTaskById}
            onComplete={toggleTaskCompletedById}
            />
            </>
        )
    
 }
 export default App
