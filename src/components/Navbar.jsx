import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../assets/gst_logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGstTaxServicesOpen, setIsGstTaxServicesOpen] = useState(false);
  const [isInsuranceOpen, setIsInsuranceOpen] = useState(false);
  const [isInsuranceLoanOpen, setIsInsuranceLoanOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    // Close all dropdowns when the navbar is toggled
    closeDropdowns();
  };

  const toggleGstTaxServicesDropdown = () => {
    setIsGstTaxServicesOpen(!isGstTaxServicesOpen);
    // Close other dropdowns when this dropdown is toggled
    setIsInsuranceOpen(false);
    setIsInsuranceLoanOpen(false);
  };

  const toggleInsuranceDropdown = () => {
    setIsInsuranceOpen(!isInsuranceOpen);
    // Close other dropdowns when this dropdown is toggled
    setIsGstTaxServicesOpen(false);
    setIsInsuranceLoanOpen(false);
  };

  const toggleInsuranceLoanDropdown = () => {
    setIsInsuranceLoanOpen(!isInsuranceLoanOpen);
    // Close other dropdowns when this dropdown is toggled
    setIsGstTaxServicesOpen(false);
    setIsInsuranceOpen(false);
  };

  const closeDropdowns = () => {
    setIsGstTaxServicesOpen(false);
    setIsInsuranceOpen(false);
    setIsInsuranceLoanOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleNavbar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {isOpen && (
          <div className="close-icon" onClick={toggleNavbar}>
            <FaTimes />
          </div>
        )}

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
              onClick={(e) => {
                e.preventDefault();
                toggleGstTaxServicesDropdown();
              }}
            >
              GST & Tax Services
              <RiArrowDropDownLine />
            </a>
            <ul
              className={`dropdown-menu ${
                isGstTaxServicesOpen ? "active" : ""
              }`}
            >
              {/* ... GST & Tax Services dropdown items ... */}
              <li>
                <a
                  href="/gstTaxServices/accounting"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  Accounting
                </a>
              </li>
              <li>
                <a
                  href="/gstTaxServices/audit"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  Audit
                </a>
              </li>
              <li>
                <a
                  href="/gstTaxServices/coFormation"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  Co. Formation
                </a>
              </li>
              <li>
                <a
                  href="/gstTaxServices/dsc"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  DSC
                </a>
              </li>
              <li>
                <a
                  href="/gstTaxServices/e-way"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  E-Way
                </a>
              </li>
              <li>
                <a
                  href="/gstTaxServices/fssai"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  FSSAI
                </a>
              </li>
              <li>
                <a
                  href="/gstTaxServices/gst"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  GST
                </a>
              </li>
              <li>
                <a
                  href="/gstTaxServices/iec"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  IEC
                </a>
              </li>
              <li>
                <a
                  href="/gstTaxServices/itr"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  ITR
                </a>
              </li>
              <li>
                <a
                  href="/gstTaxServices/micro-atm"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  Micro ATM
                </a>
              </li>
              <li>
                <a
                  href="/gstTaxServices/msme"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  MSME
                </a>
              </li>
              <li>
                <a
                  href="/gstTaxServices/other"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  Other
                </a>
              </li>
              <li>
                <a
                  href="/gstTaxServices/tax"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  Tax
                </a>
              </li>
              <li>
                <a
                  href="/gstTaxServices/tds"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  TDS
                </a>
              </li>
              <li>
                <a
                  href="/gstTaxServices/trademark"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  Trademark
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              href="/insurance"
              className={`nav-link ${isInsuranceOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                toggleInsuranceDropdown();
              }}
            >
              Insurance
              <RiArrowDropDownLine />
            </a>
            <ul className={`dropdown-menu ${isInsuranceOpen ? "active" : ""}`}>
              {/* ... Insurance dropdown items ... */}
              <li>
                <a
                  href="/insurance/new-insurance"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  New Insurance
                </a>
              </li>
              <li>
                <a
                  href="/insurance/insurance-transaction"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  Insurance Transaction
                </a>
              </li>
              <li>
                <a
                  href="/insurance/insurance-transaction-new-portal"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  Insurance Transaction New Portal
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              href="/insurance-loan"
              className={`nav-link ${isInsuranceLoanOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                toggleInsuranceLoanDropdown();
              }}
            >
              Insurance Loan
              <RiArrowDropDownLine />
            </a>
            <ul
              className={`dropdown-menu ${isInsuranceLoanOpen ? "active" : ""}`}
            >
              {/* ... Insurance Loan dropdown items ... */}
              <li>
                <a
                  href="/insurance-loan/salaried-loan"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  Salaried Loan
                </a>
              </li>
              <li>
                <a
                  href="/insurance-loan/business-loan"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  Business Loan
                </a>
              </li>
              <li>
                <a
                  href="/insurance/insurance-transaction-new-portal"
                  className="dropdown-link"
                  onClick={toggleNavbar}
                >
                  Insurance Transaction New Portal
                </a>
              </li>
            </ul>
          </li>
          {/* ... Other menu items ... */}
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
