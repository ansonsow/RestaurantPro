import React, { useEffect, useState } from "react";
import "./AssignTask.css";
import UnassignedTask from "./UnassignedTask";
function AssignTask() {
  const [unAssignedTask, setUnAssignedTask] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

let data = [
  { task_id: 1, task_name: "Mop", due_date: "20-20-20", urgency: "high" },
  { task_id: 2, task_name: "Roll", due_date: "20-20-20", urgency: "high" },
];

let employeeData = [
  { emp_id: 1, emp_name: "Mop"},
  { emp_id: 2, emp_name: "Roll", due_date: "20-20-20", urgency: "high" },
];



  useEffect(() => {
    console.log("unAssignedTask: " + unAssignedTask);
    console.log("task in array: " + +unAssignedTask.find);

    getSelectedTasks();
  }, [unAssignedTask]);

  const taskSelected = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setUnAssignedTask((pre) => [...pre, id]);
    } else {
      setUnAssignedTask((pre) => {
        return [...pre.filter((task_id) => task_id != id)];
      });
    }
  };
  const getSelectedTasks = () => {
    data.forEach((task) => {
      // console.log("task in array: "+task.task_id + unAssignedTask.includes(task.task_id));
      if (unAssignedTask.find((id) => task.task_id == id)) {
        console.log("task: " + JSON.stringify(task));
        setSelectedTasks((pre) => [...pre, task]);
      }
    });
    console.log("selectedTasks: " + JSON.stringify(selectedTasks));
  };
 
  // get selected employee

  



  return (
    <div className="assign_task">
      <div className="unassigned_task">
        <p>Unassigned Task</p>
        <div className="unassigned_task_list_heading">
          <p>Task Name</p>
          <p>Due Date</p>
          <p>Urgency</p>
        </div>

        {data.map((task) => (
          <UnassignedTask unassignedTask={task} click={taskSelected} />
        ))}
      </div>

      {/* employee div */}
      <div className="employee">
        <p>Unassigned Task</p>
        <div className="unassigned_task_list_heading">
          <p>Task Name</p>
          <p>Due Date</p>
          <p>Urgency</p>
        </div>
        <div className="unassigned_task_list">
          <p>Mop</p>
          <p>20-20-2023</p>
          <p>High</p>
        </div>
      </div>
      <div className="assigned_task">
        <p>Unassigned Task</p>
        <div className="unassigned_task_list_heading">
          <p>Task Name</p>
          <p>Due Date</p>
          <p>Urgency</p>
        </div>
        <div className="unassigned_task_list">
          <p>Mop</p>
          <p>20-20-2023</p>
          <p>High</p>
        </div>
      </div>
    </div>
  );
}

export default AssignTask;
