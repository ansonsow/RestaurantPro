import React, { useRef } from "react";
function EmployeeList(props) {
  return (
    <tr>
      <td className="fled-td" key={props.unassignedTask.user_ids}>
        <input
          type="radio"
          name="radio"
          id={props.unassignedTask.user_id}
          onClick={props.click}
          key={props.unassignedTask.user_ids}
        />
        {props.unassignedTask.name}
      </td>
      <td>{props.unassignedTask.job_title}</td>
    </tr>
  );
}

export default EmployeeList;
