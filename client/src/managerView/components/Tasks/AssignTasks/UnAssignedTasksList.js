import React from "react";
import "./AssignTask.css";

function UnAssignedTasksList(props) {
  return (
    <tr>
      <td className="fled-td">
        <input
          type="checkbox"
          name="checkbox"
          id={props.unassignedTask.task_id}
        />
        {props.unassignedTask.task_name}
      </td>
      <td>{props.unassignedTask.due_date}</td>
      <td>{props.unassignedTask.urgency}</td>
    </tr>
  );
}

export default UnAssignedTasksList;
