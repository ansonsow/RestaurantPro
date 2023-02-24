import React from "react";
import MyTasksBoard from "./mytasks/MyTasksBoard";
function Task(props) {
  return (
    <div className="task_page">
      <MyTasksBoard tasks={props.tasks} />
    </div>
  );
}

export default Task;
