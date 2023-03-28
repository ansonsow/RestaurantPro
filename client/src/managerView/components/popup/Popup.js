import React, { useEffect } from "react";
function Popup(props) {
  useEffect(() => {
    console.log("In popup");
    PopupFunction(props.msg, props.whichButtons, props.e);
  });
  const changePopupStatus = () => {
    props.showPopup(false);
  };
  const PopupFunction = (msg, whichButtons) => {
    // document.getElementById("deleteaccountdialogueBox").style.display = "flex"
    let popupSpeed = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--Popup-Msg-Box-Fade-Speed");
    popupSpeed = Number(popupSpeed.replace(/[^\d.]*/g, ""));

    let ht_popup = document.querySelector(".ht_popup");
    let popupSentence = ht_popup.querySelector("h3");

    let okayBtn = ht_popup.querySelector(".btn_okay");
    let yesBtn = ht_popup.querySelector(".btn_yes");
    let noBtn = ht_popup.querySelector(".btn_no");
    let cancelBtn = ht_popup.querySelector(".btn_cancel");

    popupSentence.innerHTML = msg.trim();
    ht_popup.style.display = "grid";

    whichButtons = whichButtons.toLowerCase();

    if (whichButtons.indexOf("okay") > -1) {
      okayBtn.style.display = "flex";

      if (whichButtons.indexOf("okay:/") > -1) {
        let chopt = whichButtons.substring(whichButtons.indexOf("okay:/"));
        let split = chopt.split(" ")[0];
        let splitURL = split.replace("okay:", "");
        // okayBtn.setAttribute("onclick", { changePopupStatus });
      }
    }

    if (whichButtons.indexOf("yes") > -1) {
      yesBtn.style.display = "flex";
    }

    if (whichButtons.indexOf("no") > -1) {
      noBtn.style.display = "flex";
    }

    if (whichButtons.indexOf("cancel") > -1) {
      cancelBtn.style.display = "flex";
    }

    setTimeout(() => {
      ht_popup.classList.add("fade-in");
    }, 0);

    // on dismiss, reset everything
    ht_popup.querySelectorAll("button").forEach((clgkv) => {
      clgkv.addEventListener("click", () => {
        ht_popup.classList.remove("fade-in");

        setTimeout(() => {
          ht_popup.style.display = "none";
          clgkv.style.display = "none";
          clgkv.parentNode.querySelectorAll("button").forEach((pqvxx) => {
            pqvxx.style.display = "none";
            pqvxx.removeAttribute("onclick");
          });
        }, popupSpeed);
      });
    });
  };

  return (
    <div className="ht_popup">
      <div className="ht_popup_box">
        <h3> </h3>
        <div className="ht_popup_buttons">
          <button className="btn_okay" onClick={changePopupStatus}>
            Okay
          </button>
          <button className="btn_yes">Yes</button>
          <button className="btn_no">No</button>
          <button className="btn_cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
