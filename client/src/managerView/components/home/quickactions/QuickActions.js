import React, { useState } from "react";
import { Pocket } from "react-feather";
import "./QuickActions.css";
import QuickActionOptions from "./QuickActionOptions";
function QuickActions() {
  const [clickedId, setclickedId] = useState("");
  const [quickActionPage, setquickActionPage] = useState(false);
  const handle = (event) => {
    console.log("event clicked: " + event.target.id);
    setclickedId(event.target.id);
    setquickActionPage(true);
  };

  return (
    <>
      {!quickActionPage ? (
        <div className="quick_actions">
          <h2>Quick Actions</h2>
          <div className="action_options">
            <div className="row1">
              <div className="newTask action" id="CreateTask" onClick={handle}>
                <Pocket />
                <p>Create new task</p>
              </div>
              <div className="allTask action">
                <Pocket />
                <p>See all task</p>
              </div>
              <div className="attendance action">
                <Pocket />
                <p>Attendance sheet</p>
              </div>
            </div>

            <div className="row2">
              <div
                className="assign_task action"
                id="AssignTask"
                onClick={handle}
              >
                <Pocket />
                <p>Assign Task</p>
              </div>
              <div className="employee_list action">
                <Pocket />
                <p>see employee list</p>
              </div>
              <div className="daily_attendence action">
                <Pocket />
                <p>Check Daily Attendance</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <QuickActionOptions clickedId={clickedId} />
      )}
    </>
  );
}

export default QuickActions;
