import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdateEmployee() {
  let navigate = useNavigate();
  const [name, setName] = useState([]);
  const [age, setAge] = useState([]);
  const [position, setPosition] = useState([]);
  const [company, setCompany] = useState([]);
  const formCompany = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/employees", {
        name,
        age,
        position,
        company,
      })
      .then((data) => {
        console.log(data);
        navigate("/employees");
      });
  };

  return (
    <>
      <form onSubmit={formCompany}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            user name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            onChange={(e) => {
              setAge(e.target.value);
            }}
            type="number"
            className="form-control"
            id="age"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="position" className="form-label">
            Position
          </label>
          <input
            onChange={(e) => {
              setPosition(e.target.value);
            }}
            type="text"
            className="form-control"
            id="position"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="company" className="form-label">
            Company
          </label>
          <input
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            type="text"
            className="form-control"
            id="company"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default UpdateEmployee;
