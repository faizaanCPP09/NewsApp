import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar =()=> {
    return (
      <div>
        <nav className="navbar fixed-top navbar-dark bg-dark navbar-expand">
          <div className="container-fluid">
            <div className="navbar-brand">
              NewsMonkey
            </div>
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <NavLink
                    className="btn btn-outline-warning nav-link"
                    activeclassname="btn-warning"
                    to="/general"
                  >
                    General
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="btn btn-outline-primary nav-link mx-2"
                    activeclassname="btn-primary"
                    to="/business"
                  >
                    Business
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="btn btn-outline-success nav-link mx-2"
                    activeclassname="btn-success"
                    to="/entertainment"
                  >
                    Entertainment
                  </NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink
                    className="btn btn-outline-info nav-link mx-2"
                    activeclassname="btn-info"
                    to="/health"
                  >
                    Health
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="btn btn-outline-primary nav-link mx-2"
                    activeclassname="btn-primary"
                    to="/science"
                  >
                    Science
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="btn btn-outline-danger nav-link mx-2"
                    activeclassname="btn-danger"
                    to="/sports"
                  >
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="btn btn-outline-success nav-link mx-2"
                    activeclassname="btn-success"
                    to="/technology"
                  >
                    Technology
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  
}

export default Navbar;
