import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="assign-task-page-upper-section-button">
      <h3>Quick Actions</h3>
      <div className="links">
        <Link to="/create-task" className="link-a">
          <button>Create New Task</button>
        </Link>
        <Link to="/task" className="link-a">
          <button> See All Task</button>
        </Link>
        <Link to="/daily-attendance" className="link-a">
          <button>Attendance Scree</button>
        </Link>
      </div>

      <div className="links">
        <Link to="/assign-task" className="link-a">
          <button>Assign Task</button>
        </Link>
        <Link to="/employee" className="link-a">
          <button>Employee List</button>
        </Link>
        <Link to="/daily-attendance" className="link-a">
          <button>Check Daily Attendance</button>
        </Link>
      </div>

    </div>
  );
}
