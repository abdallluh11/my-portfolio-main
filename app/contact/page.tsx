import React from "react";
import type { Metadata } from "next";
import PageHero from "../components/common/PageHero";
import Contact from "../components/Home/Contact/Contact";

export const metadata: Metadata = {
  title: "Contact | Abdalluh Portfolio",
  description:
    "Get in touch to discuss your next project — schedule a call or send a message directly.",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Contact" },
];

const ContactPage = () => {
  return (
    <main className="overflow-hidden">
      <PageHero
        title="Get In"
        highlight="Touch"
        description="Have a project in mind? Let's talk about how I can help."
        breadcrumbItems={breadcrumbItems}
      />

      {/* TODO: Wire up the form inside the Contact component to your real submission handler */}
      <Contact />
    </main>
  );
};

export default ContactPage;
