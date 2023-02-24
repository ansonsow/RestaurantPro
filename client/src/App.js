import React from "react";
import Menu from "./employeeView/components/home/menu/Menu";
import Tasksboard from "./employeeView/components/home/tasksboard/TasksBoard";
import Navbar from "./employeeView/components/navbar/Navbar";
import TaskDetails from "./employeeView/components/task/taskoptions/taskdetails/TaskDetails";
import "./App.css";
import { useState } from "react";

// import fonts - Brevia
import "./fonts/Brevia/Brevia-Regular.ttf";
import "./fonts/Brevia/Brevia-Medium.ttf";
import "./fonts/Brevia/Brevia-SemiBold.ttf";

// import fonts - Century Gothic
import "./fonts/CenturyGothic/Century-Gothic-Regular.ttf";
import "./fonts/CenturyGothic/Century-Gothic-Bold.ttf";

function App() {

  return (
    <div className="App">
      <div className="nav_bar">
        <Navbar />
      </div>
      <div className="home_page">
        <Menu />
        <Tasksboard />
        {/* {showBoard ? (
          <Tasksboard setBoardStatus={setShowBoard} />
        ) : (
          <TaskDetails setBoardStatus={setShowBoard} />
        )} */}
      </div>
    </div>
  );
}

export default App;
