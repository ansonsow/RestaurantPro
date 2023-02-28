import React, { useEffect, useState } from "react";
import "./Account.css";
import axios from "axios";
function Account(props) {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    if (Object.keys(props.account).length !== 0) {
      setUserDetails(props.account);
    }
  }, [props.account]);

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
      <form className="task_details">
        {console.log("props in account: " + JSON.stringify(props.account))}
        {console.log("userDetails: " + JSON.stringify(userDetails))}

        <div className="fields">
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
        </div>

        <div className="fields">
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
            <input type="text" id="companyName" value="East is East" />
          </div>
        </div>

        <div className="fields">
          <div className="form_field">
            <label>Job Title</label>
            <input type="text" value="server" />
          </div>
          <div className="form_field">
            <label htmlFor="date">Shift</label>
            <input type="text" id="date" value="7:30-9:30" />
          </div>
        </div>

        <div className="fields">
          <div className="form_field">
            <label htmlFor="birthDate">BirthDay</label>
            <input type="text" id="birthDate" value="09-09-1998" />
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
        </div>

        <div className="fields">
          <div className="form_field">
            <label htmlFor="contactNumber">ContactNumber</label>
            <input type="text" id="contactNumber" value="7786571109" />
          </div>
          <div className="form_field">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" value="Main st" />
          </div>
        </div>

        <div className="form_field">
          <label htmlFor="other">Other Notes</label>
          <input type="text" id="other" />
        </div>

        <div className="call_to_actions">
          <div className="back_button">
            <p>Discard</p>
          </div>

          <div className="back_button" onClick={saveChanges}>
            <p>Save Change</p>
          </div>

          <div className="back_button">
            <p>Home</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Account;
