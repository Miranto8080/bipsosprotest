"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Métiers terrain",
    items: [
      "Techniciens",
      "Livreurs",
      "Agents d’entretien",
      "Personnels itinérants",
    ],
    image: "/images/metier-terrain.jpeg",
  },
  {
    title: "Travail de nuit",
    items: ["Sécurité", "Maintenance", "Hôtellerie", "Soins"],
    image: "/images/nuits.jpeg",
  },
  {
    title: "Secteurs sensibles",
    items: [
      "Travailleurs sociaux",
      "Médiateurs",
      "Agents publics",
      "Agents d’accueil",
      "Avocats",
      "Huissiers",
      "Infirmiers",
      "Médecins",
    ],
    image: "/images/sensibless.jpg",
  },
  {
    title: "Déplacements internationaux",
    items: ["Commerciaux", "ONG", "Humanitaire"],
    image: "/images/inter.png",
  },
  {
    title: "Événementiel et coordination",
    items: ["Festivals", "Manifestations", "Encadrement d’équipe"],
    image: "/images/ccordi.jpeg",
  },
];

export default function SolutionSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const nextSlide = () => {
    setAnimationClass("animate-slide-in-right");
    setCurrentSlide((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setAnimationClass("animate-slide-in-left");
    setCurrentSlide(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => setAnimationClass(""), 800);
    return () => clearTimeout(timeout);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center py-12 bg-white">
      <motion.div
        className="max-w-2xl text-center mx-auto flex flex-col items-center"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        variants={{
          hidden: {},
          visible: {}
        }}
      >
        <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.5 }} 
      >
        Pourquoi les entreprises choisissent <span className="text-red-600">bipSOS™<span className="italic">Pro</span></span> ?
      </motion.h2>

        <motion.p
          className="text-gray-600 leading-relaxed text-center max-w-2xl mx-auto"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } }
          }}
        >
          Pensée pour les professionnels, entreprises, associations et services publics,  
          <span className="text-red-600"> bipSOS™<span className="italic">Pro</span></span> transforme chaque téléphone en lanceur d’alerte instantané en cas d’accident, 
          malaise grave, risque, agression.
        </motion.p>
      </motion.div>
      <div className="relative flex flex-col md:flex-row items-center justify-between w-11/12 max-w-6xl h-[480px] mb-5 mt-10">
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-1 md:-left-12 lg:-left-20 xl:-left-32 z-50 bg-red-600 text-white p-2 md:p-3 rounded-full shadow hover:bg-red-700 transition-transform hover:scale-105"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="w-full md:w-1/2 h-full relative overflow-hidden rounded-2xl shadow-md">
          <Image
            src={categories[currentSlide].image}
            alt={categories[currentSlide].title}
            fill
            className="object-cover transition-all duration-700"
          />
        </div>

        <div
          className={`w-full md:w-1/2 px-6 md:px-10 mt-10 md:mt-0 ${animationClass}`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fadeInUp">
            {categories[currentSlide].title}
          </h2>
          <div className="w-16 h-1 bg-red-600 mb-6"></div>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mt-3">
            {categories[currentSlide].items.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 group transition-transform duration-300 hover:translate-x-1"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-black text-black rounded-full font-semibold text-sm">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}
                </div>
                <span className="text-gray-800 font-medium group-hover:text-red-600 transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-1 md:-right-12 lg:-right-20 xl:-right-32 z-50 bg-red-600 text-white p-2 md:p-3 rounded-full shadow hover:bg-red-700 transition-transform hover:scale-105"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
