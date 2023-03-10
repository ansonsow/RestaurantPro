import React, { useEffect, useState } from "react";
import AssignTask from "../../task/assigntask/AssignTask";
import CreateTask from "../../task/createTask/CreateTask";
function QuickActionOptions(props) {
  const [component, setcomponent] = useState();
  const [assignTask, setAssignTask] = useState(false);
  const [createTask, setCreateTask] = useState(false);


  useEffect(() => {
    findComponent();
  });
  const findComponent = () => {
    if (props.clickedId === "AssignTask") setAssignTask(true);
    if (props.clickedId === "CreateTask") setCreateTask(true);

  };
  return (
    <div>
      {assignTask && <AssignTask />}
      {createTask && <CreateTask />}
    </div>
  );
}

export default QuickActionOptions;
