import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Employee() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    getAllEmployee();
  }, []);
  const getAllEmployee = () => {
    fetch("http://localhost:9000/employees")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
      });
  };
  const deleteEmployee = (employeeId) => {
    Swal.fire({
      title: `Are you sure to delete ${employeeId} ?`,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:9000/employees/${employeeId}`, {
          method: "DELETE",
        })
          .then((res) => {
            res.json();
          })
          .then((data) => {
            getAllEmployee();
          });
      }
    });
  };

  return (
    <>
      <Link to={"/employees/add"} className="btn btn-success mt-3">
        Add new Employee
      </Link>
      <table className="table table-success table-striped mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th className="w-25">Position</th>
            <th>Company</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {employees &&
            employees?.map((emp) => {
              return (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.age}</td>
                  <td>{emp.position}</td>
                  <td>{emp.company}</td>
                  <td>
                    <button
                      onClick={() => {
                        deleteEmployee(emp.id);
                      }}
                      type="button"
                      className="btn btn-danger btn-sm "
                    >
                      Delete
                    </button>
                    <Link
                      to={`/employees/${emp.id}`}
                      type="button"
                      className="btn btn-primary btn-sm ms-2"
                    >
                      View
                    </Link>
                    <button
                      type="button"
                      className="btn btn-success btn-sm ms-2"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
export default Employee;
