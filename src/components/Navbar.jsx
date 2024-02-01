import React, { useState, useEffect, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/LAKSHYA.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGSTTaxOpen, setIsGSTTaxOpen] = useState(false);
  let loggedInDetails = useContext(AuthContext);
  // console.log(loggedInDetails.isLoggedIn?.isAdmin);
  // const isAdmin = loggedInDetails.isLoggedIn.isAdmin;
  // console.log(isAdmin);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleGSTTaxMenu = () => {
    setIsGSTTaxOpen(!isGSTTaxOpen);
  };
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
    { id: 1, label: "Salaried Loan", link: "/loan/salaried-loan" },
    { id: 2, label: "Business Loan", link: "/loan/business-loan" },
  ];

  const renderMenuItems = (items) => {
    return items.map((item) => (
      <li key={item.id}>
        <Link to={item.link} onClick={toggleNavbar}>
          {item.label}
        </Link>
      </li>
    ));
  };
  const handleLogout = () => {
    loggedInDetails.setIsLoggedIn(undefined);
    console.log(loggedInDetails);
    localStorage.removeItem("gst-user");
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" onClick={toggleNavbar}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/gstTaxServices"
              className="nav-link"
              onClick={toggleGSTTaxMenu}
            >
              GST & Tax Services
            </Link>
            <ul className="sub-menu">{renderMenuItems(gstTaxServicesItems)}</ul>
          </li>

          <li className="nav-item">
            <Link to="/insurance" className="nav-link">
              Insurance
            </Link>
            <ul className="sub-menu">{renderMenuItems(insuranceItems)}</ul>
          </li>

          <li className="nav-item">
            <Link to="/loan" className="nav-link">
              Loan
            </Link>
            <ul className="sub-menu">{renderMenuItems(insuranceLoanItems)}</ul>
          </li>
          {!loggedInDetails.isLoggedIn?.isAdmin && (
            <li className="nav-item">
              <Link to="/contact" onClick={toggleNavbar}>
                Contact
              </Link>
            </li>
          )}
          {loggedInDetails.isLoggedIn?.isAdmin && (
            <li className="nav-item">
              <Link to="/user-details" onClick={toggleNavbar}>
                User Details
              </Link>
            </li>
          )}

          <li className="nav-item">
            <Link to="/register" onClick={toggleNavbar} className="nav-item">
              <button style={{ background: "red" }}>Register</button>
            </Link>
          </li>
          {loggedInDetails.isLoggedIn !== undefined ? (
            <>
              <li className="nav-item">
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <Link className="nav-item" to="/login">
              <button>Login</button>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
