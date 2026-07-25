// import React from "react";
import React from "react";
import { skills } from "@/app/constant/skills";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const icons: any = {
  HTML5: <FaHtml5 className="text-orange-500 text-5xl" />,
  CSS3: <FaCss3Alt className="text-blue-500 text-5xl" />,
  JavaScript: <FaJs className="text-yellow-400 text-5xl" />,
  TypeScript: <SiTypescript className="text-blue-400 text-5xl" />,
  "React.js": <FaReact className="text-cyan-400 text-5xl" />,
  "Next.js": <SiNextdotjs className="text-white text-5xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400 text-5xl" />,
  Bootstrap: <FaBootstrap className="text-purple-500 text-5xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-5xl" />,
  "Express.js": <SiExpress className="text-gray-300 text-5xl" />,
  MongoDB: <SiMongodb className="text-green-500 text-5xl" />,
  "Git & GitHub": <FaGitAlt className="text-orange-500 text-5xl" />,
};

const Skills = () => {
  return (
    <section className="py-20">
      <div className="w-[90%] lg:w-[75%] mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div
              key={skill.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="
              bg-[#15152b]
              rounded-2xl
              border
              border-white/10
              p-8
              flex
              flex-col
              items-center
              hover:border-cyan-400
              hover:-translate-y-2
              transition-all
              duration-300
              shadow-lg
              "
            >
              {icons[skill.name]}

              <h3 className="text-white text-xl font-bold mt-5">
                {skill.name}
              </h3>

              <p className="text-cyan-400 mt-2 font-semibold">
                {skill.level}%
              </p>

              <div className="w-full h-2 bg-gray-700 rounded-full mt-5 overflow-hidden">
                <div
                  className="h-full bg-cyan-400 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;