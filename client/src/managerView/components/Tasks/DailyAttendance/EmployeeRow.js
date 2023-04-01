import React from 'react'

function EmployeeRow(props) {
  return (
    <div className="tr">
      <div className="td" col-name="employee name">{props.emp.name}</div>
      <div className="td" col-name="action">Clock In</div>
      <div className="td" col-name="date">{props.time.substring(0,10)}</div>
      <div className="td" col-name="time">{props.time.substring(15,21)}</div>
      <div className="td" col-name="employee title">{props.emp.job_title}</div>
    </div>
  )
}

export default EmployeeRow
