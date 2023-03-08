import React, { useEffect, useState } from "react";
import "./App.css";
import ManagerView from "./managerView/ManagerView";
import Navbar from "./employeeView/components/navbar/Navbar";
import EmployeeView from "./employeeView/EmployeeView";
import AssignTask from "./managerView/components/Tasks/AssignTasks/AssignTask";
import axios from "axios";
function App() {
  const [userId, setUserId] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [userTasks, setUserTasks] = useState([]);
  const [showView, setShowView] = useState(false);
  const [psw, setPsw] = useState("");
  const [userType, setUserType] = useState("");
  const tasks = [];

  // APIS
  let getDataByUserID = async (userId) => {
    console.log("******************");
    console.log("In getDataByUserID");
    console.log("userId in localStorage:" + userId);
    await axios
      .get(`http://localhost:8000/api/v1/users/${userId}`)
      .then((response) => {
        // user.push(response.data);
        setUserDetails(response.data);
      })
      .catch((error) => {
        console.log("error in fetching user data");
        return 400;
      });
    console.log("user fetched: " + JSON.stringify(userDetails));
  };

  let getUserTasksIds = async (userId) => {
    console.log("******************");
    console.log("In getUserTasksIds");
    console.log("userId in localStorage: " + userId);
    await axios
      .get(`http://localhost:8000/api/v1/usersTasks/user/${userId}`)
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
      .get(`http://localhost:8000/api/v1/tasks/${id}`)
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

  // =============================== login =============================

  const getPassword = (e) => {
    const password = e.target.value;
    setPsw(password);
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const login = {
      user_id: userId,
      password: psw,
    };

    await axios
      .post("http://localhost:8000/api/v1/user/login", login)
      .then((result) => {
        console.log(result);
        console.log(result.data.data.type);
        setUserType(result.data.data.type);
        setUserTasks(tasks);
        checkUserId(e);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // =============================== login =============================

  useEffect(() => {
    getDataByUserID(localStorage.getItem("userId"));
    getUserTasksIds(localStorage.getItem("userId"));
  }, [showView]);

  return (
    <div className="App">
      <div className="nav_bar">
        {/* <Navbar /> */}
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

          <label>password</label>
          <input type="password" value={psw} onChange={getPassword} />
          <div className="submit" onClick={checkUserId}>
            <h4>Submit</h4>
          </div>

          <div className="logIn">
            <h4 onClick={loginUser}>Login</h4>
          </div>
        </div>
      ) : (
        // <EmployeeView tasks={userTasks} account={userDetails} />
        <ManagerView></ManagerView>
        
        // <AssignTask/>
      )}
    </div>
  );
  {
    /* {userType == "" ? (
        // render this page

        <div>
        <div>========================================= login prototype ==================================</div>
        <label>User Id</label>
        <input type="text" value={userId} onChange={getUserId} />
        
        <label>password</label>
        <input type="password" value={psw} onChange = {getPassword}/>


        <div className="logIn">
          <h4 onClick={loginUser}>Login</h4>
        </div>
      </div>

      ): userType == "Employee" ? (
        // render employee
        <EmployeeView tasks={userTasks} account={userDetails} userId = {userId}/>
      ): (
        // manager view
        <div>Manager view</div>
      )} */
  }
}

export default App;
