import {
  autoGrow,
  capitalize,
  handleAxiosError,
  toast,
} from "../shared/helpers";
import { useState } from "react";
import axios from "axios";
const Contact = () => {
  const [fData, setFData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFData((prev) => ({
      ...prev,
      [name]: name === "name" ? capitalize(value) : value,
    }));
    if (name === "message") autoGrow(e.target);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3500/api/email", fData);
      toast({ icon: "success", title: res.data.message });
    } catch (err) {
      console.error(err);
      handleAxiosError(err, toast);
    }
  };

  return (
    <div className="pt-5 sm:border border-[#114036] rounded-2xl m-2 grid sm:grid-cols-2">
      <div className="p-3 sm:p-5 h-60 sm:h-full lg:h-150">
        <img
          src="/contact.jpg"
          alt="Contact Us"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="p-3 sm:p-6">
        <div className="rounded-2xl sm:p-5 sm:border border-green-300">
          <h1 className="mb-6">Contact Us</h1>
          <form className="space-y-4 text-left" onSubmit={sendEmail}>
            <div>
              <label className="block font-semibold mb-1" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={fData.name}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={fData.email}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                value={fData.phone}
                className="w-full px-4 py-2 border rounded-md focus:outline-none
            focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                value={fData.subject}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                onChange={handleChange}
                value={fData.message}
                className="w-full px-4 py-2 border rounded-md resize-none focus:ring-2 focus:ring-blue-400"
                rows="1"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white font-semibold px-6 py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
