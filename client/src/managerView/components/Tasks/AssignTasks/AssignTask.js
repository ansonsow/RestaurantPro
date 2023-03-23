import React, { useEffect, useState, useRef } from "react";
import "./AssignTask.css";
import { Link } from "react-router-dom";
import UnAssignedTasksList from "./UnAssignedTasksList";
import EmployeeList from "./EmployeeList";
import EmployeeAssignedTask from "./EmployeeAssignedTask";
import axios from "axios";
export default function AssignTask() {
  let currentUrl = window.location.href;
  useEffect(() => {
    if (currentUrl.includes("/assign-task")) {
      document.getElementById("assign-task-btn").style.backgroundColor =
        "#FFC619";
    }
  });
  const [unAssignedTask, setUnAssignedTask] = useState([]);
  const [unAssignedTaskObjects, setunAssignedTaskObjects] = useState([]);
  const [employee, setemployee] = useState([]);
  const [employeeObject, setemployeeObject] = useState({});
  const [allTasks, setAllTask] = useState([]);
  const [allEmployee, setAllEmployee] = useState([]);
  const changeEventState = useRef({});

  // Call Apis
  useEffect(() => {
    getAllTask();
    getClockInEmployees();
  }, []);

  // get all the task
  const getAllTask = async () => {
    let allTask = [];
    await axios
      .get("http://localhost:8000/api/v1/tasks")
      .then((response) => {
        console.log("all task:" + JSON.stringify(response.data));
        response.data.forEach((task) => {
          console.log("task status: " + task.task_status);
          // if (task.task_status === false) allTask.push(task);
          if (task.task_assigned === false) allTask.push(task);
        });
        setAllTask(allTask);
      })
      .catch((error) => {
        console.log("error in fetching all task: " + error);
      });
  };

  // get all present employee
  const getClockInEmployees = async () => {
    await axios
      .get("http://localhost:8000/api/v1/attendance/true")
      .then((response) => {
        console.log("all present employees:" + JSON.stringify(response.data));
        let userIds = response.data.map((user) => user.user_id);
        console.log(response);
        userIds.forEach((id) => {
          getUserDetails(id);
        });
      })
      .catch((error) => {
        console.log("error in fetching all task: " + error);
      });
  };

  let getUserDetails = (id) => {
    axios
      .get(`http://localhost:8000/api/v1/users/${id}`)
      .then((response) => {
        console.log(
          "all present employees details:" + JSON.stringify(response.data)
        );
        setAllEmployee((pre) => [...pre, response.data]);
      })
      .catch((error) => {
        console.log("error in fetch user details: " + error);
      });
  };

  let updateUserTask = (uid, tid) => {
    let data = { task_id: tid, user_id: uid, status: true };
    axios
      .post(`${process.env.REACT_APP_SERVER}usersTasks`, data)
      .then((response) => {
        console.log("user task saved: " + JSON.stringify(response.data));
      })
      .catch((error) => console.log("error in saving user task: " + error));
  };

  let updateTaskStatus = (id) => {
    let data = { task_status: true, task_assigned: true };
    axios
      .put(`http://localhost:8000/api/v1/task/${id}`, data)
      .then((response) => {
        console.log("task status updated: " + JSON.stringify(response.data));
      })
      .catch((error) => console.log("error in saving user task: " + error));
  };

  // show data according fetch data

  useEffect(() => {
    getSelectedTasks();
    getSelectedEmployee();
  }, [unAssignedTask, employee]);

  // task selected

  const taskSelected = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setUnAssignedTask((pre) => [pre, ...id]);
      console.log("us assigned..." + unAssignedTask);
    } else {
      setUnAssignedTask((pre) => {
        return [...pre.filter((task_id) => task_id !== id)];
      });
    }
  };
  const getSelectedTasks = () => {
    setunAssignedTaskObjects([]);
    allTasks.forEach((task) => {
      if (unAssignedTask.find((id) => task.task_id == id)) {
        setunAssignedTaskObjects((pre) => [...pre, task]);
      }
    });
  };

  // employee selected

  const employeeSelected = (event) => {
    changeEventState.current = event.target.checked;
    const { id, checked } = event.target;
    if (checked) {
      event.stopPropagation();
      setemployee([id]);
    }
  };

  const getSelectedEmployee = () => {
    allEmployee.forEach((employeeDetail) => {
      if (employee.find((id) => employeeDetail.user_id == id)) {
        setemployeeObject(employeeDetail);
      }
    });
  };

  // show unselected data

  let showUnselectedData = () => {
    // save user's tasks
    let uid = employeeObject.user_id;
    console.log("user id to update: " + uid);

    // update user task table with status true
    let task_id = unAssignedTaskObjects.map((task) => task.task_id);
    console.log("user id to update: " + JSON.stringify(task_id));
    task_id.forEach((id) => {
      updateUserTask(uid, id);
    });

    // update task table with status true
    unAssignedTaskObjects.forEach((task) => {
      console.log("update task status for id: " + task._id);
      updateTaskStatus(task._id);
    });

    // remove selected employee
    let newEmployees = allEmployee.filter(
      (employee) => employee !== employeeObject
    );
    setAllEmployee(newEmployees);
    changeEventState.current = false;
    setemployeeObject({});

    // remove seleted tasks
    let newData = [];
    allTasks.forEach((task) => {
      if (!unAssignedTaskObjects.includes(task)) {
        newData.push(task);
      }
    });
    setAllTask(newData);
  };

  return (
    <div className="assign-task-page">
      <div className="assign-task-page-upper-section">
        <div className="assign-task-page-upper-section-button-section">
          <Link to="/task" className="link-a">
            <button>All Task</button>
          </Link>

          <Link to="/assign-task" className="link-a">
            <button id="assign-task-btn">Assign Task</button>
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
              {console.log("again run")}
              {allTasks.map((task) => (
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
              <th>Name</th>
              <th>Title</th>
            </thead>
            <tbody>
              {allEmployee.map((employee) => (
                <EmployeeList
                  unassignedTask={employee}
                  click={employeeSelected}
                />
              ))}
            </tbody>
          </table>
        </div>
        {Object.keys(employeeObject).length > 0 &&
          Object.keys(unAssignedTaskObjects).length > 0 && (
            <div className="assign-task-page-grid-column" id="column3">
              <p className="underline-p">{`${employeeObject.name} Uncompleted Tasks`}</p>
              <table className="uncompleted-task-table">
                <thead>
                  <th>Task Name</th>
                  <th>Due Date</th>
                  <th>Urgency</th>
                </thead>
                <tbody>
                  {unAssignedTaskObjects.map((task) => (
                    <EmployeeAssignedTask task={task} />
                  ))}
                </tbody>
              </table>
              <button onClick={showUnselectedData}>Next</button>
            </div>
          )}
      </div>
    </div>
  );
}
