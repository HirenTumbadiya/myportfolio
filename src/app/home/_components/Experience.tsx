import React from "react";

interface ExperienceItemProps {
  companyName: string;
  position: string;
  date: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  companyName,
  position,
  date,
  description,
}) => (
  <div className="bg-white rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
    <div className="flex items-center mb-4">
      <div className="w-4 h-4 bg-gray-800 rounded-full mr-4"></div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{companyName}</h3>
        <p className="text-gray-500">{position}</p>
      </div>
    </div>
    <p className="text-sm text-gray-600">{date}</p>
    <p className="text-sm text-gray-600 mt-2">{description}</p>
  </div>
);

const Experience: React.FC = () => {
  const experienceData = [
    {
      companyName: "Mundrisoft",
      position: "Junior React Developer",
      date: "Dec 2023 - Present",
      description:
        "As a Junior React Developer at Mundrisoft, I play a pivotal role in creating accessible and visually appealing user interfaces for web applications. Employing technologies such as React.js and Next.js, I ensure the seamless integration of Bootstrap to enhance the responsiveness and aesthetic quality of the applications. My responsibilities include developing accessible components, implementing responsive designs, and optimizing performance for an inclusive user experience. Additionally, I actively contribute to maintaining and improving web accessibility standards, ensuring our applications are usable by individuals with diverse abilities. Collaborating with a dynamic team, I participate in agile development processes, deploy applications to production, and stay updated with the latest industry trends to bring innovative solutions to our projects.",
    },
    {
      companyName: "Cosmonaut Technologies",
      position: "React Developer",
      date: "Apr 2023 - Dec 2023",
      description: `Worked with React JS and React Native at Cosmonaut Technologies, where responsibilities included developing and deploying applications.
      Utilized Tailwind CSS, custom CSS, and various technologies. Successfully deployed APKs to both the App Store and Google Play Store.
      Proficient in React hooks, Redux, and implemented a variety of features.`,
    },
  ];

  return (
    <div className="mt-8 px-40">
      <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
      <div className="grid grid-cols-2 gap-6">
        {experienceData.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
