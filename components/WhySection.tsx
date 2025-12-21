"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faHandshake,
  faMobileScreen,
  faChartLine,
  faFileLines
} from "@fortawesome/free-solid-svg-icons";

export default function AvantagesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const avantages = [
    {
      icon: faGlobe,
      title: "Conformité légale & PTI/DATI",
      desc: "Respect des obligations du Code du travail et des normes PTI/DATI, sans boîtier dédié.",
    },
    {
      icon: faHandshake,
      title: "Assistance humaine 24/7",
      desc: "Un centre d’opérateurs professionnels, formés aux situations d’urgence et à la gestion de crise.",
    },
    {
      icon: faMobileScreen,
      title: "Déploiement immédiat sur smartphone",
      desc: "Zéro matériel, zéro maintenance. Activation par licence",
    },
    {
      icon: faChartLine,
      title: "Tarification dégressive au volume",
      desc: "Plus vous équipez, moins vous payez. Tarifs ajustés à la taille de votre structure. ",
    },
    {
      icon: faFileLines,
      title: "Reporting & traçabilité",
      desc: "Historique complet des alertes et des interventions",
    },
  ];

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gray-100 py-20 px-6 flex flex-col items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gray-100/70 backdrop-blur-[2px]" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-red-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-red-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-1 max-w-48 mx-auto 
        bg-gradient-to-r from-transparent via-red-500 to-transparent 
        animate-gradient-x"></div>

      <div className={`relative z-10 max-w-[1200px] w-full text-center mb-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Les avantages{" "}
          <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent animate-gradient-x">
            bipSOS Pro{" "}
          </span>
          pour votre organisation
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] mx-auto items-center">
        <div className="flex flex-col gap-10">
          {[avantages[0], avantages[2]].map((item, index) => (
            <div
              key={index}
              className={`text-center p-2 group cursor-pointer transition-all duration-700 ${
                isVisible 
                  ? index === 0 
                    ? 'animate-slide-in-left' 
                    : 'animate-slide-in-left opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{ animationDelay: `${index * 200 + 300}ms` }}
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-red-500 text-3xl mx-auto mb-6 text-red-500 transition-all duration-500 group-hover:bg-red-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-12 animate-pulse-glow">
                <FontAwesomeIcon icon={item.icon} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide transition-colors duration-300 group-hover:text-red-600">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <Image
              src="/images/avantages.png"
              alt="Application bipSOS Pro"
              width={420}
              height={780}
              className="drop-shadow-2xl scale-105 md:scale-110 hidden md:block animate-float"
              style={{ animationDuration: '4s' }}
            />
            <div className="absolute inset-0 bg-red-500/20 rounded-3xl blur-xl -z-10 scale-105 animate-pulse-glow"></div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {[avantages[1], avantages[3]].map((item, index) => (
            <div
              key={index}
              className={`text-center p-2 group cursor-pointer transition-all duration-700 ${
                isVisible 
                  ? index === 0 
                    ? 'animate-slide-in-right' 
                    : 'animate-slide-in-right opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
              style={{ animationDelay: `${index * 200 + 300}ms` }}
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-red-500 text-3xl mx-auto mb-6 text-red-500 transition-all duration-500 group-hover:bg-red-500 group-hover:text-white group-hover:scale-110 group-hover:-rotate-12 animate-pulse-glow">
                <FontAwesomeIcon icon={item.icon} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide transition-colors duration-300 group-hover:text-red-600">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="md:col-span-3 flex justify-center">
          <div className={`text-center max-w-[500px] w-full group cursor-pointer transition-all duration-1000 ${
            isVisible ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '800ms' }}
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-red-500 text-3xl mx-auto mb-6 text-red-500 transition-all duration-500 group-hover:bg-red-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-12 animate-pulse-glow">
              <FontAwesomeIcon icon={avantages[4].icon} className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide transition-colors duration-300 group-hover:text-red-600">
              {avantages[4].title}
            </h3>
            <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
              {avantages[4].desc}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 max-w-48 mx-auto
        bg-gradient-to-r from-transparent via-red-500 to-transparent
        animate-gradient-x"></div>
    </section>
  );
}