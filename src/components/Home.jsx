import React from "react";
import Youtube from "./Youtube";
import AboutGST from "./AboutGST";
import BenefitsGST from "./BenefitsGST";

const Home = () => {
  return (
    <div className="home-container">
      <Youtube videoUrl="https://www.youtube.com/watch?v=A9T-xxdtN-4" />
      <AboutGST />
      <BenefitsGST />
    </div>
  );
};

export default Home;
