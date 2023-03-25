import React from 'react'
import {Link} from 'react-router-dom'
import "./Account.css"
import { useEffect } from "react";
export default function Account() {
    const closeDialogue = () => {
        document.getElementById("dialogueBox").style.display = "none"
    }
    const displayDialogue = () => {
        document.getElementById("dialogueBox").style.display = "flex"
    }
    const displayDeleteAccountDialogue = () => {
        document.getElementById("deleteaccountdialogueBox").style.display = "flex"
    }
    const closeDeleteAccountDialogue = () => {
        document.getElementById("deleteaccountdialogueBox").style.display = "none"
    }
    const displaydeletesuccessdialogue = () => {
        document.getElementById("deletedsuccessfully").style.display = "flex"
        document.getElementById("deleteaccountdialogueBox").style.display = "none"

    }
    const closedeletesuccessDialogue = () => {
        document.getElementById("deleteaccountdialogueBox").style.display = "none"
        document.getElementById("deletedsuccessfully").style.display = "none"
    }
    let currentUrl = window.location.href;
    useEffect(() => {
        if(currentUrl.includes("/account") ){
          document.getElementById("account-btn").style.backgroundColor = "#FFC619"
        }
      });

  return (
    <>

    <div className='account-page'>
        <div className="account-page-upper-section">
            <button id='account-btn'>Account</button>
        </div>
        <div className="account-page-lower-section">
            <div className="account-page-lower-section-image-part">
                <div className="image-box"></div>
                <div className="action-box">
                    <h3>Actions</h3>
                    <p><Link to="/change-password" className='link-link'>Change Password</Link></p>
                    <p onClick={displayDeleteAccountDialogue}>Delete Account</p>
                </div>
            </div>
            <div className="account-page-lower-section-detail-part">
                <div className="account-detail-form">
                    <div className="input-section">
                        <p>Name</p>
                        <input type="text" placeholder='John' pattern="^[a-zA-Z ]*$" className='input-box'/>
                    </div>
                    <div className="input-section">
                        <p>Birth Date</p>
                        <input type="date" placeholder='01.01.1999' className='input-box'/>
                    </div>
                    <div className="input-section">
                        <p>Surname</p>
                        <input type="text" placeholder='Johnson' pattern="^[a-zA-Z ]*$" className='input-box'/>
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
                        <p>Contact Number</p>
                        <input type="number" placeholder='+91 11223344' className='input-box' />
                    </div>
                    <div className="input-section">
                        <p>Company Name</p>
                        <input type="text" placeholder='East To East' className='input-box'/>
                    </div>
                    <div className="input-section">
                        <p>Address</p>
                        <input type="text" placeholder='A-Block Princess Park Faridabad' className='input-box'/>
                    </div>
                    <div className="input-section">
                    <p>Job Title</p>
                        <select name="gender" id="gender" className='input-box'>
                            <option value="admin">Admin</option>
                            <option value="manager">Manager</option>
                            <option value="employee">Employee</option>
                        </select>
                    </div>
                    <div className="input-section">
                        <p>Attendance Screen Code</p>
                        <input type="password" placeholder='***' className='input-box' maxLength={10} minLength={10}/>
                    </div>
                    <div className="input-section">
                        <p>Shift</p>
                        <input type="text" placeholder='17:00-19:00' className='input-box'/>
                    </div>
                    <div className="input-section">
                        <p>Other Notes</p>
                        <input type="text" placeholder='17:00-19:00' className='input-box'/>
                    </div>
                </div>
            </div>
        </div>
                <div className="button-section">
                    <button className='discard-btn'>Discard</button>
                    <button className='save-btn' onClick={displayDialogue}>Save Changes</button>
                </div>
    </div>
    <div className="save-change" id='dialogueBox'>
        <div className="save-change-dialogue">
            <p>Changes Saved Successfully</p>
            <Link to="/account"><button onClick={closeDialogue}>OK</button></Link>
        </div>
    </div>
    <div className="delete-account" id='deleteaccountdialogueBox'>
        <div className="delete-account-dialogue">
            <p>Do you want to</p>
            <p>delete this account?</p>
            <div className="button-section">
            <Link to="/account"><button onClick={displaydeletesuccessdialogue} className="discard-btn">Yes</button></Link>
            <Link to="/account"><button onClick={closeDeleteAccountDialogue} className="save-btn">No</button></Link>
            </div>
        </div>
    </div>
    <div className="save-change" id='deletedsuccessfully'>
        <div className="save-change-dialogue">
            <p>The Account Has Been Deleted!</p>
            <Link to="/account"><button onClick={closedeletesuccessDialogue}>OK</button></Link>
        </div>
    </div>
    </>
  )
}