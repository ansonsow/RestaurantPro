import React, { useEffect, useRef, useState } from "react";
import "./CreateTask.css";
import axios from "axios";
import { Link } from "react-router-dom";
import AllTask from "../AllTasks/AllTask";
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
      .get("http://localhost:8000/api/v1/users")
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

      saveUserTask(newTask);
    }
    await axios
      .post("http://localhost:8000/api/v1/tasks", newTask)
      .then((response) => {
        console.log("new task saved:" + JSON.stringify(response.data));
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
      .post("http://localhost:8000/api/v1/usersTasks", userTask)
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

  return (
    <div className="create-task-page">
      {getAllUserName()}
      <div className="create-task-page-upper-section">
        <div className="create-task-page-upper-section-button-section">
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
      <div className="create-task-page-lower-section">
        <h2>Fill the form to create new task</h2>
        <div className="create-task-page-input-section">
          <div className="item">
            <p>Task Name</p>
            <input
              type="text"
              placeholder="Task Name"
              className="input-box"
              onChange={getname}
            />
          </div>
          <div className="item">
            <p>Due Date</p>
            <input
              type="date"
              placeholder="Due Date"
              className="input-box"
              onChange={getDueDate}
            />
          </div>
          <div className="item">
            <p>Urgency Level</p>
            <select
              name="level"
              id="level"
              className="input-box"
              onChange={getUrgencyLevel}
            >
              <option value=""></option>
              <option value="0">Low</option>
              <option value="1">High</option>
            </select>
          </div>
          <div className="item">
            <p>Assign To</p>
            <select
              name="assign"
              id="assign"
              className="input-box"
              onChange={getEmployeeName}
            >
              <option value=""></option>
              {userNames.constant.map((user) => (
                <option value={user.user_id}>{user.name}</option>
              ))}
            </select>
          </div>
          <div className="item">
            <p>Restaurant Name</p>
            <input
              type="text"
              defaultValue="East is East"
              className="input-box"
            />
          </div>
        </div>

        <div className="lower-input-section">
          <p>Task Description</p>
          <textarea name="description" onChange={getDescription}></textarea>
        </div>
      </div>
      <div className="create-task-button-section">
        <button>Discard</button>
        <Link to="/task">
          <button onClick={saveTasks}>Save Changes</button>
        </Link>
      </div>
      {/* <div className="save-change" id="dialogueBox">
        <div className="save-change-dialogue">
          <p>New Task Created</p>
          <Link to="/task">
            <button onClick={closeDialogue}>Okey</button>
          </Link>
        </div>
      </div> */}
    </div>
  );
}
