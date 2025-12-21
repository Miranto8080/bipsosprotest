"use client";

import InscriptionApro from "@/components/InscriptionApro";

import { BuildingOfficeIcon } from "@heroicons/react/24/solid";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
//import Link from "next/link";
import {
  Heart,
  Lightbulb,
  Briefcase,
  BadgeCheck,
  Calendar,
  FileText,
  Package,
  UserCheck,
  Globe,
  Users,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
import FloatingButtons from "@/components/FloatingApro";
import { useRouter } from "next/navigation";

export default function EntreprisesPage() {
  const section1Ref = useRef(null);
  const [showInscription] = useState(false);
  // const [showContact, setShowContact] = useState(false);
  const navigation = useRouter();

  const section4Ref = useRef(null);
  const fonctionnementRef = useRef(null);

  const section1InView = useInView(section1Ref, { once: true, amount: 0.3 });
  const section4InView = useInView(section4Ref, { once: true, amount: 0.3 });
  const fonctionnementInView = useInView(fonctionnementRef, {
    once: true,
    amount: 0.3,
  });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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

  const etapesFonctionnement = [
    {
      title: "Inscription",
      description:
        "Formulaire en ligne, vérification SIRET ou RNA sous 24-48h.",
      icon: UserCheck,
      color: "#DB2777",
    },
    {
      title: "Configuration",
      description:
        "Définissez votre quota, choisissez les offres (Gardian / Active Assistance).",
      icon: Calendar,
      color: "#DB2777",
    },
    {
      title: "Déploiement",
      description:
        "Proposez les licences à vos bénéficiaires selon vos modalités.",
      icon: Package,
      color: "#DB2777",
    },
    {
      title: "Suivi",
      description:
        "Encaissement trimestriel, interlocuteur dédié, quota ajustable.",
      icon: FileText,
      color: "#DB2777",
    },
  ];

  const items = [
    {
      title: "Associations",
      desc: "Seniors, patients, aidants, handicap.",
      icon: <Heart size={25} strokeWidth={2} />,
      color: "#DB2777",
    },
    {
      title: "Fédérations",
      desc: "Sportives, professionnelles, sectorielles.",
      icon: <Briefcase size={25} strokeWidth={2} />,
      color: "#DB2777",
    },
    {
      title: "Collectivités",
      desc: "Communes, départements, intercommunalités.",
      icon: <Globe size={25} strokeWidth={2} />,
      color: "#DB2777",
    },
    {
      title: "Syndicats",
      desc: "Professionnels, interprofessionnels.",
      icon: <Globe size={25} strokeWidth={2} />,
      color: "#DB2777",
    },
  ];

  const router = useRouter();

  if (showInscription) {
    return <InscriptionApro />;
  }

  return (
    <>
      <section
        className="relative min-h-screen w-full text-white font-poppins overflow-hidden flex items-center"
        style={{
          background: "linear-gradient(to bottom, #DB2777, #000000)",
        }}
      >
        <div
          id="hero"
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center px-6 md:px-12 lg:px-10 py-20 w-full"
        >
          <div className="space-y-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="
                inline-flex items-center gap-5
                px-12 py-7
                text-xl md:text-2xl
                font-extrabold tracking-widest uppercase
                text-white
                border-2 border-white/80 rounded-full
                bg-red-600/30 backdrop-blur-md
                shadow-2xl shadow-black/40
                self-start
              "
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="text-white text-[14px]"
              />
              <span>PROGRAMME PRESCRIPTEUR</span>
            </motion.div>

            <motion.h3
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Offrez une protection concrète{" "}
              <span
                style={{
                  color: "#0a1a33",
                  textShadow:
                    "0 0 6pxrgb(178, 0, 184), 0 0 12pxrgb(147, 0, 184), 0 0 18pxrgb(126, 0, 184)",
                }}
              >
                à vos bénéficiaires
              </span>
            </motion.h3>
            <motion.p
              className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Associations, fédérations, collectivités : proposez bipSOS™ à vos
              membres et affiliés. Un service à forte valeur ajoutée qui
              renforce votre mission.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <button
                onClick={() => router.push("ambassadeur-pro/inscription")}
                className="px-6 py-3 bg-white hover:bg-[#DB2777] transition hover:text-white rounded-lg font-semibold text-[#DB2777] shadow-md text-center cursor-pointer"
              >
                Créez votre compte et découvrez les offres bipSOS Prescripteurs
              </button>
              {/* <Link href="/contact">
                <div className="px-6 py-3 bg-white/10 hover:bg-white/20 transition rounded-lg font-semibold text-white border border-white/20 backdrop-blur text-center cursor-pointer">
                  <button>Nous contacter</button>
                  <span className="text-xs opacity-90">
                    {"  "}(plus de 100 licences)
                  </span>
                </div>
              </Link> */}
            </motion.div>
          </div>

          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#]"
          >
            <div className="p-8 flex flex-col h-full justify-between">
              <div className="w-15 h-15 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#DB2777] to-white-300 text-white mb-2">
                <BuildingOfficeIcon className="h-10 w-10" />
              </div>
              <div className="flex items-center gap-3 mb-3 mt-6">
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Avantages
                </h3>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Prescripteur
                </h3>
              </div>
              <div className="border-t border-gray-200 mb-8"></div>
              <div className="space-y-4 mb-6">
                {[
                  "Quota de licences négocié",
                  "Tarif préférentiel bénéficiaires",
                  "Convention flexible",
                  "Accompagnement dédié",
                  "Encaissement trimestriel",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-6 h-6 flex-shrink-0 rounded-full bg-[#DB2777] text-white flex items-center justify-center mr-3 mt-1">
                      <FontAwesomeIcon icon={faCheck} className="text-xs" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* <section className="relative w-full bg-white py-24 px-6 md:px-12 lg:px-20 xl:px-32 font-poppins">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center mb-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
                Un partenariat au service de vos membres
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8 rounded-full"></div>
          </motion.div>
          <p
            className="text-lg md:text-xl text-gray-700 leading-relaxed animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            Vous négociez un quota de licences à tarif préférentiel, que vous
            proposez à vos membres selon vos propres conditions. <br />
            <span className="font-semibold text-red-600">bipSOS</span> assure la
            solution technique et le support. Vous apportez la relation de
            confiance avec votre communauté.
          </p>
        </div>
      </section> */}

      <motion.section
        ref={section1Ref}
        initial="hidden"
        animate={section1InView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 px-6 md:px-12 lg:px-20 xl:px-32 bg-white"
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
          <div className="flex justify-center items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                inline-flex items-center gap-3
                px-5 py-2.5
                text-sm md:text-base font-semibold tracking-wide uppercase
                border rounded-full
                backdrop-blur-sm
                shadow-sm
              "
              style={{
                color: "#DB2777",
                borderColor: "#DB2777",
                backgroundColor: "rgba(219, 39, 119, 0.15)",
                boxShadow: "0 2px 6px rgba(219, 39, 119, 0.25)",
              }}
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[8px]"
                style={{ color: "#DB2777" }}
              />
              <span>LE PARTENARIAT</span>
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-10"
          >
            Un partenariat au service{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to bottom, #DB2777, #000000)",
              }}
            >
              de vos bénéficiaires
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative bg-gray-50 rounded-xl p-6 md:p-8 shadow-md max-w-7xl text-left border-l-4 border-r-4"
            style={{
              borderLeftColor: "#DB2777",
              borderRightColor: "#DB2777",
            }}
          >
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-pink-600 shrink-0" />
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  Vous négociez un <strong>quota de licences</strong> à tarif
                  préférentiel, que vous proposez à vos{" "}
                  <strong>bénéficiaires</strong> selon vos conditions.
                </p>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-pink-600 shrink-0" />
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  <strong>bipSOS™</strong> assure la solution technique et le
                  support.
                </p>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-pink-600 shrink-0" />
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  Vous apportez la <strong>relation de confiance</strong> avec
                  votre communauté.
                </p>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-pink-600 shrink-0" />
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  Ensemble, nous offrons une{" "}
                  <strong>protection concrète</strong> à ceux qui comptent sur
                  vous.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <section className="relative py-15 md:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-red-50 to-transparent rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-red-100/30 to-transparent rounded-full -translate-x-1/3 translate-y-1/3"></div>

        <div className="relative container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                inline-flex items-center gap-3
                px-5 py-2.5
                text-sm md:text-base font-semibold tracking-wide uppercase
                border rounded-full
                backdrop-blur-sm
                shadow-sm mb-5
                self-start
              "
              style={{
                color: "#DB2777",
                borderColor: "#DB2777",
                backgroundColor: "rgba(219, 39, 119, 0.15)",
                boxShadow: "0 2px 6px rgba(219, 39, 119, 0.25)",
              }}
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[6px]"
                style={{ color: "#DB2777" }}
              />
              POUR QUI
            </motion.div>
          </div>

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center mb-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
                Le programme s’adresse à
              </h2>
            </div>
            <div
              className="w-24 h-1 mx-auto mb-12 rounded-full"
              style={{
                background: "linear-gradient(to right, #DB2777, #A31657)",
              }}
            ></div>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
            {items.map((item, i) => (
              <motion.div
                key={i}
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
                  px-6 py-10 text-center border border-gray-100
                  cursor-pointer
                "
              >
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-20 rounded-b-full"
                  style={{ backgroundColor: item.color }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                />

                <motion.div
                  className="flex justify-center mb-5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.3 + i * 0.15,
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      style={{ color: item.color }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                </motion.div>

                <motion.h3
                  className="text-xl font-bold text-gray-900"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + i * 0.15 }}
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 mt-2 text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-25 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full translate-x-1/3 -translate-y-1/3"
          style={{
            background: "linear-gradient(to left, #DB277722, transparent)",
          }}
        ></div>

        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full -translate-x-1/3 translate-y-1/3"
          style={{
            background: "linear-gradient(to right, #DB277733, transparent)",
          }}
        ></div>
        <div className="relative container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                inline-flex items-center gap-3
                px-5 py-2.5
                text-sm md:text-base font-semibold tracking-wide uppercase
                border rounded-full
                backdrop-blur-sm
                shadow-sm mb-5
                self-start
              "
              style={{
                color: "#DB2777",
                borderColor: "#DB2777",
                backgroundColor: "rgba(219, 39, 119, 0.15)",
                boxShadow: "0 2px 6px rgba(219, 39, 119, 0.25)",
              }}
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[6px]"
                style={{ color: "#DB2777" }}
              />
              AVANTAGES
            </motion.div>
          </div>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center mb-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
                Ce que le partenariat vous apporte
              </h2>
            </div>
            <div
              className="w-24 h-1 mx-auto mb-12 rounded-full"
              style={{
                background: "linear-gradient(to right, #DB2777, #A31657)",
              }}
            ></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -top-4 left-8">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #DB2777, #A31657)",
                  }}
                >
                  <BadgeCheck className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="pt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Service à valeur ajoutée
                </h3>
                <p className="text-gray-600 mb-6">
                  Offrez à vos bénéficiaires un bénéfice concret, utile au
                  quotidien. Une protection qui renforce votre mission.
                </p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to right, #DB2777, #A31657)",
                }}
              ></div>
            </motion.div>
            <motion.div
              className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute -top-4 left-8">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #DB2777, #A31657)",
                  }}
                >
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="pt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Fidélisation
                </h3>
                <p className="text-gray-600 mb-6">
                  Un bénéficiaire protégé est un membre engagé. Renforcez le
                  sentiment d’appartenance à votre communauté.
                </p>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to right, #DB2777, #A31657)",
                }}
              ></div>
            </motion.div>
            <motion.div
              className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute -top-4 left-8">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #DB2777, #A31657)",
                  }}
                >
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="pt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Image innovante
                </h3>
                <p className="text-gray-600 mb-6">
                  Positionnez votre structure comme un acteur moderne, attentif
                  aux enjeux de sécurité et de santé.
                </p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to right, #DB2777, #A31657)",
                }}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        ref={fonctionnementRef}
        initial="hidden"
        animate={fonctionnementInView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 px-6 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={fonctionnementInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                inline-flex items-center gap-3
                px-5 py-2.5
                text-sm md:text-base font-semibold tracking-wide uppercase
                border rounded-full
                backdrop-blur-sm
                shadow-sm mb-5
                self-start
              "
              style={{
                color: "#DB2777",
                borderColor: "#DB2777",
                backgroundColor: "rgba(219, 39, 119, 0.15)",
                boxShadow: "0 2px 6px rgba(219, 39, 119, 0.25)",
              }}
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[6px]"
                style={{ color: "#DB2777" }}
              />
              FONCTIONNEMENT
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              <span className="block">Souplesse contractuelle</span>
            </h2>
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate={fonctionnementInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 mt-15"
            >
              {etapesFonctionnement.map((etape, index) => (
                <motion.div
                  key={etape.title}
                  variants={cardVariants}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-gray-300">
                        0{index + 1}
                      </div>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: etape.color }}
                      >
                        <etape.icon className="text-white w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {etape.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {etape.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#DB2777] transition-all duration-300" />
                </motion.div>
              ))}
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={fonctionnementInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Commencez dès maintenant
                </h3>
              </div>
              <motion.div
                variants={fadeUpVariants}
                transition={{ delay: 0.6 }}
                className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
              >
                <div className="bg-red-50 border-2 border-red-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <button 
                    onClick={() => setShowInscription(true)}
                    className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300 text-lg">
                    S&apos;inscrire en ligne
                  </button>
                  <p className="text-gray-600 text-sm mt-3">
                    (jusqu&apos;à 100 licences)
                  </p>
                  {showInscription && (
                    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
                      <div className="relative w-full max-w-4xl mx-4">
                        <InscriptionDistr onClose={() => setShowInscription(false)} />
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <button 
                    onClick={() => setShowContact(true)}
                    className="w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-black transition-colors duration-300 text-lg">
                    Nous contacter
                  </button>
                  <p className="text-gray-600 text-sm mt-3">
                    (plus de 100 licences)
                  </p>
                  {showContact && (
                    <ContactDistr onClose={() => setShowContact(false)} />
                  )}
                </div>
              </motion.div>
            </motion.div> */}
          </motion.div>
        </div>
      </motion.section>

      {/* <motion.section
        initial="hidden"
        animate={fonctionnementInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 px-6 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-b from-gray-50 to-white"
        ref={fonctionnementRef}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={fonctionnementInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Souplesse contractuelle
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={fonctionnementInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {etapesFonctionnement.map((etape, index) => {
              const Icon = etape.icon;

              return (
                <motion.div
                  key={etape.title}
                  variants={cardVariants}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-gray-300">
                        0{index + 1}
                      </div>

                      <div
                        className={`w-12 h-12 ${etape.color} rounded-xl flex items-center justify-center`}
                      >
                        <Icon className="text-white w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {etape.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {etape.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-red-600 transition-all duration-300" />
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={fonctionnementInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Commencez dès maintenant
              </h3>
            </div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate={fonctionnementInView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
              className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
            >
              <div className="bg-red-50 border-2 border-red-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <button
                  //onClick={() => setShowInscription(true)}
                  className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300 text-lg"
                >
                  S’inscrire en ligne
                </button>
                <p className="text-gray-600 text-sm mt-3">
                  (jusqu’à 100 licences)
                </p>
                {/* {showInscription && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
                  <div className="relative w-full max-w-4xl mx-4">
                    <InscriptionApro onClose={() => setShowInscription(false)} />
                  </div>
                </div>
              )} 
              </div>

              <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <button className="w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-black transition-colors duration-300 text-lg">
                  Nous contacter
                </button>
                <p className="text-gray-600 text-sm mt-3">
                  (plus de 100 licences)
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section> */}
      <div className="bg-white">
        <div className="h-px bg-gray-300 w-full"></div>

        <div className="py-12 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex items-center text-gray-700 text-lg font-semibold space-x-4">
              <span>UTILISATEUR FINAL</span>

              <div className="flex items-center space-x-5 bg-gray-100 rounded-lg px-7 py-3 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-center bg-[#DB2777] rounded-2xl p-2">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <span className="text-gray-800 font-semibold">
                  Bénéficiaire
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-300 w-full"></div>
      </div>
      <motion.section
        id="cta"
        ref={section4Ref}
        initial="hidden"
        animate={section4InView ? "visible" : "hidden"}
        variants={staggerContainerVariants}
        className="py-20 px-6 md:px-12 lg:px-20 xl:px-32 bg-gray-50"
      >
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl py-16 px-6 md:px-16 text-center">
            <motion.h3
              variants={fadeUpVariants}
              className="text-4xl md:text-4xl font-bold text-gray-900"
            >
              Rejoignez le programme Prescripteur
            </motion.h3>

            <motion.p
              variants={fadeUpVariants}
              className="text-gray-500 mt-4 text-lg"
            >
              Inscrivez-vous en quelques minutes et commencez à proposer bipSOS™
              à vos clients.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4"
            >
              <div
                className="flex items-center gap-2 text-white font-semibold px-6 py-4 rounded-lg text-lg cursor-pointer transition-all"
                style={{ backgroundColor: "#DB2777" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#A31657")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#DB2777")
                }
              >
                {/* <button onClick={() => setShowInscription(true)}> */}
                <button
                  onClick={() => navigation.push("ambassadeur-pro/inscription")}
                >
                  Créez votre compte et découvrez les offres bipSOS
                  Prescripteurs
                </button>
              </div>
              {/* <Link href="/contact">
                <div className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white font-semibold px-6 py-4 rounded-lg text-lg cursor-pointer transition-all">
                  <button>Nous contacter</button>
                  <span className="text-xs opacity-90">
                    plus de 100 licences
                  </span>
                </div>
              </Link> */}
            </motion.div>

            {/* {showContact && (
              <ContactDistr onClose={() => setShowContact(false)} />
            )} */}
          </div>
        </div>
      </motion.section>
      <div className="relative w-full bg-white h-[360px] md:h-[600px] overflow-hidden flex justify-center items-center p-6 md:p-12">
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
      <FloatingButtons excludedSections={["hero", "cta"]} />
    </>
  );
}
