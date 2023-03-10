import React from "react";

function EmployeeAssignedTask(props) {
  return (
    <tr>
      <td>{props.task.task_name}</td>
      <td>{props.task.due_date}</td>
      <td>{props.task.priority === 1 ? "high" : "low"}</td>
    </tr>
  );
}

export default EmployeeAssignedTask;
