import React from "react";

function EmployeeAssignedTask(props) {
  let dueDate = new Date();
  // default to 3 hours after now
  dueDate.setHours(dueDate.getHours()+3);
  // console.log(props.task.due_date);
  let strDueDate = dueDate.toString();

  let trimmed = strDueDate.substring(0,21).split(" ").slice(1).join(" ")

  return (
    <div className="tr">
      <div className="td" col-name="task name">
        <span>{props.task.task_name}</span>
      </div>
      {/* <td>{props.task.due_date}</td> */}
      <div className="td" col-name="due date">
        <span>{trimmed}</span>
      </div>

      <div className="td" col-name="urgency">
        <span>{props.task.priority === 1 ? "high" : "low"}</span>
      </div>
    </div>
  );
}

export default EmployeeAssignedTask;
