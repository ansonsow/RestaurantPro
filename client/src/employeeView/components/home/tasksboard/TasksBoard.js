import React, { useState } from "react";
import "./TaskBoard.css";
import { Check } from "react-feather";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";

function TasksBoard(props) {
  const [showBoard, setShowBoard] = useState(true);
  const [itemId, setItemId] = useState(null);
  // demo data
  let taskData = [
    {
      task_id: 1,
      name: "Mop Main Floor",
      description: "",
      status: "In progress",
      due_date: "19-02-2023",
      assign_to: "Lilu",
    },
    {
      task_id: 2,
      name: "Roll Cultlery",
      description: "",
      status: "In progress",
      due_date: "19-02-2023",
      assign_to: "Lilu",
    },

    {
      task_id: 3,
      name: "Close WashRoom",
      description: "",
      status: "In progress",
      due_date: "19-02-2023",
      assign_to: "Lilu",
    },

    {
      task_id: 4,
      name: "Vacuum Sofa",
      description: "",
      status: "In progress",
      due_date: "19-02-2023",
      assign_to: "Lilu",
    },
  ];
  if (itemId !== null) {
    var task = taskData.find((item) => item.task_id === itemId);
    console.log("task: " + task);
  }

  // const [taskStatus, setTaskStatus] = useState(true);
  // let taskDone = (event) => {
  //   event.stopPropagation();
  //   console.log("inner clcik");
  //   setTaskStatus(false);
  // };

  // let taskOpen = (event) => {
  //   event.stopPropagation();
  //   console.log("inner clcik");
  //   setTaskStatus(true);
  // };
  return (
    <div className="board">
      {showBoard ? (
        <div className="task_board">
          <div className="board_head">
            <p>My Daily Task</p>
            <input type="search" className="search"></input>
          </div>
          {console.log("Yes")}
          <div className="board_list">
            {taskData.map((item) => (
              <TaskList
                item={item}
                openTask={props.setBoardStatus}
                setShowBoard={setShowBoard}
                showBoard={showBoard}
                setItemId={setItemId}
              />
            ))}
          </div>
        </div>
      ) : (
        <TaskDetails item={task} setShowBoard={setShowBoard} />
      )}
    </div>
  );
}
export default TasksBoard;
