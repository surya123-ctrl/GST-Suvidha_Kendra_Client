import React from "react";
import logo from "../assets/LAKSHYA.png";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="image-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="info-container">
        <div className="sub-info-container">
          <CiLocationOn style={{ marginTop: "18px", marginRight: "5px" }} />
          <div className="sub-info-item">
            <h3>ADDRESS</h3>
            <p>Prayagraj</p>
          </div>
        </div>
        <div className="sub-info-container">
          <CiMail style={{ marginTop: "18px", marginRight: "5px" }} />
          <div className="sub-info-item">
            <h3>EMAIL ADDRESS</h3>
            <Link to="mailto:gskprayagraj@gmail.com">
              <p>gskprayagraj@gmail.com</p>
            </Link>
          </div>
        </div>
        <div className="sub-info-container">
          <IoIosPhonePortrait
            style={{ marginTop: "18px", marginRight: "5px" }}
          />
          <div className="sub-info-item">
            <h3>PHONE NUMBER</h3>
            <p>+91-9015197442</p>
          </div>
        </div>
      </div>
      <b>Developer : </b>{" "}
      <a
        href="https://www.linkedin.com/in/surya-pratap-singh-5378ba1b7/"
        target="_blank"
        rel="noreferrer"
        className="developer"
      >
        <p>
          <i>Surya Pratap Singh</i>
        </p>
      </a>
    </div>
  );
};

export default Footer;
