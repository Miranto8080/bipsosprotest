"use client";

import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faMedal,
  faHeadset
} from "@fortawesome/free-solid-svg-icons";

export default function OffersSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const items = sectionEl.querySelectorAll<HTMLDivElement>(".offer-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((item, index) => {
              item.style.transitionDelay = `${0.15 * index}s`;
              item.classList.add("animate-active");
            });
            observer.unobserve(sectionEl);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionEl);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden py-24"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>

      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <h2 className="text-6xl font-extrabold text-gray-900 mb-20">
          Une technologie reconnue
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 z-40">
        <div className="offer-item bg-white rounded-2xl shadow-xl border border-red-100 p-12 transition-all hover:shadow-2xl hover:-translate-y-2">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-50 border border-red-200">
              <FontAwesomeIcon icon={faCertificate} className="text-red-600 text-4xl" />
            </div>
          </div>
          <h3 className="font-semibold text-2xl text-gray-800 text-center">
            Brevet européen déposé
          </h3>
        </div>

        <div className="offer-item bg-white rounded-2xl shadow-xl border border-red-100 p-12 transition-all hover:shadow-2xl hover:-translate-y-2">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-50 border border-red-200">
              <FontAwesomeIcon icon={faMedal} className="text-red-600 text-4xl" />
            </div>
          </div>
          <h3 className="font-semibold text-2xl text-gray-800 text-center">
            Sceau de l&apos;Excellence — Union Européenne
          </h3>
        </div>

        <div className="offer-item bg-white rounded-2xl shadow-xl border border-red-100 p-12 transition-all hover:shadow-2xl hover:-translate-y-2">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-50 border border-red-200">
              <FontAwesomeIcon icon={faHeadset} className="text-red-600 text-4xl" />
            </div>
          </div>
          <h3 className="font-semibold text-2xl text-gray-800 text-center">
            Agrément téléassistance France
          </h3>
        </div>
      </div>
    </section>
  );
}
