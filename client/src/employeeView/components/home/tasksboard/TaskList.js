import React, { useEffect, useState } from "react";
import "./TaskBoard.css";
import Message from "../../message/Message";
function TaskList(props) {
  const [taskStatus, setTaskStatus] = useState(props.item.task_status);
  const [message, showMessage] = useState(false);
  const [heading, setHeading] = useState("");
  const [messageText, setmessageText] = useState("");

  let showTaskDetails = () => {
    props.setShowBoard(false);
    props.setItemId(props.item.task_id);
  };

  let singleClickDisable = () => {
    if(document.querySelector(".home_page .board_list input[type='checkbox']:checked") !== null){
      document.querySelector(".home_page .board_list").classList.add("task_click_btn_disable")
    } else {
      document.querySelector(".home_page .board_list").classList.remove("task_click_btn_disable")
    }
  }

  let taskDone = (event) => {
    event.stopPropagation();
    // changeTaskStatus(false);
    setTaskStatus(false);
    showMessage(true);
    setHeading("Congratulations!");
    setmessageText("You have completed the task.");
  };

  let taskOpen = (event) => {
    event.stopPropagation();
    // changeTaskStatus(true);
    setTaskStatus(true);
    showMessage(true);
    setHeading("");
    setmessageText("You have reopened the task.");
  };

  const taskSelected = (event) => {
    console.log(event.target);
    const { checked } = event.target;
    const object = { id: props.item._id, task_id: props.item.task_id };
    console.log(JSON.stringify(object));

    if (checked) {
      console.log("checked: " + checked);
      props.setTaskChecked((pre) => [...pre, object]);
    } else {
      props.setTaskChecked((pre) => {
        return [...pre.filter((item) => item.task_id !== object.task_id)];
      });
    }
  };

  return (
    <>
      <div key={props.item.task_id} className="task">
        <div className="task_checkbox_wrap" onClick={singleClickDisable}>
          <input
            type="checkbox"
            onClick={taskSelected}
            id={JSON.stringify(props.item)}
          ></input>
        </div>
        
        <p>
          <span onClick={showTaskDetails}>{props.item.task_name}</span>
        </p>
        <p className="check_task">Click to Complete</p>
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
