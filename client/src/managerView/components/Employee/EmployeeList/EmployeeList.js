import React, {useState} from "react";
import "./EmployeeList.css";
import axios from "axios";
import { Link } from "react-router-dom";
import editIcon from "../../../../icons/Edit.svg";
import deleteIcon from "../../../../icons/delete.svg";

import { useEffect } from "react";

import { Popup, PopupFunction } from "../../../../employeeView/components/popup/Popup";

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
    // const response = await axios.get(`http://localhost:8000/api/v1/users`);
    const response = await axios.get(`${process.env.REACT_APP_SERVER}users`);

    // ${process.env.REACT_APP_SERVER}
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

  // let currentUrl = window.location.href;
  // useEffect(() => {
  //   if (currentUrl.includes("/employee")) {
  //     document.getElementById("employee-list-btn").style.backgroundColor =
  //       "#FFC619";
  //   }
  // });
  let editSVG;
  let trashSVG;

  async function grabSVG(url){
    return fetch(url)
    .then(response => response.text())
    .then(result => {
      return result;
    });
  }

  grabSVG(editIcon).then(eyqxf => {
    editSVG = eyqxf;
    document.querySelectorAll(".edit_svg").forEach(thdkv => {
      thdkv.innerHTML = editSVG
    })        
  })

  grabSVG(deleteIcon).then(eyqxf => {
    trashSVG = eyqxf;
    document.querySelectorAll(".trash_svg").forEach(thdkv => {
      thdkv.innerHTML = trashSVG
    })        
  })

  

  return (
    <>
      <div className="employee-list-page">
        <div className="tab-buttons-container">
          <button className="tab-buttons active">Employee List</button>

          <Link to="/create-employee">
            <button className="tab-buttons">New Employee</button>
          </Link>

          <button className="tab-buttons disabled">Edit Employee</button>
        </div>

        <div className="employee_list_table">
          <div className="thead">
            <div col-name="employee name">Name</div>
            <div col-name="power role">Title</div>
            <div col-name="restaurant">Restaurant</div>
            <div col-name="job title">Job Title</div>
            <div col-name="account number">Account No.</div>
            <div col-name="actions">Actions</div>
          </div>{/* end <thead> */}

          <div className="tbody">
            {allUsers.map((user) => {
              return (
                <div className="tr">
                  <div className="td" col-name="employee name">{user.name} {user.surname}</div>
                  <div className="td" col-name="power role">{user.type}</div>
                  <div className="td" col-name="restaurant">{user.restaurantName}</div>
                  <div className="td" col-name="job title">{user.job_title}</div>
                  <div className="td" col-name="account number">{user.user_id}</div>
                  <div className="td" col-name="actions">                    
                    <Link to="/edit-employee">
                      <div className="actions_svg edit_svg"></div>
                    </Link>
                    
                    <div className="actions_svg trash_svg" onClick={(e) => {PopupFunction("Do you want to delete this account?", "yes no")(e);}}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>{/* end <table> */}

      {/*-----------------------------------*/}

      <div className="discard-change" id="discarddialogueBox">
        {/* <div className="discard-change-dialogue">
          <p>Do You Want To Delete ?</p>
          <div className="discard-dialogue-button-section">
            <Link to="/employee" className="link-a">
              <button onClick={closeDiscardDialogue}>Delete</button>
            </Link>
            <button onClick={closeDiscardDialogue}>No</button>
          </div>
        </div> */}
      </div>
    </div>

    <Popup/>
    </>
  );
}