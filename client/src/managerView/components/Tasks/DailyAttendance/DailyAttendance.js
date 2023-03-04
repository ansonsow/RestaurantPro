import React from "react";
import { Link } from "react-router-dom";
import "./DailyAttendance.css";
export default function DailyAttendance() {
  return (
    <div className="daily-attendance-page">
      <div className="daily-attendance-page-upper-section">
        <div className="daily-attendance-page-upper-section-button-section">
        <Link to="/task" className="link-a"><button>All Task</button></Link>
        <Link to="/assign-task" className='link-a'><button>Assign Task</button></Link>
          <Link to="/create-task" className='link-a'><button>Create Task</button></Link>
          <Link to="/daily-attendance" className='link-a'><button>Daily Attendance</button></Link>
        </div>
        <div className="daily-attendance-page-upper-section-search-section">
          <input type="text" className="search-box" placeholder="Search Here" />
        </div>
      </div>
      <div className="daily-attendance-page-lower-section">
        <table className="daily-attendance-table">
          <thead>
            <tr>
              <th>Name Surname</th>
              <th>Action</th>
              <th>Date</th>
              <th>Time</th>
              <th>Job Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sachin Jha</td>
              <td>Clock In</td>
              <td>30.01.2023</td>
              <td>08:10AM</td>
              <td>Head Chef</td>
            </tr>
            <tr>
               <td>Sachin Jha</td>
              <td>Clock In</td>
              <td>30.01.2023</td>
              <td>08:10AM</td>
              <td>Head Chef</td>
            </tr>
            <tr>
               <td>Sachin Jha</td>
              <td>Clock In</td>
              <td>30.01.2023</td>
              <td>08:10AM</td>
              <td>Head Chef</td>
            </tr>
            <tr>
               <td>Sachin Jha</td>
              <td>Clock In</td>
              <td>30.01.2023</td>
              <td>08:10AM</td>
              <td>Head Chef</td>
            </tr>
            <tr>
               <td>Sachin Jha</td>
              <td>Clock In</td>
              <td>30.01.2023</td>
              <td>08:10AM</td>
              <td>Head Chef</td>
            </tr>
            <tr>
               <td>Sachin Jha</td>
              <td>Clock In</td>
              <td>30.01.2023</td>
              <td>08:10AM</td>
              <td>Head Chef</td>
            </tr>
            <tr>
               <td>Sachin Jha</td>
              <td>Clock In</td>
              <td>30.01.2023</td>
              <td>08:10AM</td>
              <td>Head Chef</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}