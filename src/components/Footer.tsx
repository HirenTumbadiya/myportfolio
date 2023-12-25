"use client"
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import ContactModal from "./ContactModal";

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };
  return (
    <>
      <footer
        className={`text-white md:w-4/5 md:mr-auto md:ml-auto mt-10 md:px-20 py-10 bg-gray-800 rounded-3xl backdrop-blur-lg`}
      >
        <div className="container mx-auto">
          <div className="md:flex justify-between px-10 md:px-0 pb-5 md:pb-0">
            <div>
              <Image
                src="/signature.png"
                alt="Your Logo"
                width={400}
                height={100}
              />
            </div>
            <div className=" md:text-end">
              <p className="text-2xl font-bold mb-2">
                Looking for a skilled developer?
              </p>
              <p>
                Let&apos;s bring your ideas to life! Contact us for web
                development services.
              </p>
              <button
                onClick={openContactModal}
                className="text-white border px-6 py-4 rounded-xl mt-4 hover:bg-white hover:border-white hover:text-black"
              >
                Get in Touch
              </button>
            </div>
          </div>
          <div className="items-center text-center">
            <p>&copy; Copyright 2023 - Hiren Tumbadiya</p>
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={isContactModalOpen}
        onRequestClose={closeContactModal}
      />
    </>
  );
};

export default Footer;
