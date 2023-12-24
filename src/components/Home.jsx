import React, { useEffect, useState } from "react";
import Youtube from "./Youtube";
import AboutGST from "./AboutGST";
import BenefitsGST from "./BenefitsGST";
import axios from "axios";
import UserCount from "./UserCount";
const Home = () => {
  const [userCount, setUserCount] = useState(0);
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
    if (!hasVisitedBefore) {
      localStorage.setItem("hasVisitedBefore", true);
      axios
        .get("https://gstsuvidhakendraserver.onrender.com/api/userCount")
        .then((res) => {
          setUserCount(res.data.userCount);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  return (
    <div className="home-container">
      <Youtube videoUrl="https://www.youtube.com/watch?v=A9T-xxdtN-4" />
      <UserCount userCount={userCount} />
      <AboutGST />
      <BenefitsGST />
    </div>
  );
};

export default Home;
