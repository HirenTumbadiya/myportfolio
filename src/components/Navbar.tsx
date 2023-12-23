"use client";
import styles from "./Navbar.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { List } from "react-bootstrap-icons";

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Set the background color based on the scroll position
    setScrolled(scrollPosition > 0);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          isScrolled ? "bg-transparent" : "bg-gray-800"
        } md:sticky md:top-5 p-5 rounded-full backdrop-blur-lg z-50 ${styles.blurredBackground}`}
      >
      <div className="container flex items-center justify-between">
        <div className="text-white font-bold text-lg">
          <Link href="/">
            <Image src="/logo1.png" alt="Your Logo" width={80} height={40} />
          </Link>
        </div>
        <div
          className={`hidden md:flex space-x-4 ${
            isMenuOpen ? 'hidden' : 'justify-center'
          }`}
        >
 <div className={`text-center flex gap-5 text-white`}>
              <Link href="/">
                <p className="hover:underline hover:text-gray-300 text-xl font-semibold">
                  Home
                </p>
              </Link>
              <Link href="/about">
                <p className="hover:underline hover:text-gray-300 text-xl font-semibold">
                  About
                </p>
              </Link>
              <Link href="/projects">
                <p className="hover:underline hover:text-gray-300 text-xl font-semibold">
                  Projects
                </p>
              </Link>
              <Link href="/contact">
                <p className="hover:underline hover:text-gray-300 text-xl font-semibold">
                  Contact
                </p>
              </Link>
            </div>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <List size={20} />
            ) : (
              <List size={20} />
            )}
          </button>
        </div>
      </div>
    </nav>
          {isMenuOpen && <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />}
          </>
  );
};

export default Navbar;
