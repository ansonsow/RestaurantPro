import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./AllTask.css";
import axios from "axios";
import TaskRow from "./TaskRow";
export default function AllTask() {
  const [allTasks, setAllTask] = useState([]);
  const [wat, setWat] = useState(false);

  const [allUsers, setAllUsers] = useState([]);
  const [allUsersTasks, setAllUsersTasks] = useState([]);
  const [allTaskData, setAllTaskData] = useState([]);
  const [loadingEmployeeTasks, setLoadingEmployeeTasks] = useState(false);
  const [loadingAllTask, setLoadingAllTask] = useState(true);
  const [load, setLoad] = useState(false);

console.log(allTasks);
console.log(allUsersTasks);








  const handle = () => {
    console.log("start");
  };

  let data = [
    { user_id: "U235", task_id: "T20" },
    { user_id: "U123", task_id: "T14" },
  ];

  useEffect(() => {
    console.log("In All Task");
    getAllTasks();

  }, []);
  // console.log(allTasks);
  // console.log(allTaskData);
  // console.log(allUsersTasks);


  useEffect(() => {
    getAllUsers();
    getUsersTasks();
    showAllTasks();

  }, [allUsersTasks.length, allUsers.length]);

  useEffect(() => {
    // showAllTasks();
  });



  // get all user
  const getAllUsers = async () => {
    await axios
      .get(process.env.REACT_APP_SERVER + "users")
      
      .then((response) => {
        // console.log("all users:" + JSON.stringify(response.data));
        setAllUsers(response.data);
      })
      .catch((error) => {
        console.log("error in fetching all task: " + error);
      });
  };

  //get all tasks
  const getAllTasks = async () => {
    setLoadingAllTask(true);
    await axios
      // .get("http://localhost:8000/api/v1/tasks")
      .get(`${process.env.REACT_APP_SERVER}tasks`)

      // ${process.env.REACT_APP_SERVER}
      .then((response) => {
        // console.log("all task:" + JSON.stringify(response.data));
        setAllTask(response.data);
        setLoadingAllTask(false);

      })
      .catch((error) => {
        console.log("error in fetching all task: " + error);
      });

    await axios
      // .get("http://localhost:8000/api/v1/usersTasks")
      .get(`${process.env.REACT_APP_SERVER}usersTasks`)

      // ${process.env.REACT_APP_SERVER}
      .then((response) => {
        // console.log("all user task:" + JSON.stringify(response.data));
        setAllUsersTasks(response.data);
        setLoadingEmployeeTasks(false);
      })
      .catch((error) => {
        console.log("error in fetching all task: " + error);
      });
    await axios
      .get(process.env.REACT_APP_SERVER + "users")
      
      .then((response) => {
        // console.log("all users:" + JSON.stringify(response.data));
        setAllUsers(response.data);
      })
      .catch((error) => {
        console.log("error in fetching all task: " + error);
      });
  };

  let showAllTasks = () => {
    let newUser = [];
    // console.log("allUsersTasks" + JSON.stringify(allUsersTasks));
    console.log("wat");
    console.log(allUsersTasks);
    allUsersTasks.forEach((usertask) => {
      console.log("wtf");
      let user = allUsers.find((user) => user.user_id === usertask.user_id);

      let tasks = allTasks.find((task) => task.task_id === usertask.task_id);
      // console.log("user found:" + JSON.stringify(user));
      // console.log("task found:" + JSON.stringify(tasks));
      let userTasksObject = {
        user: user,
        task: tasks,
      };
      newUser.push(userTasksObject);
      // console.log(newUser);
      // console.log("userTasksObject:" + JSON.stringify(newUser));
      setAllTaskData(newUser);
      setTimeout(() => {
        setLoad(true)
      }, 1500);
    });
    // console.log("allTaskData ref:" + JSON.stringify(allTaskData));
  };

  // get today users' tasks
  const getUsersTasks = async () => {
    setLoadingEmployeeTasks(true);
    await axios
      // .get("http://localhost:8000/api/v1/usersTasks")
      .get(`${process.env.REACT_APP_SERVER}usersTasks`)

      // ${process.env.REACT_APP_SERVER}
      .then((response) => {
        // console.log("all user task:" + JSON.stringify(response.data));
        setAllUsersTasks(response.data);
        setLoadingEmployeeTasks(false);
      })
      .catch((error) => {
        console.log("error in fetching all task: " + error);
      });
  };

  let currentUrl = window.location.href;
  useEffect(() => {
    if(currentUrl.includes("/tasks") ){
      document.getElementById("all-task-btn").style.backgroundColor = "#FFC619"
    }
  });
  return (
    <div className="all-task-page">

      {/* <div class="loading-icon">
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
      </div> */}


      <div className="all-task-page-upper-section">
        <div className="all-task-page-upper-section-button-section">
          <Link to="/tasks" className="link-a">
            <button id="all-task-btn">All Task</button>
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
        <div className="all-task-page-upper-section-search-section">
          <input type="text" className="search-box" placeholder="Search Here" />
        </div>
      </div>
      <div className="all-task-page-lower-section">
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Urgency Level</th>
              <th>Assign To</th>
            </tr>
          </thead>
          <tbody>

            {load
              ? 
              allTaskData.map((task) => <TaskRow task={task} />)
              : 
              <div className="loading-icon">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
              </div>
              }

          </tbody>
        </table>
      </div>
    </div>
  );
}
