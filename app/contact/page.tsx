"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.currentTarget;
  
    const formData = new FormData(form);
  
    const data = {
      nom: formData.get("nom"),
      prenom: formData.get("prenom"),
      email: formData.get("email"),
      tel: formData.get("tel"),
      question: formData.get("question"),
    };
  
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    if (res.ok) {
      alert("Votre message a bien été envoyé !");
      form.reset(); 
    } else {
      alert("Erreur lors de l’envoi");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="hidden lg:block w-full h-96 lg:h-[550px] relative">
        <Image
          src="/images/contacts.jpg"
          alt="Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div
        className="relative lg:-mt-90 px-4 sm:px-6 z-10"
        ref={sectionRef}
      >
        <div className="max-w-6xl mx-auto">
          <div className="lg:hidden bg-white py-8 space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mt-15">
                Nous contacter
              </h1>
              <div className="w-16 h-1 bg-red-500 rounded-full mt-3 mx-auto"></div>
            </div>

            <div className="space-y-4 text-center">
              <p className="text-lg text-gray-700">
                Une question, besoin d’informations plus précises
              </p>
              <p className="text-base text-gray-600">
                Remplis le formulaire ci-dessous
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Nom *
                  </label>
                  <input
                    name="nom"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Prénom *
                  </label>
                  <input
                    name="prenom"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Votre prénom"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    name="tel"
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Raison social 
                  </label>
                  <input
                    name="raisonsocial"
                    type="raisonsocial"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Votre raison social"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    SIRET 
                  </label>
                  <input
                    name="siret"
                    type="siret"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="12345678901234"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Question *
                </label>
                <textarea
                  name="question"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Envoyer</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>

              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Ou par email à :
                </p>
                <a
                  href="mailto:contact.pro@bipsos.com"
                  className="text-xl text-red-600 hover:text-red-700 font-bold transition-colors duration-300"
                >
                  contact.pro@bipsos.com
                </a>
              </div>

              <p className="text-gray-500 text-sm text-center">
                * Champs obligatoires
              </p>
            </form>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[600px] lg:min-h-[700px] p-8"
          >
            <div className="p-12 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Nous contacter
                </h1>
                <div className="w-16 h-1 bg-red-500 rounded-full mb-6"></div>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Une question, besoin d’informations plus précises
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Remplis le formulaire ci-après
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Ou par email à :
                </p>
                <a
                  href="mailto:contact.pro@bipsos.com"
                  className="text-xl text-red-600 hover:text-red-700 font-bold transition-colors duration-300"
                >
                  contact.pro@bipsos.com
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 justify-center p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Nom *
                  </label>
                  <input
                    name="nom"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Prénom *
                  </label>
                  <input
                    name="prenom"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Votre prénom"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Raison social 
                  </label>
                  <input
                    name="raisonsociale"
                    type="raisonsociale"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Votre raison sociale"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    SIRET 
                  </label>
                  <input
                    name="siret"
                    type="siret"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="12345678901234"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    name="tel"
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Question *
                </label>
                <textarea
                  name="question"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Envoyer</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>

              <p className="text-gray-500 text-sm text-center">
                * Champs obligatoires
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="h-32 bg-white"></div>
    </div>
  );
}