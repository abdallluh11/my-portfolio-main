import React from "react";
import { projects } from "@/app/constant/projects";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My Featured Work <br />
        <span className="text-cyan-300">Projects</span>
      </h1>

      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={index * 100}
            className="bg-[#111827] rounded-xl p-4 hover:shadow-xl transition-all duration-300"
          >
            <a
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={650}
                className="rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              />
            </a>

            <h2 className="mt-5 text-2xl font-bold text-white">
              {project.title}
            </h2>

            <p className="mt-2 text-cyan-300">{project.category}</p>

            <p className="mt-4 text-white/70">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition font-semibold"
                >
                  Live Demo
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-cyan-500 text-cyan-300 rounded-lg hover:bg-cyan-500 hover:text-black transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;