import React from "react";
import { sideData } from "./SidebarData";
import "./SideBar.css";
import { Link } from "react-router-dom";
function SideBar() {
  let handle = (e) => {
    e.preventDefault();
  };
  return (
    <div className="menu">
      <ul className="sidebar_list">
        {sideData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <Link to={val.link} onClick={handle}>
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
