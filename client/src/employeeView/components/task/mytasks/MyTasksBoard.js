import React, { useEffect, useState } from "react";
import "./MyTask.css";
import MyTaskList from "./MyTasksList";

function MyTasksBoard(props) {
  const [tasks, getTasks] = useState([]);
  useEffect(() => {
    getTasks(props.tasks);
  },[props.tasks]);
  return (
    <div className="my_task_board">
      {console.log("props: " + JSON.stringify(props.tasks))}
      {console.log("tasks: " + JSON.stringify(tasks))}

      <div className="board_columns">
        <div className="columns_names">
          <p>Task Name</p>
          <p>Status</p>
          <p>Urgency Level</p>
          <p>Action</p>
        </div>
        <div className="board_list">
          {tasks.map((item) => (
            <MyTaskList item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyTasksBoard;
