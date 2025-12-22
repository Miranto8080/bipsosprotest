// "use client";

// import { useState, useCallback, useMemo } from "react";
// import {
//   Building,
//   Settings,
//   Contact,
//   CheckCircle,
//   ChevronLeft,
//   ChevronRight,
//   X
// } from "lucide-react";

// interface StructureStepProps {
//   structureType: string;
//   companyName: string;
//   siret: string;
//   address: string;
//   clientCount: string;
//   onSetStructureType: (type: string) => void;
//   onSetCompanyName: (name: string) => void;
//   onSetSiret: (siret: string) => void;
//   onSetAddress: (address: string) => void;
//   onSetClientCount: (count: string) => void;
//   onNext: () => void;
//   onClose: () => void;
// }

// function StructureStep({
//   structureType,
//   companyName,
//   siret,
//   address,
//   clientCount,
//   onSetStructureType,
//   onSetCompanyName,
//   onSetSiret,
//   onSetAddress,
//   onSetClientCount,
//   onNext,
//   onClose,
// }: StructureStepProps) {
//   const structureTypes = [
//     { id: "mutuelle", label: "Mutuelle" },
//     { id: "courtier", label: "Courtier" },
//     { id: "agence_voyages", label: "Agence voyages" },
//     { id: "autre", label: "Autre" }
//   ];

//   const clientCounts = [
//     { id: "0-100", label: "0 - 100" },
//     { id: "100-500", label: "100 - 500" },
//     { id: "500-1000", label: "500 - 1 000" },
//     { id: "1000-5000", label: "1 000 - 5 000" },
//     { id: "5000+", label: "5 000+" }
//   ];

//   const handleSiretChange = (value: string) => {
//     const cleanValue = value.replace(/\D/g, "");
//     if (cleanValue.length <= 14) {
//       onSetSiret(cleanValue);
//       if (cleanValue.length === 14) {
//         onSetAddress("123 Rue de la République, 75001 Paris");
//       }
//     }
//   };

//   return (
//     <div className="py-2 animate-fadeIn">
//       <h3 className="text-xl font-bold text-gray-900 mb-4">
//         Étape 1 — Identification structure
//       </h3>

//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2">
//             Type de structure <span className="text-green-500">*</span>
//           </label>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
//             {structureTypes.map((type) => (
//               <button
//                 key={type.id}
//                 type="button"
//                 onClick={() => onSetStructureType(type.id)}
//                 className={`
//                   p-3 rounded-lg border-2 transition-all duration-200 text-left
//                   ${
//                     structureType === type.id
//                       ? "border-green-500 bg-green-50"
//                       : "border-gray-200 hover:border-gray-300"
//                   }
//                 `}
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-900">{type.label}</h4>
//                   </div>
//                   {structureType === type.id && (
//                     <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
//                       <span className="text-white text-xs">✓</span>
//                     </div>
//                   )}
//                 </div>
//               </button>
//             ))}
//           </div>
//           <p className="text-xs text-gray-500 mt-1">Qualification</p>
//         </div>

//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2">
//             Raison sociale <span className="text-green-500">*</span>
//           </label>
//           <input
//             type="text"
//             value={companyName}
//             onChange={(e) => onSetCompanyName(e.target.value)}
//             className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors text-sm"
//             placeholder="Nom de votre entreprise"
//             required
//             aria-label="Raison sociale"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2">
//             Numéro SIRET <span className="text-green-500">*</span>
//           </label>
//           <input
//             type="text"
//             value={siret}
//             onChange={(e) => handleSiretChange(e.target.value)}
//             className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors text-sm"
//             placeholder="12345678901234"
//             required
//             aria-label="Numéro SIRET"
//           />
//           <div className="flex justify-between mt-1">
//             <p className="text-xs text-gray-500">14 chiffres</p>
//             {siret.length === 14 && (
//               <p className="text-xs text-green-600">✓ Vérification SIRET...</p>
//             )}
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2">
//             Adresse <span className="text-green-500">*</span>
//           </label>
//           <input
//             type="text"
//             value={address}
//             onChange={(e) => onSetAddress(e.target.value)}
//             className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors text-sm"
//             placeholder="Adresse complète"
//             required
//             aria-label="Adresse"
//           />
//           <p className="text-xs text-gray-500 mt-1">Pré-rempli si SIRET valide</p>
//         </div>

//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2">
//             Nombre d’adhérents/clients <span className="text-green-500">*</span>
//           </label>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//             {clientCounts.map((count) => (
//               <button
//                 key={count.id}
//                 type="button"
//                 onClick={() => onSetClientCount(count.id)}
//                 className={`
//                   p-3 rounded-lg border-2 transition-all duration-200 text-left
//                   ${
//                     clientCount === count.id
//                       ? "border-green-500 bg-green-50"
//                       : "border-gray-200 hover:border-gray-300"
//                   }
//                 `}
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-900">{count.label}</h4>
//                   </div>
//                   {clientCount === count.id && (
//                     <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
//                       <span className="text-white text-xs">✓</span>
//                     </div>
//                   )}
//                 </div>
//               </button>
//             ))}
//           </div>
//           <p className="text-xs text-gray-500 mt-1">Potentiel</p>
//         </div>

//         <div className="flex justify-between pt-4">
//           <button
//             type="button"
//             onClick={onClose}
//             className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-colors duration-200 text-sm"
//           >
//             Annuler
//           </button>
//           <button
//             type="button"
//             onClick={onNext}
//             className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center text-sm"
//           >
//             <span>Continuer</span>
//             <ChevronRight className="w-3.5 h-3.5 ml-1" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// interface PartnershipStepProps {
//   licenseQuota: string;
//   offerType: string;
//   whiteLabelInterest: string;
//   onSetLicenseQuota: (quota: string) => void;
//   onSetOfferType: (offer: string) => void;
//   onSetWhiteLabelInterest: (interest: string) => void;
//   onPrev: () => void;
//   onNext: () => void;
// }

// function PartnershipStep({
//   licenseQuota,
//   offerType,
//   whiteLabelInterest,
//   onSetLicenseQuota,
//   onSetOfferType,
//   onSetWhiteLabelInterest,
//   onPrev,
//   onNext,
// }: PartnershipStepProps) {
//   const offerTypes = [
//     { id: "gardian", label: "Gardian" },
//     { id: "active_assistance", label: "Active Assistance" },
//     { id: "mix", label: "Mix (Gardian + Active Assistance)" }
//   ];

//   const whiteLabelOptions = [
//     { id: "oui", label: "Oui" },
//     { id: "non", label: "Non" },
//     { id: "a_discuter", label: "À discuter" }
//   ];

//   return (
//     <div className="py-2 animate-fadeIn">
//       <h3 className="text-xl font-bold text-gray-900 mb-4">
//         Étape 2 — Configuration partenariat
//       </h3>

//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2">
//             Quota de licences souhaité <span className="text-green-500">*</span>
//           </label>
//           <div className="relative">
//             <input
//               type="number"
//               value={licenseQuota}
//               onChange={(e) => {
//                 const value = e.target.value;
//                 if (value === "" || (parseInt(value) >= 1 && parseInt(value) <= 100)) {
//                   onSetLicenseQuota(value);
//                 }
//               }}
//               min="1"
//               max="100"
//               className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors text-sm pr-16"
//               placeholder="Ex: 10"
//               required
//               aria-label="Quota de licences"
//             />
//             <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
//               licences
//             </div>
//           </div>
//           <p className="text-xs text-gray-500 mt-1">Entre 1 et 100 licences</p>
//         </div>

//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2">
//             Offre <span className="text-green-500">*</span>
//           </label>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
//             {offerTypes.map((offer) => (
//               <button
//                 key={offer.id}
//                 type="button"
//                 onClick={() => onSetOfferType(offer.id)}
//                 className={`
//                   p-3 rounded-lg border-2 transition-all duration-200 text-left
//                   ${
//                     offerType === offer.id
//                       ? "border-green-500 bg-green-50"
//                       : "border-gray-200 hover:border-gray-300"
//                   }
//                 `}
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-900">{offer.label}</h4>
//                   </div>
//                   {offerType === offer.id && (
//                     <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
//                       <span className="text-white text-xs">✓</span>
//                     </div>
//                   )}
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2">
//             Intérêt marque blanche <span className="text-green-500">*</span>
//           </label>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
//             {whiteLabelOptions.map((option) => (
//               <button
//                 key={option.id}
//                 type="button"
//                 onClick={() => onSetWhiteLabelInterest(option.id)}
//                 className={`
//                   p-3 rounded-lg border-2 transition-all duration-200 text-left
//                   ${
//                     whiteLabelInterest === option.id
//                       ? "border-green-500 bg-green-50"
//                       : "border-gray-200 hover:border-gray-300"
//                   }
//                 `}
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-900">{option.label}</h4>
//                   </div>
//                   {whiteLabelInterest === option.id && (
//                     <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
//                       <span className="text-white text-xs">✓</span>
//                     </div>
//                   )}
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-between pt-4">
//           <button
//             type="button"
//             onClick={onPrev}
//             className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-colors duration-200 flex items-center text-sm"
//           >
//             <ChevronLeft className="w-3.5 h-3.5 mr-1" />
//             <span>Retour</span>
//           </button>
//           <button
//             type="button"
//             onClick={onNext}
//             className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center text-sm"
//           >
//             <span>Continuer</span>
//             <ChevronRight className="w-3.5 h-3.5 ml-1" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// interface ContactValidationStepProps {
//   contactName: string;
//   contactPosition: string;
//   contactEmail: string;
//   contactPhone: string;
//   acceptTerms: boolean;
//   onSetContactName: (name: string) => void;
//   onSetContactPosition: (position: string) => void;
//   onSetContactEmail: (email: string) => void;
//   onSetContactPhone: (phone: string) => void;
//   onSetAcceptTerms: (accept: boolean) => void;
//   onPrev: () => void;
//   onSubmit: () => void;
// }

// function ContactValidationStep({
//   contactName,
//   contactPosition,
//   contactEmail,
//   contactPhone,
//   acceptTerms,
//   onSetContactName,
//   onSetContactPosition,
//   onSetContactEmail,
//   onSetContactPhone,
//   onSetAcceptTerms,
//   onPrev,
//   onSubmit,
// }: ContactValidationStepProps) {
//   return (
//     <div className="py-2 animate-fadeIn">
//       <h3 className="text-xl font-bold text-gray-900 mb-4">
//         Étape 3 — Contact et validation
//       </h3>

//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2">
//             Nom du contact <span className="text-green-500">*</span>
//           </label>
//           <input
//             type="text"
//             value={contactName}
//             onChange={(e) => onSetContactName(e.target.value)}
//             className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors text-sm"
//             placeholder="Prénom Nom"
//             required
//             aria-label="Nom du contact"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2">
//             Fonction <span className="text-green-500">*</span>
//           </label>
//           <input
//             type="text"
//             value={contactPosition}
//             onChange={(e) => onSetContactPosition(e.target.value)}
//             className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors text-sm"
//             placeholder="Ex: Directeur commercial"
//             required
//             aria-label="Fonction"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2">
//             Email professionnel <span className="text-green-500">*</span>
//           </label>
//           <input
//             type="email"
//             value={contactEmail}
//             onChange={(e) => onSetContactEmail(e.target.value)}
//             className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors text-sm"
//             placeholder="contact@entreprise.fr"
//             required
//             aria-label="Email professionnel"
//           />
//           <p className="text-xs text-gray-500 mt-1">Pour l’accès à l’espace partenaire</p>
//         </div>

//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2">
//             Téléphone <span className="text-green-500">*</span>
//           </label>
//           <input
//             type="tel"
//             value={contactPhone}
//             onChange={(e) => onSetContactPhone(e.target.value)}
//             className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors text-sm"
//             placeholder="+33 1 23 45 67 89"
//             required
//             aria-label="Téléphone"
//           />
//         </div>

//         <div className="border-t border-gray-200 pt-4">
//           <div className="flex items-start space-x-2">
//             <input
//               type="checkbox"
//               id="accept-cgv"
//               checked={acceptTerms}
//               onChange={(e) => onSetAcceptTerms(e.target.checked)}
//               className="mt-0.5 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
//               required
//             />
//             <label htmlFor="accept-cgv" className="text-xs text-gray-700">
//               J’accepte les{" "}
//               <button type="button" className="text-green-600 hover:text-green-700 font-medium">
//                 Conditions Générales de Vente Distributeur
//               </button>{" "}
//               <span className="text-green-500">*</span>
//             </label>
//           </div>
//         </div>

//         <div className="flex justify-between pt-4">
//           <button
//             type="button"
//             onClick={onPrev}
//             className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-colors duration-200 flex items-center text-sm"
//           >
//             <ChevronLeft className="w-3.5 h-3.5 mr-1" />
//             <span>Retour</span>
//           </button>
//           <button
//             type="button"
//             onClick={onSubmit}
//             disabled={!acceptTerms}
//             className={`
//               px-5 py-2 font-semibold rounded-lg transition-colors duration-200 flex items-center text-sm
//               ${
//                 acceptTerms
//                   ? "bg-green-600 hover:bg-green-700 text-white"
//                   : "bg-gray-200 text-gray-400 cursor-not-allowed"
//               }
//             `}
//           >
//             <span>Valider mon inscription</span>
//             <CheckCircle className="w-3.5 h-3.5 ml-1" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// interface ConfirmationStepProps {
//   applicationId: string;
//   onClose: () => void;
// }

// function ConfirmationStep({
//   applicationId,
//   onClose,
// }: ConfirmationStepProps) {
//   return (
//     <div className="py-2 flex flex-col items-center justify-center text-center animate-fadeIn">
//       <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
//         <CheckCircle className="w-6 h-6 text-green-600" />
//       </div>

//       <h3 className="text-xl font-bold text-gray-900 mb-3">
//         Demande envoyée !
//       </h3>

//       <p className="text-gray-600 text-sm mb-4 max-w-md">
//         Votre candidature au Programme Distributeur bipSOS™ a été soumise avec succès.
//       </p>

//       <div className="bg-gray-50 rounded-lg p-3 w-full max-w-md mb-4">
//         <div className="text-left space-y-1.5">
//           <div className="flex justify-between">
//             <span className="text-gray-600 text-xs">Référence :</span>
//             <span className="font-semibold text-xs">
//               {applicationId}
//             </span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-gray-600 text-xs">Statut :</span>
//             <span className="font-semibold text-yellow-600 text-xs">
//               En attente de vérification SIRET
//             </span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-gray-600 text-xs">Délai :</span>
//             <span className="font-semibold text-xs">
//               24-48 heures
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="space-y-2 max-w-md mb-4">
//         <div className="flex items-start">
//           <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
//             <span className="text-green-600 text-xs">✓</span>
//           </div>
//           <p className="text-gray-600 text-xs text-left">
//             Validation en attente de vérification SIRET (24-48h)
//           </p>
//         </div>
//         <div className="flex items-start">
//           <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
//             <span className="text-green-600 text-xs">✓</span>
//           </div>
//           <p className="text-gray-600 text-xs text-left">
//             Email de confirmation avec les prochaines étapes
//           </p>
//         </div>
//         <div className="flex items-start">
//           <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
//             <span className="text-green-600 text-xs">✓</span>
//           </div>
//           <p className="text-gray-600 text-xs text-left">
//             Accès à votre espace partenaire après validation
//           </p>
//         </div>
//       </div>

//       <div className="animate-pulse mb-4">
//         <p className="text-gray-500 text-xs mb-2">
//           Vérification SIRET en cours...
//         </p>
//         <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
//           <div className="h-full bg-green-500 animate-[loading_2s_ease-in-out_infinite]"></div>
//         </div>
//       </div>

//       <button
//         type="button"
//         onClick={onClose}
//         className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm"
//       >
//         Retourner au site
//       </button>
//     </div>
//   );
// }

// export default function TunnelInscriptionDistributeur({
//   onClose
// }: {
//   onClose: () => void
// }) {
//   const [step, setStep] = useState<
//     "structure" | "partnership" | "contact" | "confirmation"
//   >("structure");

//   const [structureType, setStructureType] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [siret, setSiret] = useState("");
//   const [address, setAddress] = useState("");
//   const [clientCount, setClientCount] = useState("");

//   const [licenseQuota, setLicenseQuota] = useState("");
//   const [offerType, setOfferType] = useState("");
//   const [whiteLabelInterest, setWhiteLabelInterest] = useState("");

//   const [contactName, setContactName] = useState("");
//   const [contactPosition, setContactPosition] = useState("");
//   const [contactEmail, setContactEmail] = useState("");
//   const [contactPhone, setContactPhone] = useState("");
//   const [acceptTerms, setAcceptTerms] = useState(false);

//   const [applicationId] = useState(() => {
//     const timestamp = Date.now();
//     const randomPart = Math.floor(Math.random() * 1000);
//     return `DIST-${timestamp.toString(36).toUpperCase()}-${randomPart}`;
//   });

//   const steps = useMemo(
//     () => [
//       { id: "structure", label: "Structure", icon: Building },
//       { id: "partnership", label: "Partenariat", icon: Settings },
//       { id: "contact", label: "Contact", icon: Contact },
//       { id: "confirmation", label: "Confirmation", icon: CheckCircle },
//     ],
//     []
//   );

//   const currentStepIndex = steps.findIndex((s) => s.id === step);

//   const handleNextStep = useCallback(() => {
//     if (step === "structure") setStep("partnership");
//     else if (step === "partnership") setStep("contact");
//   }, [step]);

//   const handlePrevStep = useCallback(() => {
//     if (step === "partnership") setStep("structure");
//     else if (step === "contact") setStep("partnership");
//   }, [step]);

//   const handleSubmit = useCallback(() => {
//     console.log("Candidature distributeur soumise:", {
//       structureType,
//       companyName,
//       siret,
//       address,
//       clientCount,
//       licenseQuota,
//       offerType,
//       whiteLabelInterest,
//       contactName,
//       contactPosition,
//       contactEmail,
//       contactPhone,
//       acceptTerms,
//       applicationId,
//     });

//     setStep("confirmation");
//   }, [
//     structureType,
//     companyName,
//     siret,
//     address,
//     clientCount,
//     licenseQuota,
//     offerType,
//     whiteLabelInterest,
//     contactName,
//     contactPosition,
//     contactEmail,
//     contactPhone,
//     acceptTerms,
//     applicationId,
//   ]);

//   const renderStep = () => {
//     switch (step) {
//       case "structure":
//         return (
//           <StructureStep
//             structureType={structureType}
//             companyName={companyName}
//             siret={siret}
//             address={address}
//             clientCount={clientCount}
//             onSetStructureType={setStructureType}
//             onSetCompanyName={setCompanyName}
//             onSetSiret={setSiret}
//             onSetAddress={setAddress}
//             onSetClientCount={setClientCount}
//             onNext={handleNextStep}
//             onClose={onClose}
//           />
//         );
//       case "partnership":
//         return (
//           <PartnershipStep
//             licenseQuota={licenseQuota}
//             offerType={offerType}
//             whiteLabelInterest={whiteLabelInterest}
//             onSetLicenseQuota={setLicenseQuota}
//             onSetOfferType={setOfferType}
//             onSetWhiteLabelInterest={setWhiteLabelInterest}
//             onPrev={handlePrevStep}
//             onNext={handleNextStep}
//           />
//         );
//       case "contact":
//         return (
//           <ContactValidationStep
//             contactName={contactName}
//             contactPosition={contactPosition}
//             contactEmail={contactEmail}
//             contactPhone={contactPhone}
//             acceptTerms={acceptTerms}
//             onSetContactName={setContactName}
//             onSetContactPosition={setContactPosition}
//             onSetContactEmail={setContactEmail}
//             onSetContactPhone={setContactPhone}
//             onSetAcceptTerms={setAcceptTerms}
//             onPrev={handlePrevStep}
//             onSubmit={handleSubmit}
//           />
//         );
//       case "confirmation":
//         return (
//           <ConfirmationStep
//             applicationId={applicationId}
//             onClose={onClose}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 bg-white overflow-y-auto mt-8">
//       <div className="min-h-screen">
//         <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
//           <div className="max-w-5xl mx-auto px-4 sm:px-6">
//             <div className="flex justify-between items-center py-2">
//               <button
//                 onClick={onClose}
//                 className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
//                 aria-label="Fermer"
//                 type="button"
//               >
//                 <X className="w-4 h-4" />
//               </button>
//             </div>

//             <div className="pb-3">
//               <div className="flex justify-between relative">
//                 {steps.map((s, index) => (
//                   <div key={s.id} className="flex flex-col items-center relative">
//                     <button
//                       onClick={() => {
//                         if (index < currentStepIndex) {
//                           setStep(s.id as typeof step);
//                         }
//                       }}
//                       disabled={index > currentStepIndex}
//                       className={`
//                         w-8 h-8 rounded-full flex items-center justify-center mb-1 transition-all duration-200
//                         ${
//                           step === s.id
//                             ? "bg-green-500 text-white scale-110 shadow-sm"
//                             : currentStepIndex > index
//                             ? "bg-green-100 text-green-600 cursor-pointer hover:bg-green-200"
//                             : "bg-gray-200 text-gray-500 cursor-not-allowed"
//                         }
//                       `}
//                       type="button"
//                       aria-label={`Aller à l'étape: ${s.label}`}
//                     >
//                       {currentStepIndex > index ? (
//                         <CheckCircle className="w-3.5 h-3.5" />
//                       ) : (
//                         <s.icon className="w-3.5 h-3.5" />
//                       )}
//                     </button>
//                     <span
//                       className={`
//                       text-xs font-medium transition-colors duration-200 whitespace-nowrap
//                       ${
//                         step === s.id || currentStepIndex > index
//                           ? "text-green-600 font-semibold"
//                           : "text-gray-500"
//                       }
//                     `}
//                     >
//                       {s.label}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
//           {renderStep()}
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, ChangeEvent, FormEvent } from "react";
// import { X } from "lucide-react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle } from "@fortawesome/free-solid-svg-icons";
// import CGULinks from "./CGULinks";

// type FormData = {
//   civilite: string;
//   prenom: string;
//   nom: string;
//   email: string;
//   telephone: string;
//   fonction: string;
//   typeStructure: string;
//   raisonSociale: string;
//   siret: string;
//   numeroPro: string;
//   adresse: string;
//   codePostal: string;
//   ville: string;
//   acceptCGU: boolean;
//   acceptNewsletter: boolean;
// };

// export default function InscriptionDistr() {
//   const [formData, setFormData] = useState<FormData>({
//     civilite: "",
//     prenom: "",
//     nom: "",
//     email: "",
//     telephone: "",
//     fonction: "",
//     typeStructure: "",
//     raisonSociale: "",
//     siret: "",
//     numeroPro: "",
//     adresse: "",
//     codePostal: "",
//     ville: "",
//     acceptCGU: false,
//     acceptNewsletter: false,
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = e.target;
//     const target = e.target as HTMLInputElement;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? target.checked : value,
//     }));
//   };

//   const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.bipsos.com";

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     // const cleanSiret = formData.siret.trim();
//     // const finalSiret = cleanSiret.length === 14 ? cleanSiret : null;

//     // if (cleanSiret && cleanSiret.length > 0 && cleanSiret.length !== 14) {
//     //   setError("Le SIRET doit contenir 14 chiffres ou être laissé vide");
//     //   setLoading(false);
//     //   return;
//     // }

//     const payload = {
//       type: "DISTRIBUTOR",
//       status: "pending",
//       civility: formData.civilite,
//       first_name: formData.prenom,
//       last_name: formData.nom,
//       email: formData.email,
//       phone: formData.telephone,
//       function: formData.fonction,
//       company_name: formData.raisonSociale,
//       activity: formData.typeStructure,
//       siret: formData.siret || null,
//       //siret: finalSiret,
//       profesional_number: formData.numeroPro || null,
//       address: formData.adresse,
//       postcode: formData.codePostal,
//       city: formData.ville,
//       capacity: null,
//       subscription: "gardian", // valeur par défaut, car dans notre formulaire il n'y a pas de choix (à revoir)
//       quantity: 10,
//     };

//     try {
//       const res = await fetch(`${apiUrl}/profesionals/preorder/store`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setSuccess(true);
//       } else {
//         const errors = data.errors
//           ? Object.values(data.errors).flat().join(", ")
//           : data.message || "Une erreur est survenue.";
//         setError(errors as string);
//       }
//     } catch {
//       setError("Impossible de contacter le serveur. Vérifiez votre connexion.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (success) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
//         <div className="text-center max-w-md">
//           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//             <svg
//               className="w-12 h-12 text-green-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//           </div>
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Candidature envoyée !
//           </h2>
//           <p className="text-gray-600">
//             Merci ! Nous avons bien reçu votre demande de partenariat.
//             <br />
//             Nous reviendrons vers vous sous 24 à 48 heures.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 pt-25">
//       <div className="max-w-3xl mx-auto px-4">
//         <div className="text-center mb-10">
//           <div className="relative text-center mb-10">
//             <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-green-600 border border-green-600 rounded-full bg-green-600/10">
//               <FontAwesomeIcon
//                 icon={faCircle}
//                 className="text-green-600 text-[6px]"
//               />
//               DISTRIBUTEUR
//             </div>

//             <button
//               type="button"
//               onClick={() => (window.location.href = "/distributeurs")}
//               className="absolute top-0 right-0 md:right-4 text-gray-500 hover:text-gray-700 transition"
//               aria-label="Retour"
//             >
//               <X className="w-8 h-8" />
//             </button>
//           </div>

//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
//             Devenez partenaire bipSOS
//           </h1>
//           <p className="text-md text-gray-600 mt-3">
//             Rejoignez notre réseau de distribution et proposez la protection
//             bipSOS à vos clients
//           </p>
//         </div>

//         <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
//           <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8">
//                 Vos coordonnées
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-1">
//                   <label className="block text-sm font-semibold text-gray-900">
//                     Civilité <span className="text-green-500">*</span>
//                   </label>
//                   <div className="flex gap-6">
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         name="civilite"
//                         value="M."
//                         checked={formData.civilite === "M."}
//                         onChange={handleRadioChange}
//                         className="w-4 h-4 text-green-600"
//                         required
//                       />
//                       <span className="ml-2 text-gray-700">M.</span>
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         name="civilite"
//                         value="Mme"
//                         checked={formData.civilite === "Mme"}
//                         onChange={handleRadioChange}
//                         className="w-4 h-4 text-green-600"
//                         required
//                       />
//                       <span className="ml-2 text-gray-700">Mme</span>
//                     </label>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Prénom <span className="text-green-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="prenom"
//                     value={formData.prenom}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition text-base text-gray-900"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Nom <span className="text-green-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="nom"
//                     value={formData.nom}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition text-base text-gray-900"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Fonction <span className="text-green-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="fonction"
//                     value={formData.fonction}
//                     onChange={handleChange}
//                     placeholder="Ex: Directeur, Responsable commercial..."
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition text-base text-gray-900 placeholder-gray-400"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Email professionnel{" "}
//                     <span className="text-green-500">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition text-base text-gray-900"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Téléphone <span className="text-green-500">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="telephone"
//                     value={formData.telephone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition text-base text-gray-900"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8">
//                 Votre entreprise
//               </h2>
//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Raison sociale <span className="text-green-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="raisonSociale"
//                     value={formData.raisonSociale}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition text-base text-gray-900"
//                     required
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-3">
//                       Type de structure{" "}
//                       <span className="text-green-500">*</span>
//                     </label>
//                     <select
//                       name="typeStructure"
//                       value={formData.typeStructure}
//                       onChange={handleChange}
//                       className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition text-base text-gray-900"
//                       required
//                     >
//                       <option value="" disabled className="text-gray-400">
//                         Sélectionner votre structure
//                       </option>
//                       <option value="mutuelle">Mutuelle</option>
//                       <option value="courtier">Courtier en assurance</option>
//                       <option value="agence_voyages">Agence de voyages</option>
//                       <option value="autre">Autre</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       SIRET <span className="text-green-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="siret"
//                       value={formData.siret}
//                       onChange={handleChange}
//                       maxLength={14}
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition text-base text-gray-900"
//                       placeholder="14 chiffres"
//                       required
//                     />
//                   </div>
//                   {/* <div className="space-y-1">
//                     <label className="block text-sm font-medium text-gray-700">
//                       SIRET <span className="text-gray-500">(Optionnel)</span>
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="text"
//                         name="siret"
//                         value={formData.siret}
//                         onChange={handleChange}
//                         maxLength={14}
//                         placeholder="14 chiffres (optionnel)"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-base placeholder-gray-400"
//                       />
//                       <span className="absolute right-3 top-2 text-xs text-gray-500">
//                         {formData.siret.length}/14
//                       </span>
//                     </div>
//                     <p className="text-xs text-gray-500 mt-1">
//                       Facultatif - Seulement si vous souhaitez être référencé
//                     </p>
//                   </div>  */}
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       N° professionnel (ORIAS, etc.)
//                     </label>
//                     <input
//                       type="text"
//                       name="numeroPro"
//                       value={formData.numeroPro}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition text-base text-gray-900"
//                       placeholder="Ex : ORIAS 12345678"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Adresse officielle{" "}
//                       <span className="text-green-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="adresse"
//                       value={formData.adresse}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition text-base text-gray-900"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Code postal <span className="text-green-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="codePostal"
//                       value={formData.codePostal}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition text-base text-gray-900"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Ville <span className="text-green-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="ville"
//                       value={formData.ville}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition text-base text-gray-900"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="pt-6 space-y-6 border-t border-gray-200">
//               <div className="flex items-start">
//                 <input
//                   type="checkbox"
//                   id="acceptCGU"
//                   name="acceptCGU"
//                   checked={formData.acceptCGU}
//                   onChange={handleChange}
//                   className="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500 mt-0.5"
//                   required
//                 />
//                 <label
//                   htmlFor="acceptCGU"
//                   className="ml-4 text-sm text-gray-700 leading-relaxed cursor-pointer"
//                 >
//                   <CGULinks />
//                 </label>
//               </div>
//               <div className="flex items-start">
//                 <input
//                   type="checkbox"
//                   id="acceptNewsletter"
//                   name="acceptNewsletter"
//                   checked={formData.acceptNewsletter}
//                   onChange={handleChange}
//                   className="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500 mt-0.5"
//                 />
//                 <label
//                   htmlFor="acceptNewsletter"
//                   className="ml-4 text-sm text-gray-700 leading-relaxed"
//                 >
//                   J’accepte de recevoir des informations sur les offres bipSOS
//                 </label>
//               </div>
//             </div>

//             {error && (
//               <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
//                 {error}
//               </div>
//             )}

//             <div className="text-center pt-8">
//               <button
//                 type="submit"
//                 disabled={loading || !formData.acceptCGU}
//                 className={`px-12 py-4 font-bold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 ${
//                   loading || !formData.acceptCGU
//                     ? "bg-gray-400 cursor-not-allowed text-gray-200"
//                     : "bg-green-600 hover:bg-green-700 text-white"
//                 }`}
//               >
//                 {loading ? "Envoi en cours..." : "Envoyer ma candidature"}
//               </button>
//             </div>

//             <p className="text-center text-xs text-gray-500 mt-6">
//               Votre demande sera vérifiée sous 24 à 48 heures ouvrées
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import CGULinks from "./CGULinks";

type FormData = {
  civilite: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  fonction: string;
  typeStructure: string;
  raisonSociale: string;
  siret: string;
  numeroPro: string;
  adresse: string;
  codePostal: string;
  ville: string;
  acceptCGU: boolean;
  acceptNewsletter: boolean;
};

export default function InscriptionDistr() {
  const [formData, setFormData] = useState<FormData>({
    civilite: "",
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    fonction: "",
    typeStructure: "",
    raisonSociale: "",
    siret: "",
    numeroPro: "",
    adresse: "",
    codePostal: "",
    ville: "",
    acceptCGU: false,
    acceptNewsletter: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? target.checked : value,
    }));
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.bipsos.com";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
      type: "DISTRIBUTOR",
      status: "pending",
      civility: formData.civilite,
      first_name: formData.prenom,
      last_name: formData.nom,
      email: formData.email,
      phone: formData.telephone,
      function: formData.fonction,
      company_name: formData.raisonSociale,
      activity: formData.typeStructure,
      siret: formData.siret || null,
      profesional_number: formData.numeroPro || null,
      address: formData.adresse,
      postcode: formData.codePostal,
      city: formData.ville,
      capacity: null,
      subscription: "gardian",
      quantity: 10,
    };

    try {
      const res = await fetch(`${apiUrl}/profesionals/preorder/store`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
        const errors = data.errors
          ? Object.values(data.errors).flat().join(", ")
          : data.message || "Une erreur est survenue.";
        setError(errors as string);
      }
    } catch {
      setError("Impossible de contacter le serveur. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="text-center max-w-md px-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Candidature envoyée !</h2>
          <p className="text-gray-600">
            Merci ! Nous avons bien reçu votre demande.<br />
            Nous reviendrons vers vous sous 24 à 48 heures.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center relative mb-6 my-15">
          <button
            type="button"
            onClick={() => (window.location.href = "/distributeurs")}
            className="absolute top-1 right-0 text-gray-500 hover:text-gray-700"
          >
            <X className="w-7 h-7" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-green-600 border border-green-600 rounded-full bg-green-600/10">
            <FontAwesomeIcon icon={faCircle} className="text-green-600 text-[6px]" />
            DISTRIBUTEUR
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">
            Devenez partenaire bipSOS
          </h1>
          <p className="text-sm text-gray-600 mt-2 max-w-xl mx-auto">
            Rejoignez notre réseau et proposez la protection bipSOS à vos clients
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit} className="p-5 md:p-8 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Vos coordonnées</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">
                    Civilité <span className="text-green-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center text-sm">
                      <input type="radio" name="civilite" value="M." checked={formData.civilite === "M."} onChange={handleRadioChange} className="text-green-600" required />
                      <span className="ml-1">M.</span>
                    </label>
                    <label className="flex items-center text-sm">
                      <input type="radio" name="civilite" value="Mme" checked={formData.civilite === "Mme"} onChange={handleRadioChange} className="text-green-600" required />
                      <span className="ml-1">Mme</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Prénom <span className="text-green-500">*</span></label>
                  <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 text-sm" required />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Nom <span className="text-green-500">*</span></label>
                  <input type="text" name="nom" value={formData.nom} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 text-sm" required />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Fonction <span className="text-green-500">*</span></label>
                  <input type="text" name="fonction" value={formData.fonction} onChange={handleChange} placeholder="Ex: Directeur" className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 text-sm" required />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Email pro <span className="text-green-500">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 text-sm" required />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Téléphone <span className="text-green-500">*</span></label>
                  <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 text-sm" required />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Votre entreprise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-3 space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Raison sociale <span className="text-green-500">*</span></label>
                  <input type="text" name="raisonSociale" value={formData.raisonSociale} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 text-sm" required />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Type <span className="text-green-500">*</span></label>
                  <select name="typeStructure" value={formData.typeStructure} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 text-sm" required>
                    <option value="" disabled>Sélectionner</option>
                    <option value="mutuelle">Mutuelle</option>
                    <option value="courtier">Courtier</option>
                    <option value="agence_voyages">Agence voyages</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">SIRET <span className="text-green-500">*</span></label>
                  <input type="text" name="siret" value={formData.siret} onChange={handleChange} maxLength={14} placeholder="14 chiffres" className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 text-sm" required />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">N° pro (ORIAS...)</label>
                  <input type="text" name="numeroPro" value={formData.numeroPro} onChange={handleChange} placeholder="Optionnel" className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 text-sm" />
                </div>

                <div className="md:col-span-3 space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Adresse <span className="text-green-500">*</span></label>
                  <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 text-sm" required />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Code postal <span className="text-green-500">*</span></label>
                  <input type="text" name="codePostal" value={formData.codePostal} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 text-sm" required />
                </div>

                <div className="md:col-span-2 space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Ville <span className="text-green-500">*</span></label>
                  <input type="text" name="ville" value={formData.ville} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 text-sm" required />
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200 space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <input type="checkbox" id="acceptCGU" name="acceptCGU" checked={formData.acceptCGU} onChange={handleChange} className="w-4 h-4 text-green-600 rounded mt-0.5" required />
                <label htmlFor="acceptCGU" className="text-gray-700 cursor-pointer"><CGULinks /></label>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <input type="checkbox" id="acceptNewsletter" name="acceptNewsletter" checked={formData.acceptNewsletter} onChange={handleChange} className="w-4 h-4 text-green-600 rounded mt-0.5" />
                <label htmlFor="acceptNewsletter" className="text-gray-700">Recevoir les offres bipSOS</label>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading || !formData.acceptCGU}
                  className={`px-10 py-3.5 font-bold text-base rounded-lg shadow-md transition-all ${
                    loading || !formData.acceptCGU
                      ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700 text-white hover:shadow-lg"
                  }`}
                >
                  {loading ? "Envoi..." : "Créez mon compte"}
                </button>
              </div>

              <p className="text-center text-xs text-gray-500">
                Votre demande sera étudiée sous 48 heures ouvrées
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}