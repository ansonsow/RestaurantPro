import React, { useEffect, useState } from "react";
import "./Message.css";
import { X } from "react-feather";
function Message(props) {
  const [message, showmessage] = useState(true);

  // the side-effect runs once after the initial rendering.
  useEffect(() => {
    setTimeout(() => {
      showmessage(false);
    }, 1000);
  }, [props, message]);
  return (
    <>
      {message && (
        <div className="message">
          {console.log("In message")}
          <div className="cross">
            <X />
          </div>
          <h4>{props.heading}</h4>
          <h5>{props.message}</h5>
        </div>
      )}
    </>
  );
}

export default Message;
