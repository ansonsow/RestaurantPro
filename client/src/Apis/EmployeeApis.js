import axios from "axios";
import React, { useEffect } from "react";
// function EmployeeApis() {
// let userId = localStorage.getItem("userId");
// console.log("In Api local value:" + localStorage.getItem("userId"));
const user = [];
const tasks = [];


let getDataByUserID = async (userId) => {
  console.log("******************");
  console.log("In getDataByUserID");
  console.log("userId:" + userId);
  await axios
    .get(`http://localhost:8000/api/v1/users/${userId}`)
    .then((response) => {
      user.push(response.data);
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
  // console.log("id : " + userId);
  console.log("userId in local: " + userId);
  await axios
    .get(`http://localhost:8000/api/v1/usersTasks/user/${userId}`)
    .then((response) => {
      let ids = response.data.map((item) => item.task_id);
      ids.forEach((id) => {
        getUserTasks(id);
      });
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
    })
    .catch((error) => {
      console.log("error in fetching the task ids: " + error);
    });
  console.log("task fetched: " + JSON.stringify(tasks));
};

// return <div></div>;
// }

export { getDataByUserID, getUserTasksIds,user,tasks };
