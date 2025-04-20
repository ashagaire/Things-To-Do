import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import moment from "moment";
const now = moment().format("YYYY-MM-DD");
const AddTask = ({ onAdd, setShowAddTask }) => {
  const [formData, setFormData] = useState({
    text: "",
    day: "",
    time: "",
    reminder: false,
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,

        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.text) {
      alert("Please add a task");
      return;
    }
    if (!formData.day) {
      alert("Please select date");
      return;
    }

    onAdd(formData);
    setFormData({
      text: "",
      day: "",
      time: "",
      reminder: false,
    });
    setShowAddTask(false);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="cancle-add-task ">
        <FaTimes onClick={() => setShowAddTask(false)} size={20} style={{}} />
      </div>
      <div className="form-control">
        <label>Task</label>
        <textarea
          // className="text-area"
          type="text"
          name="text"
          maxLength="200"
          placeholder="Add Task"
          value={formData.text}
          onChange={handleChange}
          style={{ height: "100px" }}
        />
      </div>
      <div className="div-row">
        <div className="form-control">
          <label>Day</label>
          <input
            type="date"
            name="day"
            placeholder="Add Day"
            min={now}
            value={formData.day}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Time</label>
          <input
            type="time"
            name="time"
            placeholder="Add Time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-control form-control-check">
        <label>Make reminder</label>
        <input
          type="checkbox"
          name="reminder"
          checked={formData.reminder}
          onChange={handleChange}
        />
      </div>
      <div className="button-container">
        <input
          className="btn btn-block cancel-btn"
          type="button"
          value="Cancle"
          onClick={() => setShowAddTask(false)}
        />
        <input className="btn btn-block" type="submit" value="Save task" />
      </div>
    </form>
  );
};

export default AddTask;
