"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProtectionSection() {
  const steps = [
    {
      title: "par commande vocale",
      subtitle1: "Même téléphone verrouillé.",
      subtitle2: "avec votre mot d'alarme secret dans la grande urgence*.",
      note: "* Uniquement sur smartphones Android",
      img: "/images/vocale.png",
    },
    {
      title: "par double-clic discret",
      subtitle1: "Deux clics, une alerte discrète.",
      subtitle2:
        "Personne autour ne la voit, mais les contacts reçoivent votre alerte.",
      img: "/images/clic.png",
    },
    {
      title: "par détection de chute",
      subtitle1: "Si vous tombez, bipSOS le sait.",
      subtitle2:
        "Et envoie immédiatement une alerte à ceux qui peuvent vous aider.",
      img: "/images/chute.png",
    },
  ];

  const features = [
    {
      title: "la personnalisation",
      subtitle: "Votre sécurité, votre style",
      image: "/images/personnalisation.jpeg",
      description: "Choisisssez votre fond d'écran et bipSOS™ s'intègre dans votre vie, sans rien imposer."
    },
    {
      title: "la furtivité",
      subtitle: "Invisible à l'œil nu",
      image: "/images/furtivite.jpeg",
      description: "Vous seul savez que bipSOS™ vous protège."
    },
    {
      title: "le suivi GPS 48h",
      subtitle: "Rester visible pour ce qui veillent",
      image: "/images/sos.jpg",
      description: "Votre position reste visible pendant 48h."
    },
    // {
    //   title: "Historique",
    //   subtitle: "Chaque alerte laisse une trace qui peut servir de preuve si nécessaire.",
    //   image: "/images/fonctionnalites-historique-2.jpg",
    // },
  ];

  // const feat = [
  //   "Personnalisation du fond d'écran",
  //   "Furtivité des touches d'urgence",
  //   "Déclenchement instantané (2 clics / commande vocale / chute)",
  //   "Suivi GPS en temps réel jusqu'à 48h",
  //   "Paramétrage entreprise : établissement / référant / contacts",
  // ];

  return (
    <section className="flex flex-col items-center text-center px-6 py-18 ">
      <motion.h1
        className="font-bold text-3xl md:text-5xl text-center leading-tight px-auto"
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <span className="text-red-600">
        L’innovation Sécurité professionnelle
        </span>{" "}
        <br/>
        pour lancer une alerte {" "}
        <span className="text-red-600">
        instantanément
        </span>{" "}
      </motion.h1>

      <motion.h1
        className="font-bold text-2xl md:text-4xl text-center leading-tight px-auto mt-15"
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        en toutes circonstances
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mt-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="flex flex-col items-center text-center group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: index * 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="mb-6">
              <Image
                src={step.img}
                alt={step.title}
                width={320} 
                height={320}
                className="transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl shadow-lg       
                  rounded-xl border-2  border-gray-100 hover:border-red-200 hover:shadow-2xl"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-red-600">
              {step.title}
            </h3>
            <p className="font-semibold text-gray-800 transition-all duration-300 group-hover:text-gray-900">
              {step.subtitle1}
            </p>
            <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-700">
              {step.subtitle2}
            </p>
            {step.note && (
              <p className="text-xs text-gray-400 mt-2 italic transition-colors duration-300 group-hover:text-gray-500">
                {step.note}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      <motion.h1
        className="font-bold text-2xl md:text-4xl text-center leading-tight px-auto mt-15"
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        et{" "}
        <span className="text-red-600">
        en toute sécurité 
        </span>{" "}
        grâce à
      </motion.h1>

      <div className="w-full max-w-6xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl
                hover:shadow-2xl transition-all duration-400 mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-110
                  "
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-3">
                {item.title}
              </h3>

              <p className="
                text-lg
                md:text-xl
                text-gray-700
                font-medium
                mb-4
                leading-relaxed
              ">
                {item.subtitle}
              </p>
              
              <div className="text-gray-600">
                <p className="
                  text-base
                  md:text-lg
                  leading-relaxed
                  italic
                  max-w-sm
                  mx-auto
                ">
                  {item.description || 
                    (index === 0 && "Choisis ton fond d'écran et bipsOS™ s'intègre dans ta vie, sans rien imposer.") ||
                    (index === 1 && "Ton seul soit que bipsOS™ te protège.") ||
                    (index === 2 && "Ta position reste visible pendant 48h.")
                  }
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
