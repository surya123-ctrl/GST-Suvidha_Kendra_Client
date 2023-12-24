import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../assets/LAKSHYA.png";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isGstTaxServicesOpen, setIsGstTaxServicesOpen] = useState(false);
//   const [isInsuranceOpen, setIsInsuranceOpen] = useState(false);
//   const [isInsuranceLoanOpen, setIsInsuranceLoanOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const toggleNavbar = (link) => {
//     setIsOpen(!isOpen);
//     closeDropdowns();
//     navigate(link);
//   };
//   const renderMenuItems = (items) => {
//     return items.map((item) => (
//       <li key={item.id}>
//         <Link to={item.link} onClick={toggleNavbar}>
//           {item.label}
//         </Link>
//       </li>
//     ));
//   };
//   const toggleGstTaxServicesDropdown = (link) => {
//     setIsGstTaxServicesOpen(!isGstTaxServicesOpen);
//     setIsInsuranceOpen(false);
//     setIsInsuranceLoanOpen(false);
//     navigate(link);
//   };

//   const toggleInsuranceDropdown = (link) => {
//     setIsInsuranceOpen(!isInsuranceOpen);
//     setIsGstTaxServicesOpen(false);
//     setIsInsuranceLoanOpen(false);
//     navigate(link);
//   };

//   const toggleInsuranceLoanDropdown = (link) => {
//     setIsInsuranceLoanOpen(!isInsuranceLoanOpen);
//     setIsGstTaxServicesOpen(false);
//     setIsInsuranceOpen(false);
//     navigate(link);
//   };

//   const closeDropdowns = () => {
//     setIsGstTaxServicesOpen(false);
//     setIsInsuranceOpen(false);
//     setIsInsuranceLoanOpen(false);
//   };
//   const openGstTaxServicesDropdown = () => {
//     setIsGstTaxServicesOpen(true);
//     setIsInsuranceOpen(false);
//     setIsInsuranceLoanOpen(false);
//   };

//   const openInsuranceDropdown = () => {
//     setIsInsuranceOpen(true);
//     setIsGstTaxServicesOpen(false);
//     setIsInsuranceLoanOpen(false);
//   };

//   const openInsuranceLoanDropdown = () => {
//     setIsInsuranceLoanOpen(true);
//     setIsGstTaxServicesOpen(false);
//     setIsInsuranceOpen(false);
//   };
//   const closeGstTaxServicesDropdown = () => {
//     setIsGstTaxServicesOpen(false);
//   };

//   const closeInsuranceDropdown = () => {
//     setIsInsuranceOpen(false);
//   };

//   const closeInsuranceLoanDropdown = () => {
//     setIsInsuranceLoanOpen(false);
//   };
//   const closeNavbar = () => {
//     setIsOpen(false);
//     closeDropdowns();
//   };
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     handleResize(); // Check on initial load

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (isMobile) {
//       closeDropdowns();
//     }
//   }, [isMobile]);

//   const gstTaxServicesItems = [
//     { id: 1, label: "Accounting", link: "/gstTaxServices/accounting" },
//     { id: 2, label: "Audit", link: "/gstTaxServices/audit" },
//     { id: 3, label: "Banking", link: "/gstTaxServices/banking" },
//     { id: 4, label: "Cess", link: "/gstTaxServices/cess" },
//     { id: 5, label: "IEC", link: "/gstTaxServices/iec" },
//     { id: 6, label: "ITR", link: "/gstTaxServices/itr" },
//     { id: 7, label: "Micro ATM", link: "/gstTaxServices/micro-atm" },
//     { id: 8, label: "MSME", link: "/gstTaxServices/msme" },
//     { id: 9, label: "Other", link: "/gstTaxServices/other" },
//     { id: 10, label: "Tax", link: "/gstTaxServices/tax" },
//     { id: 11, label: "TDS", link: "/gstTaxServices/tds" },
//     { id: 12, label: "Trademark", link: "/gstTaxServices/trademark" },
//   ];

//   const insuranceItems = [
//     { id: 1, label: "New Insurance", link: "/insurance/new-insurance" },
//     {
//       id: 2,
//       label: "Insurance Transaction",
//       link: "/insurance/insurance -transaction",
//     },
//     {
//       id: 3,
//       label: "Insurance Transaction New Portal",
//       link: "/insurance/insurance-transaction-new-portal",
//     },
//   ];

//   const insuranceLoanItems = [
//     { id: 1, label: "Salaried Loan", link: "/loan/salaried-loan" },
//     { id: 2, label: "Business Loan", link: "/loan/business-loan" },
//   ];

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-logo">
//           <img src={logo} alt="Logo" />

//           <div className="menu-icon" onClick={toggleNavbar}>
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </div>
//         </div>
//         <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
//           <li className="nav-item">
//             <a href="/" className="nav-link" onClick={toggleNavbar}>
//               Home
//             </a>
//           </li>

//           <li className="nav-item">
//             <a
//               href="/gstTaxServices"
//               className={`nav-link ${isGstTaxServicesOpen ? "active" : ""}`}
//               onFocus={openGstTaxServicesDropdown}
//               onBlur={closeGstTaxServicesDropdown}
//             >
//               GST & Tax Services
//               <RiArrowDropDownLine />
//             </a>
//             <Dropdown
//               isOpen={isGstTaxServicesOpen}
//               items={gstTaxServicesItems}
//               onItemClick={toggleNavbar}
//             />
//           </li>

//           <li className="nav-item">
//             <a
//               href="/insurance"
//               className={`nav-link ${isInsuranceOpen ? "active" : ""}`}
//               onFocus={openInsuranceDropdown}
//               onBlur={closeInsuranceDropdown}
//             >
//               Insurance
//               <RiArrowDropDownLine />
//             </a>
//             <Dropdown
//               isOpen={isInsuranceOpen}
//               items={insuranceItems}
//               onItemClick={toggleNavbar}
//             />
//           </li>

//           <li className="nav-item">
//             <a
//               href="/loan"
//               className={`nav-link ${isInsuranceLoanOpen ? "active" : ""}`}
//               onFocus={openInsuranceLoanDropdown}
//               onBlur={closeInsuranceLoanDropdown}
//             >
//               Loan
//               <RiArrowDropDownLine />
//             </a>
//             <Dropdown
//               isOpen={isInsuranceLoanOpen}
//               items={insuranceLoanItems}
//               onItemClick={toggleNavbar}
//             />
//           </li>

//           {/* ... (other menu items) */}

//           <li className="nav-item">
//             <a href="/contact" className="nav-link" onClick={toggleNavbar}>
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGSTTaxOpen, setIsGSTTaxOpen] = useState(false);
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
          <li className="nav-item">
            <Link to="/contact" onClick={toggleNavbar}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
