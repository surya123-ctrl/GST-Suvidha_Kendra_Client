import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import LAKSHYA from "../assets/LAKSHYA.png";
import LIC_Amrit_Baal from "../assets/LIC-Amrit-Baal.jpg";
import LIC_Index_Plus from "../assets/LIC-Index-Plus.png";
import LIC_Jivan_Anand from "../assets/LIC-Jivan-Anand.png";
import LIC_Jivan_Labh from "../assets/LIC-Jivan-Labh.png";
import LIC_Jivan_Labh2 from "../assets/LIC-Jivan-Labh-2.png";
const ImageSlider = () => {
  return (
    <div className="slider-container" style={{ maxWidth: "40%" }}>
      <Carousel
        autoPlay="true"
        dynamicHeight="true"
        infiniteLoop="true"
        //   width={"80%"}
      >
        <div>
          <img src={LIC_Jivan_Labh2} alt="yy" />
        </div>
        <div>
          <img src={LIC_Jivan_Labh} alt="yy" />
        </div>
        <div>
          <img src={LIC_Jivan_Anand} alt="yy" />
        </div>
        <div>
          <img src={LIC_Index_Plus} alt="yy" />
        </div>
        <div>
          <img src={LIC_Amrit_Baal} alt="yy" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
