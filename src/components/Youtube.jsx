import React from "react";

const Youtube = ({ videoUrl }) => {
  const embedUrl = videoUrl.replace("watch?v=", "embed/");
  return (
    <div className="youtube-container">
      <iframe
        src={`${embedUrl}?autoplay=1`}
        frameborder="0"
        width="100%"
        height="100vh"
        title="Youtube Video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtube;
