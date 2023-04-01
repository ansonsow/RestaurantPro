import React, { useRef } from "react";

import accIcon from "../../../../icons/account.svg"

function EmployeeList(props) {
  let accIconSVG;

  async function grabSVG(url){
    return fetch(url)
    .then(response => response.text())
    .then(result => {
      return result;
    });
  }

  grabSVG(accIcon).then(eyqxf => {
    accIconSVG = eyqxf;
    document.querySelectorAll(".acc_svg").forEach(thdkv => {
      thdkv.innerHTML = accIconSVG
    })        
  })

  return (
    // <tr>
    //   <td className="fled-td" key={props.unassignedTask.user_ids}>
    //     <input
    //       type="radio"
    //       name="radio"
    //       id={props.unassignedTask.user_id}
    //       onClick={props.click}
    //       key={props.unassignedTask.user_ids}
    //     />
    //     {props.unassignedTask.name}
    //   </td>
    //   <td>{props.unassignedTask.job_title}</td>
    // </tr>

    <div className="tr">
      <div className="td" col-name="employee name" key={props.unassignedTask.user_ids}>
        <input
          type="radio"
          name="radio"
          id={props.unassignedTask.user_id}
          onClick={props.click}
          key={props.unassignedTask.user_ids}
        />
        <div className="acc_svg"></div>
        <span>{props.unassignedTask.name}</span>
      </div>

      <div className="td" col-name="employee role">
        {props.unassignedTask.job_title}
      </div>
    </div>
  );
}

export default EmployeeList;
