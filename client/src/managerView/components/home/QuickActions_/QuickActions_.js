
import "./QuickActions_.css"

import { Link } from "react-router-dom";

import sliderIcon from "../../../../icons/filter_slider.svg"
import createTaskIcon from "../../../../icons/create_new_task.svg"
import allTasksIcon from "../../../../icons/all_tasks.svg"
import attendanceIcon from "../../../../icons/calendar_time.svg"
import assignTaskIcon from "../../../../icons/user_tick.svg"
import employeeListIcon from "../../../../icons/employees.svg"

const QuickActions = () => {
    let sliderIconSVG;
    let createTaskIconSVG;
    let allTasksIconSVG;
    let attendanceIconSVG;
    let assignTaskIconSVG;
    let employeeListIconSVG;
    
    async function grabSVG(url){
        return fetch(url)
        .then(response => response.text())
        .then(result => {
            return result;
        });
    }

    grabSVG(sliderIcon).then(eyqxf => {
        sliderIconSVG = eyqxf;
        document.querySelector(".filter_slider_svg").innerHTML = sliderIconSVG
    })

    grabSVG(createTaskIcon).then(eyqxf => {
        createTaskIconSVG = eyqxf;
        document.querySelector(".create_new_task_svg").innerHTML = createTaskIconSVG
    })

    grabSVG(allTasksIcon).then(eyqxf => {
        allTasksIconSVG = eyqxf;
        document.querySelector(".all_tasks_svg").innerHTML = allTasksIconSVG
    })

    grabSVG(attendanceIcon).then(eyqxf => {
        attendanceIconSVG = eyqxf;
        document.querySelector(".attendance_svg").innerHTML = attendanceIconSVG
    })

    grabSVG(assignTaskIcon).then(eyqxf => {
        assignTaskIconSVG = eyqxf;
        document.querySelector(".assign_task_svg").innerHTML = assignTaskIconSVG
    })

    grabSVG(employeeListIcon).then(eyqxf => {
        employeeListIconSVG = eyqxf;
        document.querySelector(".employee_list_svg").innerHTML = employeeListIconSVG
    })

    return (
        <div className="board">
        <div className="board_heading_flex">
          <h2>Quick Actions</h2>
          <div className="svg_holder">
            <div className="filter_slider_svg"></div>
          </div>
        </div>        

        <div className="quick_actions">
          {/*---- "CREATE NEW TASK" ----*/}
          <Link to="/create-task">
            <div class="svg_holder">
              <div class="create_new_task_svg"></div>
            </div>
            <span>Create New Task</span>
          </Link>

          {/*---- "SEE ALL TASKS" ----*/}
          <Link to="/task">
            <div class="svg_holder">
              <div class="all_tasks_svg"></div>
            </div>
            <span>See All Tasks</span>
          </Link>

          {/*---- "CHECK DAILY ATTENDANCE" ----*/}
          <Link to="/daily-attendance">
            <div class="svg_holder">
              <div class="attendance_svg"></div>
            </div>
            <span>Check Daily Attendance</span>
          </Link>

          {/*---- "ASSIGN TASKS" ----*/}
          <Link to="/assign-task">
            <div class="svg_holder">
              <div class="assign_task_svg"></div>
            </div>
            <span>Assign Tasks</span>
          </Link>

          {/*---- "SEE EMPLOYEE LIST" ----*/}
          <Link to="/employee">
            <div class="svg_holder">
              <div class="employee_list_svg"></div>
            </div>
            <span>See Employee List</span>
          </Link>

        </div>{/* end .quick_actions */}
        
      </div>//end .board
    )//end return()
}//end func

export default QuickActions;