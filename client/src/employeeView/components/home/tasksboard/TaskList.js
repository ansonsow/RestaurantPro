import React, { useState } from "react";
import "./TaskBoard.css";
import { Check, TrendingUp } from "react-feather";
import TaskDetails from "./TaskDetails";
import TasksBoard from "./TasksBoard";

function TaskList(props) {
  const [taskStatus, setTaskStatus] = useState(true);
  const [taskdetails, setTaskDetails] = useState(true);

  let showTaskDetails = () => {
    // event.stopPropagation();
    // setTaskDetails(false);
    props.setShowBoard(false);
    props.setItemId(props.item.task_id); // <TasksBoard props={props} />;
  };
  let taskDone = (event) => {
    event.stopPropagation();
    console.log("inner clcik");
    setTaskStatus(false);
  };

  let taskOpen = (event) => {
    event.stopPropagation();
    console.log("inner clcik");
    setTaskStatus(true);
  };
  return (
    <div
      key={props.item.task_id}
      className="task"
      // onClick={() => props.openTask(false)}
      onClick={showTaskDetails}
    >
      <p>{props.item.name}</p>
      {taskStatus ? (
        <div className="check_task" onClick={taskDone}>
          <Check />
        </div>
      ) : (
        <div className="open_task" onClick={taskOpen}>
          <p>open again</p>
        </div>
      )}
    </div>
  );
}

export default TaskList;
