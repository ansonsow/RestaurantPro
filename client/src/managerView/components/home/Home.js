import React from "react";
import "./Home.css";
import PersonalDetails from "./personalDetails/PersonalDetails";
import QuickActions from "./QuickActions_/QuickActions_";

export default function Home() {
  return (
    <div className="home_page manager_view">
      <QuickActions/>
      <PersonalDetails/>
    </div>
  );
}
