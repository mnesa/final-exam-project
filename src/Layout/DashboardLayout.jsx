import React from "react";
import Header from "../Components/Shared/Header/Header";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="d-flex mt-5">
        <div className="w-25 saecondare-bg p-5 text-white">
          <NavLink className="nav-link" aria-current="page" to="/dashboard">
            My Order
          </NavLink>
          <NavLink
            className="nav-link"
            aria-current="page"
            to="/dashboard/allusers"
          >
            All Users
          </NavLink>
        </div>
        <div className="w-75 vh-100 p-5 skye-bg">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
