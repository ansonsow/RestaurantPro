import React from "react";
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

  let homeIconSVG;
  let tasksIconSVG;
  let statsIconSVG;
  let notifIconSVG;
  let accountIconSVG;
  let logoutIconSVG;
  let helpIconSVG;
  
  async function grabSVG(url){
      return fetch(url)
      .then(response => response.text())
      .then(result => {
        return result;
      });
  }

  grabSVG(homeIcon).then(eyqxf => {
      homeIconSVG = eyqxf;
      document.querySelector(".home_icon_svg").innerHTML = homeIconSVG
  })

  grabSVG(taskIcon).then(eyqxf => {
      tasksIconSVG = eyqxf;
      document.querySelector(".tasks_icon_svg").innerHTML = tasksIconSVG
  })

  grabSVG(statsIcon).then(eyqxf => {
      statsIconSVG = eyqxf;
      document.querySelector(".stats_icon_svg").innerHTML = statsIconSVG
  })

  grabSVG(notificationIcon).then(eyqxf => {
      notifIconSVG = eyqxf;
      document.querySelector(".notif_icon_svg").innerHTML = notifIconSVG
  })

  grabSVG(accountIcon).then(eyqxf => {
      accountIconSVG = eyqxf;
      document.querySelector(".account_icon_svg").innerHTML = accountIconSVG
  })

  grabSVG(logoutIcon).then(eyqxf => {
      logoutIconSVG = eyqxf;
      document.querySelector(".logout_icon_svg").innerHTML = logoutIconSVG
  })

  grabSVG(helpIcon).then(eyqxf => {
      helpIconSVG = eyqxf;
      document.querySelector(".help_icon_svg").innerHTML = helpIconSVG
  })

  return (
    <div className="menu">
      <div className="sb_tr logo_tr">
        <div className="logo-holder">
          <img src={logo} alt="Restaurant Pro" className="logo-img"/>
        </div>
      </div>
      
      <div className="sb_tr">
        <div className="sidebar_list">
          <ul className="sidebar_list_top">
            {/*----- HOME LINK -----*/}
            <li className="sb_home_link">
              <Link to="/home" className="row" onClick={handle}>
                <div className="svg_holder">
                  <div className="home_icon_svg"></div>
                </div>            
                <span>Home</span>
              </Link>
            </li>

            {/*----- TASK LINK -----*/}
            <li className="sb_tasks_link">
              <Link to="/tasks" className="row" onClick={handle}>
                <div className="svg_holder">
                  <div className="tasks_icon_svg"></div>
                </div>            
                <span>Tasks</span>
              </Link>
            </li>

            {/*----- STATS LINK -----*/}
            <li className="sb_stats_link">
              <Link to="/statistics" className="row" onClick={handle}>
                <div className="svg_holder">
                  <div className="stats_icon_svg"></div>
                </div>            
                <span>Statistics</span>
              </Link>
            </li>

            {/*----- NOTIF LINK -----*/}
            <li className="sb_notifs_link">
              <Link to="/notifications" className="row" onClick={handle}>
                <div className="svg_holder">
                  <div className="notif_icon_svg"></div>
                </div>            
                <span>Notifications</span>
              </Link>
            </li>
          </ul> {/* end sidebar list top */}
          
          <ul className="sidebar_list_bot">
            {/*----- ACCOUNT LINK -----*/}
            <li className="sb_account_link">
              <Link to="/account" className="row" onClick={handle}>
                <div className="svg_holder">
                  <div className="account_icon_svg"></div>
                </div>            
                <span>Account</span>
              </Link>
            </li>

            {/*----- LOG OUT LINK -----*/}
            <li className="sb_logout_link">
              <Link to="/log-out" className="row" onClick={handle}>
                <div className="svg_holder">
                  <div className="logout_icon_svg"></div>
                </div>            
                <span>Log Out</span>
              </Link>
            </li>

            {/*----- HELP LINK -----*/}
            <li className="sb_help_link">
              <Link to="/help" className="row" onClick={handle}>
                <div className="svg_holder">
                  <div className="help_icon_svg"></div>
                </div>            
                <span>Help</span>
              </Link>
            </li>
          </ul> {/* end sidebar list bottom */}
        </div> {/* end sidebar list */}
      </div> {/* end menu table-row */}
    </div> // end menu
  );

  
}



export default SideBar;
