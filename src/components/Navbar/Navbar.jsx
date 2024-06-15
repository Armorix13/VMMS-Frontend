import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
export default function Navbar() {
  const Role = localStorage.getItem("Role");
  const location = useLocation();
  const authenticated =
    location.pathname.includes("/admin") ||
    location.pathname.includes("/user") ||
    location.pathname.includes("/addJob") ||
    location.pathname.includes("/contactedus") ||
    location.pathname.includes("/userForm");

  const user = location.pathname.includes("/user");
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          <span>
            <img src={logo} id="navlogo" />
          </span>
        </NavLink>
        {authenticated && Role === "1" && (
          <>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/addJob"
                  activeclassname="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Add Job
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contactedus"
                  activeclassname="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  User Query
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/userForm"
                  activeclassname="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  User Applied
                </NavLink>
              </li>
            </ul>
          </>
        )}
        {user && Role == "0" && (
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/myApplication"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                My Application
              </NavLink>
            </li>
          </ul>
        )}
        {!authenticated && (
          <>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  activeclassname="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/aboutus"
                  activeclassname="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contactus"
                  activeclassname="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Jobs"
                  activeclassname="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  activeclassname="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Login
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              {click ? (
                <span className="icon">
                  <HamburgetMenuClose />{" "}
                </span>
              ) : (
                <span className="icon">
                  <HamburgetMenuOpen />
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
