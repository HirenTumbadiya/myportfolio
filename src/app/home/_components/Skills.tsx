import React from 'react';

const Skills = () => {
  const skillsList = [
    'React.js',
    'JavaScript',
    'React Native',
    'Next.js',
    'Go',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Redux',
    'Responsive Design',
  ];
  const otherSkills = [
    'Team Collaboration',
    'Problem Solving',
    'Communication',
    'Agile Development',
    'Git/GitHub',
    'VS Code',
    'Jira'
  ];

  return (
    <div className="mt-8 px-40">
      <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
        <div className="flex flex-wrap">
          {skillsList.map((skill, index) => (
            <div key={index} className="bg-gray-200 hover:bg-gray-500 rounded-full px-4 py-2 m-2">
              <span className="text-gray-800">{skill}</span>
            </div>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Other Skills</h3>
        <div className="flex flex-wrap">
          {otherSkills.map((skill, index) => (
            <div key={index} className="bg-gray-200 hover:bg-gray-500 rounded-full px-4 py-2 m-2">
              <span className="text-gray-800">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
