import React from "react";
import "./Navbar.css";
import searchIcon from "../../../icons/search.svg";
import filterIcon from "../../../icons/filter.svg";

function Navbar() {
  let searchIconSVG;
  let filterIconSVG;

  async function grabSVG(url){
      return fetch(url)
      .then(response => response.text())
      .then(result => {
        return result;
      });
  }

  grabSVG(searchIcon).then(eyqxf => {
      searchIconSVG = eyqxf;
      document.querySelector(".searchbar .s-mag-cont .svg_holder").innerHTML = searchIconSVG
  })

  grabSVG(filterIcon).then(eyqxf => {
      filterIconSVG = eyqxf;
      document.querySelector(".searchbar .s-filter-cont .svg_holder").innerHTML = filterIconSVG
  })

  return (
    <div className="nav_bar">
      <div className="nav_bar_inner">
        {/* <h2>RestaurantPro</h2> */}
        <div className="searchbar">
          <div className="s-icon-cont s-mag-cont">
            <div class="svg_holder"></div>
          </div>
          <input type="search" className="search" placeholder="Search for..."></input>
          <div className="s-icon-cont s-filter-cont">
            <div class="svg_holder"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
