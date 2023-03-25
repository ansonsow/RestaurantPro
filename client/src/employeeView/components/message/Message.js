import React, { useEffect, useState } from "react";
import "./Message.css";
function Message(props) {
  const [message, showmessage] = useState(true);

  // the side-effect runs once after the initial rendering.
  // useEffect(() => {
  //   props.getUserTasksIds(localStorage.getItem("userId"));
  //   console.log("in message");
  //   setTimeout(() => {
  //     console.log("in set time out ");
  //     // showmessage(false);
  //   }, 1000);
  // }, [message]);

  const changeStatus = () => {
    props.showMessage(false);
    props.getUserTasksIds(localStorage.getItem("userId"));
    // props.setShowBoard(true);
  };
  return (
    <>
      {console.log("in message")}
      {message && (
        <div className="message">
          <h4>{props.heading}</h4>
          <h5>{props.message}</h5>
          <button onClick={changeStatus}>Ok</button>
        </div>
      )}
    </>
  );
}

export default Message;
