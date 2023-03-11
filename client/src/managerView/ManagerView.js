
import './ManagerView.css';
import Sidebar from './components/Sidebar/SideBar';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import CreateEmployee from "./components/Employee/CreateEmployee/CreateEmployee";
import EditEmployee from "./components/Employee/EditEmployee/EditEmployee";
import EmployeeList from "./components/Employee/EmployeeList/EmployeeList";
import AllTask from "./components/Tasks/AllTasks/AllTask";
import CreateTask from "./components/Tasks/CreateTasks/CreateTask";
import DailyAttendance from "./components/Tasks/DailyAttendance/DailyAttendance";
import AssignTask from "./components/Tasks/AssignTasks/AssignTask";
import StatisticsPage from "./components/StatisticsPage/Statistics/Statistics";
import Home from "./components/home/Home";
function ManagerView() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Sidebar />
        <Routes>
          <Route path="/employee" element={<EmployeeList />} />
          <Route path="/task" element={<AllTask />} />
          <Route path="/create-employee" element={<CreateEmployee />} />
          <Route path="/edit-employee" element={<EditEmployee />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/daily-attendance" element={<DailyAttendance />} />
          <Route path="/assign-task" element={<AssignTask />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default ManagerView;
