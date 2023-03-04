import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import CreateEmployee from './components/Employee/CreateEmployee/CreateEmployee';
import EditEmployee from './components/Employee/EditEmployee/EditEmployee';
import EmployeeList from './components/Employee/EmployeeList/EmployeeList';
function ManagerView() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <Sidebar/>
      <Routes>
        <Route path="/employee" element={<EmployeeList/>} />
        <Route path="/create-employee" element={<CreateEmployee/>} />
        <Route path="/edit-employee" element={<EditEmployee/>} />
      </Routes>
    </Router>
    </>
  );
}

export default ManagerView;
