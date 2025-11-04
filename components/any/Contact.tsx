"use client";
import { useState } from "react";
import Modal from "../Modal";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="section p-6">
      <h1>Contact Us</h1>
      <div className="bg-se5 rounded-xl p-5">
        <div className="grid sm:grid-cols-2 sm:w-2/3 m-auto rounded-xl overflow-hidden lg:text-xl">
          {/* Left Image */}
          <div className="flex justify-center items-center">
            <img
              src="/contact.jpg"
              alt="contact"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="bg-pr3 p-5 sm:border-2 sm:border-l-0 border-pr2 flex flex-col gap-5 justify-center items-center text-center">
            <p className="max-w-md">
              Have questions about our services or want to explore how we can
              support your journey? Call us directly at{" "}
              <strong>+2347032707572</strong> or click the button below to send
              us a message. We&apos;re here to help—every step of the way.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="!bg-se2 px-6 py-2 rounded-md !text-black !outline-none"
            >
              Contact us
            </button>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <ContactForm
                onClose={() => setIsModalOpen(false)}
                type="contact"
              />
            </Modal>
          </div>
        </div>
      </div>
      <hr className="border-pr1 border-1 mt-5" />
    </section>
  );
};

export default Contact;
