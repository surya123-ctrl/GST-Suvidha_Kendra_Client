import React from "react";
import { Link } from "react-router-dom";
const SubComponent = ({ subItems }) => {
  return (
    <div className="subComponent-container">
      {subItems.map((item, index) => {
        return (
          <Link to={`${item.routeTo}`}>
            <div key={index} className="subComponent-item">
              <h3>{item.name}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SubComponent;
