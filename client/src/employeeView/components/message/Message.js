import React, { useEffect, useState } from "react";
import "./Message.css";
function Message(props) {
  const [message, showmessage] = useState(true);

  // the side-effect runs once after the initial rendering.
  useEffect(() => {
    setTimeout(() => {
      showmessage(false);
    }, 2000);
  }, [props, message]);

  const changeStatus = () => {
    props.showMessage(false);
    // props.setShowBoard(true);
  };
  return (
    <>
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
