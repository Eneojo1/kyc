"use client";
import { Facebook, FacebookIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";

interface FooterProps {
  sections: string[];
}

const Footer: React.FC<FooterProps> = ({ sections }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("home");

  const handleSetActive = (section: string) => {
    setActive(section);
    setIsOpen(false);
  };

  // Smooth scroll to section (for same-page navigation)
  const scrollToSection = (id: string) => {
    if (typeof window === "undefined") return;

    if (window.location.pathname !== "/") {
      window.location.href = "/#" + id;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={`bg-[#114036] text-white py-10 px-6 md:px-20`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">KY&C Services Ltd.</h3>
          <p className="text-sm text-gray-300">
            Empowering retirement with clarity, care, and community — KY&C
            Services Ltd. offers holistic support through financial planning,
            emotional wellbeing, health awareness, and peer-led engagement.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {sections.map((item, i) => (
              <li
                key={i}
                onClick={() => {
                  scrollToSection(item);
                  handleSetActive(item);
                }}
                className={`nav-tab capitalize cursor-pointer ${
                  active === item ? " active" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Financial Planning</li>
            <li>Emotional Support</li>
            <li>Health Awareness</li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-300">Email: info@kyandc.com</p>
          <p className="text-sm text-gray-300">Phone: +234 703 270 7572</p>
          <p className="text-sm text-gray-300">Location: Remote & Global</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 flex border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} KY&C Services Ltd. All rights
        reserved.
        <span className="ml-auto flex gap-3 [&_svg]:w-7 [&_svg]:h-7">
          <Link
            href="https://www.facebook.com/search/top?q=kyandc%20services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.instagram.com/kyand_cservices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://wa.me/2348103050687"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
