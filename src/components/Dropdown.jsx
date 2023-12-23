import React from "react";

const Dropdown = ({ isOpen, items, onItemClick }) => (
  <ul className={`dropdown-menu ${isOpen ? "active" : ""}`}>
    {items.map((item) => (
      <li key={item.id}>
        <a
          href={item.link}
          className="dropdown-link"
          onClick={() => onItemClick(item.id)}
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);

export default Dropdown;
