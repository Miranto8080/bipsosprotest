"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2 space-y-6">
              <Image
                src="/images/logo.png"
                alt="Logo BipSOSPro"
                width={150}
                height={150}
                className="rounded-full"
              />
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Aucun appel ou vecteur ne doit rester sans réponse
            </p>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <span>distribué par le</span>
              <span className="font-semibold text-gray-300">SAS Optimus Prime</span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Légal</h3>
            <div className="space-y-3">
              <Link
                href="/privacy"
                className="group block text-gray-400 relative transition-all duration-300"
              >
                <span className="inline-block transform transition-all duration-300 group-hover:translate-x-2 group-hover:text-white">
                  Politique de confidentialité
                </span>

                <span className="absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full opacity-40"></span>
              </Link>
              <Link
                href="/condition"
                className="group block text-gray-400 relative transition-all duration-300"
              >
                <span className="inline-block transform transition-all duration-300 group-hover:translate-x-2 group-hover:text-white">
                  Conditions d’utilisation
                </span>

                <span className="absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full opacity-40"></span>
              </Link>
              <Link
                href="/mentions"
                className="group block text-gray-400 relative transition-all duration-300"
              >
                <span className="inline-block transform transition-all duration-300 group-hover:translate-x-2 group-hover:text-white">
                  Mentions légales
                </span>
                <span className="absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full opacity-40"></span>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Télécharger l’application</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group cursor-pointer">
                  <Image
                    src="/images/app.png"   
                    alt="App Store"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Image
                  src="/images/play.png"   
                  alt="Google Play"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>

            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm mb-10">
              Copyright © 2025 bipSOS. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}