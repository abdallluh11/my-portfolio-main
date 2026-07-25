import React from "react";
import type { Metadata } from "next";
import PageHero from "../components/common/PageHero";
import Services from "../components/Home/Services/Services";

export const metadata: Metadata = {
  title: "Services | Abdalluh Portfolio",
  description:
    "Explore the services I offer, including UI/UX design, web & mobile app development, creative design, and full-stack development.",
};

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Services" }];

const ServicesPage = () => {
  return (
    <main className="overflow-hidden">
      <PageHero
        title="My"
        highlight="Services"
        description="Development
        Building scalable frontend and backend solutions."
        breadcrumbItems={breadcrumbItems}
      />

      {/* TODO: Edit the content inside the Services component to update your real offerings */}
      <Services />
    </main>
  );
};

export default ServicesPage;
