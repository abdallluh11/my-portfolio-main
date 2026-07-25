"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Initializes AOS (Animate On Scroll) once for the whole app, and hard-refreshes
 * it on every route change so entrance animations replay correctly when
 * navigating between the new inner pages (Services, Resume, Works, etc.).
 */
const AosInit = () => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [pathname]);

  return null;
};

export default AosInit;
