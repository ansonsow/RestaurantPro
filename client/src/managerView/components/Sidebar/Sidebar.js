import React from 'react'
import "./Sidebar.css"
import logo from "../images/Logo_Primary.svg"
import homeIcon from "../images/home.svg"
import taskIcon from "../images/tasks.svg"
import notificationIcon from "../images/notification.svg"
import employeeIcon from "../images/empoloyee.svg"
import accountIcon from "../images/account.svg"
import logoutIcon from "../images/logout.svg"
import restaurantIcon from "../images/restaurant.svg"
import SidebarItems from './SidebarItems'
import {Link} from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <img src={logo} alt="" className='logo-img'/>
        <div className="side-bar-items">
            <SidebarItems itemName="Home" itemIcon={homeIcon}/>
            <SidebarItems itemName="Tasks" itemIcon={taskIcon}/>
            <SidebarItems itemName="Statistics" itemIcon={homeIcon}/>
            <SidebarItems itemName="Notification" itemIcon={notificationIcon}/>
            <Link to="/employee" className='link-a'><SidebarItems itemName="Employee" itemIcon={employeeIcon}/></Link>
            <SidebarItems itemName="Restaurants" itemIcon={restaurantIcon}/>
        </div>
        <div className="side-bar-account">
        <SidebarItems itemName="Account" itemIcon={accountIcon}/>
        <SidebarItems itemName="Log Out" itemIcon={logoutIcon}/>
        <SidebarItems itemName="Help" itemIcon={homeIcon}/>
        </div>
    </div>
  )
}
