import React from 'react'
import "./EmployeeList.css"
import {Link} from 'react-router-dom'
import editIcon from "../../images/Edit.svg"
import deleteIcon from "../../images/delete.svg"
import { useEffect } from "react";								  

export default function EmployeeList() {
		const displayDiscardDialogue = () => {
        document.getElementById("discarddialogueBox").style.display = "flex"
      }
      const closeDiscardDialogue = () => {
        document.getElementById("discarddialogueBox").style.display = "none"
      }
      let currentUrl = window.location.href;
    useEffect(() => {
        if(currentUrl.includes("/employee") ){
          document.getElementById("employee-list-btn").style.backgroundColor = "#FFC619"
        }
      });								  		 
  return (
    <>
      <div className="employee-list-page">
        <div className="employee-list-page-upper-section">
          <div className="employee-list-page-upper-section-button-part">
            <Link to="/employee"><button id='employee-list-btn'>Employee List</button></Link>
                    <Link to="/create-employee"><button>New Employee</button></Link>
          </div>
          <div className="employee-list-page-upper-section-search-part">
            <input type="text" placeholder='Search Here' className='search-box'/>					
          </div>
        </div>
        <div className="employee-list-page-lower-section">
            <table>
                <thead>
                  <tr>
                    <th>Name Surname</th>
                    <th>Group</th>
                    <th>Title</th>
                    <th>Restaurant</th>
                    <th>Account No.</th>
                    <th>Start Work Date</th>
                    <th>Last Edit</th>
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Sachin Jha</td>
                    <td>Admin</td>
                    <td>Admin</td>
                    <td>Princee Vila</td>
                    <td>8742920558</td>
                    <td>19-02-2003</td>
                    <td>17-02-2021</td>
                    <td className='last-column'>
                            <img src={deleteIcon} onClick={displayDiscardDialogue} alt="" />
                        <Link to="/edit-employee" className='link-a'>
                            <img src={editIcon} alt="" />
                        </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Sachin Jha</td>
                    <td>Admin</td>
                    <td>Admin</td>
                    <td>Princee Vila</td>
                    <td>8742920558</td>
                    <td>19-02-2003</td>
                    <td>17-02-2021</td>
                    <td className='last-column'>
                            <img src={deleteIcon} onClick={displayDiscardDialogue} alt="" />
                        <Link to="/edit-employee" className='link-a'>
                            <img src={editIcon} alt="" />
                        </Link>
                    </td>
                  </tr><tr>
                    <td>Sachin Jha</td>
                    <td>Admin</td>
                    <td>Admin</td>
                    <td>Princee Vila</td>
                    <td>8742920558</td>
                    <td>19-02-2003</td>
                    <td>17-02-2021</td>
                    <td className='last-column'>
                            <img src={deleteIcon} onClick={displayDiscardDialogue} alt="" />
                        <Link to="/edit-employee" className='link-a'>
                            <img src={editIcon} alt="" />
                        </Link>
                    </td>
                  </tr>
                </tbody>
            </table>
            </div>
        </div>

        <div className="discard-change" id='discarddialogueBox'>
        <div className="discard-change-dialogue">
            <p>Do You Want To Delete ?</p>
            <div className="discard-dialogue-button-section">
            <Link to="/employee" className='link-a'><button onClick={closeDiscardDialogue}>Delete</button></Link>
                <button onClick={closeDiscardDialogue}>No</button>				   
            </div>
				  
        </div>
    </div>
    </>
  );
}