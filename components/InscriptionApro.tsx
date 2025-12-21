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
//   typeStructure: string;
//   raisonSociale: string;
//   siretRNA: string;
//   numeroPro: string;
//   adresse: string;
//   codePostal: string;
//   ville: string;
//   descriptionReseau: string;
//   nombreBeneficiaires: string;
//   acceptCGU: boolean;
//   acceptNewsletter: boolean;
// };

// export default function InscriptionAmbassPro() {
//   const [formData, setFormData] = useState<FormData>({
//     civilite: "",
//     prenom: "",
//     nom: "",
//     email: "",
//     telephone: "",
//     fonction: "",
//     typeStructure: "",
//     raisonSociale: "",
//     siretRNA: "",
//     numeroPro: "",
//     adresse: "",
//     codePostal: "",
//     ville: "",
//     descriptionReseau: "",
//     nombreBeneficiaires: "",
//     acceptCGU: false,
//     acceptNewsletter: false,
//   });

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData((prev) => ({ ...prev, civilite: e.target.value }));
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Candidature Ambassadeur Pro soumise:", formData);
//     alert("Candidature Ambassadeur Pro envoyée avec succès !");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-16">
//       <div className="max-w-3xl mx-auto px-4 mt-10">
//         <div className="text-center mb-10">
//           <div className="relative text-center mb-10">
//             <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-pink-600 border border-pink-600 rounded-full bg-pink-600/10">
//               <FontAwesomeIcon
//                 icon={faCircle}
//                 className="text-pink-600 text-[6px]"
//               />
//               PRESCRIPTEUR
//             </div>

//             <button
//               type="button"
//               onClick={() => (window.location.href = "/ambassadeurpro")}
//               className="absolute top-0 right-0 md:right-4 text-gray-500 hover:text-gray-700 transition"
//               aria-label="Retour"
//             >
//               <X className="w-8 h-8" />
//             </button>
//           </div>
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
//             Rejoignez le programme Prescripteur
//           </h1>
//           <p className="text-sm text-gray-600 mt-3 max-w-1xl mx-auto">
//             Offrez une protection concrète à vos bénéficiaires
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
//                       <input
//                         type="radio"
//                         name="civilite"
//                         value="M."
//                         checked={formData.civilite === "M."}
//                         onChange={handleRadioChange}
//                         className="w-4 h-4 text-pink-600"
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
//                         className="w-4 h-4 text-pink-600"
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
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900"
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
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900"
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
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900"
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
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Fonction *
//                   </label>
//                   <input
//                     type="text"
//                     name="fonction"
//                     value={formData.fonction}
//                     onChange={handleChange}
//                     placeholder="Ex: Président, Secrétaire général, Directeur..."
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 placeholder-gray-400"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
//                 Votre structure
//               </h2>

//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-3">
//                     Type de structure <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name="typeStructure"
//                     value={formData.typeStructure}
//                     onChange={handleChange}
//                     className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 bg-white"
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
//                     <option value="association" className="text-gray-900">
//                       Association
//                     </option>
//                     <option value="federation" className="text-gray-900">
//                       Fédération
//                     </option>
//                     <option value="collectivite" className="text-gray-900">
//                       Collectivité territoriale
//                     </option>
//                     <option value="syndicat" className="text-gray-900">
//                       Syndicat
//                     </option>
//                   </select>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Raison sociale<span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="raisonSociale"
//                       value={formData.raisonSociale}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       SIRET ou RNA <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="siretRNA"
//                       value={formData.siretRNA}
//                       onChange={handleChange}
//                       placeholder="Ex: 123 456 789 00012 ou W751234567"
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 placeholder-gray-400"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       N° professionnel (si applicable)
//                     </label>
//                     <input
//                       type="text"
//                       name="numeroPro"
//                       value={formData.numeroPro}
//                       onChange={handleChange}
//                       placeholder="Ex: RNA, n° d'agrément..."
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 placeholder-gray-400"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Adresse officielle <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="adresse"
//                       value={formData.adresse}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Code postal <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="codePostal"
//                       value={formData.codePostal}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Ville <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="ville"
//                       value={formData.ville}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
//                 Votre réseau de bénéficiaires
//               </h2>

//               <div className="space-y-8">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-3">
//                     Description de votre réseau{" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     name="descriptionReseau"
//                     value={formData.descriptionReseau}
//                     onChange={handleChange}
//                     rows={5}
//                     placeholder="Décrivez votre public : nombre d'adhérents, salariés, membres, citoyens couverts, territoire d'action..."
//                     className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 placeholder-gray-400 resize-none"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-3">
//                     Nombre de bénéficiaires potentiels{" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name="nombreBeneficiaires"
//                     value={formData.nombreBeneficiaires}
//                     onChange={handleChange}
//                     className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 bg-white"
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
//                     <option value="moins-500" className="text-gray-900">
//                       Moins de 500
//                     </option>
//                     <option value="500-2000" className="text-gray-900">
//                       500 à 2 000
//                     </option>
//                     <option value="2000-10000" className="text-gray-900">
//                       2 000 à 10 000
//                     </option>
//                     <option value="10000-50000" className="text-gray-900">
//                       10 000 à 50 000
//                     </option>
//                     <option value="plus-50000" className="text-gray-900">
//                       Plus de 50 000
//                     </option>
//                   </select>
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
//                   className="w-5 h-5 text-pink-600 rounded border-gray-300 focus:ring-pink-500 mt-0.5"
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
//                   className="w-5 h-5 text-pink-600 rounded border-gray-300 focus:ring-pink-500 mt-0.5"
//                 />
//                 <label
//                   htmlFor="acceptNewsletter"
//                   className="ml-4 text-sm text-gray-700 leading-relaxed"
//                 >
//                   J’accepte de recevoir des informations sur les offres bipSOS
//                 </label>
//               </div>
//             </div>

//             <div className="text-center pt-8">
//               <button
//                 type="submit"
//                 className="px-12 py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
//               >
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

"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import CGULinks from "./CGULinks";
import { X } from "lucide-react";

type FormData = {
  civility: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  function: string;
  type_structure: string;
  company_name: string;
  siret: string;
  profesional_number: string;
  address: string;
  postcode: string;
  city: string;
  network_description: string;
  potential_beneficiaries: string;
  acceptCGU: boolean;
  acceptNewsletter: boolean;
};

const potentialBeneficiariesOptions = [
  { value: "moins-500", label: "Moins de 500" },
  { value: "500-2000", label: "500 à 2 000" },
  { value: "2000-10000", label: "2 000 à 10 000" },
  { value: "10000-50000", label: "10 000 à 50 000" },
  { value: "plus-50000", label: "Plus de 50 000" },
];

export default function InscriptionAmbassPro() {
  const [formData, setFormData] = useState<FormData>({
    civility: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    function: "",
    type_structure: "",
    company_name: "",
    siret: "",
    profesional_number: "",
    address: "",
    postcode: "",
    city: "",
    network_description: "",
    potential_beneficiaries: "",
    acceptCGU: false,
    acceptNewsletter: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, civility: e.target.value }));
  };

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://localhost:8000";

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
      type: "EMBASSADOR PRO",
      status: "PENDING",
      civility: formData.civility,
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      function: formData.function,
      type_structure: formData.type_structure,
      company_name: formData.company_name,
      siret: finalSiret,
      profesional_number: formData.profesional_number || null,
      address: formData.address,
      postcode: formData.postcode,
      city: formData.city,
      network_description: formData.network_description,
      potential_beneficiaries: formData.potential_beneficiaries,
      quantity: 10,
      subscription: 'Gardian',
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
      setError(
        "Impossible de contacter le serveur. Vérifiez votre connexion internet."
      );
    } finally {
      setLoading(false);
    }
  };

  // Écran de succès
  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Candidature envoyée !
          </h2>
          <p className="text-gray-600">
            Merci pour votre candidature Prescripteur bipSOS !<br />
            Nous étudions votre profil et revenons vers vous sous 48 heures.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 mt-10">
        <div className="text-center mb-10">
          <div className="relative text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-pink-600 border border-pink-600 rounded-full bg-pink-600/10">
              <FontAwesomeIcon
                icon={faCircle}
                className="text-pink-600 text-[6px]"
              />
              PRESCRIPTEUR
            </div>

            <button
              type="button"
              onClick={() => (window.location.href = "/ambassadeurpro")}
              className="absolute top-0 right-0 md:right-4 text-gray-500 hover:text-gray-700 transition"
              aria-label="Retour"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Rejoignez le programme Prescripteur
          </h1>
          <p className="text-sm text-gray-600 mt-3 max-w-1xl mx-auto">
            Offrez une protection concrète à vos bénéficiaires
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                Vos coordonnées
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-gray-900">
                    Civilité <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="civility"
                        value="M."
                        checked={formData.civility === "M."}
                        onChange={handleRadioChange}
                        className="w-4 h-4 text-pink-600"
                        required
                        disabled={loading}
                      />
                      <span className="ml-2 text-gray-700">M.</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="civility"
                        value="Mme"
                        checked={formData.civility === "Mme"}
                        onChange={handleRadioChange}
                        className="w-4 h-4 text-pink-600"
                        required
                        disabled={loading}
                      />
                      <span className="ml-2 text-gray-700">Mme</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Fonction *
                  </label>
                  <input
                    type="text"
                    name="function"
                    value={formData.function}
                    onChange={handleChange}
                    placeholder="Ex: Président, Secrétaire général, Directeur..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                    disabled={loading}
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                Votre structure
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Type de structure <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="type_structure"
                    value={formData.type_structure}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 1rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "12px",
                    }}
                    required
                    disabled={loading}
                  >
                    <option value="" className="text-gray-400">
                      Sélectionner
                    </option>
                    <option value="association" className="text-gray-900">
                      Association
                    </option>
                    <option value="federation" className="text-gray-900">
                      Fédération
                    </option>
                    <option value="collectivite" className="text-gray-900">
                      Collectivité territoriale
                    </option>
                    <option value="syndicat" className="text-gray-900">
                      Syndicat
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Raison sociale<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      SIRET ou RNA
                    </label>
                    <input
                      type="text"
                      name="siret"
                      value={formData.siret}
                      onChange={handleChange}
                      placeholder="Ex: 123 456 789 00012 ou W751234567"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={loading}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Laissez vide si non applicable
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      N° professionnel (si applicable)
                    </label>
                    <input
                      type="text"
                      name="profesional_number"
                      value={formData.profesional_number}
                      onChange={handleChange}
                      placeholder="Ex: RNA, n° d'agrément..."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Adresse officielle <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Code postal <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Ville <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                Votre réseau de bénéficiaires
              </h2>

              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Description de votre réseau{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="network_description"
                    value={formData.network_description}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Décrivez votre public : nombre d'adhérents, salariés, membres, citoyens couverts, territoire d'action..."
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 placeholder-gray-400 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Nombre de bénéficiaires potentiels{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="potential_beneficiaries"
                    value={formData.potential_beneficiaries}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-pink-600 focus:outline-none transition text-base text-gray-900 bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 1rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "12px",
                    }}
                    required
                    disabled={loading}
                  >
                    <option value="" className="text-gray-400">
                      Sélectionner
                    </option>
                    {potentialBeneficiariesOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="text-gray-900"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-6 border-t border-gray-200">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="acceptCGU"
                  name="acceptCGU"
                  checked={formData.acceptCGU}
                  onChange={handleChange}
                  className="w-5 h-5 text-pink-600 rounded border-gray-300 focus:ring-pink-500 mt-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                  disabled={loading}
                />
                <label
                  htmlFor="acceptCGU"
                  className="ml-4 text-sm text-gray-700 leading-relaxed cursor-pointer"
                >
                  <CGULinks />
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="acceptNewsletter"
                  name="acceptNewsletter"
                  checked={formData.acceptNewsletter}
                  onChange={handleChange}
                  className="w-5 h-5 text-pink-600 rounded border-gray-300 focus:ring-pink-500 mt-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                />
                <label
                  htmlFor="acceptNewsletter"
                  className="ml-4 text-sm text-gray-700 leading-relaxed"
                >
                  J’accepte de recevoir des informations sur les offres bipSOS
                </label>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div className="text-center pt-8">
              <button
                type="submit"
                disabled={loading || !formData.acceptCGU}
                className={`px-12 py-4 font-bold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  loading || !formData.acceptCGU
                    ? "bg-gray-400 cursor-not-allowed text-gray-200"
                    : "bg-pink-600 hover:bg-pink-700 text-white"
                }`}
              >
                {loading ? "Envoi en cours..." : "Envoyer ma candidature"}
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 mt-6">
              Votre demande sera étudiée sous 48 heures ouvrées
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
