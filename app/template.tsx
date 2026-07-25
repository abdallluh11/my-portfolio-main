import React from "react";
import PageTransition from "./components/common/PageTransition";

/**
 * Next.js remounts template.tsx on every navigation (unlike layout.tsx),
 * which is exactly what we need to replay the PageTransition animation
 * whenever the user moves between pages.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
