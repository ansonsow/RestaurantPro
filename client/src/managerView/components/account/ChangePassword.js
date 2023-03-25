import React from 'react'
import {Link} from 'react-router-dom'
import "./ChangePassword.css"
import { useEffect } from "react";
export default function ChangePassword() {
    const closeDialogue = () => {
        document.getElementById("dialogueBox").style.display = "none"
    }
    const displayDialogue = () => {
        document.getElementById("dialogueBox").style.display = "flex"
    }
    let currentUrl = window.location.href;
    useEffect(() => {
        if(currentUrl.includes("/change-password") ){
          document.getElementById("change-password-btn").style.backgroundColor = "#FFC619"
        }
      });

  return (
    <>

    <div className='change-password-page'>
        <div className="change-password-page-upper-section">
            <button id='change-password-btn'>Change Password</button>
        </div>
        <div className="change-password-page-lower-section">  
                <div className="lower-section-head">
                    <h2>Change Password</h2>
                    <p>Your new password must be different from previous used password</p>
                </div>  
                    <div className="input-section">
                        <p>Old Password</p>
                        <input type="password" placeholder='*****' className='input-box'/>
                    </div>    
                    <div className="input-section">
                        <p>New Password</p>
                        <input type="password" placeholder='*****' className='input-box'/>
                    </div>
                    <div className="input-section">
                        <p>Confirm Password</p>
                        <input type="password" placeholder='*****' className='input-box'/>
                    </div>
                <div className="change-password-button-section">
                    <Link to="/account" className='link-a'><button className='discard-btn'>Discard</button></Link>
                    <button className='save-btn' onClick={displayDialogue}>Save Changes</button>
                </div>
        </div>
    </div>
    <div className="save-change" id='dialogueBox'>
        <div className="save-change-dialogue">
            <p>New Password Saved</p>
            <Link to="/change-password"><button onClick={closeDialogue}>OK</button></Link>
        </div>
    </div>
    </>
  )
}