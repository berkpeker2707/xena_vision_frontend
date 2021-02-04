import React from "react";
import XenaLogo from "../../imgs/xenavision_logo.png";
import "./header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="headerComponent" ref={(el) => (this.el = el)}>
        <div className="headerWrapper">
          <nav className="headerLogo">
            <Link to={"/"}>
              <img
                className="XenaLogo"
                src={XenaLogo}
                alt="Xena Vision Logo"
                style={{ width: "35%" }}
              />
            </Link>
          </nav>
          <ul className="headerList">
            <Link to={"/"} style={{ textDecoration: "none", margin: "auto" }}>
              <li>Home</li>
            </Link>
            <a
              href="#ourServices"
              style={{ textDecoration: "none", margin: "auto" }}
            >
              <li>Our Services</li>
            </a>
            <Link
              to={"/reviews"}
              style={{ textDecoration: "none", margin: "auto" }}
            >
              <li>Reviews</li>
            </Link>
            <Link
              to={"/contact"}
              style={{ textDecoration: "none", margin: "auto" }}
            >
              <li>Contact</li>
            </Link>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", margin: "auto" }}
            >
              <li className="headerLoginButton">Login</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
