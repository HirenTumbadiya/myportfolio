import React from 'react';

const Page = () => {
  // Define your areas of expertise
  const expertiseTags = [
    'React.js',
    'Next.js',
    'React Native',
    'Bootstrap',
    'Tailwind CSS',
    'Redux',
    'Go (Golang)',
    'Node.js',
    'MongoDB',
  ];

  return (
    <div className="mt-8 md:px-40">
      <div className="bg-white rounded-lg p-8 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Hi, I'm Hiren Tumbadiya</h1>
          <p className="text-gray-600">Passionate Full Stack Developer</p>
        </div>

        <p className="text-gray-700 mb-6">
          Welcome to my portfolio! I'm a seasoned Full Stack Developer with a rich background in front-end and
          back-end technologies. Over the years, I've honed my skills in crafting exceptional user experiences
          using a variety of frameworks and tools.
        </p>

        <p className="text-gray-700 mb-6">
          My journey started with React.js, where I developed a deep understanding of building dynamic and
          interactive user interfaces. The versatility of React led me to explore mobile app development with
          React Native, and I'm proud to have successfully published apps on both the App Store and Google Play Store.
        </p>

        <p className="text-gray-700 mb-6">
          In the realm of front-end design, I've seamlessly integrated the power of Bootstrap and the flexibility
          of Tailwind CSS to create visually stunning and responsive applications. The combination of these tools
          has allowed me to deliver seamless user experiences across various devices and screen sizes.
        </p>

        <p className="text-gray-700 mb-6">
          On the back-end, I've ventured into both Go (Golang) and Node.js, leveraging their strengths to build
          scalable and performant server-side solutions. My experience extends to working with databases, and I've
          particularly excelled in MongoDB, ensuring robust data storage and retrieval mechanisms for applications.
        </p>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Areas of Expertise</h2>
          <div className="flex flex-wrap space-x-2">
            {expertiseTags.map((tag, index) => (
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
          Dive deeper into my code repositories on GitHub, where I actively contribute and collaborate on open-source
          projects. My commitment to staying abreast of the latest technologies and industry best practices fuels my
          passion for continuous learning and improvement.
        </p>

        <div className="flex space-x-4">
          <a
            href="https://linkedin.com/in/hirentumbadiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/hirentumbadiya"
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
