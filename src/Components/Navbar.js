import { Link } from "react-router-dom";
import "./Nav.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="nav-link">
          NavbarTag
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item active">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>

            <li className="nav-item active">
              <Link to="/employees" className="nav-link active ">
                Employee
              </Link>
            </li>

            <li className="nav-item active">
              <Link to="/companies" className="nav-link active">
                Company
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
