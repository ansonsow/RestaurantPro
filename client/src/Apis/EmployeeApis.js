import axios from "axios";
const user = [];
const tasks = [];

let getDataByUserID = async (userId) => {
  await axios
    .get(`http://localhost:8000/api/v1/users/${userId}`)
    .then((response) => {
      user.push(response.data);
      console.log("In api user:" + JSON.parse(user));
    })
    .catch((error) => {
      console.log("error in fetching user data");
      return 400;
    });
};

let getUserTasksIds = async (userId) => {
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
  console.log("In getUserTasksIds");

  await axios
    .get(`http://localhost:8000/api/v1/tasks/${id}`)
    .then((response) => {
      tasks.push(response.data[0]);
      console.log("tasks:  " + JSON.stringify(tasks));
    })
    .catch((error) => {
      console.log("error in fetching the task ids: " + error);
    });
};

export { getDataByUserID, getUserTasksIds, user, tasks };
