import React, { useState } from "react";
import "./../styles.css";

function ResumeForm({ onGenerate }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    skills: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <div className="resume-form-container">
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
        <textarea name="education" placeholder="Education" onChange={handleChange} required />
        <textarea name="skills" placeholder="Skills" onChange={handleChange} required />
        <textarea name="experience" placeholder="Experience" onChange={handleChange} required />
        <button type="submit">Generate Resume ✨</button>
      </form>
    </div>
  );
}

export default ResumeForm;
