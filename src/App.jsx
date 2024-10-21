import React from "react";
import Navbar from "./Componets/Navbar";
import Hero from "./Componets/Hero";
import TopList from "./Componets/TopList";
import BgImage from './assets/2.png'
import Banner from "./Componets/Banner";
import Services from "./Componets/Services";

const bgStyle = {
       backgroundRepeat: "no-repeat",
        backgroundImage:`url(${BgImage})` ,
        backgroundSize: "cover",
        backgroundPosition: "center",
};

const App = () => {
  return (
    <div style={bgStyle} className=" overflow-x-hidden">
    <div className=" min-h-screen bg-white/50 backdrop-blur-3xl">

      <Navbar />
      <Hero/>
      <TopList/>
      <Banner/>
      <Services/>
      </div>

    </div>
  );
};

export default App;
