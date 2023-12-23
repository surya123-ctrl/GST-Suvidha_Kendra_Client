import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../assets/gst_logo.png";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGstTaxServicesOpen, setIsGstTaxServicesOpen] = useState(false);
  const [isInsuranceOpen, setIsInsuranceOpen] = useState(false);
  const [isInsuranceLoanOpen, setIsInsuranceLoanOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    closeDropdowns();
  };

  const toggleGstTaxServicesDropdown = () => {
    setIsGstTaxServicesOpen(!isGstTaxServicesOpen);
    setIsInsuranceOpen(false);
    setIsInsuranceLoanOpen(false);
  };

  const toggleInsuranceDropdown = () => {
    setIsInsuranceOpen(!isInsuranceOpen);
    setIsGstTaxServicesOpen(false);
    setIsInsuranceLoanOpen(false);
  };

  const toggleInsuranceLoanDropdown = () => {
    setIsInsuranceLoanOpen(!isInsuranceLoanOpen);
    setIsGstTaxServicesOpen(false);
    setIsInsuranceOpen(false);
  };

  const closeDropdowns = () => {
    setIsGstTaxServicesOpen(false);
    setIsInsuranceOpen(false);
    setIsInsuranceLoanOpen(false);
  };
  const openGstTaxServicesDropdown = () => {
    setIsGstTaxServicesOpen(true);
    setIsInsuranceOpen(false);
    setIsInsuranceLoanOpen(false);
  };

  const openInsuranceDropdown = () => {
    setIsInsuranceOpen(true);
    setIsGstTaxServicesOpen(false);
    setIsInsuranceLoanOpen(false);
  };

  const openInsuranceLoanDropdown = () => {
    setIsInsuranceLoanOpen(true);
    setIsGstTaxServicesOpen(false);
    setIsInsuranceOpen(false);
  };
  const closeGstTaxServicesDropdown = () => {
    setIsGstTaxServicesOpen(false);
  };

  const closeInsuranceDropdown = () => {
    setIsInsuranceOpen(false);
  };

  const closeInsuranceLoanDropdown = () => {
    setIsInsuranceLoanOpen(false);
  };
  const closeNavbar = () => {
    setIsOpen(false);
    closeDropdowns();
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on initial load

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      closeDropdowns();
    }
  }, [isMobile]);

  const gstTaxServicesItems = [
    { id: 1, label: "Accounting", link: "/gstTaxServices/accounting" },
    { id: 2, label: "Audit", link: "/gstTaxServices/audit" },
    { id: 3, label: "Banking", link: "/gstTaxServices/banking" },
    { id: 4, label: "Cess", link: "/gstTaxServices/cess" },
    { id: 5, label: "IEC", link: "/gstTaxServices/iec" },
    { id: 6, label: "ITR", link: "/gstTaxServices/itr" },
    { id: 7, label: "Micro ATM", link: "/gstTaxServices/micro-atm" },
    { id: 8, label: "MSME", link: "/gstTaxServices/msme" },
    { id: 9, label: "Other", link: "/gstTaxServices/other" },
    { id: 10, label: "Tax", link: "/gstTaxServices/tax" },
    { id: 11, label: "TDS", link: "/gstTaxServices/tds" },
    { id: 12, label: "Trademark", link: "/gstTaxServices/trademark" },
  ];

  const insuranceItems = [
    { id: 1, label: "New Insurance", link: "/insurance/new-insurance" },
    {
      id: 2,
      label: "Insurance Transaction",
      link: "/insurance/insurance -transaction",
    },
    {
      id: 3,
      label: "Insurance Transaction New Portal",
      link: "/insurance/insurance-transaction-new-portal",
    },
  ];

  const insuranceLoanItems = [
    { id: 1, label: "Salaried Loan", link: "/insurance-loan/salaried-loan" },
    { id: 2, label: "Business Loan", link: "/insurance-loan/business-loan" },
    {
      id: 3,
      label: "Insurance Transaction New Portal",
      link: "/insurance/insurance-transaction-new-portal",
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        {isMobile && (
          <div className="close-icon" onClick={closeNavbar}>
            <FaTimes />
          </div>
        )}

        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleNavbar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={toggleNavbar}>
              Home
            </a>
          </li>

          <li className="nav-item">
            <a
              href="/gstTaxServices"
              className={`nav-link ${isGstTaxServicesOpen ? "active" : ""}`}
              onMouseEnter={openGstTaxServicesDropdown}
              onMouseLeave={closeGstTaxServicesDropdown}
            >
              GST & Tax Services
              <RiArrowDropDownLine />
            </a>
            <Dropdown
              isOpen={isGstTaxServicesOpen}
              items={gstTaxServicesItems}
              onItemClick={toggleNavbar}
            />
          </li>

          <li className="nav-item">
            <a
              href="/insurance"
              className={`nav-link ${isInsuranceOpen ? "active" : ""}`}
              onMouseEnter={openInsuranceDropdown}
              onMouseLeave={closeInsuranceDropdown}
            >
              Insurance
              <RiArrowDropDownLine />
            </a>
            <Dropdown
              isOpen={isInsuranceOpen}
              items={insuranceItems}
              onItemClick={toggleNavbar}
            />
          </li>

          <li className="nav-item">
            <a
              href="/insurance-loan"
              className={`nav-link ${isInsuranceLoanOpen ? "active" : ""}`}
              onMouseEnter={openInsuranceLoanDropdown}
              onMouseLeave={closeInsuranceLoanDropdown}
            >
              Insurance Loan
              <RiArrowDropDownLine />
            </a>
            <Dropdown
              isOpen={isInsuranceLoanOpen}
              items={insuranceLoanItems}
              onItemClick={toggleNavbar}
            />
          </li>

          {/* ... (other menu items) */}

          <li className="nav-item">
            <a href="/contact" className="nav-link" onClick={toggleNavbar}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
