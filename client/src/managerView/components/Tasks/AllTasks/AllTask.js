import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./AllTask.css";
import axios from "axios";
import TaskRow from "./TaskRow";
export default function AllTask() {
  const [allTasks, setAllTask] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allUsersTasks, setAllUsersTasks] = useState([]);
  const [allTaskData, setAllTaskData] = useState([]);
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
    getAllUsers();
    getUsersTasks();
    showAllTasks();
  }, [allTasks, allUsers, allUsersTasks]);

  useEffect(() => {
    // showAllTasks();
  });

  // get all user
  const getAllUsers = async () => {
    await axios
      .get("http://localhost:8000/api/v1/users")
      .then((response) => {
        console.log("all users:" + JSON.stringify(response.data));
        setAllUsers(response.data);
      })
      .catch((error) => {
        console.log("error in fetching all task: " + error);
      });
  };

  //get all tasks
  const getAllTasks = async () => {
    await axios
      .get("http://localhost:8000/api/v1/tasks")
      .then((response) => {
        console.log("all task:" + JSON.stringify(response.data));
        setAllTask(response.data);
      })
      .catch((error) => {
        console.log("error in fetching all task: " + error);
      });
  };

  let showAllTasks = () => {
    let newUser = [];

    allUsersTasks.forEach((usertask) => {
      let user = allUsers.find((user) => user.user_id === usertask.user_id);

      let tasks = allTasks.find((task) => task.task_id === usertask.task_id);
      console.log("user found:" + JSON.stringify(user));
      console.log("task found:" + JSON.stringify(tasks));
      let userTasksObject = {
        user: user,
        task: tasks,
      };
      newUser.push(userTasksObject);
      console.log("userTasksObject:" + JSON.stringify(newUser));
      setAllTaskData(newUser);
    });
    console.log("allTaskData ref:" + JSON.stringify(allTaskData));
  };

  // get today users' tasks
  const getUsersTasks = async () => {
    await axios
      .get("http://localhost:8000/api/v1/usersTasksToday")
      .then((response) => {
        console.log("all user task:" + JSON.stringify(response.data));
        setAllUsersTasks(response.data);
      })
      .catch((error) => {
        console.log("error in fetching all task: " + error);
      });
  };

  return (
    <div className="all-task-page">
      <div className="all-task-page-upper-section">
        <div className="all-task-page-upper-section-button-section">
          <Link to="/task" className="link-a">
            <button>All Task</button>
          </Link>
          <Link to="/assign-task" className="link-a">
            <button>Assign Task</button>
          </Link>
          <Link to="/create-task" className="link-a">
            <button onClick={handle}>Create Task</button>
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
            {allTaskData.map((task) => (
              <TaskRow task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
