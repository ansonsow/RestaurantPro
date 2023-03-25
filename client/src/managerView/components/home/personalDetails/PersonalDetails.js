import "./personalDetails.css";

import tickIcon from "../../../../icons/check.svg"
import exclamationIcon from "../../../../icons/exclamation.svg"
import chevronLeft from "../../../../icons/left.svg"
import chevronRight from "../../../../icons/right.svg"

import managerIMG from "../../../../images/example_manager.jpeg"

const PersonalDetails = () => {
    let tickIconSVG;
    let exclamationIconSVG;
    let chevronLeftSVG;
    let chevronRightSVG;

    async function grabSVG(url){
        return fetch(url)
        .then(response => response.text())
        .then(result => {
            return result;
        });
    }

    grabSVG(tickIcon).then(eyqxf => {
        tickIconSVG = eyqxf;
        document.querySelectorAll(".tick_svg").forEach(thdkv => {
            thdkv.innerHTML = tickIconSVG
        })        
    })
    
    grabSVG(exclamationIcon).then(eyqxf => {
        exclamationIconSVG = eyqxf;
        document.querySelectorAll(".exclamation_svg").forEach(thdkv => {
            thdkv.innerHTML = exclamationIconSVG
        })        
    })

    grabSVG(chevronLeft).then(eyqxf => {
        chevronLeftSVG = eyqxf;
        document.querySelectorAll(".chevron_left_svg").forEach(thdkv => {
            thdkv.innerHTML = chevronLeftSVG
        })        
    })

    grabSVG(chevronRight).then(eyqxf => {
        chevronRightSVG = eyqxf;
        document.querySelectorAll(".chevron_right_svg").forEach(thdkv => {
            thdkv.innerHTML = chevronRightSVG
        })        
    })

    return(
        <div className="user_brief_info">
            {/*---- BOX: MANAGER'S ACCOUNT INFO ----*/}
            <div className="user_box acc_box">
                <h4>Account Info</h4>

                <div className="acc_info_cont">
                    {/* <img src="https://cdn.glitch.global/f202da4e-f9f2-4703-9a01-471c490e991b/3H5PoxU_e1.jpeg" alt=""/> */}
                    <img src={managerIMG} alt=""/>
                    <div className="acc_info_text">
                        <p className="text_row">
                            <span id="managerName">Jacob M.</span>
                        </p>
                        
                        <p className="text_row">
                            <span>Account: </span>
                            <span id="managerID">0040</span>
                        </p>

                        <p className="text_row">
                            <span>Title: </span>
                            <span id="managerTitle">Manager</span>
                        </p>

                        <p className="text_row">
                            <span>Last Login: </span>
                            <span id="managerIDNum">21.03.2023 18:52</span>
                        </p>
                    </div>{/* end .acc_info_text */}
                </div>{/* end .acc_info_cont */}
            </div>{/* end .user_box.acc_box */}

            {/*---- BOX: MANAGER'S ACTIVE TASKS ----*/}
            <div className="user_box m_active_tasks">
                <h4>My Active Tasks</h4>

                {/* ACTIVE TASK ROW */}
                <div className="active_task">
                    <span className="active_task_name">Inventory Check</span>

                    <div className="active_task_buttons">
                        <button className="active_tick">
                            <div className="svg_holder">
                                <div className="tick_svg"></div>
                            </div>
                        </button>

                        <button className="active_tick">
                            <div className="svg_holder">
                                <div className="exclamation_svg"></div>
                            </div>
                        </button>
                    </div>
                </div>

                {/* ACTIVE TASK ROW */}
                <div className="active_task">
                    <span className="active_task_name">Menu Research</span>

                    <div className="active_task_buttons">
                        <button className="active_tick">
                            <div className="svg_holder">
                                <div className="tick_svg"></div>
                            </div>
                        </button>

                        <button className="active_tick">
                            <div className="svg_holder">
                                <div className="exclamation_svg"></div>
                            </div>
                        </button>
                    </div>
                </div>

                {/* ACTIVE TASK ROW */}
                <div className="active_task">
                    <span className="active_task_name">Kitchen Management</span>

                    <div className="active_task_buttons">
                        <button className="active_tick">
                            <div className="svg_holder">
                                <div className="tick_svg"></div>
                            </div>
                        </button>

                        <button className="active_tick">
                            <div className="svg_holder">
                                <div className="exclamation_svg"></div>
                            </div>
                        </button>
                    </div>
                </div>

                {/* CHEVRONS */}
                <div className="chevrons">
                    <div class="svg_holder">
                        <div className="chevron_left_svg"></div>
                    </div>
                    
                    <div class="svg_holder">
                        <div className="chevron_right_svg"></div>
                    </div>
                </div>
            </div>{/* end .user_box.m_active_tasks */}

            {/*---- BOX: MANAGER'S ATTENDANCE (BRIEF) ----*/}
            <div className="user_box m_attendance_brief">
                <h4>Employee Attendance</h4>

                <p className="text_row">
                    <span>Daily total attendance: </span>
                    <span id="m_daily_total_attendance">10</span>
                </p>

                <p className="text_row">
                    <span>Last clock-in: </span>
                    <span id="m_last_clockin">20.03.2023 07:43</span>
                </p>
            </div>
        </div> // end .user_brief_info
    )
}

export default PersonalDetails;