"use client";

import Link from "next/link";
import {
  BuildingOfficeIcon,
  GlobeAltIcon,
  MegaphoneIcon,
  UsersIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { Heart, Users, Briefcase } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  faCircle,
  faChartLine,
  faUsers,
  faStar,
  faBolt,
  faCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function PartenairesPage() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const items = [
    {
      titleTop: "DISTRIBUTEUR",
      title: "de vos clients",
      desc: "Adhérent de mutuelle, assuré de courtier, voyageur d'agence.",
      icon: <Briefcase size={28} strokeWidth={2} />,
      color: "#008069",
      href: "/distributeurs",
    },
    {
      titleTop: "Ambassadeur",
      title: "de vos followers",
      desc: "Membre de vos communautés de l'influenceur ou créateur.",
      icon: <Heart size={28} strokeWidth={2} />,
      color: "#6B00FF",
      href: "/ambassadeurs",
    },
    {
      titleTop: "PRESCRIPTEUR",
      title: "de vos bénéficiaires",
      desc: "Membre ou affilié de l'association, fédération ou collectivité.",
      icon: <Users size={28} strokeWidth={2} />,
      color: "#E3006E",
      href: "/ambassadeurpro",
    },
  ];

  return (
    <main>
      <section
        className="relative min-h-screen w-full bg-gradient-to-br from-[#041027] via-[#0a1a33] to-[#4b1d77]
        text-white font-poppins overflow-hidden flex items-center justify-center"
      >
        <div
          id="hero"
          className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 px-6 md:px-12 py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              inline-flex items-center gap-5
              px-10 py-6
              text-lg md:text-xl lg:text-2xl
              font-bold tracking-widest uppercase
              border border-white/30 rounded-full
              bg-white/15 backdrop-blur-lg
              shadow-2xl shadow-black/40
            "
          >
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCircle}
                className="text-green-400 text-[12px]"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="text-purple-400 text-[12px]"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="text-pink-400 text-[12px]"
              />
            </div>

            <span className="text-white">3 Programmes Partenaires</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Développez votre{" "}
            <span className="bg-gradient-to-r from-green-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              activité{" "}
            </span>
            avec bipSOS™
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Devenez partenaire d’une solution de protection innovante.
            Enrichissez votre offre, fidélisez vos clients, générez des revenus
            complémentaires.
          </motion.p>

          <motion.div
            className="flex flex-col items-center pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("programmes")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="group inline-flex flex-col items-center text-white hover:text-gray-200 transition-colors duration-300 cursor-pointer"
            >
              <motion.span
                className="text-2xl mt-5"
                animate={{ y: [0, 6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: "easeInOut",
                }}
              >
                DÉCOUVRIR LES PROGRAMMES
              </motion.span>
              <motion.span
                className="text-3xl mt-1"
                animate={{ y: [0, 6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: "easeInOut",
                }}
              >
                ↓
              </motion.span>
            </button>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainerVariants}
        className="py-20 px-6 md:px-12 lg:px-20 xl:px-32 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUpVariants} className="space-y-8">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="
                    inline-flex items-center gap-2.5
                    px-4 py-2
                    text-sm font-semibold tracking-wider uppercase
                    text-red-600
                    border border-red-600 rounded-full
                    bg-red-600/10 backdrop-blur-sm
                    shadow-sm shadow-red-600/20
                    mb-4
                  "
                >
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-red-600 text-[8px]"
                  />
                  <span>PARTENARIAT</span>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                  className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                >
                  Un partenariat gagnant-gagnant
                </motion.h3>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="text-base text-gray-600 leading-relaxed"
              >
                Vous apportez l’audience et la relation de confiance. Nous
                apportons une solution de protection reconnue, la technologie et
                le support.
              </motion.p>

              <div className="space-y-6 pt-4">
                {[
                  {
                    icon: faChartLine,
                    title: "Revenus complémentaires",
                    desc: "Commission attractives, remises sur volume, bonus de performance.",
                  },
                  {
                    icon: faUsers,
                    title: "Fidélisation renforcée",
                    desc: "Un service utilisé au quotidien crée un lien durable avec votre audience.",
                  },
                  {
                    icon: faStar,
                    title: "Différenciation concurrentielle",
                    desc: "Positionnez-vous comme un acteur innovant et attentif aux besoins réels.",
                  },
                  {
                    icon: faBolt,
                    title: "Zéro investissement technique",
                    desc: "Plateforme hébergée, maintenance assurée, évolutions incluses.",
                  },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + idx * 0.3,
                      duration: 1,
                      type: "spring",
                      stiffness: 80,
                      damping: 25,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 20,
                      }}
                      className="mr-2 flex items-center justify-center bg-gray-100 rounded-lg p-3"
                    >
                      <FontAwesomeIcon
                        icon={feature.icon}
                        className="text-red-600 text-sm"
                      />
                    </motion.div>
                    <div className="ml-4">
                      <h3 className="text-base font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative"
            >
              <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/carre.png"
                  alt="Partenaire bipSOS - Solution de protection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr to-blue-900/10"></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    className="w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <MapPinIcon className="w-10 h-10 text-red-500" />
                  </motion.div>

                  <motion.div
                    className="absolute top-25 flex items-center justify-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center">
                      <BuildingOfficeIcon className="w-8 h-8 text-green-500" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-10 left-35"
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center">
                      <MegaphoneIcon className="w-8 h-8 text-purple-500" />
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute bottom-50 right-10"
                    animate={{ y: [0, -16, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center">
                      <UsersIcon className="w-8 h-8 text-blue-500" />
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 w-64 h-64 bg-red-100 rounded-full -z-10 opacity-50"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 45 }}
                transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
              />
              <motion.div
                className="absolute -top-6 -left-6 w-40 h-40 bg-blue-100 rounded-full -z-10 opacity-50"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: -30 }}
                transition={{ duration: 2, delay: 0.85, ease: "easeOut" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={sectionRef}
        id="programmes"
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 px-6 md:px-12 lg:px-20 xl:px-32 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Trois programmes adaptés à votre profil
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choisissez le programme qui correspond à votre activité et
              commencez à proposer bipSOS™ à votre audience.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border hover:shadow-2xl transition-shadow duration-300 border-t-4 border-green-600"
            >
              <div className="p-8 flex flex-col h-full justify-between">
                <div className="w-15 h-15 flex items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-green-300 text-white mb-4">
                  <BuildingOfficeIcon className="h-10 w-10" />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="
                    inline-flex items-center
                    px-8 py-4
                    rounded-[28px]
                    border-2 border-green-500
                    bg-transparent
                    text-green-500
                    shadow-sm
                    max-w-fit mb-5
                  "
                >
                  <span
                    className="
                      text-lg md:text-xl
                      font-extrabold
                      uppercase
                      leading-tight
                      tracking-wide
                    "
                  >
                    SOLUTIONS
                    <br />
                    DISTRIBUTEURS
                  </span>
                </motion.div>
                <p className="text-gray-600 text-m mb-6">
                  Mutuelles, courtiers, agences de voyages
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed font-semibold">
                  Intégrez bipSOS™ à votre offre et proposez une protection
                  concrète à vos clients. Solution clé en main.
                </p>
                <div className="border-t border-gray-200 mb-8"></div>
                <div className="space-y-4 mb-6">
                  {[
                    "Quota de licences à distribuer",
                    "Remises sur volume attractives",
                    "Gestion multi-établissements",
                    "Interlocuteur dédié",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-6 h-6 flex-shrink-0 rounded-full bg-green-600 text-white flex items-center justify-center mr-3 mt-1">
                        <FontAwesomeIcon icon={faCheck} className="text-xs" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/distributeurs" passHref>
                  <div className="w-full text-green-600 font-semibold py-3 px-6 rounded-lg hover:bg-green-50 transition-colors duration-300 border border-green-200 flex items-center justify-center gap-2">
                    Découvrir le programme
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-purple-600"
            >
              <div className="p-8 flex flex-col h-full justify-between">
                <div className="w-15 h-15 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-purple-300 text-white mb-2">
                  <Users className="h-10 w-10" />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="
                    inline-flex items-center
                    px-8 py-4
                    rounded-[28px]
                    border-2 border-purple-500
                    bg-transparent
                    text-purple-500
                    shadow-sm
                    max-w-fit mb-5
                  "
                >
                  <span
                    className="
                      text-lg md:text-xl
                      font-extrabold
                      uppercase
                      leading-tight
                      tracking-wide
                    "
                  >
                    SOLUTIONS
                    <br />
                    AMBASSADEURS
                  </span>
                </motion.div>
                <p className="text-gray-600 text-m mb-6">
                  Influenceurs, podcasteurs, créateurs de contenu
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed font-semibold">
                  Protégez vos followers et développez vos revenus grâce aux
                  commissions sur chaque abonnement généré.
                </p>
                <div className="border-t border-gray-200 mb-8"></div>
                <div className="space-y-4 mb-6">
                  {[
                    "Commission sur conversions",
                    "Bonus par paliers de performance",
                    "Code promo personnalisé",
                    "Tableau de bord en temps réel",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-6 h-6 flex-shrink-0 rounded-full bg-purple-600 text-white flex items-center justify-center mr-3 mt-1">
                        <FontAwesomeIcon icon={faCheck} className="text-xs" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/ambassadeurs" passHref>
                  <div className="w-full text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-purple-50 transition-colors duration-300 border border-purple-200 flex items-center justify-center gap-2">
                    Découvrir le programme
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-pink-600"
            >
              <div className="p-8 flex flex-col h-full justify-between">
                <div className="w-15 h-15 flex items-center justify-center rounded-lg bg-gradient-to-br from-pink-600 to-pink-300 text-white mb-2">
                  <GlobeAltIcon className="h-10 w-10" />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="
                    inline-flex items-center
                    px-8 py-4
                    rounded-[28px]
                    border-2 border-pink-500
                    bg-transparent
                    text-pink-500
                    shadow-sm
                    max-w-fit mb-5
                  "
                >
                  <span
                    className="
                      text-lg md:text-xl
                      font-extrabold
                      uppercase
                      leading-tight
                      tracking-wide
                    "
                  >
                    SOLUTIONS
                    <br />
                    PRESCRIPTEURS
                  </span>
                </motion.div>

                <p className="text-gray-600 text-m mb-6">
                  Associations, fédérations, collectivités, syndicats
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed font-semibold">
                  Offres une solution à valeur ajoutée à vos bénéficiaires.
                  Un partenariat au service de votre mission
                </p>
                <div className="border-t border-gray-200 mb-8"></div>
                <div className="space-y-4 mb-6">
                  {[
                    "Quota de licences négocié",
                    "Tarif préférentiel bénéficiaires",
                    "Convention flexible",
                    "Accompagnement dédié",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-6 h-6 flex-shrink-0 rounded-full bg-pink-600 text-white flex items-center justify-center mr-3 mt-1">
                        <FontAwesomeIcon icon={faCheck} className="text-xs" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/ambassadeurpro" passHref>
                  <div className="w-full text-pink-600 font-semibold py-3 px-6 rounded-lg hover:bg-pink-50 transition-colors duration-300 border border-pink-200 flex items-center justify-center gap-2">
                    Découvrir le programme
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <section className="w-full py-20 bg-white">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex items-center gap-2.5
              px-4 py-2
              text-sm font-semibold tracking-wide uppercase
              text-red-600
              border border-red-600 rounded-full
              bg-red-600/10 backdrop-blur-sm
              shadow-sm shadow-red-600/20
              mb-4
            "
          >
            <FontAwesomeIcon
              icon={faCircle}
              className="text-red-600 text-[8px]"
            />
            <span>UTILISATEURS FINAUX</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Qui protégez-vous ?
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            Chaque programme cible un profil d’utilisateur final différent.
          </p>
        </motion.div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {items.map((item, i) => (
            <Link key={i} href={item.href} passHref>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 30px rgba(0,0,0,0.15)",
                }}
                className="
                  relative bg-gray-50 rounded-3xl shadow-sm
                  px-10 py-14 text-center border border-gray-100
                  cursor-pointer
                "
              >
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-24 rounded-b-full"
                  style={{ backgroundColor: item.color }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                />

                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.3 + i * 0.15,
                  }}
                >
                  <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      style={{ color: item.color }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                </motion.div>

                <motion.p
                  className="
                    text-2xl md:text-3xl 
                    font-extrabold 
                    tracking-wide 
                    uppercase
                    bg-gradient-to-r from-red-400 via-red-500 to-red-600
                    bg-clip-text text-transparent
                    mb-2
                  "
                  style={{ color: item.color }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                >
                  {item.titleTop}
                </motion.p>

                <motion.h3
                  className="text-2xl font-bold text-gray-900"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + i * 0.15 }}
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 mt-3 text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <div className="bg-[#0A1A3D]">
        <div className="h-px bg-blue-800 w-full"></div>
        <div className="py-12 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="flex items-center justify-center space-x-4 text-white text-sm">
            <span className="flex items-center justify-center bg-gray-500 rounded-2xl p-3">
              <CheckBadgeIcon className="h-7 w-7 text-white" />
            </span>
            <span className="text-center max-w-3xl">
              L’accès aux programmes partenaires est soumis à vérification
              d’identité (SIRET, RNA ou pièce d’identité selon votre statut).
              Cette vérification garantit la qualité de notre réseau de
              partenaires.
            </span>
          </div>
        </div>
      </div>

      {/* <div className="bg-white">
        <div className="h-px bg-gray-300 w-full"></div>

        <div className="py-12 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-12">
            <div className="flex items-center text-gray-800 text-sm">
              <span className="mr-2 flex items-center justify-center bg-gray-200 rounded-sm p-2">
                <CheckBadgeIcon className="h-5 w-5 text-gray-700" />
              </span>
              <span>Brevet européen déposé</span>
            </div>

            <div className="hidden md:block text-gray-400">|</div>

            <div className="flex items-center text-gray-800 text-sm">
              <span className="mr-2 flex items-center justify-center bg-gray-200 rounded-sm p-2">
                <GlobeAltIcon className="h-5 w-5 text-gray-700" />
              </span>
              <span>Sceau d’excellence VE</span>
            </div>
            <div className="hidden md:block text-gray-400">|</div>

            <div className="flex items-center text-gray-800 text-sm">
              <span className="mr-2 flex items-center justify-center bg-gray-200 rounded-sm p-2">
                <BuildingOfficeIcon className="h-5 w-5 text-gray-700" />
              </span>
              <span>Accréditation téléassistance France</span>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
