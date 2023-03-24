import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./Account.css";
import axios from "axios";
import { CloudLightning } from "react-feather";
function Account(props) {
  const [userDetails, setUserDetails] = useState({});
  const [oldDetails, setOldDetails] = useState({});
  const nav = useNavigate();


  useEffect(() => {
    if (Object.keys(props.account).length !== 0) {
      setUserDetails(props.account);
      setOldDetails(userDetails);

    }
  }, [props.account]);

  const handle = (e) => {
    const newData = { ...userDetails };
    // console.log("newData: " + JSON.stringify(newData));


    newData[e.target.id] = e.target.value;
    setUserDetails(newData);
    console.log(userDetails);
  };


  const updateUser = (updateObject) => {
    // console.log("updateObject in APi" + JSON.stringify(updateObject));
    // if (updateObject !== undefined) {
    //   axios
    //     .put(
    //       `http://localhost:8000/api/v1/users/${updateObject._id}`,
    //       updateObject
    //     )
    //     .then((response) => {
    //       console.log("Updated Data:" + JSON.stringify(response.data));
    //     })
    //     .catch((error) => {
    //       console.log("error in updating account details: " + error);
    //     });
    // }
    axios.put(`${process.env.REACT_APP_SERVER}users/${localStorage.userId}`, userDetails).then(response=>{
      console.log(response);
      window.location.reload();
    }).catch(error=>{
      console.log(error);
    })

  };

  const saveChanges = () => {
    updateUser(userDetails)
    // window.location.reload();
  };

  // pbby need a confirm screen
  const handleDiscard = () => {
    const inputs = document.getElementsByTagName('input');
    console.log(inputs);
    for(let i = 0 ; i<inputs.length-1;i++){
      console.log(inputs[i].id);
      let j = inputs[i].id;
      console.log(oldDetails[j]);
      if(oldDetails[j]){
        inputs[i].value = oldDetails[j];
      }
    }
    
  }

  // pbby need a confim screen
  // currently not in place
  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_SERVER}users/${localStorage.userId}`).then(result=>{
      nav('/home');
      window.location.reload();
    })
  }

  /*------- HT POPUP BOX -------*/
  const htPopup = (msg, whichButtons) => (e) => {
      // document.getElementById("deleteaccountdialogueBox").style.display = "flex"
      let popupSpeed = getComputedStyle(document.documentElement).getPropertyValue("--Popup-Msg-Box-Fade-Speed");
      popupSpeed = Number(popupSpeed.replace(/[^\d.]*/g,""));

      let ht_popup = document.querySelector(".ht_popup");
      let popupSentence = ht_popup.querySelector("h3");

      let okayBtn = ht_popup.querySelector(".btn_okay");
      let yesBtn = ht_popup.querySelector(".btn_yes");
      let noBtn = ht_popup.querySelector(".btn_no");
      let cancelBtn = ht_popup.querySelector(".btn_cancel");
      
      popupSentence.innerHTML = msg.trim();
      ht_popup.style.display = "grid";

      whichButtons = whichButtons.toLowerCase();

      if(whichButtons.indexOf("okay") > -1){
        okayBtn.style.display = "flex";

        if(whichButtons.indexOf("okay:/") > -1){
          let chopt = whichButtons.substring(whichButtons.indexOf("okay:/"));
          let split = chopt.split(" ")[0];
          let splitURL = split.replace("okay:","");
          okayBtn.setAttribute("onclick",`location.href='${splitURL}'`)
        }
      }

      if(whichButtons.indexOf("yes") > -1){
        yesBtn.style.display = "flex";
      }

      if(whichButtons.indexOf("no") > -1){
        noBtn.style.display = "flex";
      }

      if(whichButtons.indexOf("cancel") > -1){
        cancelBtn.style.display = "flex";
      }

      setTimeout(() => {
        ht_popup.classList.add("fade-in");
      },0)

      // on dismiss, reset everything
      ht_popup.querySelectorAll("button").forEach(clgkv => {
        clgkv.addEventListener("click", () => {
          ht_popup.classList.remove("fade-in");

          setTimeout(() => {
            ht_popup.style.display = "none";
            clgkv.style.display = "none";
            clgkv.parentNode.querySelectorAll("button").forEach(pqvxx => {
              pqvxx.style.display = "none";
              pqvxx.removeAttribute("onclick");
            })
          },popupSpeed)
        })
      })
  }// end ht popup box

  return (
    <>
    {/*------- HT POPUP BOX -------*/}
    <div className="ht_popup">
      <div className="ht_popup_box">
        <h3> </h3>
        <div className="ht_popup_buttons">
          <button className="btn_okay">Okay</button>
          <button className="btn_yes">Yes</button>
          <button className="btn_no">No</button>
          <button className="btn_cancel">Cancel</button>
        </div>
      </div>
    </div>{/* end popup box */}

    <div className="account_page">
      <form className="task_details">
        {console.log("props in account: " + JSON.stringify(props.account))}
        {console.log("userDetails: " + JSON.stringify(userDetails))}

        {/* form column 1 */}
        <div className="form_column photo_col">
          <div className="photo_col_inner">
            <div className="photo_section"></div>
            <div className="acc_side_box">
              <h3>Actions</h3>
              <ul>
                {/*---- CHANGE PASSWORD ----*/}
                <li>
                  <Link to="/change-password">Change Password</Link>
                </li>

                {/*---- DELETE ACCOUNT ----*/}
                <li onClick={
                  (e) => htPopup("Do you want to<br>delete this account?", "yes no")(e)
                }>Delete Account</li>
              </ul>
            </div>
          </div>
        </div>{/* end form column 1 */}

        {/* form column 2 */}
        <div className="form_column">
            <div className="form_field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                onChange={(e) => handle(e)}
                id="name"
                value={userDetails.name === undefined ? "" : userDetails.name}
              />
            </div>

            <div className="form_field">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                onChange={(e) => handle(e)}
                id="surname"
                value={
                  userDetails.surname === undefined ? "" : userDetails.surname
                }
              />
            </div>

            <div className="form_field">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                onChange={(e) => handle(e)}
                id="email"
                value={userDetails.email === undefined ? "" : userDetails.email}
              />
            </div>

            <div className="form_field">
              <label htmlFor="companyName">Company Name</label>
              <input type="text" id="companyName" />
            </div>

            <div className="form_field">
              <label>Job Title</label>
              <input
                type="text"
                onChange={(e) => handle(e)}
                id="job_title"
                value={userDetails.job_title === undefined ? "" : userDetails.job_title}
              />
            </div>

            <div className="form_field">
              <label htmlFor="shift">Shift</label>
              <input
                type="text"
                onChange={(e) => handle(e)}
                id="shift"
                value={userDetails.shift === undefined ? "" : userDetails.shift}
              />
            </div>
          </div>{/* end form column 2 */}
          
          <div className="form_column"> {/* form column 3 */}
            
              <div className="form_field">
                <label htmlFor="birthday">Birth Date</label>
                <input
                type="text"
                onChange={(e) => handle(e)}
                id="birthday"
                value={userDetails.birthday === undefined ? "" : userDetails.birthday}
              />
              </div>

              <div className="form_field">
                <label htmlFor="gender">Gender</label>
                <input
                  type="text"
                  onChange={(e) => handle(e)}
                  id="gender"
                  value={userDetails.gender === undefined ? "" : userDetails.gender}
                />{" "}
              </div>

              <div className="form_field">
                <label htmlFor="contact_number">Contact Number</label>
                <input
                type="text"
                onChange={(e) => handle(e)}
                id="contact_number"
                value={userDetails.contact_number === undefined ? "" : userDetails.contact_number}
              />
              </div>

              <div className="form_field">
                <label htmlFor="address">Address</label>
                <input
                type="text"
                onChange={(e) => handle(e)}
                id="address"
                value={userDetails.address === undefined ? "" : userDetails.address}
              />
              </div>

              <div className="form_field">
                <label htmlFor="pinCode">Attendance Screen Code</label>
                <input type="text" id="pinCode" value="****" />
              </div>

              <div className="form_field">
                <label htmlFor="notes">Other Notes</label>
                <input
                type="text"
                onChange={(e) => handle(e)}
                id="notes"
                value={userDetails.notes === undefined ? "" : userDetails.notes}
              />
              </div>
        </div>{/* end form column 3 */}
        
      </form>

      <div className="call_to_actions">
        <button className="discard_btn hollow" onClick={(e) => {htPopup("Changes discarded.", "okay")(e); handleDiscard()}}>Discard</button>

        {/* 
          okay:/account
          - this means that "okay" button will show
          - ":" is a separator that indicates that the button will go to a different url
          - "/account" is the url that the button should go to
         */}
        <button className="save_btn" onClick={(e) => {htPopup("Changes changed successfully.", "okay:/account")(e);  }}>Save Changes</button>
        
      </div>
    </div>
    </>
  );
}

export default Account;
