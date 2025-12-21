"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OffreSection() {
  const offers = [
    {
      image: "/images/gardian.jpeg",
      title: "BipSOS GardianPro",
      subtitle: "La sécurité discrète sans se faire remarquer",
      features: [
        {
          category: "Furtivité :",
          items: [
            "Fond d'écran personnalisable",
            "Réglage discrétion des touches d'urgence"
          ]
        },
        {
          category: "Alertes déclenchées par commandes spécialisées :",
          items: [
            "Pour la grande urgence : par commande vocale",
            "– Android : téléphone verrouillé",
            "– iPhone : affichage premier plan",
            "Par prudence : double-clic discret",
            "En cas de chute : détection automatique"
          ]
        },
        {
          category: "SMS SOS :",
          items: [
            "Suivi GPS jusqu'à 48 heures",
            "1 à 5 contacts d'urgence",
            "Alertes illimitées"
          ]
        },
        {
          items: [
            "Historique des alertes",
            "Mises à jour gratuites à vie"
          ]
        }
      ],
      conclusion: "bipSOS™ Gardian - La discrétion est un gage de sécurité.",
      buttonText: "CONTACTEZ-NOUS POUR COMMANDER",
      reverse: false
    },
    {
      image: "/images/active.jpeg",
      title: "BipSOS Active Assistance Pro",
      subtitle: "La sécurité connectée au centre de téléassistance 24/7",
      features: [
        {
          category: "Toutes les fonctionnalités Gardian Pro :",
          items: [
            "Furtivité",
            "Alertes commandes spécialisées",
            "Historique des alertes",
            "Mises à jour gratuites"
          ]
        },
        {
          items: [
            "Réception alertes centre 24/7/365",
            "Évaluation par opérateur expérimenté",
            "Mobilisation secours locaux",
            "Information contacts (jusqu'à 7)",
            "Suivi temps réel"
          ]
        }
      ],
      buttonText: "CONTACTEZ-NOUS POUR COMMANDER",
      reverse: true
    }
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-gradient-x"></div>

      <motion.div
        className="text-center mb-16 mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Choisissez la{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
            protection adaptée
          </span>{" "}
          à votre organisation
        </motion.h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: index * 0.15
            }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row items-center gap-12 mb-20 ${
              offer.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            <motion.div
              className="lg:w-1/2 w-full hidden lg:block"
              initial={{ opacity: 0, x: offer.reverse ? 40 : -40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                src={offer.image}
                alt={offer.title}
                width={600}
                height={500}
              />
            </motion.div>

            <div className="lg:w-1/2 w-full">
              <div className="space-y-6">
                <div>
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, x: offer.reverse ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    {offer.title}
                  </motion.h2>

                  <motion.p
                    className="text-xl text-red-600 font-semibold mb-6"
                    initial={{ opacity: 0, x: offer.reverse ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    {offer.subtitle}
                  </motion.p>
                </div>

                <div className="space-y-4">
                  {offer.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="space-y-2">
                      {feature.category && (
                        <motion.h4
                          className="font-bold text-red-700 text-base"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          {feature.category}
                        </motion.h4>
                      )}

                      <ul className="space-y-1">
                        {feature.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-start text-gray-700 text-sm leading-relaxed"
                            initial={{
                              opacity: 0,
                              x: -12,
                              filter: "blur(4px)"
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              filter: "blur(0px)"
                            }}
                            transition={{
                              duration: 0.45,
                              delay: itemIndex * 0.07,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                          >
                            <div className="flex-shrink-0 w-4 h-4 bg-black rounded-full flex items-center justify-center mr-2 mt-0.5">
                              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            </div>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {offer.conclusion && (
                  <motion.div
                    className="mt-4 p-3 bg-red-50 rounded-lg border border-red-100"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-red-700 font-semibold text-center italic text-sm">
                      {offer.conclusion}
                    </p>
                  </motion.div>
                )}

                <div className="mt-6">
                  <Link
                    href="/#"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-red-700 hover:to-red-900 group text-sm"
                  >
                    <span>{offer.buttonText}</span>
                    <div className="ml-2 w-5 h-5 bg-white rounded-full flex items-center justify-center transform transition-transform group-hover:translate-x-1">
                      <span className="text-red-600 font-bold text-xs">→</span>
                    </div>
                  </Link>
                </div>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
