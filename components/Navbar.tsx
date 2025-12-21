"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPartenairesOpen, setIsPartenairesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white py-4 px-6 md:px-10">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Logo BipSOSPro"
            width={120}
            height={120}
            className="rounded-full"
          />
        </Link>

        <div className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <div className="relative group">
            <Link
              href="/partenaires"
              className="flex items-center space-x-1 hover:text-red-400 transition"
            >
              <span>Partenaires</span>
              <ChevronDown size={16} />
            </Link>

            <div className="absolute top-full mt-2 w-48 bg-black border border-white/10 rounded-md shadow-lg
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-200 z-50">
              <Link
                href="/distributeurs"
                className="block px-4 py-2 hover:bg-gray-900 transition"
              >
                Distributeurs
              </Link>
              <Link
                href="/ambassadeurs"
                className="block px-4 py-2 hover:bg-gray-900 transition"
              >
                Ambassadeurs
              </Link>
              <Link
                href="/ambassadeur-pro"
                className="block px-4 py-2 hover:bg-gray-900 transition"
              >
                Prescripteurs
              </Link>
            </div>
          </div>

          <Link href="/entreprises" className="hover:text-red-400 transition">
            Entreprises
          </Link>

          <Link href="/about" className="hover:text-red-400 transition">
            À propos
          </Link>

          <Link href="/contact" className="hover:text-red-400 transition">
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black text-white py-4 border-t border-white/10 px-6">
          <div className="border-b border-white/10">
            <button
              onClick={() => setIsPartenairesOpen(!isPartenairesOpen)}
              className="w-full text-left py-3 flex items-center justify-between hover:text-red-400 transition"
            >
              <span>Partenaires</span>
              <ChevronDown size={16} />
            </button>

            {isPartenairesOpen && (
              <div className="pl-4 pb-2">
                <Link
                  href="/partenaires"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-red-400 transition font-semibold"
                >
                  Voir tous les partenaires
                </Link>
                <Link
                  href="/distributeurs"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-red-400 transition"
                >
                  Distributeurs
                </Link>
                <Link
                  href="/ambassadeurs"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-red-400 transition"
                >
                  Ambassadeurs
                </Link>
                <Link
                  href="/ambassadeur-pro"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-red-400 transition"
                >
                  Prescripteurs
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/entreprises"
            onClick={() => setIsOpen(false)}
            className="block py-3 hover:text-red-400 transition border-b border-white/10"
          >
            Entreprises
          </Link>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block py-3 hover:text-red-400 transition border-b border-white/10"
          >
            À propos
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block py-3 hover:text-red-400 transition border-b border-white/10"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
