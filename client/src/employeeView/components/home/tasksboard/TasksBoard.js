import React, { useEffect, useState } from "react";
import "./TaskBoard.css";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";
import axios from "axios";
import Message from "../../message/Message";

function TasksBoard(props) {
  const [showBoard, setShowBoard] = useState(true);
  const [itemId, setItemId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [taskChecked, setTaskChecked] = useState([
    {
      task_id: "",
      id: "",
    },
  ]);
  const [heading, setHeading] = useState("");
  const [messageText, setmessageText] = useState("");
  const [message, showMessage] = useState(false);

  useEffect(() => {
    setTasks([]);
    console.log("task status in effect: " + JSON.stringify(props.tasks));
    console.log("tasks : " + JSON.stringify(tasks));
    console.log("taskChecked : " + taskChecked);

    if (props.tasks) {
      console.log("if has tasks");
      props.tasks.forEach((task) => {
        if (task.task_status === true) {
          console.log("and task status is " + JSON.stringify(task));
          setTasks((pre) => [...pre, task]);
        }
      });
    }
  }, [props]);

  // get details of the selected task
  if (itemId !== null) {
    var task = tasks.find((item) => item.task_id === itemId);
    console.log("task_name: " + task.task_name);
  }

  let changeTaskStatus = () => {
    console.log("taskChecked: " + JSON.stringify(taskChecked));
    const task = { task_status: false };
    let count = 0;
    console.log("taskChecked: " + taskChecked.length);
    taskChecked.forEach((item) => {
      count++;
      console.log("change task status item.id: " + item.id);
      console.log("count: " + count);
      axios
        // .put(`http://localhost:8000/api/v1/task/${item.id}`, task)
        .put(`${process.env.REACT_APP_SERVER}task/${item.id}`, task)

        // /usersTasks/:uid/:tid)
        // .put(
        //   `${process.env.REACT_APP_SERVER}userstasks/${localStorage.userId}/${props.item.task_id}`
        // )
        .then((response) => {
          console.log("task closed" + JSON.stringify(response.data));

          setTasks((pre) => {
            return pre.filter((task) => task._id != item.id);
          });
          console.log("tasks no done: " + JSON.stringify(tasks));
          if (taskChecked.length === count) {
            console.log(
              "Allclose task updated (taskChecked.length ): " +
                taskChecked.length
            );
            showMessage(true);
            setHeading("Congratulations!");
            setmessageText("You have completed the task.");
            // props.setUnDoneTask(true);
          }
          console.log("task status" + JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log("error in updating th task status: " + error);
        });
    });
  };

  return (
    <div className="board">
      {console.log("tasks in board: " + JSON.stringify(tasks))}
      <div className="board_head">
        <h2>My Uncompleted Tasks</h2>
      </div>
      {props.loadingTask ? "Loading..." : ""}
      {showBoard ? (
        <div className="task_board">
          <div className="board_list">
            {tasks.map((item) => (
              <TaskList
                item={item}
                openTask={props.setBoardStatus}
                setShowBoard={setShowBoard}
                showBoard={showBoard}
                setItemId={setItemId}
                setTaskChecked={setTaskChecked}
              />
            ))}
            {message && (
              <Message
                heading={heading}
                message={messageText}
                showMessage={showMessage}
                showBoard={props.showBoard}
                getUserTasksIds={props.getUserTasksIds}
              />
            )}
          </div>
          <button onClick={changeTaskStatus}>Task Finished</button>
        </div>
      ) : (
        <TaskDetails item={task} setShowBoard={setShowBoard} />
      )}
    </div>
  );
}
export default TasksBoard;
