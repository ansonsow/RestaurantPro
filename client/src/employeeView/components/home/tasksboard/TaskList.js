import React, { useEffect, useState } from "react";
import "./TaskBoard.css";
import { Check, TrendingUp } from "react-feather";
import Message from "../message/Message";
import axios from "axios";

function TaskList(props) {
  const [taskStatus, setTaskStatus] = useState(props.item.task_status);
  const [message, showMessage] = useState(false);

  let changeTaskStatus = (value) => {
    const task = { task_status: value };
    console.log("Call get Task");
    axios
      .put(`http://localhost:8000/api/v1/task/${props.item._id}`, task)
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
  };

  let taskOpen = (event) => {
    event.stopPropagation();
    changeTaskStatus(true);
    setTaskStatus(true);
    showMessage(true);
  };
  return (
    <div key={props.item.task_id} className="task" onClick={showTaskDetails}>
      <p>{props.item.task_name}</p>
      {taskStatus ? (
        <>
          <div className="check_task" onClick={taskDone}>
            <Check />
          </div>
          {message && (
            <Message heading="" message="You have open the task again" />
          )}
        </>
      ) : (
        <div className="open_task" onClick={taskOpen}>
          <p>open again</p>
          <Message
            heading=" Congratulations!"
            message=" You have finished the task"
          />
        </div>
      )}
    </div>
  );
}

export default TaskList;
