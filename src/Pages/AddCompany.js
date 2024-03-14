import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function AddCompany() {
const navigate = useNavigate();
const [name, setName] = useState("");
const [city, setCity] = useState("");
const [country, setCountry] = useState("");

const formSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:9000/companies", {
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
            onChange={(e) => {
            setCity(e.target.value);
            }}
            type="text"
            className="form-control"
            id="city"
        />
        </div>
        <button type="submit" className="btn btn-primary">
        Submit
        </button>
    </form>
    </>
);
}
export default AddCompany;
