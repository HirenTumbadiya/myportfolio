import Image from 'next/image';
import React from 'react';

const Works = () => {
  const worksData = [
    {
      title: 'Project 1',
      imageSrc: '/next.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mauris et ex tristique fermentum.',
      githubLink: 'https://github.com/your-username/project1',
      liveLink: 'https://your-live-url.com/project1',
    },
    // Add more works as needed
  ];

  return (
    <div className="mt-8 md:px-40">
      <h2 className="text-4xl font-bold text-white mb-4">Works</h2>
      <div className="grid grid-cols-2 gap-6">
        {worksData.map((work, index) => (
          <div key={index} className="relative bg-white rounded-lg p-6 shadow-md overflow-hidden">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-blue-500 hover:scale-105 hover:shadow-lg h-full">
                  <Image src={work.imageSrc} alt={work.title} width={1000} height={1000} />
                  <h3 className="text-xl font-semibold text-white absolute bottom-4 left-4">{work.title}</h3>
                </div>
                <div className="flip-card-back bg-white transition-transform transform scale-105 hover:scale-100 p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{work.title}</h3>
                  <p className="text-gray-600 mb-4">{work.description}</p>
                  <div className="flex space-x-4">
                    <a href={work.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                    <a href={work.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Demo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
