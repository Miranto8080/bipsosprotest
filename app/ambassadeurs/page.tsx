"use client";

import {useRef, useState} from "react";
import InscriptionAmbass from "@/components/Inscription";
//import ContactAmbass from "@/components/ContactAmbass";
import {motion, useInView} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
    faGift,
    faChartLine,
    faUserCheck,
    faChartBar,
    faMoneyBillWave,
    faCircle,
    faPercentage,
    faTag,
    faCheck,
    faHeartPulse,
    faEarthAmericas,
    faPeopleRoof,
    faPersonRunning,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {Heart, Globe, Briefcase} from "lucide-react";
//import Link from "next/link";
import FloatingButtons from "@/components/FloatingA";
import {useRouter} from "next/navigation";
// import InscriptionDistr from "@/components/InscriptionDistr";
// import ContactDistr from "@/components/ContactDistr";

export default function EntreprisesPage() {
    const section1Ref = useRef(null);
    const section4Ref = useRef(null);
    const [showInscription] = useState(false);
    //const [showContact, setShowContact] = useState(false);

    const section1InView = useInView(section1Ref, {once: true, amount: 0.3});
    const section4InView = useInView(section4Ref, {once: true, amount: 0.3});

    const fadeUpVariants = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0},
    };

    const staggerContainerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };


    const cardVariants = {
        hidden: {opacity: 0, y: 30, scale: 0.95},
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
        },
    };

    const items = [
        {
            title: "Revenus récurrents",
            desc: "Commission sur chaque abonnement généré. Vos followers restent, vos revenus aussi.",
            icon: <Heart size={28} strokeWidth={2}/>,
            color: "#5B21B6",
        },
        {
            title: "Recommandation utile",
            desc: "Proposez un service qui a du sens. Protection concrète pour votre communauté.",
            icon: <Briefcase size={28} strokeWidth={2}/>,
            color: "#5B21B6",
        },
        {
            title: "Suivi en temps réel",
            desc: "Tableau de bord pour suivre vos conversions, vos gains, votre progression.",
            icon: <Globe size={28} strokeWidth={2}/>,
            color: "#5B21B6",
        },
    ];

    const router = useRouter();

    if (showInscription) {
        return <InscriptionAmbass/>;
    }

    return (
        <>
            <section
                className="relative min-h-screen w-full bg-gradient-to-br from-purple-800 via-purple-600 to-black text-white font-poppins overflow-hidden flex items-center">
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
                            backdrop-blur-md
                            shadow-2xl shadow-black/40
                            self-start
                        "
                        >
                        <FontAwesomeIcon
                            icon={faCircle}
                            className="text-white text-[14px]"
                        />
                        <span>PROGRAMME AMBASSADEUR</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
                            className="self-start px-6 py-2 
                            text-lg md:text-xl font-semibold tracking-wide 
                            text-white italic rounded-full"
                            style={{
                                textShadow: "0 0 6px rgb(132, 0, 184), 0 0 12px rgba(126, 0, 184, 0.6)",
                            }}
                            >
                            " Influenceurs · Podcasteurs · Créateurs de contenu "
                        </motion.div>
                        
                        <motion.h3
                            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.3}}
                        >
                            Protégez vos followers, développez vos{" "}
                            <span
                                style={{
                                    color: "#112848",
                                }}
                            >
                revenus
              </span>
                        </motion.h3>
                        <motion.p
                            className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.6}}
                        >
                            Recommandez bipSOS™ à votre audience et percevez une commission sur
                            chaque abonnement souscrit grâce à votre code personnalisé.
                        </motion.p>

                        <motion.div
                            className="flex flex-col gap-4 pt-4"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.9}}
                        >
                            <button
                                onClick={() => router.push('ambassadeurs/inscription')}
                                className="px-6 py-3 bg-white hover:bg-[#5B21B6] transition hover:text-white rounded-lg font-semibold text-[#7C3AED] shadow-md text-center cursor-pointer"
                            >
                                <span className="block">Créez votre compte</span>
                                <span className="block">
                                et découvrez les offres bipSOS Ambassadeurs
                                </span>
                            </button>
                            {/* <Link href="/contact">
                                <div
                                    className="px-6 py-3 bg-white/10 hover:bg-white/20 transition rounded-lg font-semibold text-white border border-white/20 backdrop-blur text-center cursor-pointer">
                                    <button>Nous contacter {" "}</button>
                                    <span className="text-xs opacity-90">
                  {" "} (Volume supérieur)
                  </span>
                                </div>
                            </Link> */}
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        <motion.div
                            variants={cardVariants}
                            transition={{duration: 0.6, delay: 0.1}}
                            className="rounded-2xl p-8 backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 flex flex-col items-center text-center"
                        >
                            <div
                                className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-md text-white mb-6">
                                <FontAwesomeIcon icon={faPercentage} className="text-2xl"/>
                            </div>
                            <h3 className="text-3xl font-bold text-white">X%</h3>
                            <p className="text-white/80 text-sm">Commission</p>
                        </motion.div>
                        <motion.div
                            variants={cardVariants}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="rounded-2xl p-8 backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 flex flex-col items-center text-center"
                        >
                            <div
                                className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-md text-white mb-6">
                                <FontAwesomeIcon icon={faChartLine} className="text-2xl"/>
                            </div>
                            <h3 className="text-3xl font-bold text-white">Bonus</h3>
                            <p className="text-white/80 text-sm">Par paliers</p>
                        </motion.div>
                        <motion.div
                            variants={cardVariants}
                            transition={{duration: 0.6, delay: 0.3}}
                            className="rounded-2xl p-8 backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 flex flex-col items-center text-center"
                        >
                            <div
                                className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-md text-white mb-6">
                                <FontAwesomeIcon icon={faTag} className="text-2xl"/>
                            </div>
                            <h3 className="text-3xl font-bold text-white">Code</h3>
                            <p className="text-white/80 text-sm">Personnalisé</p>
                        </motion.div>
                        <motion.div
                            variants={cardVariants}
                            transition={{duration: 0.6, delay: 0.4}}
                            className="rounded-2xl p-8 backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 flex flex-col items-center text-center"
                        >
                            <div
                                className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-md text-white mb-6">
                                <FontAwesomeIcon icon={faChartBar} className="text-2xl"/>
                            </div>
                            <h3 className="text-3xl font-bold text-white">Live</h3>
                            <p className="text-white/80 text-sm">Tableau de bord</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <motion.section
                ref={section1Ref}
                initial="hidden"
                animate={section1InView ? "visible" : "hidden"}
                variants={fadeUpVariants}
                transition={{duration: 0.8, ease: "easeOut"}}
                className="py-20 px-6 md:px-12 lg:px-20 xl:px-32 bg-white"
            >
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        className="
                            inline-flex items-center gap-3
                            px-5 py-2.5
                            text-sm md:text-base font-semibold tracking-wide uppercase
                            text-purple-600
                            border border-purple-600 rounded-full
                            bg-purple-600/20 backdrop-blur-sm
                            shadow-sm shadow-purple-600/30
                        "
                    >
                        <FontAwesomeIcon
                            icon={faCircle}
                            className="text-purple-600 text-[6px]"
                        />
                        LE PROGRAMME
                    </motion.div>

                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2, duration: 0.8}}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-10"
                    >
                        Un programme pensé pour{" "}
                        <span className="bg-gradient-to-b from-purple-500 to-black bg-clip-text text-transparent">
              les créateurs de contenu
            </span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="
                            relative bg-gray-50
                            border-l-4 border-r-4 border-purple-600
                            rounded-xl
                            p-6 md:p-8
                            shadow-md
                            max-w-7xl
                            text-left
                        "
                        >
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-purple-600 shrink-0" />
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                                Vous recevez un <strong>code promo exclusif</strong> à partager
                                avec votre audience.
                            </p>
                            </li>

                            <li className="flex items-start gap-4">
                            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-purple-600 shrink-0" />
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                                Chaque abonnement généré vous rapporte une
                                <strong> commission</strong>.
                            </p>
                            </li>

                            <li className="flex items-start gap-4">
                            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-purple-600 shrink-0" />
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                                Des <strong>bonus par paliers</strong> viennent récompenser
                                votre engagement.
                            </p>
                            </li>

                            <li className="flex items-start gap-4">
                            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-purple-600 shrink-0" />
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                                <strong>Suivi en temps réel</strong> de vos conversions et
                                <strong> paiements réguliers</strong>.
                            </p>
                            </li>
                        </ul>
                        </motion.div>

                </div>
            </motion.section>

            <section
                className="py-10 px-6 md:px-12 lg:px-20 xl:px-32 font-poppins bg-gradient-to-b from-white to-purple-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{opacity: 0, y: -10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            className="
                                inline-flex items-center gap-3
                                px-5 py-2.5
                                text-sm md:text-base font-semibold tracking-wide uppercase
                                text-purple-600 mb-5
                                border border-purple-600 rounded-full
                                bg-purple-600/20 backdrop-blur-sm
                                shadow-sm shadow-purple-600/30
                            "
                        >
                            <FontAwesomeIcon
                                icon={faCircle}
                                className="text-purple-600 text-[6px]"
                            />
                            FONCTIONNEMENT
                        </motion.div>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Simple et transparent
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mb-8"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.1}}
                            viewport={{once: true}}
                            className="relative"
                        >
                            <div
                                className="absolute -top-3 -left-3 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg
                bg-gradient-to-br from-purple-800 to-purple-200"
                            >
                                1
                            </div>
                            <div
                                className="bg-white p-8 rounded-2xl border border-purple-100 shadow-lg h-full pt-12 hover:shadow-xl transition-shadow duration-300">
                                <div
                                    className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                    <FontAwesomeIcon
                                        icon={faUserCheck}
                                        className="text-purple-500 text-xl"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">
                                    Inscrivez-vous
                                </h4>
                                <p className="text-gray-700 mb-4">
                                    Remplissez le formulaire. Validation de votre compte (SIRET) sous 24-48h.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                            viewport={{once: true}}
                            className="relative"
                        >
                            <div
                                className="absolute -top-3 -left-3 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg
                bg-gradient-to-br from-purple-800 to-purple-200"
                            >
                                2
                            </div>
                            <div
                                className="bg-white p-8 rounded-2xl border border-purple-100 shadow-lg h-full pt-12 hover:shadow-xl transition-shadow duration-300">
                                <div
                                    className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                    <FontAwesomeIcon
                                        icon={faGift}
                                        className="text-purple-500 text-xl"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">
                                    Recevez votre code
                                </h4>
                                <p className="text-gray-700 mb-4">
                                    Code promo personnalisé + accès à votre tableau de bord pour
                                    suivre vos conversions.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.3}}
                            viewport={{once: true}}
                            className="relative"
                        >
                            <div
                                className="absolute -top-3 -left-3 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg
                bg-gradient-to-br from-purple-800 to-purple-200"
                            >
                                3
                            </div>
                            <div
                                className="bg-white p-8 rounded-2xl border border-purple-100 shadow-lg h-full pt-12 hover:shadow-xl transition-shadow duration-300">
                                <div
                                    className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                    <FontAwesomeIcon
                                        icon={faMoneyBillWave}
                                        className="text-purple-500 text-xl"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">
                                    Partagez et gagnez
                                </h4>
                                <p className="text-gray-700 mb-4">
                                    Recommandez bipSOS™ à vos followers. Commission sur chaque
                                    conversion, paiement régulier.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* <motion.div
            variants={fadeUpVariants}
            transition={{ delay: 0.6 }}
            className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            <div className="bg-red-50 border-2 border-red-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <button
                onClick={() => setShowInscription(true)}
                className="
                        w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg
                        hover:bg-red-700 transition-colors duration-300
                        text-lg
                      "
              >
                S’inscrire en ligne
              </button>
              <p className="text-gray-600 text-sm mt-3">
                (jusqu’à 50 conversions/mois estimées)
              </p>
              {showInscription && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
                  <div className="relative w-full max-w-4xl mx-4">
                    <InscriptionAmbass
                      onClose={() => setShowInscription(false)}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <button
                onClick={() => setShowContact(true)}
                className="w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-black transition-colors duration-300 text-lg"
              >
                Nous contacter
              </button>
              <p className="text-gray-600 text-sm mt-3">(volume supérieur)</p>
            </div>
            {showContact && (
              <ContactAmbass onClose={() => setShowContact(false)} />
            )}
          </motion.div> */}
                </div>
            </section>

            <section className="w-full py-10 bg-white">
                <motion.div
                    className="text-center mb-14"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                >
                    <motion.div
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        className="
                            inline-flex items-center gap-3
                            px-5 py-2.5
                            text-sm md:text-base font-semibold tracking-wide uppercase
                            text-purple-600
                            border border-purple-600 rounded-full
                            bg-purple-600/20 backdrop-blur-sm
                            shadow-sm shadow-purple-600/30 mb-5
                        "
                    >
                        <FontAwesomeIcon
                            icon={faCircle}
                            className="text-purple-600 text-[6px]"
                        />
                        AVANTAGES
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                        Pourquoi rejoindre le programme ?
                    </h2>
                </motion.div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{opacity: 0, y: 40}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
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
                                style={{backgroundColor: item.color}}
                                initial={{scaleX: 0}}
                                animate={{scaleX: 1}}
                                transition={{duration: 0.5, delay: 0.2 + i * 0.15}}
                            />
                            <motion.div
                                className="flex justify-center mb-6"
                                initial={{scale: 0}}
                                animate={{scale: 1}}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: 0.3 + i * 0.15,
                                }}
                            >
                                <div
                                    className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
                                    <motion.div
                                        whileHover={{rotate: 15}}
                                        style={{color: item.color}}
                                    >
                                        {item.icon}
                                    </motion.div>
                                </div>
                            </motion.div>

                            <motion.h3
                                className="text-2xl font-bold text-gray-900"
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.45 + i * 0.15}}
                            >
                                {item.title}
                            </motion.h3>
                            <motion.p
                                className="text-gray-600 mt-3 text-sm leading-relaxed"
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.5 + i * 0.15}}
                            >
                                {item.desc}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center px-6 md:px-12 lg:px-10 py-20 w-full bg-white">
                <div className="space-y-6 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="
                        inline-flex items-center gap-3
                        px-6 py-3
                        text-sm md:text-base font-semibold tracking-wide uppercase
                        text-purple-600
                        border border-purple-600 rounded-full
                        bg-purple-600/20 backdrop-blur-sm
                        shadow-sm shadow-purple-600/30
                        self-start
                    "
                    >
                    <FontAwesomeIcon
                        icon={faCircle}
                        className="text-purple-600 text-[8px]"
                    />
                    <span>PROGRAMME INFLUENCEUR</span>
                </motion.div>


                    <motion.h3
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    >
                    Pour quels créateurs ?
                    </motion.h3>

                    <motion.p
                        className="text-m md:text-lg text-gray-500 max-w-lg leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        Le programme Influenceur s’adresse aux créateurs dont l’audience est
                        sensible aux thématiques de sécurité, santé et bien-être.
                    </motion.p>

                    <motion.div
                        className="space-y-6 mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.15 } },
                        }}
                    >
                    {[
                        "Créateurs santé et bien-être",
                        "Influenceurs famille et parentalité",
                        "Podcasteurs voyage et aventure",
                        "Créateurs sport et outdoor",
                    ].map((item, idx) => (
                        <motion.div
                        key={idx}
                        className="flex items-start"
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        >
                        <div className="w-6 h-6 flex-shrink-0 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                            <FontAwesomeIcon
                            icon={faCheck}
                            className="text-xs text-purple-700"
                            />
                        </div>
                        <span className="text-gray-700">{item}</span>
                        </motion.div>
                    ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                    {[
                    { icon: faHeartPulse, title: "Santé" },
                    { icon: faPeopleRoof, title: "Famille" },
                    { icon: faEarthAmericas, title: "Voyage" },
                    { icon: faPersonRunning, title: "Sport" },
                    ].map((card, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 * idx }}
                        className="rounded-2xl p-8 bg-white border border-gray-200 shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-purple-100 text-purple-700 mb-6">
                        <FontAwesomeIcon icon={card.icon} className="text-2xl" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">{card.title}</h3>
                    </motion.div>
                    ))}
                </div>
                </section>


            <div className="bg-white">
                <div className="h-px bg-gray-300 w-full"></div>

                <div className="py-12 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div
                        className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
                        <div className="flex items-center text-gray-700 text-lg font-semibold space-x-4">
                            <span>UTILISATEUR FINAL</span>

                            <div
                                className="flex items-center space-x-5 bg-gray-100 rounded-lg px-7 py-3 shadow-sm hover:shadow-md transition-shadow duration-200">
                                <div className="flex items-center justify-center bg-purple-700 rounded-2xl p-2">
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className="h-10 w-10 text-white"
                                    />
                                </div>
                                <span className="text-gray-800 font-semibold">Vos followers</span>
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
                            Rejoignez le programme Ambassadeur
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
                                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-4 rounded-lg text-lg cursor-pointer transition-all">
                                <button onClick={() => router.push('ambassadeurs/inscription')}>
                                    Créez votre compte et découvrez les offres bipSOS Ambassadeurs
                                </button>
                            </div>
                            {/* <Link href="/contact">
                                <div
                                    className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white font-semibold px-6 py-4 rounded-lg text-lg cursor-pointer transition-all">
                                    <button>Nous contacter {" "}</button>
                                    <span className="text-xs opacity-90">
                  {" "} plus de 100 licences
                  </span>
                                </div>
                            </Link> */}
                        </motion.div>
                        {/* {showContact && (
              <ContactAmbass onClose={() => setShowContact(false)} />
            )} */}
                    </div>
                    {/* <motion.div
            variants={fadeUpVariants}
            transition={{ delay: 0.6 }}
            className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            <div className="bg-red-50 border-2 border-red-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <button
                onClick={() => setShowInscription(true)}
                className="
                        w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg
                        hover:bg-red-700 transition-colors duration-300
                        text-lg
                      "
              >
                S’inscrire en ligne
              </button>
              <p className="text-gray-600 text-sm mt-3">
                (jusqu’à 50 conversions/mois estimées)
              </p>
              {showInscription && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
                  <div className="relative w-full max-w-4xl mx-4">
                    <InscriptionAmbass
                      onClose={() => setShowInscription(false)}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <button
                onClick={() => setShowContact(true)}
                className="w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-black transition-colors duration-300 text-lg"
              >
                Nous contacter
              </button>
              <p className="text-gray-600 text-sm mt-3">(volume supérieur)</p>
            </div>
            {showContact && (
              <ContactAmbass onClose={() => setShowContact(false)} />
            )}
          </motion.div> */}
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
            <FloatingButtons excludedSections={["hero", "cta"]}/>
        </>
    );
}
