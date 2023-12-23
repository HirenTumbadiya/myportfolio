import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";

const Intro: React.FC = ({
}) => {
  return (
    <section className="flex items-center justify-between h-screen px-40">
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
        <h1 className="text-4xl font-bold text-white mb-4">
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
      </div>
    </section>
  );
};

export default Intro
