import React from 'react'
import "../../ManagerView.css"
export default function SidebarItems(props) {
  return (
    <div className='sidebar-items-component'>
        <img src={props.itemIcon} alt="" />
        <p>{props.itemName}</p>
    </div>
  )
}
