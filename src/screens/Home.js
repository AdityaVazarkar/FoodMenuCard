import React from "react";
// import "../css/home.css";
import Navbar from "../component/Navbar";
import Carsol from "../component/Carsol";
import Contact from "./Contact";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#cab3f2" }}>
      <div className="img">
        <Navbar />
        <Carsol />
        <br></br>
        <Contact />
        <Footer />
        <br></br>
      </div>
    </div>
  );
};

export default Home;
