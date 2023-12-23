"use client";
// pages/home/index.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Experience, Intro, Skills, Works } from "./_components";

const Page: React.FC = () => {
  // const [scrollOpacity, setScrollOpacity] = useState<number>(1);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const maxScroll = 300; // Adjust as needed

  //     // Calculate opacity based on scroll position
  //     const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);

  //     setScrollOpacity(opacity);
  //   };

  //   // Add scroll event listener
  //   window.addEventListener('scroll', handleScroll);

  //   // Remove event listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div>
      <Intro />
      <Experience />
      <Skills />
      <Works />
    </div>
  );
};

export default Page;
