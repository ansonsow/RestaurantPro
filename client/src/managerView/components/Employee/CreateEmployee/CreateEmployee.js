import React from 'react'
import {Link} from 'react-router-dom'
import "../EditEmployee/EditEmployee.css"
import { useEffect } from "react";								  
export default function CreateEmployee() {
    const closeDialogue = () => {
        document.getElementById("dialogueBox").style.display = "none"
    }
    const displayDialogue = () => {
        document.getElementById("dialogueBox").style.display = "flex"
    }
	let currentUrl = window.location.href;
    useEffect(() => {
        if(currentUrl.includes("/create-employee") ){
          document.getElementById("new-employee-btn").style.backgroundColor = "#FFC619"
        }
      });	
	  
  return (
    <>
      <div className="employee-page">
        <div className="employee-page-upper-section">
          <Link to="/employee"><button>Employee List</button></Link>
          <Link to="/create-employee"><button id='new-employee-btn'>New Employee</button></Link>
          <Link to="/edit-employee"><button>Edit Employee</button></Link>
        </div>
        <div className="employee-page-lower-section">
          <div className="employee-page-lower-section-image-part">
                <div className="image-box"></div>
          </div>
          <div className="employee-page-lower-section-detail-part">
                <h2>Create New Employee Profile</h2>
                <div className="employee-detail-form">
                    <div className="input-section">
                        <p>Name</p>
                        <input type="text" placeholder='ABC' pattern="^[a-zA-Z ]*$" className='input-box'/>
                    </div>
                    <div className="input-section">
                        <p>Birth Date</p>
                        <input type="date" placeholder='01.01.1999' className='input-box'/>
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
                            <option value="staff">Staff</option>
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
                            <option value="staff">Staff</option>
                        </select>
                    </div>
                    <div className="input-section">
                        <p>Contact Number</p>
                        <input type="number" placeholder='ABC' className='input-box' maxLength={10} minLength={10}/>
                    </div>
                    <div className="input-section">
                        <p>Shift</p>
                        <input type="text" placeholder='17:00-19:00' className='input-box'/>
                    </div>
                </div>
            <div className="text-area-section">												   
              <p>Notes</p>
              <textarea name="Notes" id=""></textarea>
            </div>
            <div className="button-section">
                    <button className='save-btn' onClick={displayDialogue}>Create</button>
                </div>
					   
            </div>
				
        </div>
    </div>
    <div className="save-change" id='dialogueBox'>
        <div className="save-change-dialogue">
            <p>Employee Created Successfully</p>
            <Link to="/employee"><button onClick={closeDialogue}>OK</button></Link>
        </div>
    </div>
    </>
  );
}