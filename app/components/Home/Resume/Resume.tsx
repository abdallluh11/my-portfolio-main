import React from "react";
import ResumCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* WORK PART */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200">Experience</span>
          </h1>

          <div
            className="mt-10"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <ResumCard Icon={FaCodepen} role="Full-Stack Developer" />
            <ResumCard Icon={FaReact} role="Frontend Developer" />
            <ResumCard Icon={BsDatabase} role="Backend Developer" />
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
              role="Software Engineering "
              date="July 2026 - May 2027"
            />
            <ResumCard
              Icon={FaReact}
              role="Bachelor's Degree in Information Systems"
              date="July 2026 - May 2027"
            />
            <ResumCard
              Icon={BsDatabase}
              role="Database & API Engineering"
              date="July 2017 - May 2020"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
