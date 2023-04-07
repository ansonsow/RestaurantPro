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
  const [newId, setNewId] = useState("");

  const [title, setTitle] = useState("");
  const [lastLogin, setLastLogin] = useState("");
  const [isAttend, setIsAttend] = useState(false);
  const [lastClockIn, setLastClockIn] = useState("");
  const [lastClockOut, setLastClockOut] = useState("");
  const [todayIndex, setTodayIndex] = useState(-1);


  const getData = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER}users/${localStorage.userId}`)
      .then((result) => {
        setUserName(result.data.name);
        setTitle(result.data.job_title);

        const localDate = new Date(result.data.lastLogin);
        const trimedTime = localDate.toString().substring(0, 21)
        setLastLogin(trimedTime);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const isToday = (someDate) => {
    const today = new Date();
    const trimedToday = today.toString().substring(0,10);

    return (
      trimedToday == someDate.substring(0,10)
    );
  };

  const getAttendance = async () => {
    // console.log('WHATTTTTTT');
    await axios
      .get(
        `${process.env.REACT_APP_SERVER}attendance/user/${localStorage.userId}`
      )
      .then((result) => {

        const length = result.data.length - 1;
        const lastEntry = result.data[length];

        const localClockIn = new Date(lastEntry.clock_in);
        const localClockOut = new Date(lastEntry.clock_out);
        
        const trimedClockIn = localClockIn.toString().substring(0, 21)
        const trimedClockOut = localClockOut.toString().substring(0, 21)

        // check if the later entry is today 
        if(isToday(trimedClockIn)){
          setTodayIndex(length);
          console.log(length);
          // setIsAttend(true);
          setIsAttend(result.data[length].clock_status)
        }else{
          setTodayIndex(-1)
          setIsAttend(false);
        }

        setLastClockIn(trimedClockIn);
        setLastClockOut(trimedClockOut);

      
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const makeAttendance = async () => {
    // console.log(isAttend);

    console.log(todayIndex);
    if(todayIndex == -1){
      await axios
      .post(process.env.REACT_APP_SERVER + "attendance", {
        user_id: localStorage.userId,
      })
      .then((result) => {
        console.log(result);

        const localClockIn = new Date(result.data.clock_in);
        localClockIn.setHours(localClockIn.getMinutes()+3);
        const trimedTime = localClockIn.toString().substring(0, 21)
        // console.log(result.getIndexes());

        setLastClockIn(trimedTime);
        // setTodayIndex(result.getIndexes())
        setNewId(result.data._id)
        // updateStatus();
      })
      .catch((error) => {
        console.log(error);
      });
    }else{
      updateStatus();
    }


    //   // console.log('wat');

    // }
    console.log('wat');



  };

  const updateStatus = async()=>{
    await axios
      .put(
        process.env.REACT_APP_SERVER +
          "attendance/updateStatus/" +
          localStorage.userId
      )
      .then((result) => {
        setIsAttend(true);
        console.log(result);
        const localClockIn = new Date(result.data.clock_in);
        localClockIn.setHours(localClockIn.getHours());
        const trimedTime = localClockIn.toString().substring(0, 21)
        console.log(trimedTime);
        setLastClockIn(trimedTime);

      }).catch(error=>{
        console.log(error);
      });

      console.log("huh?");
    

      await axios
      .put(
        process.env.REACT_APP_SERVER +
          "attendance/updateclockin/" +
          localStorage.userId
      )
      .then((result) => {
        console.log(result);
      }).catch((error)=>{
        console.log(error);
      });
  }

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

  const updateIndex = async () =>{
    await axios.get(`${process.env.REACT_APP_SERVER}attendance`).then(res=>{
      res.data.map((r,i)=>{
        if(r._id==newId){
          setTodayIndex(i);
        }
      })
    }).catch(err=>{
      console.log(err);
    })
  }

  useEffect(() => {
    getData();
    getAttendance();

  }, []);

  useEffect(()=>{
    updateIndex();
  },[newId])

  grabSVG(userCircleIcon).then(eyqxf => {
    userCircleIconSVG = eyqxf;
    document.querySelectorAll(".user_icon_svg").forEach(thdkv => {
      thdkv.innerHTML = userCircleIconSVG
    })
  })
  // console.log("huh");

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
          {/* <button onClick={()=>{console.log(isAttend);}}>check</button> */}
        </div>
      </div>
    </div>
  );
}

// export default PersonalDetails;
