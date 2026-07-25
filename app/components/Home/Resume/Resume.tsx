import React from "react";
import ResumCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">

        {/* WORK EXPERIENCE */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200">Experience</span>
          </h1>

          <div
            className="mt-10"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <ResumCard
              Icon={FaCodepen}
              role="Full Stack Developer"
              description="Building complete web applications using React, Next.js, Node.js, Express.js, and MongoDB with clean architecture and scalable solutions."
            />

            <ResumCard
              Icon={FaReact}
              role="Frontend Developer"
              description="Creating responsive and interactive user interfaces with React, Next.js, TypeScript, Tailwind CSS, and modern frontend technologies."
            />

            <ResumCard
              Icon={BsDatabase}
              role="Backend Developer"
              description="Developing secure REST APIs, authentication systems, and scalable backend services using Node.js, Express.js, and MongoDB."
            />
          </div>
        </div>

        {/* EDUCATION */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>

          <div
            className="mt-10"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ResumCard
              Icon={BiBadge}
              role="Problem Solving & Algorithms (C++)"
              date="2024"
              description="Started my programming journey by learning C++, Object-Oriented Programming, Data Structures, and Problem Solving while participating in ICPC training."
            />

            <ResumCard
              Icon={FaReact}
              role="Started Learning Web Technologies"
              date="2025"
              description="Learned HTML, CSS, JavaScript, Bootstrap, React.js, and modern web development fundamentals by building responsive websites."
            />

            <ResumCard
              Icon={BsDatabase}
              role="Building Real-World Projects"
              date="2026 - Present"
              description="Applied my knowledge by building real-world Full Stack applications using Next.js, Node.js, Express.js, MongoDB, and continuously improving my software engineering skills."
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Resume;