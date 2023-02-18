import React from "react";
import Menu from "./employeeView/components/home/menu/Menu";
import Tasksboard from "./employeeView/components/home/tasksboard/TasksBoard";
import Navbar from "./employeeView/components/navbar/Navbar";
import TaskDetails from "./employeeView/components/task/taskoptions/taskdetails/TaskDetails";
import "./App.css";
import { useState } from "react";
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
