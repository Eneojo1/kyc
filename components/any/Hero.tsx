"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal";
import ComingSoon from "./ComingSoon";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="home" className="section  bg-slate-300 relative">
      <Image
        src="/homes.png"
        alt="ky&c logo"
        fill
        priority
        className="w-full h-full object-cover sm:hidden"
      />
      <Image
        src="/homem.png"
        alt="ky&c logo"
        fill
        priority
        className="w-full h-full object-cover hidden sm:block lg:hidden"
      />
      <Image
        src="/home.png"
        alt="ky&c logo"
        fill
        priority
        className="w-full h-full object-cover hidden lg:block"
      />
      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute bottom-20 sm:bottom-10 left-1/2 -translate-x-1/2 lg:left-1/3 lg:bottom-1/3 !bg-[#ffdd6c] !text-black !outline-none"
      >
        Start Yout Pathway
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ComingSoon onClose={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
};

export default Hero;
