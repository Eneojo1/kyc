"use client";

import { useRef, useEffect, useState } from "react";
import { ContextApi } from "@/shared/context";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Modal from "./Modal";
import ComingSoon from "./any/ComingSoon";

interface HeaderProps {
  onHeightChange: (height: number) => void;
  sections: string[];
}

const Header: React.FC<HeaderProps> = ({ onHeightChange, sections }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("home");

  const { isLoggedIn, logout } = ContextApi();
  const headerRef = useRef<HTMLElement | null>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleSetActive = (section: string) => {
    setActive(section);
    setIsOpen(false);
  };

  // Update header height dynamically
  useEffect(() => {
    if (headerRef.current) {
      const updateHeight = () => {
        const height = headerRef.current?.offsetHeight ?? 0;
        onHeightChange?.(height);
        document.documentElement.style.setProperty(
          "--header-height",
          `${height}px`
        );
      };

      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, [onHeightChange]);

  // Smooth scroll to section (for same-page navigation)
  const scrollToSection = (id: string) => {
    if (typeof window === "undefined") return;

    if (window.location.pathname !== "/") {
      window.location.href = "/#" + id;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🔥 Automatically update active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  {
    /* <nav ref={navRef} className="text-lg p-2 pb-0 sm:px-6 sm:py-4"></nav> */
  }
  return (
    <header ref={headerRef}>
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex gap-3 items-center">
          <div className="relative w-8 sm:w-10 h-10">
            <img
              src="/logoWhite.svg"
              alt="ky&c logo"
              className="object-contain logo"
            />
          </div>
          <div className="relative w-25 sm:w-30 h-10">
            <img src="/logo2.png" alt="ky&c logo" className="object-contain" />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <span
          onClick={toggleMenu}
          className="cursor-pointer xsm:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </span>
      </div>

      {/* Navigation */}
      <nav
        className={`menu-transition ${isOpen ? "menu-open" : "menu-closed"}`}
      >
        {sections.map((item) => (
          <span
            key={item}
            onClick={() => {
              scrollToSection(item);
              handleSetActive(item);
            }}
            className={`nav-tab capitalize ${active === item ? " active" : ""}`}
          >
            {item}
          </span>
        ))}

        {/* Login / Logout */}
        {isLoggedIn ? (
          <span
            onClick={() => {
              logout();
              handleSetActive("login");
            }}
            className="text-se2 hover:text-blue-600 transition cursor-pointer"
          >
            Logout
          </span>
        ) : (
          <span
            onClick={() => setIsModalOpen(true)}
            // href="/login"
            className="text-se2 hover:text-blue-600 transition cursor-pointer"
          >
            Login
          </span>
        )}
      </nav>
      {/* {Remember to delete me} */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ComingSoon onClose={() => setIsModalOpen(false)} />
      </Modal>
    </header>
  );
};

export default Header;
