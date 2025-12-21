"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import DevisSection from "@/components/DevisSection";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  // faShieldAlt,
  // faHeadset,
  // faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  CheckBadgeIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/solid";
import { Shield, Zap, Users, Heart } from "lucide-react";
//import InscriptionEntreprise from "@/components/InscriptionEntreprise";
import FloatingButtons from "@/components/FloatingButtons";
import { useRouter } from "next/navigation";
import HowSection from "@/components/HowSection";
import BPOfferSection from "@/components/BPOfferSection";

export default function EntreprisesPage() {
  const [showDevis, setShowDevis] = useState(false);
  const fonctionnementRef = useRef(null);
  const navigation = useRouter();

  const fonctionnementInView = useInView(fonctionnementRef, {
    once: true,
    amount: 0.3,
  });

  const section1Ref = useRef(null);
  //const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const section1InView = useInView(section1Ref, { once: true, amount: 0.3 });
  //const section2InView = useInView(section2Ref, { once: true, amount: 0.3 });
  const section3InView = useInView(section3Ref, { once: true, amount: 0.3 });
  const section4InView = useInView(section4Ref, { once: true, amount: 0.3 });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const etapesFonctionnement = [
    {
      title: "Protection universelle",
      description:
        "Tous vos salariés protégés, quels que soient leur poste, leur lieu de travail ou leur état de santé.",
      icon: Users,
      color: "bg-red-600",
    },
    {
      title: "Conformité DATI",
      description:
        "Pour vos travailleurs isolés, une solution conforme aux obligations légales de protection.",
      icon: Shield,
      color: "bg-red-600",
    },
    {
      title: "Déploiement immédiat",
      description:
        "Aucun équipement à installer. Vos salariés utilisent leur smartphone personnel ou professionnel.",
      icon: Zap,
      color: "bg-red-600",
    },
    {
      title: "Image employeur",
      description:
        "Démontrez concrètement votre engagement pour la sécurité et le bien-être de vos salariés.",
      icon: Heart,
      color: "bg-red-600",
    },
  ];

  const etapes = [
    {
      title: "Commandez en ligne ou demandez un devis",
      subtitle:
        "Jusqu'à 200 licences : commande immédiate. Au-delà : nos équipes vous accompagnent.",
      color: "bg-blue-800",
    },
    {
      title: "Recevez vos licences",
      subtitle:
        "Distribution par email à vos responsables désignés. Activation instantanée.",
      color: "bg-blue-800",
    },
    {
      title: "Vos salariés sont protégés",
      subtitle:
        "Installation en 2 minutes sur smartphone. Aucune formation nécessaire.",
      color: "bg-blue-800",
    },
  ];

  return (
    <main>
      <section className="relative min-h-screen w-full bg-[#0a1a33] text-white font-poppins overflow-hidden flex items-center">
        <div
          id="hero"
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center px-6 md:px-12 lg:px-10 py-20 w-full"
        >
          <div className="space-y-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                flex items-center justify-center gap-3
                w-full
                px-12 py-6
                text-3xl font-bold
                text-white
                border border-red-600
                rounded-full
                bg-red-600/20
              "
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="text-red-600 text-[12px]"
              />
              SOLUTION ENTREPRISES
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Protégez vos <span className="text-red-400">salariés</span>, où
              qu’ils travaillent
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Avec la solution de sécurité personnelle pour vos équipes
              tertiaires : bureaux, commerciaux terrain, télétravail. Sans
              équipement supplémentaire, depuis leur smartphone.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <button
                onClick={() => navigation.push("entreprises/inscription")}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-lg font-semibold text-white shadow-md text-center cursor-pointer"
              >
                Créez votre compte et découvrez les offres bipSOS Entreprise
              </button>
              {/* <button
                                onClick={() => navigation.push('entreprises/inscription')}
                                className="px-6 py-3 bg-white/10 hover:bg-white/20 transition rounded-lg font-semibold text-white border border-white/20 backdrop-blur text-center cursor-pointer"
                            >
                                Demander un devis{" "}
                                <span className="text-sm font-normal opacity-80">
                  (plus de 200 licences)
                </span>
                            </button> */}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="hidden lg:flex justify-end items-center overflow-visible relative"
          >
            <Image
              src="/images/Image1.png"
              alt="Application bipSOS Pro"
              width={300}
              height={300}
              className="object-contain pointer-events-none relative right-[-50px]"
            />
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-10"
          >
            Des salariés exposés,{" "}
            <span className="text-red-600">
              une responsabilité employeur engagée
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative bg-gray-50 border-l-4 border-r-4 border-red-600 rounded-xl p-6 md:p-8 shadow-md max-w-7xl text-left"
          >
            <p className="text-gray-700 text-lg md:text-xl mt-4 mb-4">
              Vos <span className="font-bold text-red-600"> salariés </span>
              font face à des{" "}
              <span className="font-bold text-red-600">
                situations d’isolement professionnel :{" "}
              </span>
            </p>
            <ul className="list-disc list-inside marker:text-red-600 text-gray-700 text-lg md:text-xl leading-relaxed space-y-2">
              <li>Déplacements commerciaux</li>
              <li>Télétravail</li>
              <li>Horaires décalés</li>
              <li>Face à des clients agressifs</li>
              <li>
                Fragilités de santé — déclarées à l’entreprise ou restées
                confidentielles
              </li>
            </ul>
            <p className="text-gray-700 text-lg md:text-xl mt-4">
              Dans tous les cas, votre{" "}
              <strong>responsabilité d’employeur</strong> est engagée.
              <span className="font-bold text-red-600"> bipSOS™</span> leur
              offre une protection immédiate, discrète et accessible.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <HowSection />
      <BPOfferSection />

      {/* <motion.section
        ref={section2Ref}
        initial="hidden"
        animate={section2InView ? "visible" : "hidden"}
        variants={staggerContainerVariants}
        className="py-20 px-6 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUpVariants} className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                                inline-flex items-center gap-3
                                px-6 py-3
                                text-sm font-semibold
                                text-red-600
                                border border-red-600
                                rounded-full
                                bg-red-600/10
                                mb-6
                            "
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="text-red-600 text-[6px]"
              />
              NOS OFFRES
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mt-4">
              Deux offres adaptées à vos besoins
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Choisissez le niveau de protection correspondant aux besoins de
              vos salariés.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="w-full">
              <div className="h-2 bg-[#243575] rounded-t-2xl"></div>
              <motion.div
                variants={cardVariants}
                transition={{ duration: 0.6 }}
                className="w-full bg-white rounded-b-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#243575] p-4 rounded-xl mr-4">
                      <FontAwesomeIcon
                        icon={faShieldAlt}
                        className="text-white"
                        size="lg"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Gardian</h3>
                  <p className="text-red-600 font-semibold mb-4">
                    Protection flexible
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Alertes vers les proches ou les services d’urgence,
                    détection de chute, mode furtif. Pour les salariés autonomes
                    qui veulent garder le contrôle.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="w-5 h-5 text-green-500 mr-3 mt-1"
                      />
                      <span className="text-gray-700">
                        Alerte géolocalisée vers proches ou 112
                      </span>
                    </div>

                    <div className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="w-5 h-5 text-green-500 mr-3 mt-1"
                      />
                      <span className="text-gray-700">
                        Détection automatique de chute (IA)
                      </span>
                    </div>

                    <div className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="w-5 h-5 text-green-500 mr-3 mt-1"
                      />
                      <span className="text-gray-700">
                        Mode furtif pour situations sensibles
                      </span>
                    </div>

                    <div className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="w-5 h-5 text-green-500 mr-3 mt-1"
                      />
                      <span className="text-gray-700">
                        Commande vocale (Android verrouillé)
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="w-full">
              <div className="h-2 bg-[#D32F2F] rounded-t-2xl"></div>
              <motion.div
                variants={cardVariants}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full bg-white rounded-b-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-xl mr-4">
                      <FontAwesomeIcon
                        icon={faHeadset}
                        className="text-red-600"
                        size="2x"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Active Assistance
                    </h3>
                    <p className="text-red-600 font-semibold">
                      Accompagnement professionnel 24/7
                    </p>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Toutes les fonctionnalités Gardian + un centre de
                    téléassistance spécialisé. Réponse garantie en 10 secondes,
                    5 langues, coordination des secours.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700">
                        Toutes les fonctionnalités Gardian incluses
                      </span>
                    </div>
                    <div className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700">
                        Centre téléassistance 24/7 multilingue
                      </span>
                    </div>
                    <div className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700">
                        Temps de réponse garanti : 10 secondes
                      </span>
                    </div>
                    <div className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700">
                        Coordination professionnelle des secours
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section> */}

      <motion.section
        ref={fonctionnementRef}
        initial="hidden"
        animate={fonctionnementInView ? "visible" : "hidden"}
        variants={staggerContainerVariants} // <-- ici
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 px-6 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex items-center gap-3
              px-6 py-3
              text-sm font-semibold
              text-red-600
              border border-red-600
              rounded-full
              bg-red-600/10
              mb-6
            "
          >
            <FontAwesomeIcon
              icon={faCircle}
              className="text-red-600 text-[6px]"
            />
            AVANTAGES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-10"
          >
            Ce que <span className="text-red-600">bipSOS™</span> apporte à votre
            entreprise
          </motion.h2>

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
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-red-600 transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={section3Ref}
        initial="hidden"
        animate={section3InView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 px-6 md:px-12 lg:px-20 xl:px-32 bg-[#0a1a33] text-white"
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex items-center gap-3
              px-6 py-3
              text-sm font-semibold
              text-red-600
              border border-red-600
              rounded-full
              bg-red-600/10
              mb-6
            "
          >
            <FontAwesomeIcon
              icon={faCircle}
              className="text-red-600 text-[8px]"
            />
            FONCTIONNEMENT
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: section3InView ? 1 : 0, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Simple à mettre en place
          </motion.h2>
          <motion.p
            className="text-gray-200 text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: section3InView ? 1 : 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Un déploiement en 3 étapes, sans aucune complexité technique.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-10 left-1/7 right-1/7 h-1 bg-gray-300 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {etapes.map((etape, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={section3InView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4 z-10">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold mb-2">{etape.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {etape.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

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
              Protégez vos salariés dès maintenant
            </motion.h3>

            <motion.p
              variants={fadeUpVariants}
              className="text-gray-500 mt-4 text-lg"
            >
              Choisissez la formule adaptée à votre entreprise et deployer la
              protection en quelques minutes
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4"
            >
              <div className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-4 rounded-lg text-lg cursor-pointer transition-all">
                <button
                  onClick={() => navigation.push("entreprises/inscription")}
                >
                  Créer votre compte pour découvrir nos offres
                </button>
              </div>
              {/* <div
                                className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white font-semibold px-6 py-4 rounded-lg text-lg cursor-pointer transition-all">
                                <button onClick={() => setShowDevis(true)}>
                                    Demander un devis
                                </button>
                                <span className="text-xs opacity-90">plus de 200 licences</span>
                            </div> */}
            </motion.div>
            {showDevis && <DevisSection onClose={() => setShowDevis(false)} />}
          </div>
        </div>
      </motion.section>

      <div className="relative w-full bg-white h-[300px] md:h-[540px] overflow-hidden flex justify-center items-center p-6 md:p-12">
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

      <div className="bg-white">
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
      </div>
      <FloatingButtons excludedSections={["hero", "cta"]} />
    </main>
  );
}
