import React from 'react'
import Tasksboard from "./tasksboard/TasksBoard";
import PersonalDetails from "./personalDetails/PersonalDetails";
import './Home.css'
export default function Home(props) {
  for (const key in props) {
      // const element = object[key];
      console.log("check "+key+" "+props[key]);

  }

  return (
    <div className="home_page">
      {/* <Menu /> */}
      <Tasksboard tasks={props.tasks}/>
      <PersonalDetails />
    </div>
  );
}
