"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface FloatingButtonsProps {
  excludedRoutes?: string[];
  excludedSections?: string[];
}

export default function FloatingButtons({
  excludedRoutes = [],
  excludedSections = [],
}: FloatingButtonsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const checkExcludedSections = () => {
      if (excludedSections.length === 0) return true;

      const isInExcludedSection = excludedSections.some((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const visibleHeight =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          return visibleHeight > window.innerHeight * 0.3;
        }
        return false;
      });

      return !isInExcludedSection;
    };

    const handleScroll = () => {
      const shouldShowButtons = checkExcludedSections();
      setShouldShow(shouldShowButtons);

      if (shouldShowButtons && window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [excludedSections]);

  if (excludedRoutes.includes(pathname) || !shouldShow || !isVisible)
    return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-200 z-50 transition-all duration-300`}
    >
      <div className="flex gap-3 flex-wrap justify-center py-4">
        <Link
          href="/ambassadeur-pro/inscription"
          className="
            w-full md:w-auto
            px-4 md:px-6 py-3
            bg-pink-700 text-white font-bold rounded
            transition-all hover:bg-pink-900 hover:shadow-lg hover:scale-105
            text-sm text-center break-words
            min-w-0 md:min-w-[200px]
          "
        >
          Créez votre compte et découvrez les offres bipSOS Prescripteur
        </Link>
        {/* <Link
            href="/contact"
            className="px-6 py-3 border border-black text-black font-bold rounded-full transition-all hover:bg-gray-100 hover:shadow-lg hover:scale-105 text-sm whitespace-nowrap min-w-[120px] text-center"
          >
            Nous contacter
          </Link> */}
      </div>
    </div>
  );
}
