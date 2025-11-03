"use client";
import { useState } from "react";
import Modal from "../Modal";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      id="contact"
      className="section pt-5 flex flex-col sm:flex-row items-center sm:items-stretch p-6 pt-2"
    >
      <div className="w-full sm:w-1/2 flex justify-center">
        <img
          src="/contact.jpg"
          alt="ceo"
          loading="lazy"
          className="rounded-mobile-top object-cover h-auto"
        />
      </div>
      <div className="w-full p-6 sm:p-20 sm:w-1/2 rounded-mobile-bottom sm:text-xl bg-pr3 flex gap-4 flex-col justify-center items-center">
        <h2 className="!text-4xl font-semibold w-full">Contact Us</h2>
        <p className="">
          Have questions about our services or want to explore how we can
          support your journey? Call us directly at +234 703 270 7572 or click
          the button below to send us a message. We&apos;re here to help—every
          step of the way.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          // className="block !bg-se2 m-auto !text-black !outline-none"
        >
          Contact us
        </button>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ContactForm onClose={() => setIsModalOpen(false)} type="contact" />
        </Modal>
      </div>
    </div>
  );
};

export default Contact;
