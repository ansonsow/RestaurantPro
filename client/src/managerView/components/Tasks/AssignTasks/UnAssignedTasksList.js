import React from "react";
import "./AssignTask.css";

function UnAssignedTasksList(props) {
  return (
    <tr key={props.unassignedTask.task_id}>
      <td className="fled-td">
        <input
          type="checkbox"
          name="checkbox"
          id={props.unassignedTask.task_id}
          onClick={props.click}
        />
        {props.unassignedTask.task_name}
      </td>
      <td>{props.unassignedTask.due_date}</td>
      <td>{props.unassignedTask.priority === 1 ? "high" : "low"}</td>
    </tr>
  );
}

export default UnAssignedTasksList;
