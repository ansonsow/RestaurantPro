import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DailyAttendance.css";
import axios from "axios";
import EmployeeRow from "./EmployeeRow";

export default function DailyAttendance() {
  const [allEmployee, setAllEmployee] = useState([]);
  const [allEmployeeTime, setAllEmployeeTime] = useState([]);


  // Call Apis
  useEffect(() => {
    console.log("In Dailt Attendance");
    getClockInEmployees();
    console.log("allEmployee" + JSON.stringify(allEmployee));
  }, []);

  const isToday = (someDate) => {
    const today = new Date();
    const trimedToday = today.toString().substring(0,10);
    console.log(trimedToday == someDate.substring(0,10));

    return (
      trimedToday == someDate.substring(0,10)
    );
  };

  const getClockInEmployees = async () => {
    await axios
      // .get("http://localhost:8000/api/v1/attendance/true")
      .get(`${process.env.REACT_APP_SERVER}attendance/true`)

      // ${process.env.REACT_APP_SERVER}
      .then((response) => {
        console.log("all present employees:" + JSON.stringify(response.data));
        let userIds=[];
        response.data.map((r,i)=>{
          console.log(r.clock_in);
          if(r.clock_in){
            const localClockIn = new Date(r.clock_in);
            const trimedClockIn = localClockIn.toString().substring(0, 21)
            // console.log('wat');
            console.log(r);
            // console.log(trimedClockIn);
            // console.log(isToday(trimedClockIn));
            if(isToday(trimedClockIn)){
              userIds.push(r.user_id)
              // console.log('wat');
              setAllEmployeeTime((pre) => [...pre, trimedClockIn]);
            }
          }
        })
        // let userIds = response.data.map((user) => user.user_id);
        // console.log('wat'+userIds);
        // console.log(object);
        // let userIds;
        // response.map((r,i)=>{
        //   if(r.clock_in)
        // })
        userIds.forEach((id) => {
          getUserDetails(id);
        });
      })
      .catch((error) => {
        console.log("error in fetching all task: " + error);
      });
  };

  let getUserDetails = (id) => {
    axios
      // .get(`http://localhost:8000/api/v1/users/${id}`)
      .get(`${process.env.REACT_APP_SERVER}users/${id}`)

      // ${process.env.REACT_APP_SERVER}
      .then((response) => {
        console.log(
          "all present employees details:" + JSON.stringify(response.data)
        );
        setAllEmployee((pre) => [...pre, response.data]);
      })
      .catch((error) => {
        console.log("error in fetch user details: " + error);
      });
  };
  return (
    <div className="daily-attendance-page">
      <div className="tab-buttons-container">
        <Link to="/tasks">
          <button className="tab-buttons">All Tasks</button>
        </Link>

        <Link to="/assign-task">
          <button className="tab-buttons">Assign Task</button>
        </Link>

        <Link to="/create-task">
          <button className="tab-buttons">Create Task</button>
        </Link>

        <Link to="/daily-attendance">
          <button className="tab-buttons active">Daily Attendance</button>
        </Link>
      </div>

      <div className="daily-attendance-page-lower-section">
        <table className="daily-attendance-table">
          <thead>
            <tr>
              <th>Name Surname</th>
              <th>Action</th>
              <th>Date</th>
              <th>Time</th>
              <th>Job Title</th>
            </tr>
          </thead>
          <tbody>
            {allEmployee.map((empDetails,index) => (
              <EmployeeRow emp={empDetails} key={index} time={allEmployeeTime[index]}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
