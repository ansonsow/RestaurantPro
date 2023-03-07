import React, {useEffect, useState } from "react";
import "./MyTask.css";
import { Check, TrendingUp } from "react-feather";
import Message from "../../message/Message";
import axios from "axios";

function MyTaskList(props) {
  const [taskStatus, setTaskStatus] = useState(true);
  const [message, showMessage] = useState(false);

  useEffect(() => {
    setTaskStatus(props.item.task_status);
  }, [props.item.task_status]);

  //change task status
  let changeTaskStatus = (value) => {
    const task = { task_status: value };
    console.log("Call get Task");
    console.log("check"+ props)
    axios
      .put(`http://localhost:8000/api/v1/task/${props.item._id}`, task)
      .then((response) => {
        console.log("task status" + JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log("error in finding th task: " + error);
      });
  };

  let taskDone = (event) => {
    event.stopPropagation();
    changeTaskStatus(false);
    setTaskStatus(false);
    showMessage(true);
  };

  let taskOpen = (event) => {
    event.stopPropagation();
    changeTaskStatus(true);
    setTaskStatus(true);
    showMessage(true);
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
            <Check />
          </div>
          {message && (
            <Message heading="" message="You have open the task again" />
          )}
        </>
      ) : (
        <div key={props.item.task_id} className="open_task" onClick={taskOpen}>
          <p>open again</p>
          {message && (
            <Message
              heading="Congratulations"
              message=" You have finished the task"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default MyTaskList;
