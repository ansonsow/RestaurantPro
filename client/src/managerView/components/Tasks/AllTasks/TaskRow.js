import React from "react";

function TaskRow(props) {
  return (
    <tr>
      <td>{props.task.task.task_name}</td>
      <td>{props.task.task?.task_status === true ? "Open" : "Close"}</td> 
      <td>{props.task.task?.due_date}</td>
      <td>{props.task.task?.priority === 1 ? "High" : "Low"}</td>
      <td>{props.task.user.name}</td> 
    </tr>
  );
}

export default TaskRow;
