import React from "react";
import "./TaskDetails.css";
function TaskDetails(props) {
  return (
    <div className="form">
      <form className="task_details">
        <div className="fields">
          <div className="form_field">
            <label for="task_name">Task Name</label>
            <input type="text" value="Mop Main Room" />
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

        <div className="back_button" onClick={() => props.setBoardStatus(true)}>
          <p>Back</p>
        </div>
      </form>
    </div>
  );
}
export default TaskDetails;
