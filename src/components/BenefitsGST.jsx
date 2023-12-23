import React from "react";
import benefitsMan from "../assets/benefits-man.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
const BenefitsGST = () => {
  return (
    <div className="benefitsGst-container">
      <div className="content-side">
        <h2>BENEFITS</h2>
        <p>(GSTN - GSP Approved License)</p>
        <ul>
          <li>
            <FaArrowCircleRight style={{ marginRight: "10px" }} />
            <b>GST Promotional Material</b> ( Hard Copy of GSK Certificate, Soft
            Copies of Banner, Visiting Card, Letter Head and Phemplat.)
          </li>
          <li>
            <FaArrowCircleRight style={{ marginRight: "10px" }} />
            <b>GSK Engagement Services like</b> GSK Engagement Services like
            Money Transfer, AEPS, Travel, Recharge, Bill Payments, Insurance
            etc. to gain maximum clients and save initial cost of the GSK Owner.
          </li>
          <li>
            <FaArrowCircleRight style={{ marginRight: "10px" }} />
            Ongoing recurring income on <b>GST</b> and other Tax Related
            services.
          </li>
          <li>
            <FaArrowCircleRight style={{ marginRight: "10px" }} />
            <b>24/7</b> Help-Desk Support & Relationship Manager. Training and
            Important Announcements.
          </li>
          <li>
            <FaArrowCircleRight style={{ marginRight: "10px" }} />
            Interactive <b>CRM</b> to order along with checklist of each
            service. Commission Payments twice in a month.
          </li>
        </ul>
      </div>
      <div className="image-side">
        <img src={benefitsMan} alt="benefitsMan" />
      </div>
    </div>
  );
};

export default BenefitsGST;
