import React, { useEffect, useState } from "react";
import Youtube from "./Youtube";
import AboutGST from "./AboutGST";
import BenefitsGST from "./BenefitsGST";
import axios from "axios";
import UserCount from "./UserCount";
const Home = () => {
  const [userCount, setUserCount] = useState(0);
  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get(
          "https://gstsuvidhakendraserver.onrender.com/userCount"
        );
        console.log("userCount : ", response.data.userCount);
        setUserCount(response.data.userCount);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserCount();
  });
  return (
    <div className="home-container">
      {/* <Youtube videoUrl="https://www.youtube.com/watch?v=A9T-xxdtN-4" /> */}
      <Youtube />
      <UserCount userCount={userCount} />
      <AboutGST />
      <BenefitsGST />
    </div>
  );
};

export default Home;
