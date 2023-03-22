import React, { useEffect, useState } from "react";
import "./MyTask.css";
import MyTaskList from "./MyTasksList";
import Message from "../../message/Message";
import { Link } from "react-router-dom";

function MyTasksBoard(props) {
  const [tasks, getTasks] = useState([]);
  useEffect(() => {
    getTasks(props.tasks);
  }, [props.tasks]);
  const [message, showMessage] = useState(false);
  const [heading, setHeading] = useState("");
  const [messageText, setmessageText] = useState("");
  return (
    <>
      {/* <div className="statistics-page-upper-section">
        <div className="statistics-page-upper-section-button-section">
          <Link to="/tasks" className="link-a">
            <button>Task</button>
          </Link>
        </div>
      </div> */}

      <div className="my_task_board">
        <div className="board_columns">
          <div className="columns_names">
            <p>Task Name</p>
            <p>Status</p>
            <p>Urgency Level</p>
            <p>Action</p>
          </div>
          <div className="board_list">
            {tasks.map((item) => (
              <MyTaskList
                item={item}
                getUserTasksIds={props.getUserTasksIds}
                setUnDoneTask={props.setUnDoneTask}
                showMessage={showMessage}
                setHeading={setHeading}
                setmessageText={setmessageText}
              />
            ))}
            {message && (
              <Message
                heading={heading}
                message={messageText}
                showMessage={showMessage}
                getUserTasksIds={props.getUserTasksIds}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyTasksBoard;
