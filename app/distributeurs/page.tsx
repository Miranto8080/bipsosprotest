"use client";

import { BuildingOfficeIcon } from "@heroicons/react/24/solid";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
//import Link from "next/link";
import {
  Package,
  Trophy,
  Heart,
  TrendingUp,
  Settings,
  FileText,
  UserCheck,
  Calendar,
  Globe,
  Briefcase,
  User,
} from "lucide-react";
import InscriptionDistr from "@/components/InscriptionDistr";
//import ContactDistr from "@/components/ContactDistr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
import FloatingButtons from "@/components/FloatingDistr";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const section1Ref = useRef(null);
  const beneficesRef = useRef(null);
  const fonctionnementRef = useRef(null);
  const section4Ref = useRef(null);
  const [showInscription] = useState(false);
  const navigation = useRouter();
  //const [showContact, setShowContact] = useState(false);

  const section1InView = useInView(section1Ref, { once: true, amount: 0.3 });
  const section4InView = useInView(section4Ref, { once: true, amount: 0.3 });
  const beneficesInView = useInView(beneficesRef, { once: true, amount: 0.3 });
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

  const benefices = [
    {
      title: "Différenciation concurrentielle",
      description:
        "Positionnez-vous comme un acteur innovant, attentif aux besoins réels de vos clients.",
      icon: Trophy,
      color: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      title: "Fidélisation renforcée",
      description:
        "Un service utilisé au quotidien crée un lien durable. Vos clients équipés de bipSOS™ le restent plus longtemps.",
      icon: Heart,
      color: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      title: "Revenus complémentaires",
      description:
        "Remises sur volume attractives. Plus vous distribuez, plus votre marge progresse.",
      icon: TrendingUp,
      color: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      title: "Aucun investissement technique",
      description:
        "Plateforme hébergée, maintenance assurée, évolutions incluses. Vous vous concentrez sur la distribution.",
      icon: Settings,
      color: "bg-red-50",
      iconColor: "text-red-600",
    },
  ];

  const items = [
    {
      title: "Mutuelles",
      desc: "Enrichissez votre offre clients avec un service de protection concret.",
      icon: <Heart size={28} strokeWidth={2} />,
      color: "#008069",
    },
    {
      title: "Courtiers",
      desc: "Proposez un service complémentaire à forte valeur ajoutée à vos assurés.",
      icon: <Briefcase size={28} strokeWidth={2} />,
      color: "#008069",
    },
    {
      title: "Agences de voyages",
      desc: "Offrez la tranquillité d'esprit à vos voyageurs, partout dans le monde.",
      icon: <Globe size={28} strokeWidth={2} />,
      color: "#008069",
    },
  ];

  const etapesFonctionnement = [
    {
      title: "Inscription",
      description:
        "Remplissez le formulaire en ligne. Validation de votre compte (SIRET) sous 24-48h.",
      icon: UserCheck,
      color: "bg-green-800",
    },
    {
      title: "Configuration",
      description:
        "Définissez votre quota, choisissez les offres (Gardian / Active Assistance).",
      icon: Calendar,
      color: "bg-green-800",
    },
    {
      title: "Distribution",
      description:
        "Remettez les licences à vos clients selon vos propres modalités.",
      icon: Package,
      color: "bg-green-800",
    },
    {
      title: "Suivi",
      description:
        "Encaissement mensuel selon volumes.",
      icon: FileText,
      color: "bg-green-800",
    },
  ];

  const router = useRouter();

  if (showInscription) {
    return <InscriptionDistr />;
  }

  return (
    <>
      <section className="relative min-h-screen w-full bg-[#0F9C8E] text-white font-poppins overflow-hidden flex items-center">
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
              <span>PROGRAMME DISTRIBUTEUR</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
              className="self-start px-6 py-2 
              text-lg md:text-xl font-semibold tracking-wide 
              text-white italic rounded-full"
              style={{
                textShadow: "0 0 6px #00b894, 0 0 12px rgba(0,184,148,0.6)",
              }}
            >
              " Mutuelles · Courtiers · Agences de voyages "
            </motion.div>

            <motion.h3
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Enrichissez votre offre avec{" "}
              <span
                style={{
                  color: "#0a1a33",
                  textShadow:
                    "0 0 6px #00b894, 0 0 12px #00b894, 0 0 18px #00b894",
                }}
              >
                une solution de protection innovante
              </span>
            </motion.h3>
            <motion.p
              className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Proposez bipSOS™ à vos clients. Une réponse concrète à leurs
              préoccupations de sécurité et de santé, un levier de fidélisation
              pour votre activité.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <button
                onClick={() => router.push("distributeurs/inscription")}
                className="px-6 py-3 bg-white hover:bg-[#0a1a33] transition 
             hover:text-white rounded-lg font-semibold 
             text-[#0F9C8E] shadow-md text-center cursor-pointer"
              >
                <span className="block">Créez votre compte</span>
                <span className="block">
                  et découvrez les offres bipSOS Distributeurs
                </span>
              </button>
              {/* <button
                onClick={() => setShowContact(true)}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 transition rounded-lg font-semibold text-white border border-white/20 backdrop-blur text-center cursor-pointer"
              >
                Nous contacter{" "}
                <span className="text-sm font-normal opacity-80">
                  (plus de 100 licences)
                </span>
              </button> */}
              {/* <Link href="/contact">
                <div className="px-6 py-3 bg-white/10 hover:bg-white/20 transition rounded-lg font-semibold text-white border border-white/20 backdrop-blur text-center cursor-pointer">
                  <button>Nous contacter {" "}</button>
                  <span className="text-xs opacity-90">
                  {" "} (plus de 100 licences)
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
              <div className="w-15 h-15 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#0a1a33] to-green-300 text-white mb-2">
                <BuildingOfficeIcon className="h-10 w-10" />
              </div>
              <div className="flex items-center gap-3 mb-3 mt-6">
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Avantages
                </h3>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Distributeur
                </h3>
              </div>

              {/* <p className="text-gray-700 mb-6 leading-relaxed">
                Offrez un service à forte valeur ajoutée à vos bénéficiaires. Un
                partenariat au service de votre mission.
              </p> */}
              <div className="border-t border-gray-200 mb-8"></div>
              <div className="space-y-4 mb-6">
                {[
                  "Remises sur nombres attractives",
                  "Interlocuteur dédié",
                  "Contrat 12 mois",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-6 h-6 flex-shrink-0 rounded-full bg-[#0a1a33] text-white flex items-center justify-center mr-3 mt-1">
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

      <motion.section
        ref={section1Ref}
        initial="hidden"
        animate={section1InView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 px-6 md:px-12 lg:px-20 xl:px-32 bg-white"
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex items-center gap-3
              px-5 py-2.5
              text-sm md:text-base font-semibold tracking-wide uppercase
              text-green-600
              border border-green-600 rounded-full
              bg-green-600/20 backdrop-blur-sm
              shadow-sm shadow-green-600/30
            "
          >
            <FontAwesomeIcon
              icon={faCircle}
              className="text-green-600 text-[8px]"
            />
            <span>LE PARTENARIAT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-10"
          >
            Un partenariat{" "}
            <span className="bg-gradient-to-b from-green-500 to-black bg-clip-text text-transparent">
              clé en main
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="
              relative bg-gray-50
              border-l-4 border-r-4 border-green-600
              rounded-xl
              p-6 md:p-8
              shadow-md
              max-w-7xl
              text-left
            "
          >
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-green-600 shrink-0" />
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  <strong>Solution complète clé en main</strong> : application,
                  support technique et centre de téléassistance disponible 24/7 (pour active assistance).
                </p>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-green-600 shrink-0" />
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  Vous choisissez librement le{" "}
                  <strong>niveau de service</strong>, le{" "}
                  <strong>volume de licences</strong> et le degré de
                  <strong> personnalisation</strong>.
                </p>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-green-600 shrink-0" />
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  Vos clients bénéficient d’une{" "}
                  <strong>protection reconnue</strong>, pendant que vous{" "}
                  <strong>renforcez votre positionnement</strong>.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* <motion.section
        ref={propositionRef}
        initial="hidden"
        animate={propositionInView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 px-6 md:px-12 lg:px-20 xl:px-32 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={propositionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              <span className="block">Un partenariat</span>
              <span className="block text-red-600">clé en main</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
              bipSOS vous fournit une solution complète : application, support
              technique, centre de téléassistance 24/7. Vous choisissez le
              niveau de service (Gardian ou Active Assistance), le volume de
              licences, et la personnalisation souhaitée. Marque blanche
              disponible pour une intégration totale à votre identité.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={propositionInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-red-600 transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section> */}

      <motion.section
        ref={beneficesRef}
        initial="hidden"
        animate={beneficesInView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 px-6 md:px-12 lg:px-20 xl:px-32 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={beneficesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="
                inline-flex items-center gap-3
                px-5 py-2.5
                text-sm md:text-base font-semibold tracking-wide uppercase
                text-green-600 mb-5
                border border-green-600 rounded-full
                bg-green-600/20 backdrop-blur-sm
                shadow-sm shadow-green-600/30
              "
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="text-green-600 text-[6px]"
              />
              AVANTAGES
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              <span className="block">Ce que le partenariat</span>
              <span className="block bg-gradient-to-b from-green-500 to-black bg-clip-text text-transparent">
                vous apporte
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={beneficesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {benefices.map((benefice, index) => (
              <motion.div
                key={benefice.title}
                variants={cardVariants}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center text-xl font-bold">
                        <benefice.icon size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {benefice.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {benefice.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-green-600 transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

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
              transition={{ duration: 0.8, delay: 0.2 }}
              className="
                inline-flex items-center gap-3
                px-5 py-2.5
                text-sm md:text-base font-semibold tracking-wide uppercase
                text-green-600 mb-5
                border border-green-600 rounded-full
                bg-green-600/20 backdrop-blur-sm
                shadow-sm shadow-green-600/30
              "
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="text-green-600 text-[6px]"
              />
              FONCTIONNEMENT
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              <span className="block">
                Comment ça{" "}
                <span className="bg-gradient-to-b from-green-500 to-black bg-clip-text text-transparent">
                  fonctionne
                </span>{" "}
                ?{" "}
              </span>
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
                        className={`w-12 h-12 ${etape.color} rounded-xl flex items-center justify-center`}
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
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-green-600 transition-all duration-300" />
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

      <section className="w-full py-10 bg-white">
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
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
                inline-flex items-center gap-3
                px-5 py-2.5
                text-sm md:text-base font-semibold tracking-wide uppercase
                text-green-600 mb-5
                border border-green-600 rounded-full
                bg-green-600/20 backdrop-blur-sm
                shadow-sm shadow-green-600/30
              "
          >
            <FontAwesomeIcon
              icon={faCircle}
              className="text-green-600 text-[6px]"
            />
            POUR QUI
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Le programme Distributeur s’adresse à
          </h2>
        </motion.div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
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
          ))}
        </div>
      </section>

      <div className="bg-white">
        <div className="h-px bg-gray-300 w-full"></div>

        <div className="py-12 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex items-center text-gray-700 text-lg font-semibold space-x-4">
              <span>UTILISATEUR FINAL</span>

              <div className="flex items-center space-x-5 bg-gray-100 rounded-lg px-7 py-3 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-center bg-green-700 rounded-2xl p-2">
                  <User className="h-10 w-10 text-white" />
                </div>
                <span className="text-gray-800 font-semibold">Vos clients</span>
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
              Rejoignez le programme Distributeur
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
              <div className="flex items-center gap-2 bg-green-800 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-lg text-lg cursor-pointer transition-all">
                <button
                  onClick={() => navigation.push("distributeurs/inscription")}
                >
                  Créez votre compte et découvrez les offres bipSOS
                  Distributeurs
                </button>
              </div>
              {/* <div className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white font-semibold px-6 py-4 rounded-lg text-lg cursor-pointer transition-all">
                <button onClick={() => setShowContact(true)}>
                  Nous contacter
                </button>
                <span className="text-xs opacity-90">plus de 100 licences</span>
              </div> */}
              {/* <Link href="/contact">
                <div className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white font-semibold px-6 py-4 rounded-lg text-lg cursor-pointer transition-all">
                  <button>Nous contacter {" "}</button>
                  <span className="text-xs opacity-90">
                  {" "} plus de 100 licences
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
