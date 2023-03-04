import React from 'react'
import "./AssignTask.css"
import { Link } from 'react-router-dom'
export default function AssignTask() {
  return (
    <div className='assign-task-page'>
        <div className="assign-task-page-upper-section">
        <div className="assign-task-page-upper-section-button-section">
        <Link to="/task" className="link-a"><button>All Task</button></Link>
          <Link to="/assign-task" className='link-a'><button>Assign Task</button></Link>
          <Link to="/create-task" className='link-a'><button>Create Task</button></Link>
          <Link to="/daily-attendance" className='link-a'><button>Daily Attendance</button></Link>
        </div>
      </div>

      <div className="assign-task-page-lower-section">
            <div className="assign-task-page-grid-column" id='column1'>
                <p className='underline-p'>Unassigned Task</p>
                <table className="unassigned-task-table">
                    <thead>
                        <th>Task Name</th>
                        <th>Due Date</th>
                        <th>Urgency</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='fled-td'>
                            <input type="checkbox" name="checkbox"/>
                            Map Main Room</td>
                            <td>23.03.2003 11:00AM</td>
                            <td>High</td>
                        </tr>
                        <tr>
                            <td className='fled-td'>
                            <input type="checkbox" name="checkbox"/>
                            Map Main Room</td>
                            <td>23.03.2003 11:00AM</td>
                            <td>High</td>
                        </tr>
                        <tr>
                            <td className='fled-td'>
                            <input type="checkbox" name="checkbox"/>
                            Map Main Room</td>
                            <td>23.03.2003 11:00AM</td>
                            <td>High</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="assign-task-page-grid-column" id='column2'>
                <p className='underline-p'>Employee</p>
                <table className="employee-table">
                    <thead>
                        <th>Name Surname</th>
                        <th>Title</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='fled-td'>
                            <input type="checkbox" name="checkbox"/>
                            Sachin jha</td>
                            <td>Cheif</td>
                        </tr>
                        <tr>
                            <td className='fled-td'>
                            <input type="checkbox" name="checkbox"/>
                            Sachin jha</td>
                            <td>Cheif</td>
                        </tr>
                        <tr>
                            <td className='fled-td'>
                            <input type="checkbox" name="checkbox"/>
                            Sachin jha</td>
                            <td>Cheif</td>
                        </tr>
                    </tbody>
                </table>
            </div>



            <div className="assign-task-page-grid-column" id='column3'>
                <p className='underline-p'>John's Uncompleted Tasks</p>
                <table className="uncompleted-task-table">
                    <thead>
                        <th>Task Name</th>
                        <th>Due Date</th>
                        <th>Urgency</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Clean Room</td>
                            <td>30.03.2023 09:00AM</td>
                            <td>Low</td>
                        </tr>
                        <tr>
                            <td>Clean Room</td>
                            <td>30.03.2023 09:00AM</td>
                            <td>Low</td>
                        </tr>
                        <tr>
                            <td>Clean Room</td>
                            <td>30.03.2023 09:00AM</td>
                            <td>Low</td>
                        </tr>
                    </tbody>
                </table>
                <button>Next</button>
            </div>
      </div>
    </div>
  )
}