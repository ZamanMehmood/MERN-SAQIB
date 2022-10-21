import React from "react";
import './homepage.scss'
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Footer from "./Footer";
import Cards from "./Cards";

const HomePage = () => {
  return (
    <div className="App">
       <Navbar />
       <div >
       <SideBar />
       <Cards />
       </div>
       <Footer />
    </div>
  );
};

export default HomePage;
