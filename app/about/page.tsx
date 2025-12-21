"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface SectionProps {
  children: React.ReactNode;
}

function AnimatedSection({ children }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`before-animate ${isVisible ? "animate-active" : ""}`}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="relative py-20 bg-white overflow-hidden min-h-screen">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-400 rounded-full animate-float"></div>
        <div
          className="absolute top-1/3 right-20 w-16 h-16 bg-red-300 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-12 h-12 bg-red-500 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <AnimatedSection>
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 mt-15">
              Combattre l’
              <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent animate-gradient-x">
                insécurité
              </span>{" "}
              et l’
              <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent animate-gradient-x">
                isolement
              </span>
            </h1>
          </div>
        </AnimatedSection>

        <div className="relative top-0 left-0 right-0 h-1 max-w-48 mx-auto bg-gradient-to-r from-transparent via-red-500 to-transparent animate-gradient-x mb-16"></div>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            <div className="md:pr-8 animate-slide-in-left">
              <h2 className="text-4xl font-bold text-gray-900">Notre mission</h2>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center space-x-3 animate-stagger">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse-glow"></div>
                <p className="text-xl font-semibold">Renforcer votre sécurité</p>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed animate-stagger" style={{ animationDelay: "0.2s" }}>
                Violences urbaines ou familiales, problèmes de santé soudains ou
                chroniques, l’isolement est devenu un problème majeur de notre
                société.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed animate-stagger" style={{ animationDelay: "0.4s" }}>
                Nous nous sommes donné pour mission d’améliorer la sécurité des
                personnes grâce à des technologies innovantes, brevetées et
                reconnues, notamment par le{" "}
                <span className="font-semibold text-red-800">
                  Sceau de l’Excellence de l’Union Européenne en 2019.
                </span>
              </p>

              <div className="mt-8 flex justify-center animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
                <Image
                  src="/images/european.jpg" 
                  alt="Illustration"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="relative top-0 left-0 right-0 h-1 max-w-48 mx-auto bg-gradient-to-r from-transparent via-red-500 to-transparent animate-gradient-x mt-16"></div>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mt-20">
            <div className="md:pr-10 animate-slide-in-right">
              <h2 className="text-4xl font-bold text-gray-900">Nos valeurs</h2>
            </div>

            <div className="md:col-span-2 space-y-10">
              {[
                {
                  titre: "Respect",
                  description:
                    "Nous reconnaissons à toute personne le respect inconditionnel, quel que soit son âge, sa condition sociale, son style de vie, sa religion ou sa couleur de peau."
                },
                {
                  titre: "Pragmatisme",
                  description:
                    "Notre pratique repose sur l’expérience de terrain et le contact quotidien avec des personnes en situation d’urgence santé ou sécurité."
                },
                {
                  titre: "Écoute",
                  description:
                    "Chaque jour, c’est par une écoute attentive que nous comprenons mieux et très pratiquement les besoins de sécurité et de sérénité."
                }
              ].map((valeur, index) => (
                <div
                  key={valeur.titre}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse-glow"></div>
                    <p className="text-xl font-semibold">{valeur.titre}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{valeur.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="relative top-0 left-0 right-0 h-1 max-w-48 mx-auto bg-gradient-to-r from-transparent via-red-500 to-transparent animate-gradient-x mt-16"></div>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mt-20">
            <div className="md:pr-10 animate-slide-in-left">
              <h2 className="text-4xl font-bold text-gray-900">Notre équipe</h2>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed animate-stagger" style={{ animationDelay: "0.1s" }}>
                Nous sommes une équipe de passionnés, développeurs et commerciaux avec une expérience terrain de plus de{" "}
                <span className="font-bold text-red-800">15 ans</span>
                dans la téléassistance auprès de publics fragiles ou isolés.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed animate-stagger" style={{ animationDelay: "0.3s" }}>
                Nous travaillons avec <span className="font-bold text-red-800">enthousiasme</span> pour concevoir des solutions simples et efficaces pour la vie quotidienne.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { value: "15+", label: "Années d’expérience" },
                { value: "100%", label: "Engagement" },
                { value: "24/7", label: "Disponibilité" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="text-center animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="text-4xl font-bold text-red-600 mb-2">{item.value}</div>
                  <div className="text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
