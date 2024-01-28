import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
const SignIn = ({ setToken, onLogin }) => {
  const loggedInDetails = useContext(AuthContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState({
    type: "",
    text: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        "https://gstsuvidhakendraserver.onrender.com/login",
        formData
      );
      console.log("Response : ", response.data);
      setTimeout(() => {
        toast.success(`Welcome ${response.data.name}!`);
      }, 2500);
      setFormData({
        email: "",
        password: "",
      });
      setMessage({
        type: "success",
        text: `${response.data.message}`,
      });
      localStorage.setItem("gst-user", JSON.stringify(response.data));
      loggedInDetails.setIsLoggedIn(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
      setMessage({
        type: "error",
        text: `${error.response.data.message}`,
      });
      setTimeout(() => {
        toast.error(`${error.response.data.message}`);
      }, 2500);
    }
  };
  return (
    <div className="sign-container">
      <h3>Login</h3>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        id="email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        id="password"
        onChange={handleChange}
      />
      <p>
        Don't have an account{" "}
        <a href="/register" style={{ color: "red" }}>
          Click Here
        </a>{" "}
        to register
      </p>
      <button onClick={handleLogin}>Login</button>
      <p className={message.type}>{message.text}</p>
    </div>
  );
};

export default SignIn;
