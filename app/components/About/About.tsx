import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/common/PageHero";

export const metadata: Metadata = {
  title: "About | Abdalluh Portfolio",
  description: "Learn more about Abdalluh Elswye, Full Stack Developer.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About" },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <PageHero
        title="About"
        highlight="Me"
        description="Get to know more about me, my journey, and what I do."
        breadcrumbItems={breadcrumbItems}
      />

      <section className="py-20">
        <div className="w-[90%] lg:w-[75%] mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div
            className="flex justify-center"
            data-aos="fade-right"
          >
            <Image
              src="/images/about.jpg"
              alt="Abdalluh Elswye"
              width={420}
              height={520}
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Content */}

          <div data-aos="fade-left">

            <h2 className="text-4xl font-bold text-white">
              Hi, I'm
              <span className="text-cyan-400">
                {" "}Abdalluh Elswye
              </span>
            </h2>

            <p className="text-gray-300 leading-8 mt-6">
              I'm a Full Stack Developer passionate about building
              modern, scalable, and high-performance web applications.
              I specialize in React.js, Next.js, Node.js, Express.js,
              and MongoDB.
            </p>

            <p className="text-gray-300 leading-8 mt-6">
              As a recent Information Systems graduate, I'm continuously
              learning, improving my skills, and building real-world
              projects that solve practical problems with clean and
              maintainable code.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-[#161b31] p-5 rounded-xl">
                <h3 className="text-cyan-400 font-bold">
                  Role
                </h3>
                <p className="text-white mt-2">
                  Full Stack Developer
                </p>
              </div>

              <div className="bg-[#161b31] p-5 rounded-xl">
                <h3 className="text-cyan-400 font-bold">
                  Location
                </h3>
                <p className="text-white mt-2">
                  Sohag, Egypt
                </p>
              </div>

              <div className="bg-[#161b31] p-5 rounded-xl">
                <h3 className="text-cyan-400 font-bold">
                  Experience
                </h3>
                <p className="text-white mt-2">
                  Personal & Academic Projects
                </p>
              </div>

              <div className="bg-[#161b31] p-5 rounded-xl">
                <h3 className="text-cyan-400 font-bold">
                  Focus
                </h3>
                <p className="text-white mt-2">
                  MERN Stack
                </p>
              </div>

            </div>

            <div className="flex gap-4 mt-10">

              <a
                href="/Abdalluh_Elswye.pdf"
                target="_blank"
                className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-300 transition"
              >
                Download CV
              </a>

              <Link
                href="/contact"
                className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
              >
                Contact Me
              </Link>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}