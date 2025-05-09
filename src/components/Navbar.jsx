import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImage from "../assets/user.png";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logout Success"))
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="flex justify-between items-center my-4">
      <div>{user && user.name}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userImage} alt="User Image" />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-10">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
