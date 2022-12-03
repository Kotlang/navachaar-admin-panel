import React from "react";
import Navbar from "../components/helpers/Navbar";
import Sidebar from "../components/shared/Sidebar";

const Home = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Home;
