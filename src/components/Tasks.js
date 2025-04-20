import Task from "./Task";

export const Tasks = ({ tasks, onDelete, onToggle }) => {
  const futureTasks = tasks
    .filter((task) => new Date(task.day) >= new Date())
    .sort((a, b) => new Date(a.day) - new Date(b.day));
  const pastTasks = tasks
    .filter((task) => new Date(task.day) < new Date())
    .sort((a, b) => new Date(a.day) - new Date(b.day));

  return (
    <div>
      {futureTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={() => onDelete(task.id)}
        />
      ))}

      <h3>
        <span className="task-section"> Delayed: </span>
      </h3>
      {pastTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </div>
  );
};
