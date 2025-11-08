"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal";
import ComingSoon from "../ComingSoon";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="home" className="section  bg-slate-300 relative">
      <Image
        src="/homes.png"
        alt="ky&c logo"
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority
        className="w-full h-full object-cover sm:hidden"
      />
      <Image
        src="/homem.png"
        alt="ky&c logo"
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority
        className="w-full h-full object-cover hidden sm:block llg:hidden"
      />

      <Image
        src="/home.png"
        alt="ky&c logo"
        fill
        sizes="(min-width: 1025px) 50vw, 100vw"
        priority
        className="w-full h-full object-cover hidden llg:block"
      />
      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute bottom-20 sm:bottom-10 left-1/2 -translate-x-1/2 llg:left-1/3 llg:bottom-1/3 !bg-[#ffdd6c] !text-black !outline-none"
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
