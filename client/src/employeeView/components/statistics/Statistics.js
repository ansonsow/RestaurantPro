import React, { useEffect, useState } from "react";
import "./Statistics.css";
import { Link } from "react-router-dom";
import CircularBar from "./circularProgressBar/CircularBar";
import axios from "axios";

export default function StatisticsPage(props) {
  const [totalTasks, settotalTasks] = useState(0);
  const [unassignedTasks, setUnassignedTasks] = useState(0);
  const [openTasks, setopenTasks] = useState(0);
  const [closeTasks, setcloseTasks] = useState(0);

  useEffect(() => {
    getAllUnassignedTask();
    console.log("totalTasks: " + totalTasks);
    console.log("unassignedTasks: " + unassignedTasks);
    console.log("openTasks: " + openTasks);
    console.log("closeTasks: " + closeTasks);
  }, [unassignedTasks, openTasks, closeTasks]);

  useEffect(() => {
    getAllUnassignedTask();
  }, [props]);

  // get data
  const getAllUnassignedTask = () => {
    let unassignedTask = [];
    let openTask = [];
    let closeTask = [];

    // await axios
    //   .get("http://localhost:8000/api/v1/tasks")
    // .then((response) => {
    console.log("task fo statistic : " + JSON.stringify(props.tasks));
    settotalTasks(props.tasks.length);
    props.tasks.forEach((task) => {
      console.log("task assigned: " + task.task_assigned);
      if (task.task_assigned === false) unassignedTask.push(task);
      if (task.task_status === false && task.task_assigned === true)
        closeTask.push(task);
      if (task.task_status === true) openTask.push(task);
    });
    setUnassignedTasks(unassignedTask.length);
    setopenTasks(openTask.length);
    setcloseTasks(closeTask.length);
    // })
    // .catch((error) => {
    //   console.log("error in fetching all task: " + error);
    // });
  };

  return (
    <div className="statistics-page">
      <div className="statistics-page-upper-section">
          {/* <Link to="/statistics" className="link-a">
            <button>Statistics</button>
          </Link> */}
          <div className="tab-buttons-container">
            <button className="tab-buttons active">Statistics</button>
          </div>
        {/* <input type="text" className="search-box" placeholder="search here" /> */}
      </div>

      <div className="statistics-page-middle-section">
        <div className="statistics-page-middle-section-elements">
          <div className="statistics-page-middle-section-elements-upper-part">
            <h3>Your Daily Tasks</h3>
            <div className="stats-kebab">
              <div className="sk-bob"></div>
              <div className="sk-bob"></div>
              <div className="sk-bob"></div>
            </div>
          </div>
          <div className="circular-progress-bar-section">
            <CircularBar
              size={100}
              strokeWidth={20}
              percentage={(openTasks / totalTasks) * 100}
              color="#F77911"
              delay={500}
              duration={500}
              max={100}
              type={"Open Tasks"}
            />
            <CircularBar
              size={100}
              strokeWidth={20}
              percentage={(closeTasks / totalTasks) * 100}
              color="#F77911"
              delay={500}
              duration={500}
              max={100}
              type={"Closed Tasks"}
            />
          </div>
        </div>
        {/* <div className="statistics-page-middle-section-elements">
          <div className="statistics-page-middle-section-elements-upper-part">
            <p>Frequently Opened Tasks</p>
            <p>Total Count:</p>
          </div>
          <LinearProgressbar width={90} />
          <LinearProgressbar width={70} />
          <LinearProgressbar width={80} />
          <LinearProgressbar width={50} />
        </div> */}
        {/* <div className="statistics-page-middle-section-elements">
          <div className="statistics-page-middle-section-elements-upper-part">
            <p>Monthly Opened Tasks</p>
            <p>Total Count :</p>
          </div>
          <LinearProgressbar width={90} />
          <LinearProgressbar width={70} />
          <LinearProgressbar width={50} />
          <LinearProgressbar width={90} />
        </div> */}
      </div>
      <div className="statistics-page-lower-section">
        <h2>Your Performance:</h2>
        <table className="employee-performance-table">
          <thead>
            <th col-name="name">Name Surname</th>
            <th col-name="tasks done">Total Done Tasks (Weekly)</th>
            <th col-name="time taken">Avg. Time To Complete Tasks (Weekly)</th>
            <th col-name="tasks per day">Avg Task for a day (Weekly)</th>
            <th col-name="job title">Job Title</th>
            <th col-name="working hours">Avg Working Hours (Daily)</th>
          </thead>
          <tbody>
            <tr>
              <td col-name="name">Nikita</td>
              <td col-name="tasks done">56</td>
              <td col-name="time taken">45 min</td>
              <td col-name="tasks per day">8</td>
              <td col-name="job title">Server</td>
              <td col-name="working hours">8 hr 40 min</td>
            </tr>

           
          
          </tbody>
        </table>
      </div>
    </div>
  );
}


