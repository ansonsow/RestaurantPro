import React from "react";

function EmployeeAssignedTask(props) {
  let dueDate = new Date();
  // default to 3 hours after now
  dueDate.setHours(dueDate.getHours()+3);
  // console.log(props.task.due_date);
  let strDueDate = dueDate.toString();

  let trimmed = strDueDate.substring(0,21)

  return (
    <tr>
      <td>{props.task.task_name}</td>
      {/* <td>{props.task.due_date}</td> */}
      <td>{trimmed}</td>

      <td>{props.task.priority === 1 ? "high" : "low"}</td>
    </tr>
  );
}

export default EmployeeAssignedTask;
