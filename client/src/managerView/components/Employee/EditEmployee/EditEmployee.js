import React from 'react'
import {Link} from 'react-router-dom'
import "./EditEmployee.css"
import { useEffect } from "react";								  
export default function EditEmployee() {
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
    const displayDeleteDialogue = () => {
        document.getElementById("deletedialogueBox").style.display = "flex"
    }
    const closeDeleteDialogue = () => {
        document.getElementById("deletedialogueBox").style.display = "none"
    }
	let currentUrl = window.location.href;
    useEffect(() => {
        if(currentUrl.includes("/edit-employee") ){
          document.getElementById("edit-employee-btn").style.backgroundColor = "#FFC619"
        }
      });									  		 
  return (
    <>
      <div className="employee-page">
        <div className="employee-page-upper-section">
          <Link to="/employee" className="link-a">
            <button>Employee List</button>
          </Link>
          <Link to="/create-employee" className="link-a">
            <button>New Employee</button>
          </Link>
          <Link to="/edit-employee" className="link-a">
            <button>Edit Employee</button>
          </Link>
        </div>
        <div className="employee-page-lower-section">
          <div className="employee-page-lower-section-image-part">
            <div className="image-box"></div>
          </div>
          <div className="employee-page-lower-section-detail-part">
                <h2>Edit The Employee Settings</h2>
                <form className="employee-detail-form">
                    <div className="input-section">
                        <p>Name</p>
                        <input type="text" placeholder='ABC' pattern="^[a-zA-Z ]*$" className='input-box' required/>
                    </div>
                    <div className="input-section">
                        <p>Birth Date</p>
                        <input type="date" placeholder='01.01.1999' className='input-box' required/>
                    </div>
                    <div className="input-section">
                        <p>Surname</p>
                        <input type="text" placeholder='ABC' pattern="^[a-zA-Z ]*$" className='input-box'/>
                    </div>
                    <div className="input-section">
                        <p>Gender</p>
                        <select name="gender" id="gender" className='input-box'>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div className="input-section">
                        <p>Email</p>
                        <input type="email" placeholder='Something@gmai.com' className='input-box'/>
                    </div>
                    <div className="input-section">
                        <p>Group</p>
                        <select name="gender" id="gender" className='input-box'>
                            <option value="admin">Admin</option>
                            <option value="teaching">Teaching</option>
                            <option value="staff">Stafee</option>
                        </select>
                    </div>
                    <div className="input-section">
                        <p>Restaurant Name</p>
                        <input type="text" placeholder='Restaurant Pro' className='input-box'/>
                    </div>
                    <div className="input-section">
                        <p>Address</p>
                        <input type="text" placeholder='A-Block Princess Park Faridabad' className='input-box'/>
                    </div>
                    <div className="input-section">
                    <p>Job Title</p>
                        <select name="gender" id="gender" className='input-box'>
                            <option value="admin">Admin</option>
                            <option value="teaching">Teaching</option>
                            <option value="staff">Stafee</option>
                        </select>
                    </div>
                    <div className="input-section">
                        <p>Contact Number</p>
                        <input type="number" placeholder='8742920558' maxLength={10} minLength={10} className='input-box'/>
                    </div>
                    <div className="input-section">
                        <p>Shift</p>
                        <input type="number" placeholder='17:00-19:00' className='input-box'/>
                    </div>
                </form>
            <div className="text-area-section">												   
              <p>Notes</p>
              <textarea name="Notes" id=""></textarea>
            </div>
            <div className="button-section">
                    <button className='delete-btn' onClick={displayDeleteDialogue}>Delete Employee</button>
							   
					   
                    <button className='discard-btn' onClick={displayDiscardDialogue}>Discard</button>
					   
					   
                    <button className='save-btn' onClick={displayDialogue}>Save</button>
                </div>
					   
            </div>
				
        </div>
    </div>
    <div className="save-change" id='dialogueBox'>
        <div className="save-change-dialogue">
            <p>Changes Saved Successfully</p>
            <Link to="/employee" className='link-a'><button onClick={closeDialogue}>Okey</button></Link>
        </div>
    </div>
    <div className="discard-change" id='discarddialogueBox'>
        <div className="discard-change-dialogue">
            <p>Do You Want To Discard Changes ?</p>
            <div className="discard-dialogue-button-section">
            <Link to="/employee" className='link-a'><button onClick={closeDiscardDialogue}>Yes</button></Link>
                <button onClick={closeDiscardDialogue}>No</button>
            </div>
        </div>
    </div>
    <div className="delete-change" id='deletedialogueBox'>
        <div className="delete-change-dialogue">
            <p>Are you sure you want to delete this account ?</p>
            <div className="delete-dialogue-button-section">
            <Link to="/employee" className='link-a'><button onClick={closeDeleteDialogue}>Yes</button></Link>
                <button onClick={closeDeleteDialogue}>Cancel</button>
            </div>
        </div>
    </div>
    </>
  );
}