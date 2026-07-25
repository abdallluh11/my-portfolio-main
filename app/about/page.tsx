import Image from "next/image";
import PageHero from "../components/common/PageHero";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "About" }];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <PageHero
        title="About"
        highlight="Me"
        description="Get to know more about me, my journey, and what I love building."
        breadcrumbItems={breadcrumbItems}
      />

      <section className="py-24">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}

            <div data-aos="fade-right" className="flex justify-center">
              <Image
                src="/images/about-m.png"
                alt="Abdalluh"
                width={430}
                height={550}
                priority
                className="rounded-3xl shadow-2xl border border-cyan-400/20"
              />
            </div>

            {/* Content */}

            <div data-aos="fade-left">
              <h2 className="text-5xl font-bold text-white">👋 Introduction</h2>

              <p className="text-gray-300 mt-8 leading-8 text-lg">
                I'm{" "}
                <span className="text-cyan-400 font-semibold">
                  Abdalluh Mohamed
                </span>
                , a passionate Full Stack Developer specializing in building
                modern, scalable, and user-friendly web applications using
                React, Node.js, Express, and MongoDB. I enjoy transforming ideas
                into real products with clean code, responsive design, and
                efficient backend architecture.
              </p>

              <h3 className="text-3xl font-bold text-white mt-12">
                🎯 What I Do
              </h3>

              <div className="grid grid-cols-2 gap-5 mt-8">
                <div className="bg-[#15182b] rounded-xl p-5 flex items-center gap-3">
                  <FaCode className="text-cyan-400 text-2xl" />
                  <span className="text-white">Frontend Development</span>
                </div>

                <div className="bg-[#15182b] rounded-xl p-5 flex items-center gap-3">
                  <FaServer className="text-cyan-400 text-2xl" />
                  <span className="text-white">Backend APIs</span>
                </div>

                <div className="bg-[#15182b] rounded-xl p-5 flex items-center gap-3">
                  <FaDatabase className="text-cyan-400 text-2xl" />
                  <span className="text-white">MongoDB</span>
                </div>

                <div className="bg-[#15182b] rounded-xl p-5 flex items-center gap-3">
                  <FaLaptopCode className="text-cyan-400 text-2xl" />
                  <span className="text-white">Full Stack Apps</span>
                </div>
              </div>
            </div>
          </div>
          {/* Journey */}

          {/* Journey */}

          <div className="mt-32">
            <h2 className="text-center text-5xl font-bold text-white">
              💼 My Journey
            </h2>

            <div className="mt-16 space-y-8">
              <div className="border-l-2 border-cyan-400 pl-6">
                <h3 className="text-cyan-400 font-bold">2024</h3>
                <p className="text-gray-300">
                  Started my programming journey by learning Computer Science
                  fundamentals, C++, Object-Oriented Programming (OOP), Data
                  Structures, and Problem Solving. During the same year, I
                  participated in the ICPC Programming Competition, which
                  strengthened my analytical thinking and teamwork skills.
                </p>
              </div>

              <div className="border-l-2 border-cyan-400 pl-6">
                <h3 className="text-cyan-400 font-bold">2025</h3>
                <p className="text-gray-300">
                  Specialized in Backend Development using Node.js, Express.js,
                  MongoDB, REST APIs, Authentication, and built several
                  real-world backend systems before expanding into Frontend
                  Development with React.js and Next.js.
                </p>
              </div>

              <div className="border-l-2 border-cyan-400 pl-6">
                <h3 className="text-cyan-400 font-bold">2026 – Present</h3>
                <p className="text-gray-300">
                  Graduated with an Excellent degree in Information Systems,
                  completed multiple Full Stack projects, and continue improving
                  my skills every day while seeking opportunities as a Junior
                  Full Stack Developer.
                </p>
              </div>
            </div>
          </div>
          {/* Quick Facts */}

          <div className="mt-32">
            <h2 className="text-center text-5xl font-bold text-white">
              📊 Quick Facts
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              <div className="bg-[#15182b] rounded-xl p-6 text-center">
                <FaMapMarkerAlt className="text-cyan-400 text-3xl mx-auto" />
                <h3 className="text-white mt-4">Location</h3>
                <p className="text-gray-400">Sohag, Egypt</p>
              </div>

              <div className="bg-[#15182b] rounded-xl p-6 text-center">
                <FaGraduationCap className="text-cyan-400 text-3xl mx-auto" />
                <h3 className="text-white mt-4">Degree</h3>
                <p className="text-gray-400">Information Systems</p>
              </div>

              <div className="bg-[#15182b] rounded-xl p-6 text-center">
                <FaCode className="text-cyan-400 text-3xl mx-auto" />
                <h3 className="text-white mt-4">Role</h3>
                <p className="text-gray-400">Full Stack Developer</p>
              </div>

              <div className="bg-[#15182b] rounded-xl p-6 text-center">
                <FaLaptopCode className="text-cyan-400 text-3xl mx-auto" />
                <h3 className="text-white mt-4">Status</h3>
                <p className="text-gray-400">Open to Work</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
