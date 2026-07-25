import React from "react";
import type { Metadata } from "next";
import PageHero from "../components/common/PageHero";
import Skills from "../components/Home/Skills/Skills";

export const metadata: Metadata = {
  title: "Skills | Abdalluh Portfolio",
  description:
    "The technologies and tools I work with, including JavaScript, React, Next.js, Node.js, Tailwind CSS and TypeScript.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Skills" },
];

const SkillsPage = () => {
  return (
    <main className="overflow-hidden">
      <PageHero
        title="My"
        highlight="Skills"
        description="The stack and tools I use every day to design and build products."
        breadcrumbItems={breadcrumbItems}
      />

      {/* TODO: Edit the skills array inside the Skills component to update your real skill set */}
      <Skills />
    </main>
  );
};

export default SkillsPage;
