import React, { useEffect, useState } from "react";
import "./TaskBoard.css";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";
import axios from "axios";
function TasksBoard(props) {
  const [showBoard, setShowBoard] = useState(true);
  const [itemId, setItemId] = useState(null);
  const [tasks, getTasks] = useState(props.tasks);
  const [taskIds, setTaskIds] = useState([]);

  useEffect(() => {
    getData();
    // getDataByUserID();
    // getUserTasksIds();
  }, []);
  /*-------------------------------*/
  //get data by userID
  let uid = "T123";
  let getDataByUserID = async () => {
    console.log("In getDataByUserID");
    await axios
      .get(`http://localhost:8000/api/v1/users/${uid}`)
      .then((response) => {
        console.log("User ID Data: " + JSON.stringify(response));
      })
      .catch((error) => {
        console.log("error in fetching user data");
      });
  };
  let taskResponse = [];

  let getUserTasksIds = async () => {
    console.log("In getUserTasksIds");

    await axios
      .get(`http://localhost:8000/api/v1/usersTasks/user/${uid}`)
      .then((response) => {
        console.log("task ids: " + JSON.stringify(response));
        let ids = response.data.map((item) => item.task_id);
        console.log("ids: " + ids);
        ids.forEach((id) => {
          getUserTasks(id);
        });
        setTaskIds(ids);
        console.log("taskIds: " + taskIds);
      })
      .then(() => {
        console.log("call with " + taskIds);
        // getUserTasks();
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
        console.log("tasks:  " + JSON.stringify(response));
        // getTasks(response.data);
        taskResponse.push(response.data[0]);
        console.log("tasks:  " + JSON.stringify(taskResponse));
      })
      .catch((error) => {
        console.log("error in fetching the task ids: " + error);
      });
  };

  /*-------------------------------*/

  //get tasks for the database
  let getData = async () => {
    console.log("response");
    await axios
      .get("http://localhost:8000/api/v1/tasks")
      .then((response) => {
        // getTasks(response.data);
        console.log(
          "response.data in getData: " + JSON.stringify(response.data)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // get details of the selected task
  if (itemId !== null) {
    var task = tasks.find((item) => item.task_id === itemId);
    console.log("task_id: " + task.task_name);
  }
  return (
    <div className="board">
      {console.log("tasks: " + JSON.stringify(tasks))}
      {showBoard ? (
        <div className="task_board">
          <div className="board_head">
            <p>My Daily Task</p>
            <input type="search" className="search"></input>
          </div>
          {console.log("Yes")}
          <div className="board_list">
            {tasks.map((item) => (
              <TaskList
                item={item}
                openTask={props.setBoardStatus}
                setShowBoard={setShowBoard}
                showBoard={showBoard}
                setItemId={setItemId}
              />
            ))}
          </div>
          {getData}
        </div>
      ) : (
        <TaskDetails item={task} setShowBoard={setShowBoard} />
      )}
    </div>
  );
}
export default TasksBoard;
