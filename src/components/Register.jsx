import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    text: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (loading) return;
    try {
      setLoading(true);
      console.log(formData);
      const response = await axios.post(
        "https://gstsuvidhakendraserver.onrender.com/register",
        formData
      );
      console.log("User registered successful");
      toast.success("Registration Successful! Please Login Now!");
      setMessage({
        type: "success",
        text: response.data.message,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      // toast.error("Invalid Credentials");
      toast.error(error.response.data.message);
      console.log("Error in registering the user", error);
      setMessage({
        type: "error",
        text: error.response.data.message,
      });
    }
  };
  return (
    <div className="sign-container">
      <h3>Register</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        id="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        id="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <p>
        Already have an account{" "}
        <Link to="/login" style={{ color: "red" }}>
          Click Here
        </Link>{" "}
        to login
      </p>
      <button
        onClick={handleRegister}
        disabled={loading}
        style={{
          cursor: loading ? "not-allowed" : "pointer",
          background: loading ? "#e0e0e0" : "",
          color: loading ? "#000" : "",
        }}
      >
        {loading ? "Registering ..." : "Register"}
      </button>
      <p className={message.type}>{message.text}</p>
    </div>
  );
};

export default Register;
