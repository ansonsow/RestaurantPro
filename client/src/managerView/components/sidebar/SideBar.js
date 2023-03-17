import React from 'react'
import "./Sidebar.css"
import logo from "../../../icons/Logo_Primary.svg"
import homeIcon from "../../../icons/home.svg"
import taskIcon from "../../../icons/tasks.svg"
import notificationIcon from "../../../icons/notification.svg"
import employeeIcon from "../../../icons/employee.svg"
import accountIcon from "../../../icons/account.svg"
import logoutIcon from "../../../icons/logout.svg"
import restaurantIcon from "../../../icons/restaurant.svg"
import SidebarItems from './SidebarItems'
import {Link} from 'react-router-dom'
export default function Sidebar() {
  return (
    <>
    <div className='sidebar' id='sidebar'>
        <img src={logo} alt="" className='logo-img'/>
        <div className="side-bar-items">
            <Link to="/home" className='link-a'><SidebarItems itemName="Home" itemIcon={homeIcon}/></Link>
            <Link to="/task" className='link-a'><SidebarItems itemName="Tasks" itemIcon={taskIcon}/></Link>
            <Link to="/statistics" className='link-a'><SidebarItems itemName="Statistics" itemIcon={homeIcon}/></Link>
            <Link to="/notification" className='link-a'><SidebarItems itemName="Notification" itemIcon={notificationIcon}/></Link>
            <Link to="/employee" className='link-a'><SidebarItems itemName="Employee" itemIcon={employeeIcon}/></Link>
            <Link to="/restaurants" className='link-a'><SidebarItems itemName="Restaurants" itemIcon={restaurantIcon}/></Link>
        </div>
        <div className="side-bar-account">
        <Link to="/account" className='link-a'><SidebarItems itemName="Account" itemIcon={accountIcon}/></Link>
        <Link to="/log-out" className='link-a'><SidebarItems itemName="Log Out" itemIcon={logoutIcon}/></Link>
        <Link to="/help" className='link-a'><SidebarItems itemName="Help" itemIcon={homeIcon}/></Link>
        </div>
    </div>

  </>
  );
}