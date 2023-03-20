import React, { useEffect, useState } from "react";
import "./TaskBoard.css";
import Message from "../../message/Message";
import axios from "axios";
function TaskList(props) {
  const [taskStatus, setTaskStatus] = useState(props.item.task_status);
  const [message, showMessage] = useState(false);
  const [heading, setHeading] = useState("");
  const [messageText, setmessageText] = useState("");
  // useEffect(() => {
  //   // setTaskStatus();
  // }, [props.item.task_status, message]);

  let changeTaskStatus = (value) => {
    const task = { task_status: value };
    console.log("change task status: ");
    axios
      .put(`http://localhost:8000/api/v1/task/${props.item._id}`, task)
      // /usersTasks/:uid/:tid)
      // .put(
      //   `${process.env.REACT_APP_SERVER}userstasks/${localStorage.userId}/${props.item.task_id}`
      // )
      .then((response) => {
        console.log("task status" + JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log("error in updating th task status: " + error);
      });
  };
  let showTaskDetails = () => {
    props.setShowBoard(false);
    props.setItemId(props.item.task_id);
  };
  let taskDone = (event) => {
    event.stopPropagation();
    changeTaskStatus(false);
    setTaskStatus(false);
    showMessage(true);
    setHeading("Congratulations!");
    setmessageText("You have completed the task.");
  };

  let taskOpen = (event) => {
    event.stopPropagation();
    changeTaskStatus(true);
    setTaskStatus(true);
    showMessage(true);
    setHeading("");
    setmessageText("You have reopened the task.");
  };

  return (
    <>
      <div key={props.item.task_id} className="task" onClick={showTaskDetails}>
        <p>{props.item.task_name}</p>
        {taskStatus ? (
          <div
            key={props.item.task_id}
            className="check_task"
            onClick={taskDone}
          >
            {/* <Check /> */}
          </div>
        ) : (
          // <>
          <div
            key={props.item.task_id}
            className="open_task"
            onClick={taskOpen}
          >
            <p>open again</p>
          </div>
        )}
      </div>
      {message && (
        <Message
          heading={heading}
          message={messageText}
          showMessage={showMessage}
          setTaskStatus={setTaskStatus}
          showBoard={props.showBoard}
        />
      )}
    </>
  );
}

export default TaskList;
