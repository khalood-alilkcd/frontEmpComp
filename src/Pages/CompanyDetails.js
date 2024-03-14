import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CompanyDetails() {
  let { companyId } = useParams();
  const [company, setCompany] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:9000/companies/${companyId}`)
      .then((res) => {
        const companyData = res.data;
        console.log(companyData);
        setCompany(companyData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {company && (
        <div>
          <h2>Name of Company {company.name}</h2>
          <h3>Country of Exists Company {company.country}</h3>
          <h3>City of Exists Company {company.city}</h3>
        </div>
      )}
    </>
  );
}
export default CompanyDetails;
