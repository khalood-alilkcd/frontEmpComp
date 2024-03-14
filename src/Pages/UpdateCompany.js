import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function UpdateCompany() {
  let companyId = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:9000/companies/update/${companyId}`, {
        name,
        city,
        country,
      })
      .then((data) => {
        console.log(data);
        navigate("/companies");
      });
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            type="text"
            className="form-control"
            id="country"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type="text"
            className="form-control"
            id="city"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </>
  );
}
export default UpdateCompany;
