import React from "react";
import "./AssignTask.css";
function UnassignedTask(props) {
  return (
    <div className="unassigned_task_list" onClick={props.click}>
      <input type="checkbox" id={props.unassignedTask.task_id}/>
      <p>{props.unassignedTask.task_name}</p>
      <p>{props.unassignedTask.due_date}</p>
      <p>{props.unassignedTask.urgency}</p>
    </div>
  );
}

export default UnassignedTask;
