"use client";
// pages/home/index.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Experience, Intro, Skills, Works } from "./_components";
import HLoader from "@/components/loaders/Hloader";

const Page: React.FC = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulating a delay of 2 seconds before setting loading to false
  //   const delay = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   // Cleanup the timeout to avoid memory leaks
  //   return () => clearTimeout(delay);
  // }, []);

  // if(loading){
  //   return(
  //     <HLoader />
  //   )
  // }

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
