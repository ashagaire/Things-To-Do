import{FaTimes} from 'react-icons/fa'
import moment from 'moment';

let now= moment().format('YYYY-MM-DD');
console.log(now)


const Task = ({task , onDelete , onToggle}) => {
  const present = moment(task.day)
  const remainDays = present.diff(now, 'days')
  return (
    <div className={`task ${task.reminder ? 'reminder' : ""} `} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text} <FaTimes style={{color:'red', cursor: 'pointer'}} onClick={onDelete}/> </h3>

        <p> {task.day} {task.time} 
          {remainDays > 0?<span style={{color:'green'}}> {remainDays} days later </span> :
            <span style={{color:'red'}}>Task missed </span>}
        </p>
        

    </div>
    
  )
  
  
}

export default Task