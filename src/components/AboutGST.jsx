import React from "react";
import { Link } from "react-router-dom";
const AboutGST = () => {
  return (
    <div className="aboutGst-container">
      <h2>WHAT IS GST SUVIDHA KENDRA® ?</h2>
      <p>
        GST Suvidha Center® is one step gateway which can help
        individual/business to earn sustainable income month to month basis by
        selling in demand services from anywhere - home/shop/office.
      </p>
      <Link to={"/contact"}>
        <button>Contact Us</button>
      </Link>
    </div>
  );
};

export default AboutGST;
