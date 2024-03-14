import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Employee from "./Pages/Employee";
import Company from "./Pages/Company";
import { Routes, Route } from "react-router-dom";
import AddEmployee from "./Pages/AddEmployee";
import AddCompany from "./Pages/AddCompany";
import CompanyDetails from "./Pages/CompanyDetails";
import EmployeeDetails from "./Pages/EmployeeDetails";
import UpdateCompany from "./Pages/UpdateCompany";
import UpdateEmployee from "./Pages/UpdateEmployee";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-3 sidebar">
          <Sidebar />
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="employees" element={<Employee />} />
            <Route path="employees/add" element={<AddEmployee />} />
            <Route path="employees/:employeeId" element={<EmployeeDetails />} />
            <Route path="employees/update/:employeeId" element={<UpdateEmployee />} />
            <Route path="companies" element={<Company />} />
            <Route path="companies/add" element={<AddCompany />} />
            <Route path="companies/:companyId" element={<CompanyDetails />} />
            <Route path="companies/update/:companyId" element={<UpdateCompany />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
