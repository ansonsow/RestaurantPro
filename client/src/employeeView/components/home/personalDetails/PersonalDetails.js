import React, { useEffect, useState} from "react";
import axios from "axios";
import { User } from "react-feather";
import "./PersonalDetails.css";

export default function PersonalDetails(props) {
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [lastLogin , setLastLogin] = useState("");
  const [isAttend, setIsAttend] = useState(false);
  const [lastClockIn, setLastClockIn] = useState("");
  const [lastClockOut, setLastClockOut] = useState("");
  



  const getData = async ()=>{
    // console.log(`http://localhost:8000/api/v1/users/${Number(localStorage.userId)}`);
    await axios.get(`http://localhost:8000/api/v1/users/${Number(localStorage.userId)}`).then(result=>{

        setUserName(result.data.name);
        setTitle(result.data.job_title);

        const localDate = new Date(result.data.lastLogin);
        console.log(String(localDate));

        setLastLogin(String(localDate))

      }
    ).catch(error=>{
        console.log(error);
    })
  }


  // const getAttendance = async ()=>{

  // }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div className="user_brief_info">
      <div className="account_info">
        <h4>Account Info</h4>
        <div className="user">
          <div className="user_icon">
            <User />
          </div>
          <div className="user_details">
            <p>{userName}</p>
            <p>Account Number: {localStorage.userId}</p>
            <p>Title: {title}</p>
            <p>Last Login:{lastLogin}</p>
          </div>
        </div>
      </div>

      <div className="login_info">
        <h4>Attendance</h4>
        <div className="clock_info">
          <p>Last clock-in: 27/09/2023 2:30pm</p>
          <p>Last clock-out: 27/09/2023 9:30pm</p>
        </div>
      </div>
    </div>
  );
}

// export default PersonalDetails;
