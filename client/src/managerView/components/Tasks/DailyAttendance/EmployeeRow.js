import React from 'react'

function EmployeeRow(props) {
  return (
    <tr>
              <td>{props.emp.name}</td>
              <td>Clock In</td>
              <td>23.02.2023</td>
              <td>08:10AM</td>
              <td>{props.emp.job_title}</td>
            </tr>
  )
}

export default EmployeeRow
