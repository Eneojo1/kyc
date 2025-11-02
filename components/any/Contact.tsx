"use client";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "contact",
  });
  const [companyName, setCompanyName] = useState("");
  return (
    <section id="contact" className="section min-h-screen bg-blue-300">
      <h1>Enter Company's name</h1>
      <input onChange={(e) => setCompanyName(e.target.value)} />
      Contact
      <p className="px-8">Does {companyName} sponsor skilled worker visa</p>
    </section>
  );
};

export default Contact;
