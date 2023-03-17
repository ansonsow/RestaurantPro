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
  return (
    <>
      {message && (
        <div className="message">
          <h4>{props.heading}</h4>
          <h5>{props.message}</h5>
          <button>Okay</button>
        </div>
      )}
    </>
  );
}

export default Message;
