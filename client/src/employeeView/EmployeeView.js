import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeView.css";
import Navbar from "../employeeView/components/navbar/Navbar";
import Home from "../employeeView/components/home/Home";
import SideBar from "../employeeView/components/sidebar/SideBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Account from "../employeeView/components/account/Account";
import Task from "../employeeView/components/task/Task";
import LogOut from "../employeeView/components/logout/LogOut";
import Blank from "../employeeView/components/blank/Blank";

function EmployeeView(props) {
  const currentUrl = window.location.href;

  const lastSlashIndex = currentUrl.lastIndexOf('/');

  const baseUrl = currentUrl.substr(0, lastSlashIndex + 1);
  // window.location.assign(baseUrl)
  // const nav = useNavigate();
  // nav('/')

  return (
    <div className="components">
      <Router>
        
        <Routes>
          <Route exact path="/" element={<Home tasks={props.tasks} />} />
          <Route exact path="/home" element={<Home tasks={props.tasks} />} />
          <Route exact path="/tasks" element={<Task tasks={props.tasks} />} />
          <Route
            exact
            path="/account"
            element={<Account account={props.account} />}
          />
          <Route
            exact
            path="/log-out"
            element={<LogOut />}
          />
          <Route
            exact
            path="/blank"
            element={<Blank />}
          />
        </Routes>

        <Navbar />
        <SideBar />
      </Router>
    </div>
  );
}

export default EmployeeView;
