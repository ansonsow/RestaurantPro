import React from "react";
// import { sideData } from "./SidebarData";
import "./SideBar.css";

import logo from "../../../icons/Logo_DarkBG.svg"
import homeIcon from "../../../icons/home.svg"
import taskIcon from "../../../icons/tasks.svg"
import statsIcon from "../../../icons/Statistics.svg"
import notificationIcon from "../../../icons/notification.svg"
import accountIcon from "../../../icons/account.svg"
import logoutIcon from "../../../icons/logout.svg"
import helpIcon from "../../../icons/call center.svg"

import { Link } from "react-router-dom";

function SideBar() {
  let handle = (e) => {
    //e.preventDefault();
  };
  return (
    <div className="menu">
      <div className="logo-holder">
        <img src={logo} alt="Restaurant Pro" className="logo-img"/>
      </div>
      
      <ul className="sidebar_list">
        {/*----- HOME LINK -----*/}
        <li>
          <Link to="/home" className="row" onClick={handle}>
            <div className="svg_holder">
              <object data={homeIcon} type="image/svg+xml" aria-label="Home Icon" width="100%" height="100%"></object>
            </div>            
            <span>Home</span>
          </Link>
        </li>

        {/*----- TASK LINK -----*/}
        <li>
          <Link to="/task" className="row" onClick={handle}>
            <div className="svg_holder">
              <object data={taskIcon} type="image/svg+xml" aria-label="Tasks Icon" width="100%" height="100%"></object>
            </div>            
            <span>Tasks</span>
          </Link>
        </li>

        {/*----- STATS LINK -----*/}
        <li>
          <Link to="/activity" className="row" onClick={handle}>
            <div className="svg_holder">
              <object data={statsIcon} type="image/svg+xml" aria-label="Statistics Icon" width="100%" height="100%"></object>
            </div>            
            <span>Statistics</span>
          </Link>
        </li>

        {/*----- NOTIF LINK -----*/}
        <li>
          <Link to="/notifications" className="row" onClick={handle}>
            <div className="svg_holder">
              <object data={notificationIcon} type="image/svg+xml" aria-label="Notifications Icon" width="100%" height="100%"></object>
            </div>            
            <span>Notifications</span>
          </Link>
        </li>

        {/*----- ACCOUNT LINK -----*/}
        <li>
          <Link to="/account" className="row" onClick={handle}>
            <div className="svg_holder">
              <object data={accountIcon} type="image/svg+xml" aria-label="Account Icon" width="100%" height="100%"></object>
            </div>            
            <span>Account</span>
          </Link>
        </li>

        {/*----- LOG OUT LINK -----*/}
        <li>
          <Link to="/log-out" className="row" onClick={handle}>
            <div className="svg_holder">
              <object data={logoutIcon} type="image/svg+xml" aria-label="Logout Icon" width="100%" height="100%"></object>
            </div>            
            <span>Log Out</span>
          </Link>
        </li>

        {/*----- HELP LINK -----*/}
        <li>
          <Link to="/help" className="row" onClick={handle}>
            <div className="svg_holder">
              <object data={helpIcon} type="image/svg+xml" aria-label="Help Icon" width="100%" height="100%"></object>
            </div>            
            <span>Help</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}



export default SideBar;
