import './App.css';
import Header from './components/Header';
import { Tasks } from './components/Tasks';
import AddTask from './components/AddTask'

import { useEffect, useState } from 'react';
import { onSnapshot ,addDoc, doc,deleteDoc, setDoc} from 'firebase/firestore';
import { todosCollection, db } from './firebase';
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

//Calling firebase
  useEffect(() => {
   const unsubscribe = onSnapshot(todosCollection, function(snapshot){
      // Sync up our local notes array with the snapshot data
      const tasksArr = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    setTasks(tasksArr)
   })
   return unsubscribe

  }, [])

//Add Task
async function addTask (formData){
  
  const newTask = formData
  await addDoc(todosCollection, newTask)
  

}

//Delete task
async function deleteTask(id){
  const docRef = doc(db,"todos",id)
  await deleteDoc(docRef)
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
