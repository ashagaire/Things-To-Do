import { useState } from "react"

const AddTask = ({onAdd}) => {
    
    const [formData, setFormData] = useState(
        {
        text: "", 
          day: "" , 
          reminder: false
        }
    )
    function handleChange(event) {
        const {name, value, type, checked} = event.target
          setFormData(prevFormData => {
              return {
                  ...prevFormData,
                  [name]: type === "checkbox" ? checked : value
              }
          })
      }
    function handleSubmit(event) {
        event.preventDefault()
        
        if(!formData.text){
            alert('Please add a task')
            return
        }

        onAdd(formData)
        setFormData(
            {
                text: "", 
            day: "" , 
            reminder: false
            })
      }   

  return (
    <form className='add-form' onSubmit={handleSubmit}>
        <div className='form-control' >
            <label>Task</label>
            <input type='text' 
            name="text"
            placeholder='Add Task' 
            value={formData.text}
            onChange={handleChange}
            />
        </div>
        <div className='form-control' >
            <label>Day & Time</label>
            <input type='text' 
            name='day'
            placeholder='Add Day & Time' 
            value={formData.day}
            onChange={handleChange}
            />
        </div>
        <div className='form-control form-control-check' >
            <label>Task</label>
            <input type='checkbox' 
            name="reminder"
            checked={formData.reminder}
            onChange={handleChange}
             />
        </div>
        <input className="btn btn-block" type='submit' value="Save task"/>
    </form>
  )
}

export default AddTask