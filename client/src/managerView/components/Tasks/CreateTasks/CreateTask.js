import React from "react";
import "./CreateTask.css";
import { Link } from "react-router-dom";
export default function CreateTask() {
  return (
    <div className="create-task-page">
      <div className="create-task-page-upper-section">
        <div className="create-task-page-upper-section-button-section">
          <Link to="/task" className="link-a"><button>All Task</button></Link>
          <Link to="/assign-task" className='link-a'><button>Assign Task</button></Link>
          <Link to="/create-task" className="link-a"><button>Create Task</button></Link>
          <Link to="/daily-attendance" className='link-a'><button>Daily Attendance</button></Link>
        </div>
      </div>
      <div className="create-task-page-lower-section">
        <h2>Fill the form to create new task</h2>
        <div className="create-task-page-input-section">
          <div className="item">
            <p>Task Name</p>
            <input type="text" placeholder="Task Name" className="input-box" />
          </div>
          <div className="item">
            <p>Task Name</p>
            <input type="text" placeholder="Task Name" className="input-box" />
          </div>
          <div className="item">
            <p>Task Name</p>
            <select name="gender" id="gender" className="input-box">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="item">
            <p>Task Name</p>
            <select name="gender" id="gender" className="input-box">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="item">
            <p>Task Name</p>
            <input type="text" placeholder="Task Name" className="input-box" />
          </div>
        </div>
        
        <div className="lower-input-section">
          <p>Task Name</p>
          <textarea name="description"></textarea>
        </div>
      </div>
      <div className="create-task-button-section">
        <button>Discard</button>
        <button>Save Changes</button>
      </div>
    </div>
  );
}