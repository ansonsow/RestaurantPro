import React, { useState } from "react";
import "./ManagerView.css";
import Home from "../managerView/components/home/Home";
import SideBar from "../managerView/components/sidebar/SideBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function ManagerView() {
  return (
    <div className="components">
      <Router>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default ManagerView;
