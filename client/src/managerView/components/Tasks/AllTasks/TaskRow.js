import React from "react";

function TaskRow(props) {
  return (
    <div className="task">
      <p col-name="task name">{props.task.task.task_name}</p>
      <p col-name="status">{props.task.task?.task_status === true ? "Open" : "Close"}</p> 
      <p col-name="due date">{props.task.task?.due_date}</p>
      <p col-name="urgency">{props.task.task?.priority === 1 ? "High" : "Low"}</p>
      <p col-name="assigned to">{props.task.user?.name}</p> 
    </div>
  );
}

export default TaskRow;
