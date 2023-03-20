import React from "react";
import "./Home.css";
// import PersonalDetails from "./personalDetails/PersonalDetails";
import QuickActions from "./quickactions/QuickActions";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home_page manager_view">
      <div className="board">
        <h2>Quick Actions</h2>

        <div className="quick_actions">
          <Link to="/create-task">
            <span>Create New Task</span>
          </Link>
          <Link to="/task">
            <span>See All Tasks</span>
          </Link>
          <Link to="/daily-attendance">
            <span>Check Daily Attendance</span>
          </Link>
          <Link to="/assign-task">
            <span>Assign Task</span>
          </Link>
          <Link to="/employee">
            <span>See Employee List</span>
          </Link>
        </div>
      </div>{/* end .board */}

    </div>
    // end .manager_view
  );
}
