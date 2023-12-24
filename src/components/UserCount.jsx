import React from "react";
import { FaUsers } from "react-icons/fa6";
import CountUp from "react-countup";
const UserCount = ({ userCount }) => {
  return (
    <div className="userCount-container">
      <FaUsers style={{ color: "#8c8ff00" }} />
      <CountUp end={userCount} duration={3} />
    </div>
  );
};

export default UserCount;
