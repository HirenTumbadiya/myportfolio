import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import Typewriter from "typewriter-effect";

const Intro: React.FC = ({
}) => {
  return (
    <section className="md:flex items-center justify-between md:h-screen md:px-40">
      <div className="flex-shrink-0">
        <Image
          src="/user.png"
          alt="My Photo"
          width={400}
          height={400}
          className="rounded-full"
        />
      </div>
      <div className="max-w-md">
        <h1 className=" text-2xl md:text-4xl font-bold text-white mb-4">
          <Typewriter
                      options={{
                        strings: ["I'm Hiren Tumbadiya"],
                        autoStart: true,
                        loop: true,
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .callFunction(() => {
                            console.log("Typewriter initialized!");
                          })
                          .start();
                      }}
          />
        </h1>
        <p className="text-lg text-gray-300">
          Passionate frontend developer with a love for technology.
        </p>
        <Link href="/about">
          <p className="text-white border flex justify-between items-center w-2/5 px-6 py-4 rounded-xl mt-4 hover:bg-white hover:border-white hover:text-black">
            About Me
            <div className=" animate-bounce">
            <ArrowRight />
            </div>
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Intro
