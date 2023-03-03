import React, { useEffect, useState } from "react";
import "./TaskBoard.css";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";
function TasksBoard(props) {
  const [showBoard, setShowBoard] = useState(true);
  const [itemId, setItemId] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([]);
    setTasks(props.tasks);
  });
  // get details of the selected task
  if (itemId !== null) {
    var task = tasks.find((item) => item.task_id === itemId);
    console.log("task_name: " + task.task_name);
  }
  return (
    <div className="board">
      {console.log("tasks in board: " + JSON.stringify(tasks))}
      {showBoard ? (
        <div className="task_board">
          <div className="board_head">
            <h2>My Uncompleted Tasks</h2>
          </div>
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
        </div>
      ) : (
        <TaskDetails item={task} setShowBoard={setShowBoard} />
      )}
    </div>
  );
}
export default TasksBoard;
