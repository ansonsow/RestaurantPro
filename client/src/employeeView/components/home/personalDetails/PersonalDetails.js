import React, { useEffect, useState } from "react";
import axios from "axios";
import { User } from "react-feather";
import "./PersonalDetails.css";
import userCircleIcon from "../../../../icons/user_circle.svg";

let userCircleIconSVG;

async function grabSVG(url){
  return fetch(url)
  .then(response => response.text())
  .then(result => {
    return result;
  });
}

// process.env.REACT_APP_SERVER
export default function PersonalDetails(props) {
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [lastLogin, setLastLogin] = useState("");
  const [isAttend, setIsAttend] = useState(false);
  const [lastClockIn, setLastClockIn] = useState("");
  const [lastClockOut, setLastClockOut] = useState("");

  const getData = async () => {
    // console.log(`http://localhost:8000/api/v1/users/${Number(localStorage.userId)}`);
    // console.log("wat happenend?");
    // console.log(localStorage.userId);
    // console.log(process.env.REACT_APP_SERVER);
    const url = `${process.env.REACT_APP_SERVER}users/${localStorage.userId}`;
    console.log(url);
    await axios
      .get(`${process.env.REACT_APP_SERVER}users/${localStorage.userId}`)
      .then((result) => {
        setUserName(result.data.name);
        setTitle(result.data.job_title);

        const localDate = new Date(result.data.lastLogin);
        // console.log(String(localDate));
        const trimedTime = localDate.toString().substring(0, 21)
        setLastLogin(trimedTime);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   function stringify (x) {
  //     console.log("waaaa"+Object.prototype.toString.call(x));
  // }

  const isToday = (someDate) => {
    const today = new Date();
    return (
      someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
    );
  };

  const getAttendance = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_SERVER}attendance/user/${localStorage.userId}`
      )
      .then((result) => {
        console.log(result);
        const localClockIn = new Date(result.data[0].clock_in);
        const localClockOut = new Date(result.data[0].clock_out);
        // console.log("waaaaaaaaaaaa"+result);
        // stringify(result)
        console.log("wtf"+result.data[0].clock_in);

        if (isToday(localClockIn)) {
          setIsAttend(true);
        }

        console.log(isAttend);
        const trimedClockIn = localClockIn.toString().substring(0, 21)
        const trimedClockOut = localClockOut.toString().substring(0, 21)


        setLastClockIn(trimedClockIn);
        setLastClockOut(trimedClockOut);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const makeAttendance = async () => {
    await axios
      .post(process.env.REACT_APP_SERVER + "attendance", {
        user_id: localStorage.userId,
      })
      .then((result) => {
        console.log(result);

        const localClockIn = new Date(result.data[0].clock_in);
        // console.log(localClockIn);
        // console.log(new Date());
        localClockIn.setHours(localClockIn.getHours() + 7);
        const trimedTime = localClockIn.toString().substring(0, 21)

        // console.log(localClockIn);
        // setLastClockIn(String(localClockIn));
        setLastClockIn(trimedTime);

        setIsAttend(true);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .put(
        process.env.REACT_APP_SERVER +
          "attendance/updateStatus/" +
          localStorage.userId
      )
      .then((result) => {
        console.log(result);
      });
    
    await axios
      .put(
        process.env.REACT_APP_SERVER +
          "attendance/updateclockin/" +
          localStorage.userId
      )
      .then((result) => {
        console.log(result);
      });
  };

  const clockOut = async () => {
    await axios
      .put(`${process.env.REACT_APP_SERVER}attendance/${localStorage.userId}`)
      .then((result) => {
        console.log(result);

        const localClockOut = new Date(result.data.clock_out);
        const trimedTime = localClockOut.toString().substring(0, 21)
        setLastClockOut(trimedTime);
        setIsAttend(false);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .put(
        process.env.REACT_APP_SERVER +
          "attendance/updateStatus/" +
          localStorage.userId
      )
      .then((result) => {
        console.log(result);
      });
  };

  useEffect(() => {
    getData();
    getAttendance();
  }, []);

  grabSVG(userCircleIcon).then(eyqxf => {
    userCircleIconSVG = eyqxf;
    document.querySelectorAll(".user_icon_svg").forEach(thdkv => {
      thdkv.innerHTML = userCircleIconSVG
    })
  })

  return (
    <div className="user_brief_info">
      <div className="account_info user_box">
        <h4>Account Info</h4>
        <div className="user">
          <div className="user_icon">
            {/* <User /> */}
            <div className="user_icon_svg"></div>
          </div>
          <div className="user_details">
            <p>{userName}</p>
            <p>
              <b>Account Number:</b> {localStorage.userId}
            </p>
            <p>
              <b>Title:</b> {title}
            </p>
            <p>
              <b>Last Login:</b> {lastLogin}
            </p>
          </div>
        </div>
      </div>

      <div className="login_info user_box">
        <h4>Attendance</h4>
        {!isAttend && (
          <button className="clock_in_btn" onClick={makeAttendance}>
            Clock In
          </button>
        )}
        {isAttend && (
          <button className="clock_out_btn" onClick={clockOut}>
            Clock Out
          </button>
        )}
        <div className="clock_info">
          <p>
            <b>Last clock-in:</b> {lastClockIn}
          </p>
          <p>
            <b>Last clock-out:</b> {lastClockOut}
          </p>
        </div>
      </div>
    </div>
  );
}

// export default PersonalDetails;
