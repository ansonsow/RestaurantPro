import React from 'react'
import Tasksboard from "./tasksboard/TasksBoard";
import PersonalDetails from "./personalDetails/PersonalDetails";
import './Home.css'
export default function Home(props) {
  return (
    <div className="home_page">
      {/* <Menu /> */}
      <Tasksboard tasks={props.tasks}/>
      <PersonalDetails />
    </div>
  );
}
