import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EmployeeDetails() {
  let { employeeId } = useParams();
  const [employee, setEmployee] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:9000/employees/${employeeId}`)
      .then((res) => {
        const empDetails = res.data;
        console.log(empDetails);
        setEmployee(empDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>{employee && 
        <div>
            <h2>{employee.name}</h2>
            <br />
            <h3>{employee.age}</h3>
            <br />
            <h3>{employee.position}</h3>
            <br />
            <h3>{employee.company}</h3>
        </div>
      }</>
  );
}
export default EmployeeDetails;
