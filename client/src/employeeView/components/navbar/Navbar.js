import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav_bar_inner">
      <h2>RestaurantPro</h2>
      <input type="search" className="search" placeholder="Search for..."></input>
    </div>
  );
}
export default Navbar;
