import React, { useEffect, useState } from "react";
import "./Statistics.css";
import { Link } from "react-router-dom";
import CircularBar from "../CircularProgressBar/CircularBar";
import axios from "axios";

export default function StatisticsPage() {
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

  // get data
  const getAllUnassignedTask = async () => {
    let unassignedTask = [];
    let openTask = [];
    let closeTask = [];

    await axios
      .get("http://localhost:8000/api/v1/tasks")
      .then((response) => {
        console.log("all task:" + JSON.stringify(response.data));
        settotalTasks(response.data.length);
        response.data.forEach((task) => {
          console.log("task assigned: " + task.task_assigned);
          if (task.task_assigned === false) unassignedTask.push(task);
          if (task.task_status === false && task.task_assigned === true)
            closeTask.push(task);
          if (task.task_status === true) openTask.push(task);
        });
        setUnassignedTasks(unassignedTask.length);
        setopenTasks(openTask.length);
        setcloseTasks(closeTask.length);
      })
      .catch((error) => {
        console.log("error in fetching all task: " + error);
      });
  };

  return (
    <div className="statistics-page">
      <div className="statistics-page-upper-section">
        <div className="statistics-page-upper-section-button-section">
          <Link to="/statistics" className="link-a">
            <button>Statistics</button>
          </Link>
        </div>
        <input type="text" className="search-box" placeholder="search here" />
      </div>

      <div className="statistics-page-middle-section">
        <div className="statistics-page-middle-section-elements">
          <div className="statistics-page-middle-section-elements-upper-part">
            <p>Daily Task</p>
            <p>:</p>
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
              type={"Close Tasks"}
            />
            <CircularBar
              size={100}
              strokeWidth={20}
              percentage={(unassignedTasks / totalTasks) * 100}
              color="#F77911"
              delay={500}
              duration={500}
              max={100}
              type={"UnAssign Tasks"}
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
        <h2>Employee Performance</h2>
        <table className="employee-performance-table">
          <thead>
            <th>Name Surname</th>
            <th>Total Done Tasks(Weekly)</th>
            <th>Avg. Time To Complete Tasks(weekly)</th>
            <th>Avg Task for a day(weekly)</th>
            <th>Job Title</th>
            <th>Avg Working Hours(daily)</th>
          </thead>
          <tbody>
            <tr>
              <td>Sachin Jha</td>
              <td>56</td>
              <td>45 min</td>
              <td>8</td>
              <td>Server</td>
              <td>8 hr 40 min</td>
            </tr>
            <tr>
              <td>Abhishek</td>
              <td>96</td>
              <td>45 min</td>
              <td>8</td>
              <td>Cook</td>
              <td>6 hr 40 min</td>
            </tr>
            <tr>
              <td>Sachin Jha</td>
              <td>56</td>
              <td>45 min</td>
              <td>8</td>
              <td>Server</td>
              <td>8 hr 40 min</td>
            </tr>
            <tr>
              <td>Sachin Jha</td>
              <td>56</td>
              <td>45 min</td>
              <td>8</td>
              <td>Server</td>
              <td>8 hr 40 min</td>
            </tr>
            <tr>
              <td>Sachin Jha</td>
              <td>56</td>
              <td>45 min</td>
              <td>8</td>
              <td>Server</td>
              <td>8 hr 40 min</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
