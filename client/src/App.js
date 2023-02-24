import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./employeeView/components/navbar/Navbar";
import EmployeeView from "./employeeView/EmployeeView";

import {
  getDataByUserID,
  getUserTasksIds,
  user,
  tasks,
} from "./Apis/EmployeeApis";
function App() {
  const [userId, setUserId] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [showView, setShowView] = useState(false);
  localStorage.setItem("showScreen", false);

  const getUserId = (event) => {
    const id = event.target.value;
    setUserId(id);
    console.log("userId: " + userId);
  };

  useEffect(() => {
    console.log("userId: in effert " + userId);
    getDataByUserID(userId);
    getUserTasksIds(userId);
  });

  const checkUserId = (e) => {
    e.preventDefault();
    if (user[0][0] != null) {
      setUserDetails(user[0][0]);
      console.log("in button");
      // localStorage.setItem("showScreen", 'true');
      setShowView(true);
    } else {
      console.log("Not User found");
    }
  };
  return (
    <div className="App">
      <div className="nav_bar">
        <Navbar />
      </div>
      {console.log("localstore: " + localStorage.getItem("showScreen"))}
      {!showView ? (
        <div>
          <label>User Id</label>
          <input type="text" value={userId} onChange={getUserId} />
          <div className="submit" onClick={checkUserId}>
            <h4>Submit</h4>
          </div>
        </div>
      ) : (
        <EmployeeView tasks={tasks} account={userDetails} />
      )}
    </div>
  );
}

export default App;
