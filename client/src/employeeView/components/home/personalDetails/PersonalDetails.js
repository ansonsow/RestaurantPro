import React from "react";
import { User } from "react-feather";
import "./PersonalDetails.css";
function PersonalDetails() {
  return (
    <div className="user_brief_info">
      <div className="account_info">
        <h4>Account Info</h4>
        <div className="user">
          <div className="user_icon">
            <User />
          </div>
          <div className="user_details">
            <p>Mahima Mukhi</p>
            <p>Account Number: 1020</p>
            <p>Title: Server</p>
            <p>Last Login: 27/09/2023 6:00pm</p>
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

export default PersonalDetails;
