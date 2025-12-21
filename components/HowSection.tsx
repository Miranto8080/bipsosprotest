"use client";
import React, { useEffect, useRef, useState } from "react";
//import Image from "next/image";

const protocolSteps = [
  {
    title: "1. Déclenchement",
    description:
      "Envoi par commande vocale, double-clic discret, ou détection de chute.",
  },
  {
    title: "2. Transmission",
    description:
      "Appel vocal et SMS SOS GPS vers le référent Sécurité ou le Centre d'alerte Active Assistance Pro 24/7.",
  },
  {
    title: "3. Évaluation",
    description:
      "Réception d'alerte et analyse instantanée de la situation par le référent Sécurité ou l'opérateur d'urgence du centre d'alerte AA",
  },
  {
    title: "4. Intervention",
    description:
      "Activation et coordination des secours internes/externes selon la procédure définie",
  },
  {
    title: "5. Acquittement",
    description:
      "Activation et coordination des secours internes/externes selon la procédure définie",
  },
];

// const protocolImages = [
//   {
//     image: "/images/siege.jpeg",
//     alt: "Référente sécurité dans un bureau surveillant les alertes",
//     caption: "Référent sécurité au siège",
//   },
//   {
//     image: "/images/13.jpeg",
//     alt: "Opératrice de centre d'assistance avec casque",
//     caption: "Centre Active Assistance Pro 24/7",
//   },
//   {
//     image: "/images/12.jpeg",
//     alt: "Secours en intervention rapide",
//     caption: "Secours mobilisés sur le terrain",
//   },
// ];

export default function HowSection() {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  //const [isImagesVisible, setIsImagesVisible] = useState(false);
  const [animatedSteps, setAnimatedSteps] = useState<boolean[]>([]);
  
  const titleRef = useRef<HTMLDivElement>(null);
  //const imagesRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentTitleRef = titleRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
          protocolSteps.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSteps(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          });
        }
      },
      { threshold: 0.3, rootMargin: '-50px' }
    );

    if (currentTitleRef) {
      observer.observe(currentTitleRef);
    }

    return () => {
      if (currentTitleRef) {
        observer.unobserve(currentTitleRef);
      }
    };
  }, []);

  // useEffect(() => {
  //   const currentImagesRef = imagesRef.current;
    
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsImagesVisible(true);
  //       }
  //     },
  //     { threshold: 0.3, rootMargin: '-50px' }
  //   );

  //   if (currentImagesRef) {
  //     observer.observe(currentImagesRef);
  //   }

  //   return () => {
  //     if (currentImagesRef) {
  //       observer.unobserve(currentImagesRef);
  //     }
  //   };
  // }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-6 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white/70 backdrop-blur-[2px]" />
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-red-400 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-20 w-12 h-12 bg-red-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-8 h-8 bg-red-500 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div ref={titleRef} className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className={`flex flex-col justify-center space-y-8 transition-all duration-1000 ${
            isTitleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Comment{" "}
              <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent animate-gradient-x">
                bipSOS™<span className="italic">Pro</span>
              </span>{" "}
              protège vos collaborateurs
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Un protocole d’alerte éprouvé et conforme aux standards PTI/DATI 
              pour garantir une réponse rapide et coordonnée. 
              <span className="block mt-4 font-bold bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent animate-pulse">
                1 alerte = 1 SMS SOS GPS + 1 Appel vocal
              </span>
            </p>
          </div>

          <div className="space-y-4">
            {protocolSteps.map((step, index) => (
              <div 
                key={step.title} 
                className={`group p-4 rounded-xl bg-gradient-to-br from-red-50 to-white border border-red-100 shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer transform ${
                  animatedSteps[index] 
                    ? 'opacity-100 translate-x-0 hover:-translate-y-1' 
                    : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-md transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-pulse-glow">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-red-700 mb-1 group-hover:text-red-800 transition-colors duration-300">
                      {step.title.split('. ')[1]}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div ref={imagesRef} className={`bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 shadow-2xl border border-red-100 transition-all duration-1000 ${
          isImagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Notre <span className="text-red-600">chaîne d’intervention</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {protocolImages.map((media, index) => (
              <div 
                key={media.alt} 
                className={`group text-center transform transition-all duration-700 ${
                  isImagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-red-100 mb-4">
                  <Image
                    src={media.image}  
                    alt={media.alt}    
                    width={400} 
                    height={300} 
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:bg-gradient-to-t group-hover:from-red-500/30 group-hover:to-transparent"></div>
                </div>
                
                <figcaption className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                  {media.caption}
                </figcaption>
              </div>
            ))}
          </div>

          <div className="relative mt-8">
            <div className={`absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-red-500 to-red-200 transform -translate-y-1/2 transition-all duration-1000 ${
              isImagesVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`} style={{ transitionDelay: '600ms' }}></div>
            <div className="flex justify-between relative z-10">
              {protocolImages.map((_, index) => (
                <div 
                  key={index}
                  className={`w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg transform transition-all duration-500 hover:scale-125 ${
                    isImagesVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 700}ms` }}
                ></div>
              ))}
            </div>
          </div>

          
        </div> */}
      </div>
    </section>
  );
}