// "use client";

// import { useState, useCallback, useMemo } from "react";
// import {
//   User,
//   Users,
//   CreditCard,
//   CheckCircle,
//   Upload,
//   ChevronLeft,
//   ChevronRight,
//   X
// } from "lucide-react";

// interface IdentificationStepProps {
//   status: "auto-entrepreneur" | "societe" | "individuel";
//   siret: string;
//   idFile: File | null;
//   fullName: string;
//   creatorName: string;
//   onSetStatus: (status: "auto-entrepreneur" | "societe" | "individuel") => void;
//   onSetSiret: (siret: string) => void;
//   onSetIdFile: (file: File | null) => void;
//   onSetFullName: (name: string) => void;
//   onSetCreatorName: (name: string) => void;
//   onNext: () => void;
//   onClose: () => void;
// }

// function IdentificationStep({
//   status,
//   siret,
//   idFile,
//   fullName,
//   creatorName,
//   onSetStatus,
//   onSetSiret,
//   onSetIdFile,
//   onSetFullName,
//   onSetCreatorName,
//   onNext,
//   onClose,
// }: IdentificationStepProps) {
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] || null;
//     onSetIdFile(file);
//   };

//   return (
//     <div className="py-2 animate-fadeIn">
//       <h3 className="text-lg font-bold text-gray-900 mb-4">
//         Étape 1 — Identification
//       </h3>

//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2">
//             Statut <span className="text-red-500">*</span>
//           </label>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
//             <button
//               type="button"
//               onClick={() => onSetStatus("auto-entrepreneur")}
//               className={`
//                 p-3 rounded-lg border-2 transition-all duration-200 text-left
//                 ${
//                   status === "auto-entrepreneur"
//                     ? "border-red-500 bg-red-50"
//                     : "border-gray-200 hover:border-gray-300"
//                 }
//               `}
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h4 className="text-sm font-bold text-gray-900">Auto-entrepreneur</h4>
//                   <p className="text-gray-600 text-xs">Statut micro-entreprise</p>
//                 </div>
//                 {status === "auto-entrepreneur" && (
//                   <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
//                     <span className="text-white text-xs">✓</span>
//                   </div>
//                 )}
//               </div>
//             </button>

//             <button
//               type="button"
//               onClick={() => onSetStatus("societe")}
//               className={`
//                 p-3 rounded-lg border-2 transition-all duration-200 text-left
//                 ${
//                   status === "societe"
//                     ? "border-red-500 bg-red-50"
//                     : "border-gray-200 hover:border-gray-300"
//                 }
//               `}
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h4 className="text-sm font-bold text-gray-900">Société</h4>
//                   <p className="text-gray-600 text-xs">SAS, SARL, EURL, etc.</p>
//                 </div>
//                 {status === "societe" && (
//                   <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
//                     <span className="text-white text-xs">✓</span>
//                   </div>
//                 )}
//               </div>
//             </button>

//             <button
//               type="button"
//               onClick={() => onSetStatus("individuel")}
//               className={`
//                 p-3 rounded-lg border-2 transition-all duration-200 text-left
//                 ${
//                   status === "individuel"
//                     ? "border-red-500 bg-red-50"
//                     : "border-gray-200 hover:border-gray-300"
//                 }
//               `}
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h4 className="text-sm font-bold text-gray-900">Individuel</h4>
//                   <p className="text-gray-600 text-xs">Sans structure</p>
//                 </div>
//                 {status === "individuel" && (
//                   <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
//                     <span className="text-white text-xs">✓</span>
//                   </div>
//                 )}
//               </div>
//             </button>
//           </div>
//         </div>

//         {(status === "auto-entrepreneur" || status === "societe") && (
//           <div>
//             <label className="block text-sm font-semibold text-gray-900 mb-2">
//               Numéro SIRET <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               value={siret}
//               onChange={(e) => {
//                 const value = e.target.value.replace(/\D/g, "");
//                 if (value.length <= 14) onSetSiret(value);
//               }}
//               className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-sm"
//               placeholder="12345678901234"
//               required
//               aria-label="Numéro SIRET"
//             />
//             <p className="text-xs text-gray-500 mt-1">
//               14 chiffres - Visible sur votre extrait Kbis
//             </p>
//           </div>
//         )}

//         {status === "individuel" && (
//           <div>
//             <label className="block text-sm font-semibold text-gray-900 mb-2">
//               Pièce d&apos;identité <span className="text-red-500">*</span>
//             </label>
//             <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-red-300 transition-colors">
//               <input
//                 type="file"
//                 id="id-file"
//                 className="hidden"
//                 accept=".jpg,.jpeg,.png,.pdf"
//                 onChange={handleFileChange}
//               />
//               <label
//                 htmlFor="id-file"
//                 className="cursor-pointer flex flex-col items-center"
//               >
//                 <Upload className="w-6 h-6 text-gray-400 mb-1" />
//                 <span className="text-sm text-gray-600">
//                   {idFile ? idFile.name : "Cliquez pour téléverser"}
//                 </span>
//                 <span className="text-xs text-gray-400 mt-1">
//                   JPG, PNG ou PDF - Max 5MB
//                 </span>
//               </label>
//             </div>
//           </div>
//         )}

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-semibold text-gray-900 mb-2">
//               Nom complet <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               value={fullName}
//               onChange={(e) => onSetFullName(e.target.value)}
//               className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-sm"
//               placeholder="Prénom Nom"
//               required
//               aria-label="Nom complet"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-gray-900 mb-2">
//               Pseudo / Nom créateur <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               value={creatorName}
//               onChange={(e) => onSetCreatorName(e.target.value)}
//               className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-sm"
//               placeholder="Votre nom de créateur"
//               required
//               aria-label="Nom de créateur"
//             />
//             <p className="text-xs text-gray-500 mt-1">
//               Utilisé pour la communication
//             </p>
//           </div>
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
//             className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center text-sm"
//           >
//             <span>Continuer</span>
//             <ChevronRight className="w-3.5 h-3.5 ml-1" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// interface CreatorProfileStepProps {
//   platform: string;
//   contentLink: string;
//   audienceSize: string;
//   theme: string;
//   onSetPlatform: (platform: string) => void;
//   onSetContentLink: (link: string) => void;
//   onSetAudienceSize: (size: string) => void;
//   onSetTheme: (theme: string) => void;
//   onPrev: () => void;
//   onNext: () => void;
// }

// function CreatorProfileStep({
//   platform,
//   contentLink,
//   audienceSize,
//   theme,
//   onSetPlatform,
//   onSetContentLink,
//   onSetAudienceSize,
//   onSetTheme,
//   onPrev,
//   onNext,
// }: CreatorProfileStepProps) {
//   const platforms = [
//     { id: "instagram", label: "Instagram" },
//     { id: "youtube", label: "YouTube" },
//     { id: "tiktok", label: "TikTok" },
//     { id: "podcast", label: "Podcast" },
//     { id: "blog", label: "Blog" },
//     { id: "autre", label: "Autre" }
//   ];

//   const audienceSizes = [
//     { id: "0-10k", label: "0 - 10k followers" },
//     { id: "10k-50k", label: "10k - 50k followers" },
//     { id: "50k-100k", label: "50k - 100k followers" },
//     { id: "100k-500k", label: "100k - 500k followers" },
//     { id: "500k+", label: "500k+ followers" }
//   ];

//   const themes = [
//     { id: "sante", label: "Santé" },
//     { id: "securite", label: "Sécurité" },
//     { id: "bien-etre", label: "Bien-être" },
//     { id: "famille", label: "Famille" },
//     { id: "voyage", label: "Voyage" },
//     { id: "sport", label: "Sport" },
//     { id: "autre", label: "Autre" }
//   ];

//   return (
//     <div className="py-2 animate-fadeIn">
//       <h3 className="text-lg font-bold text-gray-900 mb-4">
//         Étape 2 — Profil créateur
//       </h3>

//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2">
//             Plateforme principale
//           </label>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//             {platforms.map((p) => (
//               <button
//                 key={p.id}
//                 type="button"
//                 onClick={() => onSetPlatform(p.id)}
//                 className={`
//                   p-2.5 rounded-lg border-2 transition-all duration-200
//                   ${
//                     platform === p.id
//                       ? "border-red-500 bg-red-50"
//                       : "border-gray-200 hover:border-gray-300"
//                   }
//                 `}
//               >
//                 <div className="text-center">
//                   <div className={`text-sm font-medium ${
//                     platform === p.id ? "text-red-600" : "text-gray-700"
//                   }`}>
//                     {p.label}
//                   </div>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2">
//             Lien vers contenu <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="url"
//             value={contentLink}
//             onChange={(e) => onSetContentLink(e.target.value)}
//             className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-sm"
//             placeholder="https://..."
//             required
//             aria-label="Lien vers contenu"
//           />
//           <p className="text-xs text-gray-500 mt-1">
//             Utilisé pour l&apos;évaluation de votre profil
//           </p>
//         </div>

//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2">
//             Taille d&apos;audience <span className="text-red-500">*</span>
//           </label>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//             {audienceSizes.map((size) => (
//               <button
//                 key={size.id}
//                 type="button"
//                 onClick={() => onSetAudienceSize(size.id)}
//                 className={`
//                   p-3 rounded-lg border-2 transition-all duration-200 text-left
//                   ${
//                     audienceSize === size.id
//                       ? "border-red-500 bg-red-50"
//                       : "border-gray-200 hover:border-gray-300"
//                   }
//                 `}
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h4 className="text-sm font-bold text-gray-900">{size.label}</h4>
//                   </div>
//                   {audienceSize === size.id && (
//                     <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
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
//             Thématique principale <span className="text-red-500">*</span>
//           </label>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//             {themes.map((t) => (
//               <button
//                 key={t.id}
//                 type="button"
//                 onClick={() => onSetTheme(t.id)}
//                 className={`
//                   p-2.5 rounded-lg border-2 transition-all duration-200
//                   ${
//                     theme === t.id
//                       ? "border-red-500 bg-red-50"
//                       : "border-gray-200 hover:border-gray-300"
//                   }
//                 `}
//               >
//                 <div className="text-center">
//                   <div className={`text-sm font-medium ${
//                     theme === t.id ? "text-red-600" : "text-gray-700"
//                   }`}>
//                     {t.label}
//                   </div>
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
//             className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center text-sm"
//           >
//             <span>Continuer</span>
//             <ChevronRight className="w-3.5 h-3.5 ml-1" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// interface PaymentValidationStepProps {
//   email: string;
//   phone: string;
//   iban: string;
//   acceptTerms: boolean;
//   onSetEmail: (email: string) => void;
//   onSetPhone: (phone: string) => void;
//   onSetIban: (iban: string) => void;
//   onSetAcceptTerms: (accept: boolean) => void;
//   onPrev: () => void;
//   onSubmit: () => void;
// }

// function PaymentValidationStep({
//   email,
//   phone,
//   iban,
//   acceptTerms,
//   onSetEmail,
//   onSetPhone,
//   onSetIban,
//   onSetAcceptTerms,
//   onPrev,
//   onSubmit,
// }: PaymentValidationStepProps) {
//   return (
//     <div className="py-2 animate-fadeIn">
//       <h3 className="text-lg font-bold text-gray-900 mb-4">
//         Étape 3 — Informations paiement et validation
//       </h3>

//       <div className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-semibold text-gray-900 mb-2">
//               Email <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => onSetEmail(e.target.value)}
//               className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-sm"
//               placeholder="votre@email.com"
//               required
//               aria-label="Email"
//             />
//             <p className="text-xs text-gray-500 mt-1">
//               Pour l&apos;accès à votre espace partenaire
//             </p>
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-gray-900 mb-2">
//               Téléphone
//             </label>
//             <input
//               type="tel"
//               value={phone}
//               onChange={(e) => onSetPhone(e.target.value)}
//               className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-sm"
//               placeholder="+33 1 23 45 67 89"
//               aria-label="Téléphone"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-semibold text-gray-900 mb-2">
//             IBAN <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             value={iban}
//             onChange={(e) => {
//               const value = e.target.value.replace(/\s/g, "").toUpperCase();
//               if (value.length <= 34) onSetIban(value);
//             }}
//             className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-sm font-mono"
//             placeholder="FR76 1234 5123 4512 3456 7890 123"
//             required
//             aria-label="IBAN"
//           />
//           <p className="text-xs text-gray-500 mt-1">
//             Pour le versement des commissions
//           </p>
//         </div>

//         <div className="border-t border-gray-200 pt-4">
//           <div className="flex items-start space-x-2">
//             <input
//               type="checkbox"
//               id="accept-terms"
//               checked={acceptTerms}
//               onChange={(e) => onSetAcceptTerms(e.target.checked)}
//               className="mt-0.5 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
//               required
//             />
//             <label htmlFor="accept-terms" className="text-xs text-gray-700">
//               J&apos;accepte les{" "}
//               <button type="button" className="text-red-600 hover:text-red-700 font-medium">
//                 Conditions Générales du Programme Ambassadeur
//               </button>{" "}
//               et confirme avoir pris connaissance des modalités de partenariat,
//               notamment concernant les commissions et les obligations réciproques.
//               <span className="text-red-500"> *</span>
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
//                   ? "bg-red-600 hover:bg-red-700 text-white"
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

//       <h3 className="text-lg font-bold text-gray-900 mb-3">
//         Demande envoyée !
//       </h3>

//       <p className="text-gray-600 text-sm mb-4 max-w-md">
//         Votre candidature au Programme Ambassadeur bipSOS™ a été soumise avec succès.
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
//               En attente de vérification
//             </span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-gray-600 text-xs">Délai :</span>
//             <span className="font-semibold text-xs">
//               24-72 heures
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="space-y-2 max-w-md mb-4">
//         <div className="flex items-start">
//           <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
//             <span className="text-red-600 text-xs">1</span>
//           </div>
//           <p className="text-gray-600 text-xs text-left">
//             Vous recevrez un email de confirmation avec vos identifiants
//           </p>
//         </div>
//         <div className="flex items-start">
//           <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
//             <span className="text-red-600 text-xs">2</span>
//           </div>
//           <p className="text-gray-600 text-xs text-left">
//             Notre équipe vérifie votre identité sous 24-72h
//           </p>
//         </div>
//         <div className="flex items-start">
//           <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
//             <span className="text-red-600 text-xs">3</span>
//           </div>
//           <p className="text-gray-600 text-xs text-left">
//             Accès à votre espace partenaire et à vos liens de parrainage
//           </p>
//         </div>
//       </div>

//       <div className="animate-pulse mb-4">
//         <p className="text-gray-500 text-xs mb-2">
//           Vérification en cours...
//         </p>
//         <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
//           <div className="h-full bg-red-500 animate-[loading_2s_ease-in-out_infinite]"></div>
//         </div>
//       </div>

//       <button
//         type="button"
//         onClick={onClose}
//         className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm"
//       >
//         Retourner au site
//       </button>
//     </div>
//   );
// }

// export default function InscriptionAmbass({
//   onClose
// }: {
//   onClose: () => void
// }) {
//   const [step, setStep] = useState<
//     "identification" | "creator-profile" | "payment-validation" | "confirmation"
//   >("identification");

//   const [status, setStatus] = useState<"auto-entrepreneur" | "societe" | "individuel">("auto-entrepreneur");
//   const [siret, setSiret] = useState("");
//   const [idFile, setIdFile] = useState<File | null>(null);
//   const [fullName, setFullName] = useState("");
//   const [creatorName, setCreatorName] = useState("");

//   const [platform, setPlatform] = useState("");
//   const [contentLink, setContentLink] = useState("");
//   const [audienceSize, setAudienceSize] = useState("");
//   const [theme, setTheme] = useState("");

//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [iban, setIban] = useState("");
//   const [acceptTerms, setAcceptTerms] = useState(false);

//   const [applicationId] = useState(() => {
//     const timestamp = Date.now();
//     const randomPart = Math.floor(Math.random() * 1000);
//     return `AMB-${timestamp.toString(36).toUpperCase()}-${randomPart}`;
//   });

//   const steps = useMemo(
//     () => [
//       { id: "identification", label: "Identification", icon: User },
//       { id: "creator-profile", label: "Profil", icon: Users },
//       { id: "payment-validation", label: "Paiement", icon: CreditCard },
//       { id: "confirmation", label: "Confirmation", icon: CheckCircle },
//     ],
//     []
//   );

//   const currentStepIndex = steps.findIndex((s) => s.id === step);

//   const handleNextStep = useCallback(() => {
//     if (step === "identification") setStep("creator-profile");
//     else if (step === "creator-profile") setStep("payment-validation");
//   }, [step]);

//   const handlePrevStep = useCallback(() => {
//     if (step === "creator-profile") setStep("identification");
//     else if (step === "payment-validation") setStep("creator-profile");
//   }, [step]);

//   const handleSubmit = useCallback(() => {
//     console.log("Candidature soumise:", {
//       status,
//       siret,
//       idFile,
//       fullName,
//       creatorName,
//       platform,
//       contentLink,
//       audienceSize,
//       theme,
//       email,
//       phone,
//       iban,
//       acceptTerms,
//       applicationId,
//     });

//     setStep("confirmation");
//   }, [
//     status,
//     siret,
//     idFile,
//     fullName,
//     creatorName,
//     platform,
//     contentLink,
//     audienceSize,
//     theme,
//     email,
//     phone,
//     iban,
//     acceptTerms,
//     applicationId,
//   ]);

//   const renderStep = () => {
//     switch (step) {
//       case "identification":
//         return (
//           <IdentificationStep
//             status={status}
//             siret={siret}
//             idFile={idFile}
//             fullName={fullName}
//             creatorName={creatorName}
//             onSetStatus={setStatus}
//             onSetSiret={setSiret}
//             onSetIdFile={setIdFile}
//             onSetFullName={setFullName}
//             onSetCreatorName={setCreatorName}
//             onNext={handleNextStep}
//             onClose={onClose}
//           />
//         );
//       case "creator-profile":
//         return (
//           <CreatorProfileStep
//             platform={platform}
//             contentLink={contentLink}
//             audienceSize={audienceSize}
//             theme={theme}
//             onSetPlatform={setPlatform}
//             onSetContentLink={setContentLink}
//             onSetAudienceSize={setAudienceSize}
//             onSetTheme={setTheme}
//             onPrev={handlePrevStep}
//             onNext={handleNextStep}
//           />
//         );
//       case "payment-validation":
//         return (
//           <PaymentValidationStep
//             email={email}
//             phone={phone}
//             iban={iban}
//             acceptTerms={acceptTerms}
//             onSetEmail={setEmail}
//             onSetPhone={setPhone}
//             onSetIban={setIban}
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
//     <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
//       <div className="min-h-screen">
//         <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6">
//             <div className="flex justify-between items-center py-2">
//               <h1 className="text-base font-bold text-gray-900">
//                 Programme Ambassadeur bipSOS™
//               </h1>
//               <button
//                 onClick={onClose}
//                 className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
//                 aria-label="Fermer"
//                 type="button"
//               >
//                 <X className="w-4 h-4" />
//               </button>
//             </div>

//             <div className="pb-5 mt-10">
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
//                             ? "bg-red-500 text-white scale-110 shadow-sm"
//                             : currentStepIndex > index
//                             ? "bg-red-100 text-red-600 cursor-pointer hover:bg-red-200"
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
//                           ? "text-red-600 font-semibold"
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

//         <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
//           {renderStep()}
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useState, ChangeEvent, FormEvent } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle } from "@fortawesome/free-solid-svg-icons";
// import CGULinks from './CGULinks';
// import { X } from "lucide-react";

// type FormData = {
//   civilite: string;
//   prenom: string;
//   nom: string;
//   email: string;
//   telephone: string;
//   fonction: string;

//   nomCreateur: string;
//   pseudoPublic: string;

//   typeStructure: string;
//   raisonSociale: string;
//   siret: string;
//   numeroPro: string;
//   adresse: string;
//   codePostal: string;
//   ville: string;

//   plateformes: string[];
//   lienProfil: string;
//   followers: string;
//   thematiques: string[];

//   acceptCGU: boolean;
//   acceptNewsletter: boolean;
// };

// const plateformesOptions = ["Instagram", "YouTube", "TikTok", "Podcast", "Blog", "Autre"];
// const thematiquesOptions = ["Santé / Bien-être", "Famille / Parentalité", "Voyage / Aventure", "Sport / Outdoor", "Autre"];

// export default function InscriptionAmbass() {
//   const [formData, setFormData] = useState<FormData>({
//     civilite: '',
//     prenom: '',
//     nom: '',
//     email: '',
//     telephone: '',
//     fonction: '',
//     nomCreateur: '',
//     pseudoPublic: '',
//     typeStructure: '',
//     raisonSociale: '',
//     siret: '',
//     numeroPro: '',
//     adresse: '',
//     codePostal: '',
//     ville: '',
//     plateformes: [],
//     lienProfil: '',
//     followers: '',
//     thematiques: [],
//     acceptCGU: false,
//     acceptNewsletter: false
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value, type } = e.target;
//     const target = e.target as HTMLInputElement;

//     if (type === 'checkbox') {
//       if (name === 'plateformes' || name === 'thematiques') {
//         const checked = target.checked;
//         const current = formData[name as 'plateformes' | 'thematiques'];
//         setFormData(prev => ({
//           ...prev,
//           [name]: checked ? [...current, value] : current.filter(v => v !== value)
//         }));
//       } else {
//         setFormData(prev => ({ ...prev, [name]: target.checked }));
//       }
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData(prev => ({ ...prev, civilite: e.target.value }));
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log('Inscription Ambassadeur soumise:', formData);
//     alert('Candidature Ambassadeur envoyée avec succès !');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-20">
//       <div className="max-w-3xl mx-auto px-4">
//         <div className="text-center mb-10">
//           <div className="relative text-center mb-10">
//             <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-purple-600 border border-purple-600 rounded-full bg-purple-600/10">
//               <FontAwesomeIcon icon={faCircle} className="text-purple-600 text-[6px]" />
//               AMBASSADEUR
//             </div>

//             <button
//               type="button"
//               onClick={() => window.location.href = "/ambassadeurs"}
//               className="absolute top-0 right-0 md:right-4 text-gray-500 hover:text-gray-700 transition"
//               aria-label="Retour"
//             >
//               <X className="w-8 h-8" />
//             </button>
//           </div>
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
//             Devenez Ambassadeur bipSOS
//           </h1>
//           <p className="text-m text-gray-600 mt-3 max-w-1xl mx-auto">
//             Rejoignez notre programme Ambassadeur et protégez votre communauté tout en développant vos revenus
//           </p>
//         </div>

//         <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
//           <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
//                 Vos coordonnées
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-1">
//                   <label className="block text-sm font-semibold text-gray-900">
//                     Civilité <span className="text-red-500">*</span>
//                   </label>
//                   <div className="flex gap-6">
//                     <label className="flex items-center">
//                       <input type="radio" name="civilite" value="M." checked={formData.civilite === 'M.'} onChange={handleRadioChange} className="w-4 h-4 text-purple-600" required />
//                       <span className="ml-2 text-gray-700">M.</span>
//                     </label>
//                     <label className="flex items-center">
//                       <input type="radio" name="civilite" value="Mme" checked={formData.civilite === 'Mme'} onChange={handleRadioChange} className="w-4 h-4 text-purple-600" required />
//                       <span className="ml-2 text-gray-700">Mme</span>
//                     </label>
//                   </div>
//                 </div>
//                 <div><label className="block text-sm font-semibold text-gray-900 mb-2">Prénom *</label><input type="text" name="prenom" value={formData.prenom} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base" required /></div>
//                 <div><label className="block text-sm font-semibold text-gray-900 mb-2">Nom *</label><input type="text" name="nom" value={formData.nom} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base" required /></div>
//                 <div><label className="block text-sm font-semibold text-gray-900 mb-2">Email professionnel *</label><input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base" required /></div>
//                 <div><label className="block text-sm font-semibold text-gray-900 mb-2">Téléphone *</label><input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base" required /></div>
//                 <div><label className="block text-sm font-semibold text-gray-900 mb-2">Fonction / Activité *</label><input type="text" name="fonction" value={formData.fonction} onChange={handleChange} placeholder="Ex: Créateur de contenu, Influenceur..." className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base" required /></div>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
//                 Votre identité de créateur
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div><label className="block text-sm font-semibold text-gray-900 mb-2">Nom de créateur / Marque *</label><input type="text" name="nomCreateur" value={formData.nomCreateur} onChange={handleChange} placeholder="Ex: Alex Voyage, Healthy Mama..." className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base" required /></div>
//                 <div><label className="block text-sm font-semibold text-gray-900 mb-2">Pseudo public (facultatif)</label><input type="text" name="pseudoPublic" value={formData.pseudoPublic} onChange={handleChange} placeholder="Ex: @alexvoyage" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base" /></div>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
//                 Votre structure
//               </h2>
//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-3">Type de structure *</label>
//                   <select name="typeStructure" value={formData.typeStructure} onChange={handleChange} className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base bg-white" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: "right 1rem center", backgroundRepeat: "no-repeat", backgroundSize: "12px" }} required>
//                     <option value="">Sélectionner</option>
//                     <option value="independant">Indépendant / Auto-entrepreneur</option>
//                     <option value="sas">SAS / SASU</option>
//                     <option value="sarlu">SARL / EURL</option>
//                     <option value="association">Association</option>
//                     <option value="autre">Autre</option>
//                   </select>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div><label className="block text-sm font-semibold text-gray-900 mb-2">Raison sociale *</label><input type="text" name="raisonSociale" value={formData.raisonSociale} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base" required /></div>
//                   <div><label className="block text-sm font-semibold text-gray-900 mb-2">SIRET *</label><input type="text" name="siret" value={formData.siret} onChange={handleChange} maxLength={14} placeholder="14 chiffres" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base" required /></div>
//                   <div><label className="block text-sm font-semibold text-gray-900 mb-2">N° professionnel (facultatif)</label><input type="text" name="numeroPro" value={formData.numeroPro} onChange={handleChange} placeholder="Ex: ORIAS, RNA..." className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base" /></div>
//                   <div><label className="block text-sm font-semibold text-gray-900 mb-2">Adresse *</label><input type="text" name="adresse" value={formData.adresse} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base" required /></div>
//                   <div><label className="block text-sm font-semibold text-gray-900 mb-2">Code postal *</label><input type="text" name="codePostal" value={formData.codePostal} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base" required /></div>
//                   <div><label className="block text-sm font-semibold text-gray-900 mb-2">Ville *</label><input type="text" name="ville" value={formData.ville} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base" required /></div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
//                 Votre présence digitale
//               </h2>
//               <div className="space-y-8">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-3">Plateformes utilisées * (plusieurs choix possibles)</label>
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                     {plateformesOptions.map(p => (
//                       <label key={p} className="flex items-center space-x-3 cursor-pointer">
//                         <input type="checkbox" name="plateformes" value={p} checked={formData.plateformes.includes(p)} onChange={handleChange} className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500" />
//                         <span className="text-gray-700">{p}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">Lien vers votre profil principal *</label>
//                   <input type="url" name="lienProfil" value={formData.lienProfil} onChange={handleChange} placeholder="https://instagram.com/votreprofil" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base" required />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-3">Nombre total de followers *</label>
//                   <select name="followers" value={formData.followers} onChange={handleChange} className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base bg-white" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: "right 1rem center", backgroundRepeat: "no-repeat", backgroundSize: "12px" }} required>
//                     <option value="">Sélectionner</option>
//                     <option value="moins-10k">Moins de 10 000</option>
//                     <option value="10k-50k">10 000 à 50 000</option>
//                     <option value="50k-100k">50 000 à 100 000</option>
//                     <option value="plus-100k">Plus de 100 000</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-3">Thématiques principales * (plusieurs choix possibles)</label>
//                   <div className="space-y-3">
//                     {thematiquesOptions.map(t => (
//                       <label key={t} className="flex items-center space-x-3 cursor-pointer">
//                         <input type="checkbox" name="thematiques" value={t} checked={formData.thematiques.includes(t)} onChange={handleChange} className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500" />
//                         <span className="text-gray-700">{t}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="pt-6 space-y-6 border-t border-gray-200">
//               <div className="flex items-start">
//                 <input type="checkbox" id="acceptCGU" name="acceptCGU" checked={formData.acceptCGU} onChange={handleChange} className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500 mt-0.5" required />
//                 <label htmlFor="acceptCGU" className="ml-4 text-sm text-gray-700 leading-relaxed cursor-pointer">
//                   <CGULinks />
//                 </label>
//               </div>
//               <div className="flex items-start">
//                 <input type="checkbox" id="acceptNewsletter" name="acceptNewsletter" checked={formData.acceptNewsletter} onChange={handleChange} className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500 mt-0.5" />
//                 <label htmlFor="acceptNewsletter" className="ml-4 text-sm text-gray-700 leading-relaxed">
//                   J’accepte de recevoir des informations sur les offres bipSOS
//                 </label>
//               </div>
//             </div>

//             <div className="text-center pt-8">
//               <button type="submit" className="px-12 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
//                 Envoyer ma candidature
//               </button>
//             </div>
//             <p className="text-center text-xs text-gray-500 mt-6">
//               Votre demande sera étudiée sous 48 heures ouvrées
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, ChangeEvent, FormEvent } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle } from "@fortawesome/free-solid-svg-icons";
// import CGULinks from "./CGULinks";
// import { X } from "lucide-react";

// type FormData = {
//   civilite: string;
//   prenom: string;
//   nom: string;
//   email: string;
//   telephone: string;
//   fonction: string;

//   nomCreateur: string;
//   pseudoPublic: string;

//   typeStructure: string;
//   raisonSociale: string;
//   siret: string;
//   numeroPro: string;
//   adresse: string;
//   codePostal: string;
//   ville: string;

//   plateformes: string[];
//   lienProfil: string;
//   followers: string;
//   thematiques: string[];

//   acceptCGU: boolean;
//   acceptNewsletter: boolean;
// };

// const plateformesOptions = [
//   "Instagram",
//   "YouTube",
//   "TikTok",
//   "Podcast",
//   "Blog",
//   "Facebook",
//   "Snapchat",
//   "Pinterest",
//   "Autre",
// ];
// const thematiquesOptions = [
//   "Santé / Bien-être",
//   "Famille / Parentalité",
//   "Voyage / Aventure",
//   "Sport / Outdoor",
//   "Autre",
// ];

// export default function InscriptionAmbass() {
//   const [formData, setFormData] = useState<FormData>({
//     civilite: "",
//     prenom: "",
//     nom: "",
//     email: "",
//     telephone: "",
//     fonction: "",
//     nomCreateur: "",
//     pseudoPublic: "",
//     typeStructure: "",
//     raisonSociale: "",
//     siret: "",
//     numeroPro: "",
//     adresse: "",
//     codePostal: "",
//     ville: "",
//     plateformes: [],
//     lienProfil: "",
//     followers: "",
//     thematiques: [],
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

//     if (type === "checkbox") {
//       if (name === "plateformes" || name === "thematiques") {
//         const checked = target.checked;
//         const current = formData[name as "plateformes" | "thematiques"];
//         setFormData((prev) => ({
//           ...prev,
//           [name]: checked
//             ? [...current, value]
//             : current.filter((v) => v !== value),
//         }));
//       } else {
//         setFormData((prev) => ({ ...prev, [name]: target.checked }));
//       }
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData((prev) => ({ ...prev, civilite: e.target.value }));
//   };

//   const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.bipsos.com";

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const cleanSiret = formData.siret.trim();
//     const finalSiret = cleanSiret.length === 14 ? cleanSiret : null;

//     if (cleanSiret && cleanSiret.length > 0 && cleanSiret.length !== 14) {
//       setError("Le SIRET doit contenir 14 chiffres ou être laissé vide");
//       setLoading(false);
//       return;
//     }

//     // Mapping parfait avec ta validation Laravel
//     const payload = {
//       type: "EMBASSADOR", // valeur fixe pour les ambassadeurs
//       status: "PENDING",
//       civility: formData.civilite,
//       first_name: formData.prenom,
//       last_name: formData.nom,
//       email: formData.email,
//       phone: formData.telephone,
//       function: formData.fonction,
//       company_name: formData.raisonSociale,
//       //activity: formData.typeStructure,      // indépendant, sas, etc.
//       //siret: formData.siret || null,
//       siret: finalSiret,
//       profesional_number: formData.numeroPro || null,
//       address: formData.adresse,
//       postcode: formData.codePostal,
//       city: formData.ville,

//       // Champs spécifiques ambassadeur
//       public_name: formData.nomCreateur,
//       public_username: formData.pseudoPublic || null,
//       platforms: formData.plateformes.map((name) => ({
//         name: name,
//         link: "",
//       })),
//       stats: [
//         { label: "profile", value: formData.lienProfil },
//         { label: "followers", value: formData.followers },
//         ...formData.thematiques.map((t) => ({
//           label: "thematics",
//           value: t,
//         })),
//       ],

//       // Champs preorder (obligatoires dans ta request)
//       subscription: "gardian", // valeur par défaut, tu peux ajouter un champ plus tard
//       quantity: 10, // valeur par défaut pour un ambassadeur
//       capacity: null, // non pertinent ici
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
//       setError(
//         "Impossible de contacter le serveur. Vérifiez votre connexion internet."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Écran de succès
//   if (success) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
//         <div className="text-center max-w-md">
//           <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
//             <svg
//               className="w-12 h-12 text-purple-600"
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
//             Merci pour votre candidature Influenceur bipSOS !<br />
//             Nous étudions votre profil et revenons vers vous sous 48 heures.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-20">
//       <div className="max-w-3xl mx-auto px-4">
//         <div className="text-center mb-10">
//           <div className="relative text-center mb-10">
//             <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-purple-600 border border-purple-600 rounded-full bg-purple-600/10">
//               <FontAwesomeIcon
//                 icon={faCircle}
//                 className="text-purple-600 text-[6px]"
//               />
//               INFLUENCEUR
//             </div>

//             <button
//               type="button"
//               onClick={() => (window.location.href = "/ambassadeurs")}
//               className="absolute top-0 right-0 md:right-4 text-gray-500 hover:text-gray-700 transition"
//               aria-label="Retour"
//             >
//               <X className="w-8 h-8" />
//             </button>
//           </div>
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
//             Rejoignez le programme Influenceur
//           </h1>
//           <p className="text-m text-gray-600 mt-3 max-w-1xl mx-auto">
//             Protégez vos followers et développez vos revenus
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
//                     Civilité <span className="text-red-500">*</span>
//                   </label>
//                   <div className="flex gap-6">
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         name="civilite"
//                         value="M."
//                         checked={formData.civilite === "M."}
//                         onChange={handleRadioChange}
//                         className="w-4 h-4 text-purple-600"
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
//                         className="w-4 h-4 text-purple-600"
//                         required
//                       />
//                       <span className="ml-2 text-gray-700">Mme</span>
//                     </label>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Prénom *
//                   </label>
//                   <input
//                     type="text"
//                     name="prenom"
//                     value={formData.prenom}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base text-gray-900"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Nom *
//                   </label>
//                   <input
//                     type="text"
//                     name="nom"
//                     value={formData.nom}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base text-gray-900"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Email professionnel *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base text-gray-900"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Téléphone *
//                   </label>
//                   <input
//                     type="tel"
//                     name="telephone"
//                     value={formData.telephone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base text-gray-900"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Fonction / Activité *
//                   </label>
//                   <input
//                     type="text"
//                     name="fonction"
//                     value={formData.fonction}
//                     onChange={handleChange}
//                     placeholder="Ex: Créateur de contenu, Influenceur..."
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base text-gray-900 placeholder-gray-400"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8">
//                 Votre identité de créateur
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Nom de créateur / Marque *
//                   </label>
//                   <input
//                     type="text"
//                     name="nomCreateur"
//                     value={formData.nomCreateur}
//                     onChange={handleChange}
//                     placeholder="Ex: Alex Voyage, Healthy Mama..."
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base text-gray-900 placeholder-gray-400"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Pseudo public (facultatif)
//                   </label>
//                   <input
//                     type="text"
//                     name="pseudoPublic"
//                     value={formData.pseudoPublic}
//                     onChange={handleChange}
//                     placeholder="Ex: @alexvoyage"
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base text-gray-900 placeholder-gray-400"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8">
//                 Votre structure
//               </h2>
//               <div className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Raison sociale *
//                     </label>
//                     <input
//                       type="text"
//                       name="raisonSociale"
//                       value={formData.raisonSociale}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base text-gray-900"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       SIRET *
//                     </label>
//                     <input
//                       type="text"
//                       name="siret"
//                       value={formData.siret}
//                       onChange={handleChange}
//                       maxLength={14}
//                       placeholder="14 chiffres"
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base text-gray-900 placeholder-gray-400"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       N° professionnel (facultatif)
//                     </label>
//                     <input
//                       type="text"
//                       name="numeroPro"
//                       value={formData.numeroPro}
//                       onChange={handleChange}
//                       placeholder="Ex: ORIAS, RNA..."
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base text-gray-900 placeholder-gray-400"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Adresse *
//                     </label>
//                     <input
//                       type="text"
//                       name="adresse"
//                       value={formData.adresse}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base text-gray-900"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Code postal *
//                     </label>
//                     <input
//                       type="text"
//                       name="codePostal"
//                       value={formData.codePostal}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base text-gray-900"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Ville *
//                     </label>
//                     <input
//                       type="text"
//                       name="ville"
//                       value={formData.ville}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base text-gray-900"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8">
//                 Votre présence digitale
//               </h2>
//               <div className="space-y-8">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-3">
//                     Plateformes utilisées * (plusieurs choix possibles)
//                   </label>
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                     {plateformesOptions.map((p) => (
//                       <label
//                         key={p}
//                         className="flex items-center space-x-3 cursor-pointer"
//                       >
//                         <input
//                           type="checkbox"
//                           name="plateformes"
//                           value={p}
//                           checked={formData.plateformes.includes(p)}
//                           onChange={handleChange}
//                           className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
//                         />
//                         <span className="text-gray-700">{p}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Lien vers votre profil principal *
//                   </label>
//                   <input
//                     type="url"
//                     name="lienProfil"
//                     value={formData.lienProfil}
//                     onChange={handleChange}
//                     placeholder="https://instagram.com/votreprofil"
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base text-gray-900 placeholder-gray-400"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-3">
//                     Nombre total de followers *
//                   </label>
//                   <select
//                     name="followers"
//                     value={formData.followers}
//                     onChange={handleChange}
//                     className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition text-base text-gray-900 bg-white"
//                     style={{
//                       backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
//                       backgroundPosition: "right 1rem center",
//                       backgroundRepeat: "no-repeat",
//                       backgroundSize: "12px",
//                     }}
//                     required
//                   >
//                     <option value="" className="text-gray-400">
//                       Sélectionner
//                     </option>
//                     <option value="moins-10k" className="text-gray-900">
//                       Moins de 10 000
//                     </option>
//                     <option value="10k-50k" className="text-gray-900">
//                       10 000 à 50 000
//                     </option>
//                     <option value="50k-100k" className="text-gray-900">
//                       50 000 à 100 000
//                     </option>
//                     <option value="plus-100k" className="text-gray-900">
//                       Plus de 100 000
//                     </option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-3">
//                     Thématiques principales * (plusieurs choix possibles)
//                   </label>
//                   <div className="space-y-3">
//                     {thematiquesOptions.map((t) => (
//                       <label
//                         key={t}
//                         className="flex items-center space-x-3 cursor-pointer"
//                       >
//                         <input
//                           type="checkbox"
//                           name="thematiques"
//                           value={t}
//                           checked={formData.thematiques.includes(t)}
//                           onChange={handleChange}
//                           className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
//                         />
//                         <span className="text-gray-700">{t}</span>
//                       </label>
//                     ))}
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
//                   className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500 mt-0.5"
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
//                   className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500 mt-0.5"
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
//                     : "bg-purple-600 hover:bg-purple-700 text-white"
//                 }`}
//               >
//                 {loading ? "Envoi en cours..." : "Envoyer ma candidature"}
//               </button>
//             </div>

//             <p className="text-center text-xs text-gray-500 mt-6">
//               Votre demande sera étudiée sous 48 heures ouvrées
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { X } from "lucide-react";
import CGULinks from "./CGULinks";

type FormData = {
  civilite: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  fonction: string;
  nomCreateur: string;
  pseudoPublic: string;
  typeStructure: string;
  raisonSociale: string;
  siret: string;
  numeroPro: string;
  adresse: string;
  codePostal: string;
  ville: string;
  plateformes: string[];
  lienProfil: string;
  followers: string;
  thematiques: string[];
  acceptCGU: boolean;
  acceptNewsletter: boolean;
};

const plateformesOptions = ["Instagram", "YouTube", "TikTok", "Podcast", "Blog", "Facebook", "Snapchat", "Pinterest", "Autre"];
const thematiquesOptions = ["Santé / Bien-être", "Famille / Parentalité", "Voyage / Aventure", "Sport / Outdoor", "Autre"];

export default function InscriptionAmbass() {
  const [formData, setFormData] = useState<FormData>({
    civilite: "", prenom: "", nom: "", email: "", telephone: "", fonction: "",
    nomCreateur: "", pseudoPublic: "", typeStructure: "", raisonSociale: "", siret: "",
    numeroPro: "", adresse: "", codePostal: "", ville: "",
    plateformes: [], lienProfil: "", followers: "", thematiques: [],
    acceptCGU: false, acceptNewsletter: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement;

    if (type === "checkbox") {
      if (name === "plateformes" || name === "thematiques") {
        const checked = target.checked;
        const current = formData[name as "plateformes" | "thematiques"];
        setFormData(prev => ({
          ...prev,
          [name]: checked ? [...current, value] : current.filter(v => v !== value),
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: target.checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, civilite: e.target.value }));
  };

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.bipsos.com";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const cleanSiret = formData.siret.trim();
    const finalSiret = cleanSiret.length === 14 ? cleanSiret : null;

    if (cleanSiret && cleanSiret.length > 0 && cleanSiret.length !== 14) {
      setError("Le SIRET doit contenir 14 chiffres ou être laissé vide");
      setLoading(false);
      return;
    }

    const payload = {
      type: "EMBASSADOR",
      status: "PENDING",
      civility: formData.civilite,
      first_name: formData.prenom,
      last_name: formData.nom,
      email: formData.email,
      phone: formData.telephone,
      function: formData.fonction,
      company_name: formData.raisonSociale,
      siret: finalSiret,
      profesional_number: formData.numeroPro || null,
      address: formData.adresse,
      postcode: formData.codePostal,
      city: formData.ville,
      public_name: formData.nomCreateur,
      public_username: formData.pseudoPublic || null,
      platforms: formData.plateformes.map(name => ({ name, link: "" })),
      stats: [
        { label: "profile", value: formData.lienProfil },
        { label: "followers", value: formData.followers },
        ...formData.thematiques.map(t => ({ label: "thematics", value: t })),
      ],
      subscription: "gardian",
      quantity: 10,
      capacity: null,
    };

    try {
      const res = await fetch(`${apiUrl}/profesionals/preorder/store`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
        const errors = data.errors ? Object.values(data.errors).flat().join(", ") : data.message || "Une erreur est survenue.";
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
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Candidature envoyée !</h2>
          <p className="text-gray-600">
            Merci pour votre candidature Influenceur bipSOS !<br />
            Nous étudions votre profil et revenons vers vous sous 48 heures.
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
            onClick={() => (window.location.href = "/ambassadeurs")}
            className="absolute top-1 right-0 text-gray-500 hover:text-gray-700"
          >
            <X className="w-7 h-7" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-purple-600 border border-purple-600 rounded-full bg-purple-600/10">
            <FontAwesomeIcon icon={faCircle} className="text-purple-600 text-[6px]" />
            INFLUENCEUR
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">
            Rejoignez le programme Influenceur
          </h1>
          <p className="text-sm text-gray-600 mt-2 max-w-xl mx-auto">
            Protégez vos followers et développez vos revenus
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit} className="p-5 md:p-8 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Vos coordonnées</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Civilité <span className="text-red-500">*</span></label>
                  <div className="flex gap-6">
                    <label className="flex items-center text-sm"><input type="radio" name="civilite" value="M." checked={formData.civilite === "M."} onChange={handleRadioChange} className="text-purple-600" required /><span className="ml-1">M.</span></label>
                    <label className="flex items-center text-sm"><input type="radio" name="civilite" value="Mme" checked={formData.civilite === "Mme"} onChange={handleRadioChange} className="text-purple-600" required /><span className="ml-1">Mme</span></label>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Prénom <span className="text-red-500">*</span></label>
                  <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-purple-500 text-sm" required />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Nom <span className="text-red-500">*</span></label>
                  <input type="text" name="nom" value={formData.nom} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-purple-500 text-sm" required />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Email <span className="text-red-500">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-purple-500 text-sm" required />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Téléphone <span className="text-red-500">*</span></label>
                  <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-purple-500 text-sm" required />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Activité <span className="text-red-500">*</span></label>
                  <input type="text" name="fonction" value={formData.fonction} onChange={handleChange} placeholder="Ex: Influenceur" className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-purple-500 text-sm" required />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Identité de créateur</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Nom / Marque <span className="text-red-500">*</span></label>
                  <input type="text" name="nomCreateur" value={formData.nomCreateur} onChange={handleChange} placeholder="Ex: Healthy Mama" className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-purple-500 text-sm" required />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Pseudo (facultatif)</label>
                  <input type="text" name="pseudoPublic" value={formData.pseudoPublic} onChange={handleChange} placeholder="Ex: @healthy_mama" className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-purple-500 text-sm" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Votre structure</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-3 space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Raison sociale <span className="text-red-500">*</span></label>
                  <input type="text" name="raisonSociale" value={formData.raisonSociale} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-purple-500 text-sm" required />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">SIRET <span className="text-red-500">*</span></label>
                  <input type="text" name="siret" value={formData.siret} onChange={handleChange} maxLength={14} placeholder="14 chiffres" className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-purple-500 text-sm" required />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">N° pro (fac.)</label>
                  <input type="text" name="numeroPro" value={formData.numeroPro} onChange={handleChange} placeholder="Ex: RNA" className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-purple-500 text-sm" />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Adresse <span className="text-red-500">*</span></label>
                  <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-purple-500 text-sm" required />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Code postal <span className="text-red-500">*</span></label>
                  <input type="text" name="codePostal" value={formData.codePostal} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-purple-500 text-sm" required />
                </div>

                <div className="md:col-span-2 space-y-1">
                  <label className="text-xs font-semibold text-gray-900">Ville <span className="text-red-500">*</span></label>
                  <input type="text" name="ville" value={formData.ville} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-purple-500 text-sm" required />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Présence digitale</h2>
              <div className="space-y-5">
                <div>
                  <label className="text-xs font-semibold text-gray-900 mb-2 block">Plateformes <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {plateformesOptions.map(p => (
                      <label key={p} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="checkbox" name="plateformes" value={p} checked={formData.plateformes.includes(p)} onChange={handleChange} className="text-purple-600 rounded" />
                        <span>{p}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-900">Lien profil principal <span className="text-red-500">*</span></label>
                    <input type="url" name="lienProfil" value={formData.lienProfil} onChange={handleChange} placeholder="https://..." className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-purple-500 text-sm" required />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-900">Followers totaux <span className="text-red-500">*</span></label>
                    <select name="followers" value={formData.followers} onChange={handleChange} className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-purple-500 text-sm" required>
                      <option value="">Sélectionner</option>
                      <option value="moins-10k">Moins de 10k</option>
                      <option value="10k-50k">10k - 50k</option>
                      <option value="50k-100k">50k - 100k</option>
                      <option value="plus-100k">Plus de 100k</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-900 mb-2 block">Thématiques <span className="text-red-500">*</span></label>
                  <div className="space-y-2">
                    {thematiquesOptions.map(t => (
                      <label key={t} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="checkbox" name="thematiques" value={t} checked={formData.thematiques.includes(t)} onChange={handleChange} className="text-purple-600 rounded" />
                        <span>{t}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <input type="checkbox" id="acceptCGU" name="acceptCGU" checked={formData.acceptCGU} onChange={handleChange} className="w-4 h-4 text-purple-600 rounded mt-0.5" required />
                <label htmlFor="acceptCGU" className="text-gray-700 cursor-pointer"><CGULinks /></label>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <input type="checkbox" id="acceptNewsletter" name="acceptNewsletter" checked={formData.acceptNewsletter} onChange={handleChange} className="w-4 h-4 text-purple-600 rounded mt-0.5" />
                <label htmlFor="acceptNewsletter" className="text-gray-700">Recevoir les offres bipSOS</label>
              </div>

              {error && <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">{error}</div>}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading || !formData.acceptCGU}
                  className={`px-10 py-3.5 font-bold text-base rounded-lg shadow-md transition-all ${
                    loading || !formData.acceptCGU
                      ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                      : "bg-purple-600 hover:bg-purple-700 text-white hover:shadow-lg"
                  }`}
                >
                  {loading ? "Envoi..." : "Créez mon compte"}
                </button>
              </div>

              <p className="text-center text-xs text-gray-500">Votre demande sera étudiée sous 48 heures ouvrées</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}