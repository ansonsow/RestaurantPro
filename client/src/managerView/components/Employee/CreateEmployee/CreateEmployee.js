import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../EditEmployee/EditEmployee.css";
import axios from "axios";
export default function CreateEmployee() {
  const userFields = useRef([]);
  const empId = useRef("");
  const closeDialogue = () => {
    //window.location.reload();
    document.getElementById("dialogueBox").style.display = "none";
  };

  const displayDialogue = async() => {
    let idPrefix = Math.floor(Math.random() * 9) + 1;
    let id = Math.floor(Math.random() * 100) + 1;
    let newEmployee = {
      user_id: `U${idPrefix}${id}`,
      name: userFields.name,
      surname: userFields.surname,
      email: userFields.email,
      job_title: userFields.job_title,
      password: "123456",
      type: userFields.type,
      gender: userFields.gender,
      restaurantName: userFields.restaurantName,
      contact_number: userFields.contact_number,
    };
    empId.user_id = newEmployee.user_id;
    console.log("empId: " + empId.user_id);
    await axios
      .post("http://localhost:8000/api/v1/users", newEmployee)
      .then((response) => {
        console.log("new employee saved:" + JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log("error in saving new task: " + error.message);
      });
    document.getElementById("dialogueBox").style.display = "flex";
  };
  const getName = (event) => {
    userFields.name = event.target.value;
    console.log("name: " + JSON.stringify(userFields));
  };
  const getDate = (event) => {
    userFields.date = event.target.value;
    console.log("date: " + JSON.stringify(userFields));
  };
  const getSurname = (event) => {
    userFields.surname = event.target.value;
    console.log("surname: " + JSON.stringify(userFields));
  };
  const getGender = (event) => {
    userFields.gender = event.target.value;
    console.log("gender: " + JSON.stringify(userFields));
  };
  const getEmail = (event) => {
    userFields.email = event.target.value;
    console.log("email: " + JSON.stringify(userFields));
  };
  const getAddress = (event) => {
    userFields.address = event.target.value;
    console.log("address: " + JSON.stringify(userFields));
  };
  const getContact = (event) => {
    userFields.contact_number = event.target.value;
    console.log("contact: " + JSON.stringify(userFields));
  };
  const getShift = (event) => {
    userFields.shift = event.target.value;
    console.log("shift: " + JSON.stringify(userFields));
  };
  const getJobTitle = (event) => {
    userFields.job_title = event.target.value;
    console.log("jobTitle: " + JSON.stringify(userFields));
  };
  const getJobType = (event) => {
    userFields.type = event.target.value;
    console.log("jobType: " + JSON.stringify(userFields));
  };
  const getRestaurantName = (event) => {
    userFields.restaurantName = event.target.value;
    console.log("restaurantName: " + JSON.stringify(userFields));
  };
  return (
    <>
      <div className="employee-page">
        <div className="employee-page-upper-section">
          <Link to="/employee"><button>Employee List</button></Link>
          <Link to="/create-employee"><button id='new-employee-btn'>New Employee</button></Link>
          {/* <Link to="/edit-employee"><button>Edit Employee</button></Link> */}
        </div>
        <div className="employee-page-lower-section">
          <div className="employee-page-lower-section-image-part">
                <div className="image-box"></div>
          </div>
          <div className="employee-page-lower-section-detail-part">
            <h2>Create New Employee Profile</h2>
            <div className="employee-detail-form">
              <div className="input-section">
                <p>Name</p>
                <input
                  type="text"
                  onChange={getName}
                  placeholder="ABC"
                  className="input-box"
                />
              </div>
              <div className="input-section">
                <p>Birth Date</p>
                <input
                  type="date"
                  placeholder="01.01.1999"
                  className="input-box"
                  onChange={getDate}
                />
              </div>
              <div className="input-section">
                <p>Surname</p>
                <input
                  type="text"
                  onChange={getSurname}
                  placeholder="ABC"
                  className="input-box"
                />
              </div>
              <div className="input-section">
                <p>Gender</p>
                <select
                  name="gender"
                  id="gender"
                  className="input-box"
                  onChange={getGender}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="input-section">
                <p>Email</p>
                <input
                  type="email"
                  placeholder="Something@gmai.com"
                  className="input-box"
                  onChange={getEmail}
                />
              </div>
              <div className="input-section">
                <p>Job Type</p>
                <select
                  name="type"
                  id="type"
                  className="input-box"
                  onChange={getJobType}
                >
                  <option value="Plate Designer">Plate Designer</option>
                  <option value="Server">Server</option>
                  <option value="Shift Lead">Shift Lead</option>
                  <option value="Cheff">Cheff</option>
                </select>
              </div>
              <div className="input-section">
                <p>Job Title</p>
                <select
                  name="job_title"
                  id="job_title"
                  className="input-box"
                  onChange={getJobTitle}
                >
                  <option value="Admin Lead">Admin</option>
                  <option value="Manager">Manager </option>
                  <option value="Employee">Employee</option>
                </select>
              </div>
              <div className="input-section">
                <p>Restaurant Name</p>
                <input
                  type="text"
                  placeholder="Restaurant Pro"
                  className="input-box"
                  defaultValue="East is East"
                  onChange={getRestaurantName}
                />
              </div>
              <div className="input-section">
                <p>Address</p>
                <input
                  type="text"
                  placeholder="A-Block Princess Park Faridabad"
                  className="input-box"
                  onChange={getAddress}
                />
              </div>
              {/* <div className="input-section">
                <p>Job Title</p>
                <select name="gender" id="gender" className="input-box">
                  <option value="admin">Admin</option>
                  <option value="teaching">Teaching</option>
                  <option value="staff">Stafee</option>
                </select>
              </div> */}
              <div className="input-section">
                <p>Contact Number</p>
                <input
                  type="text"
                  placeholder="+1"
                  className="input-box"
                  onChange={getContact}
                />
              </div>
              <div className="input-section">
                <p>Shift</p>
                <input
                  type="text"
                  placeholder="17:00-19:00"
                  className="input-box"
                  onChange={getShift}
                />
              </div>
            </div>
            <div className="text-area-section">
              <p>Notes</p>
              <textarea name="Notes" id=""></textarea>
            </div>
            <div className="button-section">
                    <button className='save-btn' onClick={displayDialogue}>Create</button>
                </div>
					   
            </div>
				
        </div>
    </div>
    <div className="save-change" id='dialogueBox'>
        <div className="save-change-dialogue">
          <p>{`Employee Created Successfully`}</p>
          {/* <b>{`Id: ${empId.user_id}`}</b> */}
          <button onClick={closeDialogue}>Ok</button>
        </div>
    </div>
    </>
  );
}