import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, progress: 80 },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" />, progress: 75 },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-500" />, progress: 75 },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, progress: 70 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, progress: 80 },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" />, progress: 75 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, progress: 70 },
  { name: "React.js", icon: <FaReact className="text-cyan-400" />, progress: 78 },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" />, progress: 78 },
];

const Skills = () => {
  return (
    <section className="bg-gray-200 py-10 px-5" id="skills">
      <h2 className="text-4xl font-bold text-center mb-10 flex items-center justify-center gap-3">
        <span role="img" aria-label="briefcase">💼</span> My Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-50 shadow-lg rounded-xl p-5 flex flex-col items-center gap-4 transition hover:scale-105"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${skill.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
