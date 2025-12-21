"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const BPOfferTable = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8 my-15">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-10 "
        >
          L’offre{" "}
          <span className="text-red-600">
          bipSOS™
          </span>
          Entreprises
        </motion.h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
        <div className="flex-1">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              L’ASSISTANCE INTERNE
            </h2>
          </div>

          <div className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 border-b border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                bipSOS™ Gardian Pro
              </h3>
              <p className="text-gray-700 italic">
                La sécurité discrète sans se faire remarquer
              </p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Check className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="font-medium text-gray-900">
                    Personnalisation du fonds d’écran
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Check className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="font-medium text-gray-900">
                    Furtivité de la touche d’urgence
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Check className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="font-medium text-gray-900">
                    Commande vocale pour la grande urgence
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Check className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="font-medium text-gray-900">
                    Double-clic pour la discrétion
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Check className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="font-medium text-gray-900">
                    Détection automatique de chute ou agression
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Check className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="font-medium text-gray-900">
                    Position GPS jusqu’à 48 heures
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Check className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="font-medium text-gray-900">
                    Historique des alertes
                  </span>
                </div>

                <div className="flex items-start gap-3 mt-6 pt-6 border-t border-gray-200">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Check className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="text-gray-900">
                    Alertes vers le référent sécurité et collaborateurs désignés
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              LA TÉLÉASSISTANCE PROFESSIONNELLE
            </h2>
          </div>

          <div className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-b border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                bipSOS™ Active Assistance Pro
              </h3>
              <p className="text-gray-700 italic">
                La sécurité connectée au centre de téléassistance 24/7
              </p>
            </div>

            <div className="p-6">
              <div className="mb-33">
                <h4 className="font-bold text-gray-900 mb-3">
                  Toutes les fonctionnalités de Gardian :
                </h4>
                <div className="space-y-2 ml-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span className="text-gray-700">Personnalisation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span className="text-gray-700">Furtivité</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span className="text-gray-700">
                      Commandes spécialisées
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span className="text-gray-700">
                      SMS SOS avec position GPS
                    </span>
                  </div>
                </div>
              </div>

              <div className="my-6 border-t border-gray-300"></div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-gray-900">
                  Alertes vers le Centre téléassistance 24/7/365
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <div className="border border-gray-300 rounded-lg bg-white p-6 shadow-sm">
          <div className="mt-8">
            <h4 className="font-bold text-gray-900 mb-4 text-xl">
              Espace Pro :
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">
                  Gestion interne des licences
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">suivi des alertes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">Documentation technique</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">Guides d’utilisation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BPOfferTable;
