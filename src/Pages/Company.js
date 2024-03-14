import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
function Company() {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    getAllCompany();
  }, []);

  const getAllCompany = () => {
    fetch("http://localhost:9000/companies")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  };

  
  const deleteCompany = (companyId) => {
    Swal.fire({
      title: `Are you sure to delete ${companyId} ?`,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:9000/companies/${companyId}`, {
          method: "DELETE",
        })
          .then((res) => {
            res.json();
          })
          .then((data) => {
            getAllCompany();
          });
      }
    });
  };
  
  return (
    <>
      <Link to={"/companies/add"} className="btn btn-success mt-3">
        Add new Company
      </Link>
      <table className="table table-success table-striped mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {companies &&
            companies?.map((company) => {
              return (
                <tr key={company.id}>
                  <td>{company.id}</td>
                  <td>{company.name}</td>
                  <td className="w-25">{company.city}</td>
                  <td>{company.country}</td>
                  <td className="">
                    <button
                      onClick={() => {
                        deleteCompany(company.id);
                      }}
                      type="button"
                      className="btn btn-danger btn-sm "
                    >
                      Delete
                    </button>
                    <Link
                      to={`/companies/${company.id}`}
                      type="button"
                      className="btn btn-primary btn-sm ms-2"
                    >
                      View
                    </Link>
                    <Link
                      to={`/companies/update/${company}`}
                      type="button"
                      className="btn btn-success btn-sm ms-2"
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
export default Company;
