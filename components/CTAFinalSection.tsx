"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      className="relative py-24 overflow-hidden bg-black bg-cover bg-center"
      style={{ backgroundImage: "url('/images/protege.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-4xl mx-auto px-6 text-center text-white z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Protégez vos{" "}
            <span className="text-red-400">collaborateurs,</span>
            <br />
            réduisez vos risques
            <br />
            <span className="text-red-400">et valorisez votre politique QSE.</span>
          </h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/offres"
              className="px-6 py-3 bg-red-600 text-white font-bold rounded-full transition transform hover:bg-red-700 hover:shadow-lg hover:scale-105"
            >
              Voir nos offres
            </Link>
            <Link
              href="/devis"
              className="px-6 py-3 border border-white text-white font-bold rounded-full transition-transform duration-300 hover:bg-white hover:text-gray-900 hover:shadow-lg hover:scale-105"
            >
              Obtenir un devis
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
