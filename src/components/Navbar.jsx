import React from "react";
import { Outlet, Link } from "react-router-dom";
import './homepage.scss'

const Navbar = () => {
  return (
    <div>
        {/* header  */}
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand active text-primary" href="">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ms-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li className=" nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-primary"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company{" "}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item text-danger" href="#">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-danger" href="#">
                      Cloud Computing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-danger" href="#">
                      Quality Assurance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-danger" href="#">
                      Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-danger" href="#">
                      Payment Integration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-danger" href="#">
                      E-Commerce Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-danger" href="#">
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-danger" href="#">
                      Saas Development
                    </a>
                  </li>
                </ul>
              </li>
              <li className=" nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-primary"
                  href="#"
                  id="navbarDropdowns"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services{" "}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdowns">
                  <li>
                    <a className="dropdown-item" href="#">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cloud Computing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Quality Assurance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Payment Integration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      E-Commerce Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Saas Development
                    </a>
                  </li>
                </ul>
              </li>

              {/* <li className="nav-item"> */}
              <Link className="nav-link text-primary" to="/login">
                Login
              </Link>
              {/* </li> */}

              {/* <li className="nav-item"> */}
              <Link className="nav-link text-primary" to="/register">
                Register
              </Link>
              {/* </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>{" "}
          </div>
        </div>
      </nav>
      <Outlet />

 
    </div>
  );
};

export default Navbar;
