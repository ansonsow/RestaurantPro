import React from "react";

function TaskRow(props) {
  return (
    <div className="task">
      <p col-name="task name">{props.task.task.task_name}</p>
      <p col-name="status">{props.task.task?.task_status === true ? "In process" : "Closed"}</p> 
      <p col-name="due date">{props.task.task?.due_date.split(".")[0].slice(0,-3).replace("T"," ").replaceAll("-","/")}</p>
      <p col-name="urgency">{props.task.task?.priority === 1 ? "High" : "Low"}</p>
      <p col-name="assigned to">{props.task.user?.name}</p> 
    </div>
  );
}

export default TaskRow;
