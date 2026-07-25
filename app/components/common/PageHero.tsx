"use client";
import React from "react";
import ParticlesHero from "../Home/Hero/ParticleBackground";
import Breadcrumb, { BreadcrumbItem } from "./Breadcrumb";

type Props = {
  /** Main heading text, e.g. "My" */
  title: string;
  /** Highlighted (cyan) part of the heading, e.g. "Services" */
  highlight?: string;
  /** Optional supporting paragraph under the title */
  description?: string;
  /** Breadcrumb trail, first item should be Home */
  breadcrumbItems: BreadcrumbItem[];
};

/**
 * Shared hero used at the top of every inner page (Services, Resume, Works, etc.).
 * Reuses the exact same particle background + design language as the Home hero
 * so the design system stays 100% consistent across the site.
 */
const PageHero = ({ title, highlight, description, breadcrumbItems }: Props) => {
  return (
    <div className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center justify-center text-white overflow-hidden pt-[12vh]">
      <ParticlesHero />

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <div data-aos="fade-down">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-6 text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide"
        >
          {title} {highlight && <span className="text-cyan-200">{highlight}</span>}
        </h1>

        {description && (
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-5 max-w-2xl text-sm sm:text-lg md:text-xl text-gray-300 font-medium"
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;
