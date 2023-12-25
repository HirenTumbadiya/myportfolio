// Your React component

import Image from 'next/image';
import React from 'react';
import styles from './style.module.css';
import Link from 'next/link';

const Works = () => {
  const worksData = [
    {
      title: 'Project 1',
      imageSrc: '/next.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mauris et ex tristique fermentum.',
      githubLink: 'https://www.google.com',
      liveLink: 'https://your-live-url.com/project1',
    },
    {
      title: 'Project 2',
      imageSrc: '/next.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mauris et ex tristique fermentum.',
      githubLink: 'https://github.com/your-username/project2',
      liveLink: 'https://your-live-url.com/project2',
    },
    {
      title: 'Project 3',
      imageSrc: '/next.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mauris et ex tristique fermentum.',
      githubLink: 'https://github.com/your-username/project3',
      liveLink: 'https://your-live-url.com/project3',
    },
  ];

  return (
    <div className="mt-8 md:px-40">
      <h2 className="text-4xl font-bold text-white mb-4">Works</h2>
      <div className={`${styles.scrollContainer} overflow-x-auto flex space-x-4`}>
        {worksData.map((work, index) => (
          <div key={index} className="bg-white w-96 h-80 rounded-lg p-6 shadow-md">
            <div className="mb-4">
              <Image src={work.imageSrc} alt={work.title} width={100} height={100} />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">{work.title}</h3>
            <p className="text-gray-600 mb-4">{work.description}</p>
            <div className="flex space-x-4">
              <Link href={work.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline cursor-pointer">GitHub</Link>
              <Link href={work.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline cursor-pointer">Live Demo</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
