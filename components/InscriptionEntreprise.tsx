"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
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
  raisonSociale: string;
  siret: string;
  effectif: string;
  adresse: string;
  codePostal: string;
  ville: string;
  typeActivite: string;
  licencesEstimees: string;
  offreSouhaitee: string;
  acceptCGU: boolean;
  acceptNewsletter: boolean;
};

export default function InscriptionEntreprise() {
  const [formData, setFormData] = useState<FormData>({
    civilite: "",
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    fonction: "",
    raisonSociale: "",
    siret: "",
    effectif: "",
    adresse: "",
    codePostal: "",
    ville: "",
    typeActivite: "",
    licencesEstimees: "",
    offreSouhaitee: "",
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getQuantityEstimate = (range: string): number => {
    const map: Record<string, number> = {
      "1-10": 5,
      "11-50": 30,
      "51-200": 125,
      "201-500": 350,
      "501+": 750,
    };
    return map[range] || 1;
  };

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.bipsos.com";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // const cleanSiret = formData.siret.trim();
    // const finalSiret = cleanSiret.length === 14 ? cleanSiret : null;

    // if (cleanSiret && cleanSiret.length > 0 && cleanSiret.length !== 14) {
    //   setError("Le SIRET doit contenir 14 chiffres ou être laissé vide");
    //   setLoading(false);
    //   return;
    // }

    const payload = {
      type: "ENTERPRISE",
      status: "PENDING",
      civility: formData.civilite,
      first_name: formData.prenom,
      last_name: formData.nom,
      email: formData.email,
      phone: formData.telephone,
      function: formData.fonction,
      company_name: formData.raisonSociale,
      activity: formData.typeActivite,
      siret: formData.siret || null,
      //siret: finalSiret,
      profesional_number: null,
      address: formData.adresse,
      postcode: formData.codePostal,
      city: formData.ville,
      subscription: formData.offreSouhaitee,
      quantity: getQuantityEstimate(formData.licencesEstimees),
      capacity: formData.effectif,
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
      console.log("Full URL:", `${apiUrl}/profesionals/preorder/store`);

      if (res.ok) {
        setSuccess(true);
      } else {
        const errors = data.errors
          ? Object.values(data.errors).flat().join(", ")
          : data.message || "Une erreur est survenue lors de l’envoi.";
        setError(errors as string);
      }
    } catch {
      setError(
        "Impossible de contacter le serveur. Vérifiez votre connexion et réessayez."
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <div className="text-center max-w-lg">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg
              className="w-12 h-12 text-green-600"
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
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Demande envoyée avec succès !
          </h2>
          <p className="text-lg text-gray-600">
            Merci pour votre inscription. Nous reviendrons vers vous sous 24 à
            48 heures pour valider votre compte entreprise.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-30">
      <div className="max-w-4xl mx-auto px-3">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-red-600 border border-red-600 rounded-full bg-red-600/10"
          >
            <FontAwesomeIcon
              icon={faCircle}
              className="text-red-600 text-[6px]"
            />
            ENTREPRISE
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 mt-3">
            Créez votre compte entreprise
          </h1>
          <p className="text-lg text-gray-600">
            Inscrivez-vous pour protéger vos salariés avec bipSOS
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-200">
                Vos coordonnées
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Civilité<span className="text-red-600">*</span>
                  </label>
                  <div className="flex space-x-6">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="civilite"
                        value="M."
                        checked={formData.civilite === "M."}
                        onChange={handleRadioChange}
                        className="h-4 w-4 text-red-600"
                        required
                      />
                      <span className="ml-2 text-gray-700">M.</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="civilite"
                        value="Mme"
                        checked={formData.civilite === "Mme"}
                        onChange={handleRadioChange}
                        className="h-4 w-4 text-red-600"
                        required
                      />
                      <span className="ml-2 text-gray-700">Mme</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Prénom<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-base text-gray-900"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Nom<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-base text-gray-900"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Email professionnel<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-base text-gray-900"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Téléphone<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-base text-gray-900"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Fonction<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="fonction"
                    value={formData.fonction}
                    onChange={handleChange}
                    placeholder="Ex : DRH, Responsable HSE, Gérant..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent text-base"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-200">
                Votre entreprise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Raison sociale<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="raisonSociale"
                    value={formData.raisonSociale}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-base text-gray-900"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    SIRET<span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="siret"
                      value={formData.siret}
                      onChange={handleChange}
                      maxLength={14}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-base text-gray-900"
                      required
                    />
                    <span className="absolute right-3 top-2 text-xs text-gray-500">
                      14 chiffres
                    </span>
                  </div>
                </div>
                {/* <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    SIRET <span className="text-gray-500">(Optionnel)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="siret"
                      value={formData.siret}
                      onChange={handleChange}
                      maxLength={14}
                      placeholder="14 chiffres (optionnel)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-base placeholder-gray-400"
                    />
                    <span className="absolute right-3 top-2 text-xs text-gray-500">
                      {formData.siret.length}/14
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Facultatif - Seulement si vous souhaitez être référencé
                  </p>
                </div> */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Effectif<span className="text-red-600">*</span>
                  </label>
                  <select
                    name="effectif"
                    value={formData.effectif}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-base text-gray-900"
                    required
                  >
                    <option value="">Sélectionner</option>
                    <option value="1-9">1-9 salariés</option>
                    <option value="10-49">10-49 salariés</option>
                    <option value="50-249">50-249 salariés</option>
                    <option value="250+">250+ salariés</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Adresse du siège<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleChange}
                    placeholder="Numéro et rue"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent text-base"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Code postal<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="codePostal"
                    value={formData.codePostal}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-base text-gray-900"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Ville<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="ville"
                    value={formData.ville}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-base text-gray-900"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Type d’activité<span className="text-red-600">*</span>
                  </label>
                  <select
                    name="typeActivite"
                    value={formData.typeActivite}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-base text-gray-900"
                    required
                  >
                    <option value="">Sélectionner</option>
                    <option value="agriculture">
                      Agriculture, sylviculture et pêche
                    </option>
                    <option value="industrie-extractive">
                      Industries extractives
                    </option>
                    <option value="industrie-manufacturiere">
                      Industrie manufacturière
                    </option>
                    <option value="energie">
                      Production et distribution d’énergie
                    </option>
                    <option value="eau-dechets">
                      Eau et gestion des déchets
                    </option>
                    <option value="btp">Construction et BTP</option>
                    <option value="commerce">Commerce</option>
                    <option value="transport">Transport et entreposage</option>
                    <option value="hebergement">
                      Hébergement et restauration
                    </option>
                    <option value="information">
                      Information et communication
                    </option>
                    <option value="finance">Finance et assurance</option>
                    <option value="immobilier">Immobilier</option>
                    <option value="services-pro">
                      Services professionnels et techniques
                    </option>
                    <option value="services-admin">
                      Services administratifs et de soutien
                    </option>
                    <option value="administration">
                      Administration publique
                    </option>
                    <option value="enseignement">Enseignement</option>
                    <option value="sante">Santé et action sociale</option>
                    <option value="arts">Arts, spectacles et loisirs</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-200">
                Vos besoins
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Nombre de licences estimé
                    <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="licencesEstimees"
                    value={formData.licencesEstimees}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-base text-gray-900"
                    required
                  >
                    <option value="">Sélectionner</option>
                    <option value="1-10">1-10 licences</option>
                    <option value="11-50">11-50 licences</option>
                    <option value="51-200">51-200 licences</option>
                    <option value="201-500">201-500 licences</option>
                    <option value="501+">Plus de 500 licences</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Offre souhaitée<span className="text-red-600">*</span>
                  </label>
                  <select
                    name="offreSouhaitee"
                    value={formData.offreSouhaitee}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-base text-gray-900"
                    required
                  >
                    <option value="">Sélectionner</option>
                    <option value="gardian">Gardian</option>
                    <option value="active">Active Assistance</option>
                    <option value="non-sure">Les deux</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="acceptCGU"
                    name="acceptCGU"
                    checked={formData.acceptCGU}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 mt-0.5 rounded border-gray-300 focus:ring-red-500"
                    required
                  />
                  <label
                    htmlFor="acceptCGU"
                    className="ml-3 text-sm text-gray-700 cursor-pointer select-none"
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
                    className="h-4 w-4 text-red-600 mt-0.5 rounded border-gray-300"
                  />
                  <label
                    htmlFor="acceptNewsletter"
                    className="ml-3 text-sm text-gray-700"
                  >
                    J’accepte de recevoir des informations sur les offres bipSOS
                  </label>
                </div>
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={loading || !formData.acceptCGU}
                className={`font-semibold py-3 px-10 rounded-md text-base transition-colors ${
                  loading || !formData.acceptCGU
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                {loading ? "Envoi en cours..." : "Créer mon compte"}
              </button>
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">
              Votre demande sera vérifiée sous 24 à 48 heures
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
