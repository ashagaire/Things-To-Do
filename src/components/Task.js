import { FaTrash } from "react-icons/fa";
import moment from "moment";

let now = moment().format("YYYY-MM-DD");

const Task = ({ task, onDelete, onToggle }) => {
  const present = moment(task.day);
  const remainDays = present.diff(now, "days");
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""} `}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTrash
          // style={{ color: "darkred", cursor: "pointer" }}
          className="del-task-btn "
          onClick={onDelete}
        />
      </h3>

      <div>
        {remainDays > 0 ? (
          <p className="task-info">
            <span style={{ color: "green" }}>{remainDays} days later</span>
            <span className="right-content" style={{ color: "green" }}>
              <span style={{ color: "blue" }}>{task.time} </span>
              {task.day}
            </span>
          </p>
        ) : (
          <p className="task-info" style={{ color: "red" }}>
            {task.day} {task.time}
          </p>
        )}
      </div>
    </div>
  );
};

export default Task;
