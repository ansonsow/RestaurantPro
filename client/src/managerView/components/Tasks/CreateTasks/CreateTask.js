import React from "react";
import "./CreateTask.css";
import { useEffect } from "react";								  
import { Link } from "react-router-dom";
export default function CreateTask() {
	  const closeDialogue = () => {
    document.getElementById("dialogueBox").style.display = "none"
}
const displayDialogue = () => {
    document.getElementById("dialogueBox").style.display = "flex"
}
const displayDiscardDialogue = () => {
  document.getElementById("discarddialogueBox").style.display = "flex"
}
const closeDiscardDialogue = () => {
  document.getElementById("discarddialogueBox").style.display = "none"
}
let currentUrl = window.location.href;
    useEffect(() => {
        if(currentUrl.includes("/create-task") ){
          document.getElementById("create-task-btn").style.backgroundColor = "#FFC619"
        }
      });						   		 
  return (
    <>
    <div className="create-task-page">
      <div className="create-task-page-upper-section">
        <div className="create-task-page-upper-section-button-section">
          <Link to="/task" className="link-a"><button>All Task</button></Link>
          <Link to="/assign-task" className='link-a'><button>Assign Task</button></Link>
          <Link to="/create-task" className="link-a"><button id="create-task-btn">Create Task</button></Link>
          <Link to="/daily-attendance" className='link-a'><button>Daily Attendance</button></Link>
        </div>
      </div>
      <div className="create-task-page-lower-section">
        <h2>Fill the form to create new task</h2>
        <div className="create-task-page-input-section">
          <div className="item">
            <p>Task Name</p>
            <input type="text" placeholder="Task Name" pattern="^[a-zA-Z ]*$" className="input-box" />
          </div>
          <div className="item">
            <p>Due Date</p>
            <input type="date" placeholder="Task Name" className="input-box" />
          </div>
          <div className="item">
            <p>Urgency Level</p>
            <select name="gender" id="gender" className="input-box">
              <option value="low">low</option>
              <option value="high">high</option>
              <option value="medium">medium</option>
            </select>
          </div>
          <div className="item">
            <p>Assign To</p>
            <select name="gender" id="gender" className="input-box">
              <option value="john">john</option>
              <option value="tame">tame</option>
              <option value="etc">etc</option>
            </select>
          </div>
          <div className="item">
            <p>Restaurant Name</p>
            <input type="text" placeholder="Task Name" className="input-box" />
          </div>
        </div>
        
        <div className="lower-input-section">
          <p>Description</p>
          <textarea name="description"></textarea>
        </div>
      </div>
      <div className="create-task-button-section">
        <button className='discard-btn' onClick={displayDiscardDialogue}>Discard</button>
        <button onClick={displayDialogue} className='save-changes'>Save Changes</button>
      </div>
    </div>
    <div className="save-change" id='dialogueBox'>
        <div className="save-change-dialogue">
            <p>Changes Saved Successfully</p>
            <Link to="/task" className='link-a'><button className='save-btn' onClick={closeDialogue}>Okey</button></Link>
        </div>
    </div>
    <div className="discard-change" id='discarddialogueBox'>
        <div className="discard-change-dialogue">
            <p>Do You Want To Discard Changes ?</p>
            <div className="discard-dialogue-button-section">
            <Link to="/task" className='link-a'><button onClick={closeDiscardDialogue}>Yes</button></Link>
                <button onClick={closeDiscardDialogue}>No</button>
            </div>
        </div>
    </div>
    </>										  	   
  );
}