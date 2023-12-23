import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className={`text-white mt-10 px-20 py-10 bg-gray-800 rounded-3xl backdrop-blur-lg ${styles.blurredBackground}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <Image src="/signature.png" alt="Your Logo" width={400} height={100} />
          </div>
          <div className=" text-end">
            <p className=" text-2xl font-bold mb-2">
              Looking for a skilled developer?
            </p>
            <p>
              Let's bring your ideas to life! Contact us for web development
              services.
            </p>
            <button className="text-white border px-6 py-4 rounded-xl mt-4 hover:bg-white hover:border-white hover:text-black">
              Get in Touch
            </button>
          </div>
        </div>
        <div className="items-center text-center">
          <p>
            &copy; Copyright 2023 - <span>Hiren Tumbadiya</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
