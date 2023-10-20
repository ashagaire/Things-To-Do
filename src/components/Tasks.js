import Task from "./Task"

export const Tasks = ({tasks , onDelete ,onToggle}) => {
    
  return (
    <div>
        {tasks.map((task) => (
            <Task key={task.id} task={task} onToggle={onToggle} onDelete= {() => onDelete(task.id)} />
        ))}
    </div>
  )
}
