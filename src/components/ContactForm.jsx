import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useHistory } from "react-router-dom";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    query: "",
  });
  const handleChange = async (event) => {
    // const history = useHistory();
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "https://gstsuvidhakendraserver.onrender.com/api/form",
        formData
      );
      // Show a success toast
      toast.success("Form submitted successfully!");

      // Optionally, you can redirect the user after successful form submission
      //   history.push("/contact/success"); // Update with the desired success route
      //   console.log("Form Data Submitted Successfully");
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default ContactForm;