import React from "react";
import "./Menu.css"
 function Menu() {
  return (
    <div className="menu">
      <div className="sub_menu1">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Tasks</a>
          </li>
          <li>
            <a>Statistics</a>
          </li>
          <li>
            <a>Notifications</a>
          </li>
        </ul>
      </div>
      <div className="sub_menu2">
        <ul>
          <li>
            <a>Account</a>
          </li>
          <li>
            <a>Log Out</a>
          </li>
          <li>
            <a>Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Menu;