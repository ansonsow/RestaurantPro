import React from 'react'

function EmployeeRow(props) {
  return (
    <tr>
              <td>{props.emp.name}</td>
              <td>Clock In</td>
              <td>{props.time.substring(0,10)}</td>
              <td>{props.time.substring(15,21)}</td>
              <td>{props.emp.job_title}</td>
            </tr>
  )
}

export default EmployeeRow
