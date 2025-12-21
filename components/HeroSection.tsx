"use client";

import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHandshake,
  // faLocationDot,
  // faMicrophone,
  // faHeadset,
  // faCircle,
} from "@fortawesome/free-solid-svg-icons";
// import {
//   CheckBadgeIcon,
//   GlobeAltIcon,
//   BuildingOfficeIcon,
// } from "@heroicons/react/24/solid";
import ProtectionSection from "./ProtectionSection";

export default function HeroSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".before-animate")
      .forEach((el) => observer.observe(el));
  }, []);
  return (
    <>
      {/* <section className="relative min-h-screen overflow-hidden text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/bbg.png"
            alt="Sécurité professionnelle bipSOS"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-br from-black via-red-950 to-red-800 shadow-2xl h-[200px] md:h-[250px]"
        >
          <div className="max-w-5xl mx-auto h-full px-6 flex items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="hidden md:absolute md:-left-40 md:h-full md:flex items-center -top-35"
            >
              <Image
                src="/images/Image1.png"
                alt="Illustration bipSOS"
                width={200}
                height={250}
                className="object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mx-auto md:ml-64 text-center md:text-left max-w-5xl relative z-10"
            >
              <h1 className="text-3xl md:text-6xl font-extrabold mb-3">
                <span className="text-red-500">bipSOS™</span>
              </h1>

              <p className="text-xl md:text-4xl font-extrabold">
                Réinvente la sécurité professionnelle & transforme tout
                smartphone
                <br className="hidden md:block" />
                <span className="text-red-500">en lanceur d’alerte</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section> */}
      <section className="relative min-h-screen overflow-hidden text-white bg-white">
        {/* Background Image réduit et avec bg white */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex justify-center items-center p-6 md:p-12"
        >
          <div className="w-full h-full max-w-[1200px] max-h-[1500px] relative">
            <Image
              src="/images/bbg.png"
              alt="Sécurité professionnelle bipSOS"
              fill
              priority
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Overlay gradient en bas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-br from-black via-red-950 to-red-800 shadow-2xl h-[200px] md:h-[250px]"
        >
          <div className="max-w-5xl mx-auto h-full px-6 flex items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="hidden md:absolute md:-left-40 md:h-full md:flex items-center -top-35"
            >
              <Image
                src="/images/Image1.png"
                alt="Illustration bipSOS"
                width={200}
                height={250}
                className="object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mx-auto md:ml-64 text-center md:text-left max-w-5xl relative z-10"
            >
              <h1 className="text-3xl md:text-6xl font-extrabold mb-3">
                <span className="text-red-500">bipSOS™</span>
              </h1>

              <p className="text-xl md:text-4xl font-extrabold">
                Réinvente la sécurité professionnelle & transforme tout
                smartphone
                <br className="hidden md:block" />
                <span className="text-red-500">en lanceur d’alerte</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="relative w-full bg-[#F7F9FB] h-[300px] md:h-[540px] overflow-hidden flex justify-center items-center p-6 md:p-12">
        <motion.div
          className="relative w-full h-full max-w-[700px] max-h-[500px] md:max-w-[1000px] md:max-h-[700px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <Image
            src="/images/foot1.png"
            alt="Illustration entre sections"
            fill
            priority
            className="object-contain"
          />
        </motion.div>
      </div>

      <ProtectionSection />
      <div className="relative w-full bg-white h-[300px] md:h-[540px] overflow-hidden flex justify-center items-center p-6 md:p-12">
        <motion.div
          className="relative w-full h-full max-w-[600px] max-h-[400px] md:max-w-[900px] md:max-h-[600px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <Image
            src="/images/foot.png"
            alt="Illustration entre sections"
            fill
            priority
            className="object-contain"
          />
        </motion.div>
      </div>
      <section className="relative min-h-screen pb-32 flex flex-col justify-center overflow-hidden text-white bg-gradient-to-br from-blue-900 via-blue-950 to-red-800">
        <div className="relative z-10 mx-auto px-6 max-w-6xl pt-32 pb-20 my-10">
          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight before-animate">
              Solutions Pro pour{" "}
              <span className="text-red-600">entreprises</span> et{" "}
              <span className="text-red-600">partenaires</span> de diffusion
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/20 transition text-center hover:animate-pulse-glow before-animate">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 via-violet-600 to-rose-700 text-white shadow-xl animate-float">
                    <FontAwesomeIcon icon={faHandshake} size="2x" />
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest bg-gradient-to-r from-emerald-400 via-violet-500 to-rose-600 bg-clip-text text-transparent before-animate">
                  Partenaires
                </h2>
                <h3 className="text-4xl font-semibold mt-2 text-white before-animate">
                  Développez votre activité
                </h3>
                <h4 className="text-2xl font-bold mt-12 text-white before-animate">
                  Partenariat de diffusion
                </h4>
                <p className="text-gray-200 text-m mt-2 before-animate">
                  pour distributeurs, influenceurs et prescripteurs
                </p>
                <Link
                  href="/partenaires"
                  className="inline-block mt-8 text-purple-400 font-bold hover:text-rose-500 transition before-animate"
                >
                  Découvrir →
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/20 transition text-center hover:animate-pulse-glow before-animate">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-red-800 to-red-950 text-white shadow-xl animate-float">
                    <FontAwesomeIcon icon={faBuilding} size="2x" />
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest bg-gradient-to-r from-red-400 via-red-350 to-red-400 bg-clip-text text-transparent before-animate">
                  ENTREPRISES
                </h2>
                <h3 className="text-4xl font-semibold mt-2 text-white before-animate">
                  Protégez vos salariés
                </h3>
                <h4 className="text-2xl font-bold mt-12 text-white before-animate">
                  Solutions de sécurité
                </h4>
                <p className="text-gray-200 text-m mt-2 before-animate">
                  pour équipes tertiaires, commerciaux sédentaires et
                  itinérants, télétravail, situation de handicap
                </p>

                <Link
                  href="/partenaires"
                  className="inline-block mt-8 text-red-400 font-bold hover:text-red-300 transition before-animate"
                >
                  Découvrir →
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <motion.div
          className="absolute bottom-0 left-0 w-full bg-white text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-4xl font-extrabold text-red-600">10s</p>
                <p className="text-sm font-semibold tracking-wide uppercase">
                  Temps de réponse
                </p>
              </div>

              <div>
                <p className="text-4xl font-extrabold text-red-600">24/7</p>
                <p className="text-sm font-semibold tracking-wide uppercase">
                  Téléassistance
                </p>
              </div>

              <div>
                <p className="text-4xl font-extrabold text-red-600">5</p>
                <p className="text-sm font-semibold tracking-wide uppercase">
                  Langues
                </p>
              </div>

              <div>
                <p className="text-4xl font-extrabold text-red-600">112</p>
                <p className="text-sm font-semibold tracking-wide uppercase">
                  Pays couverts
                </p>
              </div>
            </div>
          </div>
        </motion.div> */}
      </section>
      {/* <section className="bg-gray-50 py-25">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.42, 0, 0.58, 1],
              delay: 0.1,
            }}
            className="p-8 text-center transition-all duration-300 mb-12 rounded-lg"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-red-600 border border-red-600 rounded-full bg-red-600/10">
              <FontAwesomeIcon
                icon={faCircle}
                className="text-red-600 text-[6px]"
              />
              LA SOLUTION
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mt-4">
              Une technologie au service de la protection
            </h3>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              bipSOS™ combine excellence technologique et possibilité
              d’intervention humaine qualifiée pour une protection complète.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: faLocationDot,
                title: "Géolocalisation précise",
                text: "GPS + triangulation réseau pour une localisation exacte transmise instantanément aux secours.",
              },
              {
                icon: faMicrophone,
                title: "Modes d'alerte multiples",
                text: "Bouton SOS, commande vocale, double-clic discret, détection automatique de chute.",
              },
              {
                icon: faHeadset,
                title: "Centre 24/7 multilingue",
                text: "Opérateurs formés aux urgences, réponse garantie en 10 secondes, coordination des secours.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.2,
                  ease: "easeOut",
                }}
                className="group bg-white rounded-2xl p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-red-100 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110">
                  <FontAwesomeIcon icon={item.icon} size="xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-red-600">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-white">
        <div className="h-px bg-gray-300 w-full"></div>

        <div className="py-12 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-8 lg:space-x-12">
            <div className="flex items-start space-x-3">
              <span className="flex-shrink-0 flex items-center justify-center bg-gray-200 rounded-sm p-2 mt-1">
                <CheckBadgeIcon className="h-5 w-5 text-gray-700" />
              </span>
              <div>
                <div className="text-sm font-medium text-gray-800">
                  Brevet européen
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  Protection intellectuelle déposée
                </div>
              </div>
            </div>

            <div className="hidden md:block text-gray-400 self-center h-6">
              |
            </div>

            <div className="flex items-start space-x-3">
              <span className="flex-shrink-0 flex items-center justify-center bg-gray-200 rounded-sm p-2 mt-1">
                <GlobeAltIcon className="h-5 w-5 text-gray-700" />
              </span>
              <div>
                <div className="text-sm font-medium text-gray-800">
                  Sceau d’excellence UE
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  Reconnaissance européenne 2019
                </div>
              </div>
            </div>

            <div className="hidden md:block text-gray-400 self-center h-6">
              |
            </div>

            <div className="flex items-start space-x-3">
              <span className="flex-shrink-0 flex items-center justify-center bg-gray-200 rounded-sm p-2 mt-1">
                <BuildingOfficeIcon className="h-5 w-5 text-gray-700" />
              </span>
              <div>
                <div className="text-sm font-medium text-gray-800">
                  Certifié depuis 2011
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  Accréditation téléassistance France
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="py-20 bg-gradient-to-r from-blue-900 to-red-600">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="space-y-2 md:space-y-3 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Découvrez la solution adaptée à votre activité et vos besoins
            </h2>

            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              ou
            </h2>

            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              contactez-nous pour un accompagnement personnalisé.
            </h2>
          </div>

          <div className="flex justify-center mt-15 mb-15">
            <div className="h-px w-24 bg-gray-200"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <button
              onClick={() => (window.location.href = "/partenaires")}
              className="px-6 py-4 bg-red-500 hover:bg-gray-900 text-white font-semibold rounded-lg shadow-md transition-all duration-200 flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold">Espace Partenaires</h3>
            </button>
            <button
              onClick={() => (window.location.href = "/entreprises")}
              className="px-6 py-4 border border-white hover:bg-gray-900 text-white font-semibold rounded-lg shadow-md transition-all duration-200 flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold">Espace Entreprises</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
