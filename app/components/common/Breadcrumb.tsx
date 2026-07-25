import Link from "next/link";
import React from "react";
import { HiChevronRight, HiOutlineHome } from "react-icons/hi2";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

/**
 * Reusable breadcrumb trail used across every inner page.
 * The first item is always treated as "Home" and rendered with a home icon.
 * The last item is treated as the current page (non-clickable, highlighted).
 */
const Breadcrumb = ({ items }: Props) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center flex-wrap justify-center gap-2 text-xs sm:text-sm md:text-base text-gray-300"
    >
      {items.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === items.length - 1;

        return (
          <span key={item.label} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors duration-200"
              >
                {isFirst && <HiOutlineHome className="w-4 h-4" />}
                <span>{item.label}</span>
              </Link>
            ) : (
              <span
                className={
                  isLast
                    ? "text-cyan-300 font-semibold"
                    : "flex items-center gap-1.5"
                }
              >
                {isFirst && !isLast && <HiOutlineHome className="w-4 h-4" />}
                {item.label}
              </span>
            )}
            {!isLast && <HiChevronRight className="w-3.5 h-3.5 text-gray-500" />}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
