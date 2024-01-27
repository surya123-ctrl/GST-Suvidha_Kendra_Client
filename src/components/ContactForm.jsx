import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import contactImage from "../assets/contact-us.jpg";
const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    query: "",
  });
  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/form", formData);
      // Show a success toast
      console.log(response);
      toast.success("Form submitted successfully!");
      navigate("/success");
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
      console.log(error.response.message);
    }
  };
  return (
    <div className="contact-container">
      <div className="image-container">
        <img src={contactImage} alt="" className="imageTag" />
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Write Us</h2>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone">Phone : </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label htmlFor="address">Address : </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <label htmlFor="query">Query : </label>
        <textarea
          name="query"
          id="query"
          cols="30"
          rows="10"
          value={formData.query}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
