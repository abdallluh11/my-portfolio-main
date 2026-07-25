import React from "react";
import type { Metadata } from "next";
import PageHero from "../components/common/PageHero";
import Resume from "../components/Home/Resume/Resume";

export const metadata: Metadata = {
  title: "Resume | Abdalluh Portfolio",
  description:
    "My professional work experience and educational background — full-stack, frontend and backend development.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Resume" },
];

const ResumePage = () => {
  return (
    <main className="overflow-hidden">
      <PageHero
        title="My"
        highlight="Resume"
        description="A summary of my work experience and education so far."
        breadcrumbItems={breadcrumbItems}
      />

      {/* TODO: Edit the content inside the Resume component to update your real experience & education */}
      <Resume />
    </main>
  );
};

export default ResumePage;
