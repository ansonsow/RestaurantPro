import React, { useEffect, useState } from "react";
import "./MyTask.css";
import Message from "../../message/Message";
import axios from "axios";

function MyTaskList(props) {
  const [taskStatus, setTaskStatus] = useState(true);
  //   const [message, showMessage] = useState(false);
  // const [heading, setHeading] = useState("");
  // const [messageText, setmessageText] = useState("");
  useEffect(() => {
    setTaskStatus(props.item.task_status);
  }, [props.item.task_status]);

  //change task status
  let changeTaskStatus = (value) => {
    const task = { task_status: value };
    console.log("Call get Task");
    console.log("check" + props);
    axios
      // .put(`http://localhost:8000/api/v1/task/${props.item._id}`, task)
      .put(`${process.env.REACT_APP_SERVER}task/${props.item._id}`, task)

      // ${process.env.REACT_APP_SERVER}
      .then((response) => {
        console.log("task status" + JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log("error in finding th task: " + error);
      });
    // props.setUnDoneTask(true);
  };

  let taskDone = (event) => {
    event.stopPropagation();
    changeTaskStatus(false);
    setTaskStatus(false);
    props.showMessage(true);
    props.setHeading("Congratulations!");
    props.setmessageText("You have completed the task.");
  };

  let taskOpen = (event) => {
    event.stopPropagation();
    changeTaskStatus(true);
    setTaskStatus(true);
    props.showMessage(true);
    props.setHeading("");
    props.setmessageText("You have reopened the task.");
  };
  return (
    <div key={props.item.task_id} className="task">
      <p>{props.item.task_name}</p>
      <p>{taskStatus === true ? "Open" : "Close"}</p>
      <p>{props.item.priority === 1 ? "High" : "Low"}</p>

      {taskStatus ? (
        <>
          <div
            key={props.item.task_id}
            className="check_task"
            onClick={taskDone}
          >
            <p>Click to Complete</p>
          </div>
          {/* {message && (
            <Message heading="" message="You have reopened the task." />
          )} */}
        </>
      ) : (
        <div key={props.item.task_id} className="open_task" onClick={taskOpen}>
          <p>Click to Reopen</p>
          {/* {message && (
            <Message
              heading="Congratulations!"
              message=" You have completed the task!"
            />
          )} */}
        </div>
      )}
      {/*  */}
    </div>
  );
}

export default MyTaskList;
