import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
const UserDetails = () => {
  const loggedInDetails = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8000/user-details", {
          headers: {
            Authorization: `Bearer ${loggedInDetails.isLoggedIn.token}`,
          },
        });
        //   console.log(response.data);
        setUserDetails(response.data);
        console.log(userDetails);
      } catch (error) {
        console.log("Error in fetching user details: " + error.message);
      }
    };
    fetchUserDetails();
  }, [loggedInDetails.isLoggedIn.token]);

  return (
    <div className="services-container">
      <h1>User Details</h1>
      <table className="user-details-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Query</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>
                <b>{user.name}</b>
              </td>
              <td>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </td>

              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.query}</td>
              <td>
                <b>{new Date(user.updatedAt).toLocaleDateString()}</b>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
