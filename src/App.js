import "./App.css";
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useEffect, useState } from "react";
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore";
import { todosCollection, db } from "./firebase";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(todosCollection, function (snapshot) {
      const tasksArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTasks(tasksArr);
    });
    return unsubscribe;
  }, []);

  async function addTask(formData) {
    const newTask = formData;
    await addDoc(todosCollection, newTask);
  }

  async function deleteTask(id) {
    const docRef = doc(db, "todos", id);
    await deleteDoc(docRef);
  }

  function toggleReminder(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  }
  return (
    <div className="container main-div">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask ? (
        <AddTask
          onAdd={addTask}
          showAddTask={showAddTask}
          setShowAddTask={setShowAddTask}
        />
      ) : tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Nothing to show"
      )}
    </div>
  );
}

export default App;
