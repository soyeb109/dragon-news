import React from "react";
import { Navigate } from "react-router";

const Home = () => {
  return (
    <div>
      <Navigate to="/category/3" />
    </div>
  );
};

export default Home;
