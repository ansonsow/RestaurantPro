import React from "react";
import "./TaskBoard.css";
function TaskDetails(props) {
 
  return (
    <div className="form">
      <form className="task_details">
        <div className="fields">
          <div className="form_field">
            <labelcd >Task</labelcd>
            <input type="text" value={props.item.task_name} />
          </div>
          <div className="form_field">
            <label>Urgency Level</label>
            <input
              type="text"
              value={props.item.priority ===1 ? "high" : "low"}
            />
          </div>
        </div>

        <div className="fields">
          <div className="form_field">
            <label>Restaurant Name</label>
            <input type="text" value="East is East" />
          </div>
          <div className="form_field">
            <label>Due Date</label>
            <input type="text" value="09-09-2023" />
          </div>
        </div>

        <div className="form_field">
          <label>Description</label>
          <textarea>{props.item.task_desc}</textarea>
        </div>

        <div className="back_button" onClick={() => props.setShowBoard(true)}>
          <p>Back</p>
        </div>
      </form>
    </div>
  );
}
export default TaskDetails;
