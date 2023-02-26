import React, { useEffect, useState } from "react";
import "./Account.css";
import axios from "axios";
function Account(props) {
  const [userDetails, setUserDetails] = useState(props.account);

  const handle = (e) => {
    const newData = { ...userDetails };
    console.log("newData: " + JSON.stringify(newData));
    newData[e.target.id] = e.target.value;
    setUserDetails(newData);
  };
  const updateUser = (updateObject) => {
    console.log("updateObject in APi" + JSON.stringify(updateObject));
    if (updateObject !== undefined) {
      axios
        .put(
          `http://localhost:8000/api/v1/users/${updateObject._id}`,
          updateObject
        )
        .then((response) => {
          console.log("Updated Data:" + JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log("error in updating account details: " + error);
        });
    }
  };

  const saveChanges = () => {
    updateUser(userDetails);
  };
  return (
    <div className="account">
      {console.log("porps: " + JSON.stringify(props.account))}
      <form className="task_details">
        <div className="fields">
          <div className="form_field">
            <label for="task_name">Name</label>
            <input
              type="text"
              onChange={(e) => handle(e)}
              id="name"
              value={userDetails.name === undefined ? "" : userDetails.name}
            />
          </div>
          <div className="form_field">
            <label>Surname</label>
            <input
              type="text"
              onChange={(e) => handle(e)}
              id="surname"
              value={
                userDetails.surname === undefined ? "" : userDetails.surname
              }
            />
          </div>
        </div>

        <div className="fields">
          <div className="form_field">
            <label>Email</label>
            <input
              type="text"
              onChange={(e) => handle(e)}
              id="email"
              value={userDetails.email === undefined ? "" : userDetails.email}
            />
          </div>
          <div className="form_field">
            <label>Company Name</label>
            <input type="text" value="East is East" />
          </div>
        </div>

        <div className="fields">
          <div className="form_field">
            <label>Job Title</label>
            <input type="text" value="manager" />
          </div>
          <div className="form_field">
            <label>Shift</label>
            <input type="text" value="7:30-9:30" />
          </div>
        </div>

        <div className="fields">
          <div className="form_field">
            <label>BirthDay</label>
            <input type="text" value="09-09-1998" />
          </div>
          <div className="form_field">
            <label>Gender</label>
            <input
              type="text"
              onChange={(e) => handle(e)}
              id="gender"
              value={userDetails.gender === undefined ? "" : userDetails.gender}
            />{" "}
          </div>
        </div>

        <div className="fields">
          <div className="form_field">
            <label>ContactNumber</label>
            <input type="text" value="09-09-1998" />
          </div>
          <div className="form_field">
            <label>Address</label>
            <input type="text" value="Female" />
          </div>
        </div>

        <div className="form_field">
          <label>Other Notes</label>
          <input type="text" />
        </div>

        <div className="call_to_actions">
          <div className="back_button">
            <p>Discard</p>
          </div>

          <div className="back_button" onClick={saveChanges}>
            <p>Save Change</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Account;
