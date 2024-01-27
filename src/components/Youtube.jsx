import React from "react";
import homeImage from "../assets/download1.png";
const Youtube = ({ videoUrl }) => {
  // const embedUrl = videoUrl.replace("watch?v=", "embed/");
  return (
    <div className="youtube-container">
      {/* <iframe
        src={`${embedUrl}?autoplay=1`}
        frameborder="0"
        width="100%"
        height="100vh"
        title="Youtube Video"
        allowFullScreen
      ></iframe> */}
      <img src={homeImage} alt="homeImage" />
      <h1>Lakshya Business</h1>
      <p>Success Begins with a Single Choice</p>
    </div>
  );
};

export default Youtube;
