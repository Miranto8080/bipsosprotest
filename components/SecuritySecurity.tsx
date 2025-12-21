"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    "Gestion centralisée des utilisateurs et licences",
    "Historique complet et traçabilité sur 12 mois",
    "Export CSV / XLSX",
    "Multi-site avec référents locaux",
    "Notifications automatiques avant échéance",
  ];

  useEffect(() => {
    const currentSection = sectionRef.current;
  
    if (!currentSection) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentSection);
        }
      },
      { threshold: 0.15 }
    );
  
    observer.observe(currentSection);
  
    return () => {
      observer.unobserve(currentSection);
    };
  }, []); 

  return (
    <section
      ref={sectionRef}
      id="security-section"
      className="relative bg-white py-20 px-6 flex flex-col items-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-red-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-red-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div
          className={`space-y-6 text-center lg:text-left transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight ${
              isVisible
                ? "animate-fadeInUp"
                : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            Soyez informé de la
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-black animate-gradient-x inline-block">
              sécurité
            </span>
            <br />
            de vos équipes en temps réel.
          </h2>

          <p
            className={`text-gray-900 mb-6 text-base max-w-lg mx-auto lg:mx-0 ${
              isVisible
                ? "animate-fadeInUp"
                : "opacity-0 translate-y-6"
            }`}
            style={{ animationDelay: "400ms" }}
          >
            Une interface centralisée et sécurisée pour suivre les alertes en temps réel et piloter vos licences.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-3 justify-center lg:justify-start ${
              isVisible
                ? "animate-fadeInUp"
                : "opacity-0 translate-y-6"
            }`}
            style={{ animationDelay: "600ms" }}
          >
            <Link
              href="/offres"
              className="px-6 py-3 bg-red-600 text-white font-bold rounded-full transition transform hover:bg-red-700 hover:shadow-lg hover:scale-105"
            >
              Demander une démonstration
            </Link>
            <Link
              href="/offres"
              className="px-6 py-3 border border-black text-black font-bold rounded-full transition transform hover:bg-gray-100 hover:shadow-lg hover:scale-105"
            >
              Commander
            </Link>
          </div>
        </div>

        <div
          className={`w-full md:w-1/2 p-10 ${
            isVisible
              ? "animate-slide-in-right"
              : "opacity-0 translate-x-10"
          }`}
          style={{ animationDelay: "300ms" }}
        >
          <h3
            className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Fonctionnalités
          </h3>

          <div
            className={`w-20 h-1 bg-red-600 mb-8 ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          />

          <ul className="space-y-5">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`flex items-start gap-4 group transition-all duration-300 hover:translate-x-1 ${
                  isVisible
                    ? "animate-fadeInUp"
                    : "opacity-0 -translate-y-4"
                }`}
                style={{
                  animationDelay: `${index * 120 + 400}ms`,
                }}
              >
                <div className="flex-shrink-0 w-10 h-10 border border-black rounded-full flex items-center justify-center text-black font-bold shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {index + 1}
                </div>
                <span className="text-gray-800 font-medium leading-relaxed group-hover:text-red-700 transition-colors duration-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-gradient-x z-30 pointer-events-none shadow-lg"
        style={{ backgroundSize: '200% 100%' }}
      />
    </section>
  );
}