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
        // console.log(String(localDate));

        setLastLogin(String(localDate))

      }
    ).catch(error=>{
        console.log(error);
    })
  }

//   function stringify (x) {
//     console.log("waaaa"+Object.prototype.toString.call(x));
// }

  const isToday = (someDate) => {
    const today = new Date()
    return someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
  }

  const getAttendance = async ()=>{
    await axios.get(`http://localhost:8000/api/v1/attendance/user/${Number(localStorage.userId)}`).then(result=>{
      const localClockIn = new Date(result.data[0].clock_in)
      const localClockOut = new Date(result.data[0].clock_out)
      // console.log("waaaaaaaaaaaa"+result);
      // stringify(result)

      if(isToday(localClockIn)){
        setIsAttend(true)
      }

      console.log(isAttend);

      setLastClockIn(String(localClockIn))
      setLastClockOut(String(localClockOut))

    }).catch(error=>{
      console.log(error);
    })
  }

  const makeAttendance = async () => {
    await axios.post("http://localhost:8000/api/v1/attendance", {"user_id":localStorage.userId}).then(result=>{
      console.log(result);

      const localClockIn = new Date(result.data.clock_in)
      setLastClockIn(String(localClockIn))
      setIsAttend(true);
    }).catch(error=>{
      console.log(error);
    })
  }

  const clockOut = async() => {
    await axios.put(`http://localhost:8000/api/v1/attendance/${Number(localStorage.userId)}`).then(result=>{
      console.log(result);

      const localClockOut = new Date(result.data.clock_out)

      setLastClockOut(String(localClockOut))
      setIsAttend(false);
    }).catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    getData();
    getAttendance()
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
        {!isAttend &&
          <button className = "clock_in_btn" onClick={makeAttendance}>Clock In</button>
        }
        {
          isAttend &&
          <button className = "clock_out_btn" onClick={clockOut}>Clock Out</button>
           
        }
        <div className="clock_info">
          <p>Last clock-in: {lastClockIn}</p>
          <p>Last clock-out: {lastClockOut}</p>
        </div>
      </div>
    </div>
  );
}

// export default PersonalDetails;
