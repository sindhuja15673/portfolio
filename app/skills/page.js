
import React from "react";

import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiReduxsaga, SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-400 text-5xl" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500 text-5xl" /> },
  { name: "Redux-Saga", icon: <SiReduxsaga className="text-yellow-400 text-5xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-5xl" /> }, 
  { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-5xl" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-600 text-5xl" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
];

export default function Skills() {
  return (
    <div id="skills" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 ">
      <h2 className="text-4xl font-bold text-teal-400 mt-10">My Skills</h2>
      
      <div className="grid grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-700 border-1 border-blue-400 duration-300 hover:shadow-[0px_0px_10px_3px_rgba(135,206,250,0.6)]">
            {skill.icon}
            <p className="mt-3 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
}
