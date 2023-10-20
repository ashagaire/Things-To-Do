import Header from './components/Header';
import './App.css';
import { Tasks } from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:"Doctors Appoinment",
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text:"Meeting at school",
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id:3,
        text:"Food Shopping",
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }

])
//Add Task
function addTask (formData){
  const id = Math.floor(Math.random()* 1000) + 1
  const newTask = {id, ...formData}
  setTasks([...tasks,newTask])

}

//Delete task
function deleteTask(id){
  setTasks(tasks.filter((task) => task.id !==id))
}

//Toggle Reminder
function toggleReminder(id){
  setTasks(tasks.map((task) => task.id ==id ? 
    {...task, reminder:!task.reminder} : 
    task
  ))
}
  return (
    <div className="container">
      
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ?<Tasks tasks={tasks} onDelete= {deleteTask} onToggle={toggleReminder}/> : "Nothing to show"}
        
    </div>
  );
}

export default App;
