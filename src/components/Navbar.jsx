import React from "react";
import { NavLink } from "react-router";
import userImage from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-4">
      <div></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userImage} alt="User Image" />
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
