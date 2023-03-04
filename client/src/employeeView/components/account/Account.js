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
    axios.put(`http://localhost:8000/api/v1/users/${localStorage.userId}`, userDetails).then(response=>{
      console.log(response);
    }).catch(error=>{
      console.log(error);
    })

  };

  const saveChanges = () => {
    updateUser(userDetails);
  };


  return (
    <div className="account">
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
                <li>Change Password</li>
                <li>Delete Account</li>
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
        <button className="discard_btn hollow">Discard</button>

        <button className="save_btn" onClick={saveChanges}>Save Changes</button>
      </div>
    </div>
  );
}

export default Account;
