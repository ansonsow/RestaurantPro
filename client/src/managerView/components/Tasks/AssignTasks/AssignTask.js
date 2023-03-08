import React, { useEffect, useState } from "react";
import "./AssignTask.css";
import { Link } from "react-router-dom";
import UnAssignedTasksList from "./UnAssignedTasksList";
export default function AssignTask() {
  const [unAssignedTask, setUnAssignedTask] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  let data = [
    { task_id: 1, task_name: "Mop", due_date: "20-20-20", urgency: "high" },
    { task_id: 2, task_name: "Roll", due_date: "20-20-20", urgency: "high" },
  ];

  let employeeData = [
    { emp_id: 1, emp_name: "Mop" },
    { emp_id: 2, emp_name: "Roll", due_date: "20-20-20", urgency: "high" },
  ];

  useEffect(() => {
    console.log("unAssignedTask: " + unAssignedTask);
    console.log("task in array: " + +unAssignedTask.find);

    getSelectedTasks();
  }, [unAssignedTask]);

  const taskSelected = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setUnAssignedTask((pre) => [...pre, id]);
    } else {
      setUnAssignedTask((pre) => {
        return [...pre.filter((task_id) => task_id != id)];
      });
    }
  };
  const getSelectedTasks = () => {
    data.forEach((task) => {
    //   console.log("task in array: "+task.task_id + unAssignedTask.includes(task.task_id));
      if (unAssignedTask.find((id) => task.task_id == id)) {
        console.log("task: " + JSON.stringify(task));
        setSelectedTasks((pre) => [...pre, task]);
      } 
    });
    console.log("selectedTasks: " + JSON.stringify(selectedTasks));
  };
  return (
    <div className="assign-task-page">
      <div className="assign-task-page-upper-section">
        <div className="assign-task-page-upper-section-button-section">
          <Link to="/task" className="link-a">
            <button>All Task</button>
          </Link>
          <Link to="/assign-task" className="link-a">
            <button>Assign Task</button>
          </Link>
          <Link to="/create-task" className="link-a">
            <button>Create Task</button>
          </Link>
          <Link to="/daily-attendance" className="link-a">
            <button>Daily Attendance</button>
          </Link>
        </div>
      </div>

      <div className="assign-task-page-lower-section">
        <div className="assign-task-page-grid-column" id="column1">
          <p className="underline-p">Unassigned Task</p>
          <table className="unassigned-task-table">
            <thead>
              <th>Task Name</th>
              <th>Due Date</th>
              <th>Urgency</th>
            </thead>
            <tbody>
              {/* <tr>
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
                        </tr> */}
              {data.map((task) => (
                <UnAssignedTasksList
                  unassignedTask={task}
                  click={taskSelected}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="assign-task-page-grid-column" id="column2">
          <p className="underline-p">Employee</p>
          <table className="employee-table">
            <thead>
              <th>Name Surname</th>
              <th>Title</th>
            </thead>
            <tbody>
              <tr>
                <td className="fled-td">
                  <input type="checkbox" name="checkbox" />
                  Sachin jha
                </td>
                <td>Cheif</td>
              </tr>
              <tr>
                <td className="fled-td">
                  <input type="checkbox" name="checkbox" />
                  Sachin jha
                </td>
                <td>Cheif</td>
              </tr>
              <tr>
                <td className="fled-td">
                  <input type="checkbox" name="checkbox" />
                  Sachin jha
                </td>
                <td>Cheif</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="assign-task-page-grid-column" id="column3">
          <p className="underline-p">John's Uncompleted Tasks</p>
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
  );
}
