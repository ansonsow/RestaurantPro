import React from "react";
import "./Navbar.css";
import searchIcon from "../../../icons/search.svg";
import filterIcon from "../../../icons/filter.svg";

function Navbar() {
  return (
    <div className="nav_bar_inner">
      <h2>RestaurantPro</h2>
      <div className="searchbar">
        <div className="s-icon-cont s-mag-cont">
          <object data={searchIcon} type="image/svg+xml" aria-label="Search Icon" width="100%" height="100%"></object>
        </div>
        <input type="search" className="search" placeholder="Search for..."></input>
        <div className="s-icon-cont s-filter-cont">
          <object data={filterIcon} type="image/svg+xml" aria-label="Filter Icon" width="100%" height="100%"></object>
        </div>
      </div>
      
    </div>
  );
}
export default Navbar;
