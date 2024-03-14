import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul className="list-unstyled">
      <li>
        <Link to={"/employees"}> Get all Employees</Link>
      </li>
      <li>
        <Link to={"/companies"}> Get all Companies</Link>
      </li>
    </ul>
  );
}
export default Sidebar;
