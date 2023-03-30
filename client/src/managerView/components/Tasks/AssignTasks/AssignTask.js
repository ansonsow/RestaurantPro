import React, { useEffect, useState, useRef } from "react";
import "./AssignTask.css";
import { Link } from "react-router-dom";
import UnAssignedTasksList from "./UnAssignedTasksList";
import EmployeeList from "./EmployeeList";
import EmployeeAssignedTask from "./EmployeeAssignedTask";
import Popup from "../../popup/Popup";
import axios from "axios";
export default function AssignTask() {
  // let currentUrl = window.location.href;
  // useEffect(() => {
  //   if (currentUrl.includes("/assign-task")) {
  //     document.getElementById("assign-task-btn").style.backgroundColor =
  //       "#FFC619";
  //   }
  // });
  const [unAssignedTask, setUnAssignedTask] = useState([]);
  const [unAssignedTaskObjects, setunAssignedTaskObjects] = useState([]);
  const [employee, setemployee] = useState([]);
  const [employeeObject, setemployeeObject] = useState({});
  const [allTasks, setAllTask] = useState([]);
  const [allEmployee, setAllEmployee] = useState([]);
  const changeEventState = useRef({});
  const [loadingTask, setLoadingTasks] = useState(false);
  const [loadingEmployee, setLoadingEmployee] = useState(false);
  const [popup, showPopup] = useState(false);

  // Call Apis
  useEffect(() => {
    getAllTask();
    getClockInEmployees();
  }, []);

  // get all the task
  const getAllTask = async () => {
    let allTask = [];
    setLoadingTasks(true);
    await axios
      // .get("http://localhost:8000/api/v1/tasks")
      .get(`${process.env.REACT_APP_SERVER}tasks`)

      // ${process.env.REACT_APP_SERVER}
      .then((response) => {
        console.log("all task:" + JSON.stringify(response.data));
        response.data.forEach((task) => {
          console.log("task status: " + task.task_status);
          // if (task.task_status === false) allTask.push(task);
          if (task.task_assigned === false) allTask.push(task);
          setLoadingTasks(false);
        });
        setAllTask(allTask);
      })
      .catch((error) => {
        console.log("error in fetching all task: " + error);
      });
  };

  // get all present employee
  const getClockInEmployees = async () => {
    setLoadingEmployee(true);
    console.log("get clock in");
    await axios
      // .get("http://localhost:8000/api/v1/attendance/true")
      .get(`${process.env.REACT_APP_SERVER}attendance/true`)

      .then((response) => {
        console.log("all present employees:" + JSON.stringify(response.data));
        let userIds = response.data.map((user) => user.user_id);
        console.log(response);
        userIds.forEach((id) => {
          getUserDetails(id);
        });
        setLoadingEmployee(false);
      })
      .catch((error) => {
        console.log("error in fetching all task: " + error);
      });
  };

  let getUserDetails = (id) => {
    axios
      // .get(`http://localhost:8000/api/v1/users/${id}`)
      .get(`${process.env.REACT_APP_SERVER}users/${id}`)

      // ${process.env.REACT_APP_SERVER}
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
      // .post(`http://localhost:8000/api/v1/usersTasks`, data)
      .post(`${process.env.REACT_APP_SERVER}usersTasks`, data)

      // ${process.env.REACT_APP_SERVER}
      .then((response) => {
        console.log("user task saved: " + JSON.stringify(response.data));
      })
      .catch((error) => console.log("error in saving user task: " + error));

    // axios.put(`${process.env.REACT_APP_SERVER}tasks/updateAssigned/${tid}`.then((result)=>{
    //   console.log(result);
    // }).catch((err)=>{
    //   console.log(err);
    // }))
  };

  let updateTaskStatus = (id) => {
    // due_date

    let dueDate = new Date();
    // default to 3 hours after now
    dueDate.setHours(dueDate.getHours() + 3);

    let data = { task_status: true, task_assigned: true, due_date: dueDate };
    axios
      // .put(`http://localhost:8000/api/v1/task/${id}`, data)
      .put(`${process.env.REACT_APP_SERVER}task/${id}`, data)

      // ${process.env.REACT_APP_SERVER}
      .then((response) => {
        console.log("task status updated: " + JSON.stringify(response.data));
      })
      .catch((error) => console.log("error in saving user task: " + error));

    axios
      .put(`${process.env.REACT_APP_SERVER}tasks/updateAssigned/${id}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
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
      setUnAssignedTask((pre) => [...pre, id]);
    } else {
      setUnAssignedTask((pre) => {
        return [...pre.filter((task_id) => task_id !== id)];
      });
    }
  };
  const getSelectedTasks = () => {
    setunAssignedTaskObjects([]);
    console.log("un assigned..." + unAssignedTask);
    allTasks.forEach((task) => {
      if (unAssignedTask.find((id) => task.task_id == id)) {
        setunAssignedTaskObjects((pre) => [...pre, task]);
      }
    });
    console.log("unAssignedTaskObjects: " + unAssignedTaskObjects);
  };

  // employee selected

  const employeeSelected = (event) => {
    changeEventState.current = event.target.checked;
    const { id, checked } = event.target;
    console.log("employee id" + id);
    if (checked) {
      console.log("employee checked");
      // event.stopPropagation();
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
    showPopup(true);
  };

  return (
    <div className="assign-task-page">
      <div className="tab-buttons-container">
        <Link to="/tasks">
          <button className="tab-buttons">All Tasks</button>
        </Link>
        
        <button className="tab-buttons active">Assign Task</button>

        <Link to="/create-task">
          <button className="tab-buttons">Create Task</button>
        </Link>

        <Link to="/daily-attendance">
          <button className="tab-buttons">Daily Attendance</button>
        </Link>
      </div>

      <div className="assign-task-page-lower-section">
        <div className="assign-task-page-grid-column" id="column1">
          <h3 className="underline-p">Unassigned Tasks</h3>
          <table className="unassigned-task-table">
            <thead>
              <th>Task Name</th>
              <th>Due Date</th>
              <th>Urgency</th>
            </thead>
            <tbody>
              {console.log("all task run")}
              {loadingTask ? (
                <div class="loading-icon">
                  <div class="loading-dot"></div>
                  <div class="loading-dot"></div>
                  <div class="loading-dot"></div>
                </div>
              ) : (
                allTasks.map((task) => (
                  <UnAssignedTasksList
                    unassignedTask={task}
                    click={taskSelected}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="assign-task-page-grid-column" id="column2">
          <h3 className="underline-p">Assign to an Employee:</h3>
          <table className="employee-table">
            <thead>
              <th>Name</th>
              <th>Title</th>
            </thead>
            <tbody>
              {console.log("loadingTask" + loadingTask)}
              {loadingEmployee ? (
                <div class="loading-icon">
                  <div class="loading-dot"></div>
                  <div class="loading-dot"></div>
                  <div class="loading-dot"></div>
                </div>
              ) : (
                allEmployee.map((employee) => (
                  <EmployeeList
                    unassignedTask={employee}
                    click={employeeSelected}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
        {Object.keys(employeeObject).length > 0 &&
          Object.keys(unAssignedTaskObjects).length > 0 && (
            <div className="assign-task-page-grid-column" id="column3">
              <p className="underline-p">{`${employeeObject.name} Uncompleted Tasks`}</p>
              <table className="uncompleted-task-table">
                <thead>
                  {console.log("task assign run")}
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
              {/* <button onClick={showUnselectedData}>Next</button> */}
              {/* onClick={(e) => {PopupFunction("Changes changed successfully.", "okay:/account")(e); saveChanges()  }} */}
              <button
                onClick={(e) => {
                  showUnselectedData();
                }}
              >
                Next
              </button>
            </div>
          )}
          {console.log(popup)}
        {popup && (
          <Popup
            msg={"Successfully assigned"}
            whichButtons={"okay:/tasks"}
            showPopup={showPopup}
          />
        )}
      </div>
    </div>
  );
}
