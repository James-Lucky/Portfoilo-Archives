import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaPython,
  FaAndroid,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiAffine,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";

const Skill = () => {
  const skills = [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "React", icon: FaReact },
        { name: "React Native", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Python", icon: FaPython },
    { name: "C++", icon: SiCplusplus },
    { name: "Git", icon: FaGitAlt },
    { name: "Android Studio", icon: FaAndroid },
    { name: "Postman", icon: SiPostman },
    { name: "Affine", icon: SiAffine },
    { name: "Figma", icon: FaFigma },
  ];

  return (
    <div className=" py-12 sm:py-16 lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-blue-300 mb-10">
          Skills
        </h2>
        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-5
                           border border-slate-700/50 hover:border-blue-500/50 
                           transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20
                           flex flex-col items-center justify-center gap-2 sm:gap-3"
              >
                {/* Icon */}
                <IconComponent
                  className="text-3xl sm:text-4xl text-blue-300 group-hover:text-blue-300 
                                         transition-colors duration-300"
                />

                {/* Skill Name */}
                <div
                  className="text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-white 
                              transition-colors duration-300 text-center"
                >
                  {skill.name}
                </div>

                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 
                              group-hover:from-blue-500/10 group-hover:to-purple-500/10 
                              rounded-xl transition-all duration-300 pointer-events-none"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
