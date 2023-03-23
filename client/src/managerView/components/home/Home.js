import React from "react";
import "./Home.css";
import PersonalDetails from "./personalDetails/PersonalDetails";
import quick_actions from "./quick_actions/quick_actions";

export default function Home() {
  return (
    <div className="home_page manager_view">
      <quick_actions/>
      <PersonalDetails/>
    </div>
  );
}
