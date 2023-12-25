"use client"
import React from 'react';
import data from './data.json';

const Page = () => {
  const {
    name,
    role,
    introduction,
    experience,
    expertise,
    github,
    linkedin
  } = data;

  return (
    <div className="mt-8 md:px-40">
      <div className="bg-white rounded-lg p-8 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{`Hi, I'm ${name}`}</h1>
          <p className="text-gray-600">{role}</p>
        </div>

        <p className="text-gray-700 mb-6">{introduction}</p>

        {experience.map((paragraph, index) => (
          <p key={index} className="text-gray-700 mb-6">{paragraph}</p>
        ))}

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Areas of Expertise</h2>
          <div className="flex flex-wrap space-x-2">
            {expertise.map((tag, index) => (
              <div
                key={index}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-300"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          Dive deeper into my code repositories on GitHub, where I actively contribute and collaborate on open-source projects. My commitment to staying abreast of the latest technologies and industry best practices fuels my passion for continuous learning and improvement.
        </p>

        <div className="flex space-x-4">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
