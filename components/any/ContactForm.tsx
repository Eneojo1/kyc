"use client";

import { useState } from "react";

interface Props {
  type: "join" | "contact";
  onClose?: () => void;
}

const ContactForm = ({ onClose, type }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: type === "join" ? "subscription" : "",
    message: "",
    type,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    onClose?.();
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 max-w-md mx-auto fadeIn"
      >
        <h1 className="border-b-2">
          {type === "join" ? "Join the Circle" : "Get in Touch"}
        </h1>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />

        {type === "contact" && (
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />
        )}

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />

        <button>{formData.type === "join" ? "Submit" : "Send"}</button>
      </form>
    </div>
  );
};

export default ContactForm;
