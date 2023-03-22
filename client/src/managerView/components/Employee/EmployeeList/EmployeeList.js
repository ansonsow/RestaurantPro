import React, {useState} from "react";
import "./EmployeeList.css";
import axios from "axios";
import { Link } from "react-router-dom";
import editIcon from "../../../../icons/Edit.svg";
import deleteIcon from "../../../../icons/delete.svg";
import { useEffect } from "react";

export default function EmployeeList() {

  const [allUsers, setAllUsers] = useState([]);
  // const [searchText, setSearchText] = useState("");

  const displayDiscardDialogue = () => {
    document.getElementById("discarddialogueBox").style.display = "flex";
  };
  const closeDiscardDialogue = () => {
    document.getElementById("discarddialogueBox").style.display = "none";
  };

  useEffect(() => {
    console.log("In Employee List");
    getAllUsers();
  }, []);

  //get all tasks
  const getAllUsers = async () => {
    try {
    const response = await axios.get("http://localhost:8000/api/v1/users");
    console.log("all users:" + JSON.stringify(response.data));
    setAllUsers(response.data);
    } catch (error) {
    console.log("error in fetching all task: " + error);
    }
    };

  // const deleteEmployee = (employeeId) => {
  //   const updatedUserList = allUsers.filter(
  //     (user) => user.id !== employeeId
  //   );
  //   setAllUsers(updatedUserList);
  //   };
      
  // const handleSearchTextChange = (e) => {
  //   setSearchText(e.target.value);
  // };
      
  // const filteredUsers = allUsers.filter((user) => {
  //   return (
  //     user.name.toLowerCase().includes(searchText.toLowerCase()) ||
  //     user.surname.toLowerCase().includes(searchText.toLowerCase()) ||
  //     user.group.toLowerCase().includes(searchText.toLowerCase()) ||
  //     user.title.toLowerCase().includes(searchText.toLowerCase()) ||
  //     user.restaurant.toLowerCase().includes(searchText.toLowerCase())
  //   );
  // });

  let currentUrl = window.location.href;
  useEffect(() => {
    if (currentUrl.includes("/employee")) {
      document.getElementById("employee-list-btn").style.backgroundColor =
        "#FFC619";
    }
  });
  return (
      <div className="employee-list-page">
        <div className="employee-list-page-upper-section">
          <div className="employee-list-page-upper-section-button-part">
            <Link to="/employee" className=".link-a">
              <button id="employee-list-btn">Employee List</button>
            </Link>
            <Link to="/create-employee" className=".link-a">
              <button>New Employee</button>
            </Link>
          </div>
          <div className="employee-list-page-upper-section-search-part">
            <input
              type="text"
              placeholder="Search Here"
              className="search-box"
              />
          </div>
        </div>
        <div className="employee-list-page-lower-section">
          <table>
            <thead>
              <tr>
                <th>Name Surname</th>
                <th>Group</th>
                <th>Title</th>
                <th>Restaurant</th>
                <th>Gender</th>
                <th>Job Title</th>
                <th>User ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user) => {
                return (
                  <tr>
                    <td>{user.name} {user.surname}</td>
                    <td>{user.group}</td>
                    <td>{user.type}</td>
                    <td>{user.restaurantName}</td>
                    <td>{user.gender}</td>
                    <td>{user.job_title}</td>
                    <td>{user.user_id}</td>
                    <td className="last-column">
                      <img
                        src={deleteIcon}
                        onClick={displayDiscardDialogue}
                        alt="" />
                      <Link to={`/edit-employee/${user.user_id}`} className="link-a">
                        <img src={editIcon} alt="" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="discard-change" id="discarddialogueBox">
        <div className="discard-change-dialogue">
          <p>Do You Want To Delete ?</p>
          <div className="discard-dialogue-button-section">
            <Link to="/employee" className="link-a">
              <button onClick={closeDiscardDialogue}>Delete</button>
            </Link>
            <button onClick={closeDiscardDialogue}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
}