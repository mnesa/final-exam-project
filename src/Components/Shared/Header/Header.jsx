import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../../index.css";
import "./Header.css";
import logo from "../../../assets/images/logo6.png";
import { AuthContext } from "../../../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            <img className="w-75" src={logo} alt="Square logo" />
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">
                  Shop
                </NavLink>
              </li>

              {user?.uid ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/Dashboard"
                    >
                      Dashboard
                    </NavLink>
                  </li>

                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm fw-medium"
                  >
                    {user.displayName} <br />
                    Sign Out
                  </button>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/login">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
