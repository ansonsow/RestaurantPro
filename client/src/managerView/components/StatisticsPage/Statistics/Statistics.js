import React from "react";
import "./Statistics.css";
import { Link } from "react-router-dom";
import CircularBar from "../CircularProgressBar/CircularBar";
export default function StatisticsPage() {
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
              percentage={75}
              color="#F77911"
              delay={500}
              duration={500}
              max={100}
              type={"Open Tasks"}
            />
            <CircularBar
              size={100}
              strokeWidth={20}
              percentage={25}
              color="#F77911"
              delay={500}
              duration={500}
              max={100}
              type={"Close Tasks"}
            />
            <CircularBar
              size={100}
              strokeWidth={20}
              percentage={80}
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
