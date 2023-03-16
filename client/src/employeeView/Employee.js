import React, { useEffect, useState } from "react";
import "../App.css";
import Navbar from "../employeeView/components/navbar/Navbar";
import EmployeeView from "../employeeView/EmployeeView";
import axios from "axios";

// import EmployeeApis from "./Apis/EmployeeApis";
const user = [];
const tasks = [];
function Employee() {
  const [userId, setUserId] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [userTasks, setUserTasks] = useState([]);
  const [showView, setShowView] = useState(false);

  // APIS
  let getDataByUserID = async (userId) => {
    console.log("******************");
    console.log("In getDataByUserID");
    console.log("userId in localStorage:" + userId);
    await axios
      .get(`${process.env.REACT_APP_SERVER}users/${userId}`)
      .then((response) => {
        // user.push(response.data);
        setUserDetails(response.data);
      })
      .catch((error) => {
        console.log("error in fetching user data");
        return 400;
      });
    console.log("user fetched: " + JSON.stringify(user));
  };

  let getUserTasksIds = async (userId) => {
    console.log("******************");
    console.log("In getUserTasksIds");
    console.log("userId in localStorage: " + userId);
    await axios
      .get(`${process.env.REACT_APP_SERVER}usersTasks/user/${userId}`)
      .then((response) => {
        let ids = response.data.map((item) => item.task_id);
        console.log("tasks ids of user " + JSON.stringify(ids));
        ids.forEach((id) => {
          console.log("task Api called id:  " + id);
          getUserTasks(id);
        });
        setUserTasks(tasks);
      })
      .catch((error) => {
        console.log("error in fetching the task ids: " + error);
      });
  };

  let getUserTasks = async (id) => {
    console.log("In getUserTasks");

    await axios
      .get(`${process.env.REACT_APP_SERVER}tasks/${id}`)
      .then((response) => {
        tasks.push(response.data[0]);
        setUserTasks([...tasks]);
      })
      .catch((error) => {
        console.log("error in fetching the task ids: " + error);
      });
    console.log("task fetched in array: " + JSON.stringify(tasks));
    console.log("userTasks updated with new taks " + JSON.stringify(userTasks));
  };

  const getUserId = (event) => {
    const id = event.target.value;
    setUserId(id);
    console.log("userId in event: " + userId);
  };

  const checkUserId = (e) => {
    e.preventDefault();
    console.log("userId in click: " + userId);
    localStorage.setItem("userId", userId);
    localStorage.setItem("showScreen", "true");
    setShowView(true);
  };

  useEffect(() => {
    getDataByUserID(localStorage.getItem("userId"));
    getUserTasksIds(localStorage.getItem("userId"));
  }, [showView]);
  return (
    <div className="App">
      <div className="nav_bar">
        <Navbar />
      </div>
      {console.log(
        "localStorage return : " + localStorage.getItem("showScreen")
      )}
      {console.log("tasks to send : " + JSON.stringify(userTasks))}
      {console.log("user to send : " + JSON.stringify(userDetails))}

      {localStorage.getItem("showScreen") === null ? (
        <div>
          <label>User Id</label>
          <input type="text" value={userId} onChange={getUserId} />
          <div className="submit" onClick={checkUserId}>
            <h4>Submit</h4>
          </div>
        </div>
      ) : (
        <EmployeeView tasks={userTasks} account={userDetails} />
      )}
    </div>
  );
}

export default Employee;
