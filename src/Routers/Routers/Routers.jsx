import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Shop from "../../Components/Shop/Shop";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import MyOrder from "../../Components/Dashboard/MyOrder/MyOrder";
import DashboardLayout from "../../Layout/DashboardLayout";
import AllUsers from "../../Components/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/shop",
        element: (
          <PrivateRouter>
            <Shop></Shop>
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
