import React from 'react'
import "./EmployeeList.css"
import {Link} from 'react-router-dom'
import editIcon from "../../images/Edit.svg"
import deleteIcon from "../../images/delete.svg"

export default function EmployeeList() {
  return (
    <>
      <div className="employee-list-page">
        <div className="employee-list-page-upper-section">
          <div className="employee-list-page-upper-section-button-part">
            <Link
              to="/employee"
              className='link-a'><button>Employee List</button></Link>
                    <Link to="/create-employee" className='
              link-a'
            >
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
                <th>Account No.</th>
                <th>Start Work Date</th>
                <th>Last Edit</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sachin Jha</td>
                <td>Admin</td>
                <td>Admin</td>
                <td>Princee Vila</td>
                <td>8742920558</td>
                <td>19-02-2003</td>
                <td>17-02-2021</td>
                <td className="last-column">
                  <Link to="/edit-employee" className="link-a">
                    <img src={deleteIcon} alt="" />
                  </Link>
                  <Link to="/edit-employee" className="link-a">
                    <img src={editIcon} alt="" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Sachin Jha</td>
                <td>Admin</td>
                <td>Admin</td>
                <td>Princee Vila</td>
                <td>8742920558</td>
                <td>19-02-2003</td>
                <td>17-02-2021</td>
                <td className="last-column">
                  <Link to="/edit-employee" className="link-a">
                    <img src={deleteIcon} alt="" />
                  </Link>
                  <Link to="/edit-employee" className="link-a">
                    <img src={editIcon} alt="" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Sachin Jha</td>
                <td>Admin</td>
                <td>Admin</td>
                <td>Princee Vila</td>
                <td>8742920558</td>
                <td>19-02-2003</td>
                <td>17-02-2021</td>
                <td className="last-column">
                  <Link to="/edit-employee" className="link-a">
                    <img src={deleteIcon} alt="" />
                  </Link>
                  <Link to="/edit-employee" className="link-a">
                    <img src={editIcon} alt="" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}