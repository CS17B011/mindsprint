import React, { Component } from "react";
import "./nav.css";

class Navbar extends Component {
  style = { display: "flex", "justify-content": "flex-end" };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Mindspirint
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a
                className="nav-link btn btn-outline-primary button"
                href="#"
                // id="nav1"
              >
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active  ">
              <a className="nav-link btn btn-outline-primary button" href="#">
                Features
              </a>
            </li>
            <li className="nav-item active">
              <a
                className="nav-link btn btn-outline-primary button"
                href="#"
                // id="nav1"
              >
                Pricing
              </a>
            </li>
            <li className="nav-item dropdown active ">
              <a
                className="nav-link  btn btn-outline-primary button  "
                href="#!"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id=" navbarDropdownMenuLink "
              >
                <span className="dropdown-toggle">Dropdown link</span>
              </a>
              <div
                className="dropdown-menu "
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#" id="nav1">
                  Action
                </a>
                <a className="dropdown-item" href="#" id="nav1">
                  Another action
                </a>
                <a className="dropdown-item" href="#" id="nav1">
                  Something else here
                </a>
              </div>
            </li>

            <li className="nav-item active  ">
              <a className="nav-link btn btn-outline-primary button" href="#!">
                Login/Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
