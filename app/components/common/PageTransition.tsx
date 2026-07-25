"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 16 },
  enter: { opacity: 1, y: 0 },
};

type Props = {
  children: ReactNode;
};

/**
 * Wraps a page's content in a soft fade + slide-up transition.
 * Used from app/template.tsx so it applies automatically to every route
 * (Home, Services, Resume, Works, Skills, Testimonials, Contact) without
 * having to repeat it inside each page.tsx.
 */
const PageTransition = ({ children }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
