import React, { useEffect, useState, useRef } from "react";
import "./AssignTask.css";
import { Link } from "react-router-dom";
import UnAssignedTasksList from "./UnAssignedTasksList";
import EmployeeList from "./EmployeeList";
import EmployeeAssignedTask from "./EmployeeAssignedTask";
import Popup from "../../popup/Popup";

import chevdown from "../../../../icons/down.svg"
import filterIcon from "../../../../icons/filter.svg"

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

  /*---- HIGHLIGHT CURRENT TASK ROW ----*/
  setTimeout(() => {
    document.querySelectorAll(".assign_col_1 .td:first-child").forEach(txcb => {
      txcb.addEventListener("click", () => {
        let tr = txcb.parentNode;
        if(tr.matches(".tr")){
          if(tr.matches(".tr_highlight")){
            tr.classList.remove("tr_highlight")
          } else {
            tr.classList.add("tr_highlight")
          }        
        }
      })
    })
  },1000)
  

  setTimeout(() => {
    document.querySelectorAll(".assign_col_2 .td:first-child").forEach(txcb => {
      txcb.addEventListener("click", () => {
        let tr = txcb.parentNode;
        if(tr.matches(".tr")){
          if(!tr.matches(".tr_highlight")){
            tr.parentNode.querySelectorAll(".tr").forEach(waa => {
              waa.classList.remove("tr_highlight")
            })
            tr.classList.add("tr_highlight")
          }
        }
      })
    })
  },1000);



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

  let showUnselectedData = (e) => {
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

  let chevdownSVG;
  let filterIconSVG;

  async function grabSVG(url){
    return fetch(url)
    .then(response => response.text())
    .then(result => {
      return result;
    });
  }

  grabSVG(chevdown).then(eyqxf => {
    chevdownSVG = eyqxf;
    document.querySelectorAll(".chev_down_svg").forEach(thdkv => {
      thdkv.innerHTML = chevdownSVG
    })        
  })

  grabSVG(filterIcon).then(eyqxf => {
    filterIconSVG = eyqxf;
    document.querySelectorAll(".filter_svg").forEach(thdkv => {
      thdkv.innerHTML = filterIconSVG
    })        
  })



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

      <div className="assign_table">
        <div className="assign_col assign_col_1">
          <div className="h3_holder">
            <h3>Unassigned Tasks</h3>
          </div>

          <div className="thead">
            <div col-name="task name">
              <div>Task Name</div>
            </div>

            <div col-name="due date">
              <div>Due Date</div>
            </div>

            <div col-name="urgency">
              <div className="chev_down_svg"></div>
              <div>Urgency</div>
            </div>
          </div>{/* end <thead> */}

          <div className="tbody">
            {console.log("all task run")}
            {loadingTask ? (
              <div className="loading-icon">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
              </div>
            ) : (
              allTasks.map((task) => (
                <UnAssignedTasksList
                  unassignedTask={task}
                  click={taskSelected}
                />
              ))
            )}
          </div>{/* end <tbody> */}
          
          
        </div>{/* end column 1 */}

        {/*-----------------*/}

        <div className="assign_col assign_col_2">
          <div className="h3_holder">
            <h3>Employee</h3>
          </div>

          <div className="thead">
            <div col-name="employee name">
              <div className="filter_svg"></div>
              <div>Name</div>
            </div>

            <div col-name="employee role">
              <div className="filter_svg"></div>
              <div>Title</div>
            </div>
          </div>{/* end <thead> */}

          <div className="tbody">
            {console.log("loadingTask" + loadingTask)}
            {loadingEmployee ? (
              <div className="loading-icon">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
              </div>
            ) : (
              allEmployee.map((employee) => (
                <EmployeeList
                  unassignedTask={employee}
                  click={employeeSelected}
                />
              ))
            )}
          </div>{/* end <tbody> */}
        </div>{/* end column 2 */}

        {Object.keys(employeeObject).length > 0 &&
          Object.keys(unAssignedTaskObjects).length > 0 && (
            <div className="assign_col assign_col_3">
              <div className="h3_holder">
                <h3>{`${employeeObject.name}'s Uncompleted Tasks`}</h3>
              </div>

              <div className="thead">
                {console.log("task assign run")}
                <div col-name="task name">
                  <div>Task Name</div>
                </div>

                <div col-name="due date">
                  <div>Due Date</div>
                </div>

                <div col-name="urgency">
                  <div className="chev_down_svg"></div>
                  <div>Urgency</div>
                </div>
              </div>{/* end <thead> */}

              <div className="tbody">
                {unAssignedTaskObjects.map((task) => (
                  <EmployeeAssignedTask task={task} />
                ))}
              </div>

              {/* <button onClick={showUnselectedData}>Next</button> */}
              {/* onClick={(e) => {PopupFunction("Changes changed successfully.", "okay:/account")(e); saveChanges()  }} */}
              <button type="button" className="assign_btn"
                onClick={(e) => {
                  showUnselectedData();
                }}
              >
                Next
              </button>
            </div>// end column 3
          )}
          {console.log(popup)}
        {popup && (
          <Popup
            msg={"Successfully assigned"}
            whichButtons={"okay:/tasks"}
            showPopup={showPopup}
          />
        )}
      </div>{/* end table */}
      {/*  */}
    </div>
  );
}
