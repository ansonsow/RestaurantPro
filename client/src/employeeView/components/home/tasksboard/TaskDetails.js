import React from "react";
import "./TaskBoard.css";
function TaskDetails(props) {
 
  return (
    <div className="form">
      {console.log("dentails")}
      <form className="task_details">
        <div className="fields">
          <div className="form_field">
            <label for="task_name">Task</label>
            <input type="text" value={props.item.name} />
          </div>
          <div className="form_field">
            <label>Urgency Level</label>
            <input type="text" value="Low" />
          </div>
        </div>

        <div className="fields">
          <div className="form_field">
            <label>Restaurant Name</label>
            <input type="text" value="East is East" />
          </div>
          <div className="form_field">
            <label>Due Date</label>
            <input type="text" value="Assign To" />
          </div>
        </div>

        <div className="form_field">
          <label>Description</label>
          <textarea></textarea>
        </div>

        <div className="back_button" onClick={() => props.setShowBoard(true)}>
          <p>Back</p>
        </div>
      </form>
    </div>
  );
}
export default TaskDetails;
