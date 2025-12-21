"use client";

import { useState } from "react";

export default function ContactDistr({
  onClose,
}: {
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    structureType: "",
    companyName: "",
    siret: "",
    clientCount: "",
    licenseVolume: "",
    whiteLabelInterest: "",
    contactName: "",
    position: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reference] = useState(
    () => `DIST-${Date.now().toString(36).toUpperCase()}`
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Devis distributeur envoyé →", { ...formData, reference });
    setIsSubmitted(true);
  };

  const structureTypes = [
    { value: "", label: "Type de structure *" },
    { value: "mutuelle", label: "Mutuelle" },
    { value: "courtier", label: "Courtier" },
    { value: "agence_voyages", label: "Agence de voyages" },
    { value: "autre", label: "Autre" }
  ];

  const clientCounts = [
    { value: "", label: "Nombre d'adhérents/clients *" },
    { value: "0-100", label: "0 - 100" },
    { value: "100-500", label: "100 - 500" },
    { value: "500-1000", label: "500 - 1 000" },
    { value: "1000-5000", label: "1 000 - 5 000" },
    { value: "5000+", label: "5 000+" }
  ];

  const licenseVolumes = [
    { value: "", label: "Volume licences envisagé *" },
    { value: "101-500", label: "101 - 500" },
    { value: "501-1000", label: "501 - 1 000" },
    { value: "1000+", label: "1 000+" }
  ];

  const whiteLabelOptions = [
    { value: "", label: "Intérêt marque blanche *" },
    { value: "oui", label: "Oui" },
    { value: "non", label: "Non" },
    { value: "a_discuter", label: "À discuter" }
  ];

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-gradient-to-br from-gray-50 to-white">
        <div className="flex-shrink-0 bg-white border-b px-4 py-3">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className="text-lg font-bold">Demande envoyée !</h1>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-gray-100 rounded-full"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">Demande reçue !</h2>
            <p className="text-gray-600 mb-5">
              Notre équipe commerciale vous recontactera dans les 24h.
            </p>
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-5">
              <p className="text-sm text-gray-600 mb-1">Référence</p>
              <p className="text-xl font-bold text-red-600">{reference}</p>
            </div>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg text-sm"
            >
              Retour au site
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white mt-14">
      <div className="flex-shrink-0 bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-lg font-bold text-gray-900">
              Demande de partenariat distributeur
            </h1>
            <p className="text-xs text-gray-600">
              Programme distributeur bipSOS™
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-full transition"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 text-sm"
          >
            <div className="md:col-span-1">
              <select
                name="structureType"
                value={formData.structureType}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none bg-white text-gray-700"
              >
                {structureTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-1">
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                placeholder="Raison sociale *"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
              />
            </div>
            <div className="md:col-span-1">
              <input
                name="siret"
                value={formData.siret}
                onChange={(e) => {
                  const v = e.target.value.replace(/\D/g, "").slice(0, 14);
                  setFormData((prev) => ({ ...prev, siret: v }));
                }}
                required
                placeholder="Numéro SIRET (14 chiffres) *"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
              />
            </div>
            <div className="md:col-span-1">
              <select
                name="clientCount"
                value={formData.clientCount}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none bg-white text-gray-700"
              >
                {clientCounts.map((count) => (
                  <option key={count.value} value={count.value}>
                    {count.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-1">
              <select
                name="licenseVolume"
                value={formData.licenseVolume}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none bg-white text-gray-700"
              >
                {licenseVolumes.map((volume) => (
                  <option key={volume.value} value={volume.value}>
                    {volume.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-1">
              <select
                name="whiteLabelInterest"
                value={formData.whiteLabelInterest}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none bg-white text-gray-700"
              >
                {whiteLabelOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-1">
              <input
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
                placeholder="Nom du contact *"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
              />
            </div>
            <div className="md:col-span-1">
              <input
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                placeholder="Fonction *"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
              />
            </div>
            <div className="md:col-span-1">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email professionnel *"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
              />
            </div>
            <div className="md:col-span-1">
              <input
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  const v = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setFormData((prev) => ({ ...prev, phone: v }));
                }}
                required
                placeholder="Téléphone *"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2 flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-sm"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-2.5 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold rounded-lg flex items-center gap-2 text-sm"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-3 w-3 border-b-2 border-white"></span>
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer la demande"
                )}
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-xs text-gray-500 border-t border-gray-100 pt-4">
            <p className="mb-1">
              <span className="text-red-500">*</span> Champs obligatoires
            </p>
            <p>
              Vos informations sont traitées conformément à notre politique de confidentialité. 
              Notre équipe commerciale vous recontactera sous 24h ouvrées.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}