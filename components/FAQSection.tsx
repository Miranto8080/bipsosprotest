"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
  } from "@fortawesome/free-solid-svg-icons";

const faqItems = [
  {
    question: "Est-ce que bipSOSPro fonctionne sans connexion Internet ?",
    answer: "Oui. Les alertes peuvent être déclenchées et transmises par SMS sécurisé, même en zone blanche."
  },
  {
    question: "Quelle est la durée du suivi GPS ?",
    answer: "Le suivi GPS reste actif jusqu'à 48 heures, le temps d'assurer la sécurisation complète de la personne."
  },
  {
    question: "Quelle est la différence entre bipSOS Gardian Pro et Active Assistance Pro ?",
    answer: "Gardian Pro intègre les alertes furtives avec notifications vers vos référents. Active Assistance Pro ajoute la supervision 24/7 par nos opérateurs et la coordination des secours."
  },
  {
    question: "Peut-on déployer bipSOSPro sur plusieurs sites ou pays ?",
    answer: "Oui. La plateforme gère les structures multi-sites, multi-établissements et déploiements internationaux."
  },
  {
    question: "L'application est-elle conforme aux obligations PTI/DATI ?",
    answer: "bipSOSPro répond aux exigences réglementaires PTI/DATI et est auditée régulièrement pour maintenir cette conformité."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 z-10">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">FAQ</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Les réponses aux questions les plus fréquentes sur bipSOSPro
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mt-8 rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">{item.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 text-red-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="w-8 h-1 bg-red-500 rounded-full mb-4"></div>
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
