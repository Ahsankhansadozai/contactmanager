import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-bark bg-success mb-3 py-0 ">
      <div className="container">
        <a href="/" className="navbar-brand text-light ">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link text-light">
                <i className="fas fa-plus" />
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-light">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;

Header.defualtProps = {
  branding: "My App"
};

Header.protoType = {
  branding: PropTypes.string.isRequired
};
