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

  let popupSpeed_ = getComputedStyle(document.documentElement).getPropertyValue("--Popup-Msg-Box-Fade-Speed");
  popupSpeed_ = Number(popupSpeed_.replace(/[^\d.]*/g,""));

  const changeStatus = () => {
    // props.showMessage(false);
    // props.getUserTasksIds(localStorage.getItem("userId"));
    document.querySelector(".ht_popup").classList.remove("fade-in-css-ani");
    document.querySelector(".ht_popup").classList.add("fade-out-css-ani")

    setTimeout(() => {
      props.showMessage(false);
      props.getUserTasksIds(localStorage.getItem("userId"));
    },popupSpeed_)
    // props.setShowBoard(true);
  };
  return (
    <>
      {console.log("in message")}
      {message && (
        <div className="ht_popup fade-in-css-ani pop_always_show">
          <div className="ht_popup_box">
            <h3>{props.heading}</h3>
            <h3>{props.message}</h3>
            
            <div className="ht_popup_buttons">
              <button className="btn_okay btn_always_show" onClick={changeStatus}>Okay</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Message;
