import React, { useEffect, useRef, useState } from "react";
import "./CreateTask.css";
import axios from "axios";
import { Link } from "react-router-dom";
import AllTask from "../AllTasks/AllTask";
import penIcon from "../../../../icons/pen.svg"
import calIcon from "../../../../icons/calendar_date.svg"
import downIcon from "../../../../icons/down.svg"

import { Popup, PopupFunction } from "../../../../employeeView/components/popup/Popup";

export default function CreateTask() {
  // const closeDialogue = () => {
  //   document.getElementById("dialogueBox").style.display = "flex";
  // };

  const [users, setUsers] = useState([]);
  const userNames = useRef([]);
  const userFields = useRef([]);
  const [changesSaved, setChangesSaved] = useState(false);
  useEffect(() => {
    getAllUsers();
    saveTasks();
  }, [userFields]);
  useEffect(() => {
    saveTasks();
  }, [userFields]);

  // get all users
  const getAllUsers = async () => {
    await axios
      // .get("http://localhost:8000/api/v1/users")
      .get(`${process.env.REACT_APP_SERVER}users`)

      // ${process.env.REACT_APP_SERVER}
      .then((response) => {
        console.log("all user:" + JSON.stringify(response.data));
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("error in fetching all task: " + error);
      });
  };

  // save new task

  const saveTasks = async () => {

    let idPrefix = Math.floor(Math.random() * 9) + 1;
    let id = Math.floor(Math.random() * 100) + 1;
    let newTask = {
      task_id: `T${idPrefix}${id}`,
      task_name: userFields.name,
      task_desc: userFields.description,
      due_date: userFields.dueDate,
      priority: userFields.urgencyLevel,
      task_status: false,
      task_assigned: false,
    };
    if (userFields.employeeName) {
      console.log("new task is assigned to: " + userFields.employeeName);
      newTask.task_status = true;
      newTask.task_assigned = true;

    }
    await axios
      // .post("http://localhost:8000/api/v1/tasks", newTask)
      .post(`${process.env.REACT_APP_SERVER}tasks`, newTask)

      .then((response) => {
        console.log("new task saved:" + JSON.stringify(response.data));
        saveUserTask(newTask);

      })
      .catch((error) => {
        console.log("error in saving new task: " + error);
      });
  };

  // save user's task
  const saveUserTask = (newTask) => {
    let userTask = {
      task_id: newTask.task_id,
      user_id: userFields.employeeName,
      status: true,
    };
    console.log("user task:" + JSON.stringify(userTask));
    axios
      // .post(`http://localhost:8000/api/v1/usersTasks`, userTask)
      .post(`${process.env.REACT_APP_SERVER}usersTasks`, userTask)

      // ${process.env.REACT_APP_SERVER}
      .then((response) => {
        console.log("new user task saved:" + JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log("error in saving new user task: " + error);
      });
  };

  let getAllUserName = () => {
    console.log("user names:" + JSON.stringify(userNames));
    userNames.constant = users.map((user) => {
      let { user_id, name } = user;
      return { user_id, name };
    });
    console.log("ids" + JSON.stringify(userNames.constant));
  };
  const getname = (event) => {
    let name = event.target.value;
    userFields.name = name;
    console.log("name: " + JSON.stringify(userFields));
  };

  const getDueDate = (event) => {
    userFields.dueDate = event.target.value;
    console.log("name: " + JSON.stringify(userFields));
  };

  const getUrgencyLevel = (event) => {
    userFields.urgencyLevel = event.target.value;
    console.log("name: " + JSON.stringify(userFields));
  };

  const getEmployeeName = (event) => {
    userFields.employeeName = event.target.value;
    console.log("name: " + JSON.stringify(userFields));
  };

  const getDescription = (event) => {
    userFields.description = event.target.value;
    console.log("name: " + JSON.stringify(userFields));
  };

  async function grabSVG(url){
    return fetch(url)
    .then(response => response.text())
    .then(result => {
      return result;
    });
  }

  let penIconSVG;
  let calIconSVG;
  let downIconSVG;

  grabSVG(penIcon).then(eyqxf => {
    penIconSVG = eyqxf;
    document.querySelectorAll(".pen_svg").forEach(thdkv => {
      thdkv.innerHTML = penIconSVG
    })        
  })

  grabSVG(calIcon).then(eyqxf => {
    calIconSVG = eyqxf;
    document.querySelectorAll(".cal_svg").forEach(thdkv => {
      thdkv.innerHTML = calIconSVG
    })        
  })

  grabSVG(downIcon).then(eyqxf => {
    downIconSVG = eyqxf;
    document.querySelectorAll(".down_svg").forEach(thdkv => {
      thdkv.innerHTML = downIconSVG
    })        
  })

  // discard changes
  const clearChanges = () => {
    let sels = ["#createTaskName", "#createTaskDueDate", "createTaskUrgency", "#createTaskAssignTo", "#createTaskRestaurant", "#createTaskDesc"];
    sels.forEach(sel => {
      document.querySelectorAll(sel).forEach(se => {
        se.value = "";
      })
    })
  }

  return (
    <>

    <Popup/>

    <div className="create-task-page">
      {getAllUserName()}
      <div className="tab-buttons-container">
        <Link to="/tasks">
          <button className="tab-buttons">All Tasks</button>
        </Link>

        <Link to="/assign-task">
          <button className="tab-buttons">Assign Task</button>
        </Link>

        <Link to="/create-task">
          <button className="tab-buttons active">Create Task</button>
        </Link>

        <Link to="/daily-attendance">
          <button className="tab-buttons">Daily Attendance</button>
        </Link>
      </div>

      {/*------------------------------------------*/}

      <div className="create_task_main">

        <form>
          <fieldset>
            <legend>
              <h2>Fill the form to create a new task:</h2>
            </legend>

            <div className="set_grid">

              <div className="set">
                <label for="createTaskName">Task Name</label>
                <div className="input_set_wrap">
                  <input id="createTaskName" name="createTaskName" type="text" placeholder="Cleaning the kitchen" onChange={getname}/>
                  <div className="form_svg pen_svg"></div>
                </div>
              </div>

              {/*------------------------*/}

              <div className="set">
                <label for="createTaskDueDate">Due date</label>
                <div className="input_set_wrap">
                  <input id="createTaskDueDate" name="createTaskDueDate" type="date" placeholder="DD / MM / YYYY" onChange={getDueDate}/>
                  <div className="form_svg cal_svg"></div>
                </div>
              </div>

              {/*------------------------*/}

              <div className="set">
                <label for="createTaskUrgency">Urgency Level</label>
                <div className="input_set_wrap">
                  <select id="createTaskUrgency" name="createTaskUrgency" onChange={getUrgencyLevel}>
                    <option value="0" selected>Low</option>
                    <option value="1">High</option>
                  </select>
                  <div className="form_svg down_svg"></div>
                </div>
              </div>

              {/*------------------------*/}

              <div className="set">
                <label for="createTaskAssignTo">Assign To</label>
                <div className="input_set_wrap">
                  <select id="createTaskAssignTo" name="createTaskAssignTo" onChange={getEmployeeName}>
                    {userNames.constant.map((user, i) => (
                      i === 0 ?
                      <option value={user.user_id} selected>{user.name}</option>
                      : <option value={user.user_id}>{user.name}</option>
                    ))}
                  </select>
                  <div className="form_svg down_svg"></div>
                </div>
              </div>

              {/*------------------------*/}

              <div className="set">
                <label for="createTaskRestaurant">Restaurant Name</label>
                <div className="input_set_wrap">
                  <input id="createTaskRestaurant" name="createTaskRestaurant" type="text" defaultValue="East is East"/>
                  <div className="form_svg pen_svg"></div>
                </div>
              </div>
            </div>{/* end .set_grid */}

            {/*------------------------*/}

            <div className="set textarea">
              <label for="createTaskDesc">Description</label>
              <div className="input_set_wrap">
                <textarea id="createTaskDesc" name="createTaskDesc" onChange={getDescription}/>
                <div className="form_svg pen_svg"></div>
              </div>
            </div>

            {/*------------------------*/}

            <div className="set submit_task_buttons">
              <button type="button" onClick={(e) => { e.preventDefault(); clearChanges(); }} className="hollow">Discard</button>

              {/* <Link to="/tasks"> */}
                {/* <button type="submit" onClick={(e) => {e.preventDefault(); saveTasks() }} className="solid">Save 
                Changes</button> */}
                <button type="submit" onClick={(e) => {e.preventDefault(); saveTasks(); PopupFunction("Successfully created new task!", "okay:/tasks")(e);}} className="solid">Save Changes</button>
                
              {/* </Link> */}
            </div>

          </fieldset>
        </form>{/* end <form> */}

        
      </div>{/* end .create_task_main */}

      {/* <div className="save-change" id="dialogueBox">
        <div className="save-change-dialogue">
          <p>New Task Created</p>
          <Link to="/tasks">
            <button onClick={closeDialogue}>Okey</button>
          </Link>
        </div>
      </div> */}
    </div>{/* end .create-task-page */}
    </>
  );
}
