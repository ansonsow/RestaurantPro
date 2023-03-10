import React from "react";
import { Link } from "react-router-dom";
import "./AllTask.css";
export default function AllTask() {
  let currentUrl = window.location.href;
  useEffect(() => {
    if(currentUrl.includes("/task") ){
      document.getElementById("all-task-btn").style.backgroundColor = "#FFC619"
    }
  }); 
  return (
    <div className="all-task-page">
      <div className="all-task-page-upper-section">
        <div className="all-task-page-upper-section-button-section">
		  <Link to="/task" className="link-a"><button id="all-task-btn">All Task</button></Link>
									 
				 
          <Link to="/assign-task" className='link-a'><button>Assign Task</button></Link>
										
				 
          <Link to="/create-task" className='link-a'><button>Create Task</button></Link>
														 
				 
          <Link to="/daily-attendance" className='link-a'><button>Daily Attendance</button></Link>
        </div>
        <div className="all-task-page-upper-section-search-section">
          <input type="text" className="search-box" placeholder="Search Here" />
        </div>
      </div>
      <div className="all-task-page-lower-section">
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Urgency Level</th>
              <th>Assign To</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Clean Kitchen</td>
              <td>Open</td>
              <td>30.01.2023 0.9:00AM</td>
              <td>High</td>
              <td>John Smith</td>
            </tr>
            <tr>
              <td>Clean Kitchen</td>
              <td>Open</td>
              <td>30.01.2023 0.9:00AM</td>
              <td>High</td>
              <td>John Smith</td>
            </tr>
            <tr>
              <td>Clean Kitchen</td>
              <td>Open</td>
              <td>30.01.2023 0.9:00AM</td>
              <td>High</td>
              <td>John Smith</td>
            </tr>
            <tr>
              <td>Clean Kitchen</td>
              <td>Open</td>
              <td>30.01.2023 0.9:00AM</td>
              <td>High</td>
              <td>John Smith</td>
            </tr>
            <tr>
              <td>Clean Kitchen</td>
              <td>Open</td>
              <td>30.01.2023 0.9:00AM</td>
              <td>High</td>
              <td>John Smith</td>
            </tr>
            <tr>
              <td>Clean Kitchen</td>
              <td>Open</td>
              <td>30.01.2023 0.9:00AM</td>
              <td>High</td>
              <td>John Smith</td>
            </tr>
            <tr>
              <td>Clean Kitchen</td>
              <td>Open</td>
              <td>30.01.2023 0.9:00AM</td>
              <td>High</td>
              <td>John Smith</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
