"use client";

import { useState } from "react";

export default function DevisTunnelNoScroll({
  onClose,
}: {
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    companyName: "",
    siret: "",
    activitySector: "",
    workforce: "",
    jobTypes: [] as string[],
    offer: "",
    contactName: "",
    position: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reference] = useState(
    () => `DEV-${Date.now().toString(36).toUpperCase()}`
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      jobTypes: prev.jobTypes.includes(value)
        ? prev.jobTypes.filter((t) => t !== value)
        : [...prev.jobTypes, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Devis envoyé →", { ...formData, reference });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-gradient-to-br from-gray-50 to-white">
        <div className="flex-shrink-0 bg-white border-b px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Demande envoyée !</h1>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg
                className="w-5 h-5"
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
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-lg">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-green-600"
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
            <h2 className="text-3xl font-bold mb-3">Merci !</h2>
            <p className="text-lg text-gray-600 mb-6">
              Nous vous recontactons sous 24h.
            </p>
            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-sm text-gray-600">Référence</p>
              <p className="text-2xl font-bold text-red-600">{reference}</p>
            </div>
            <button
              onClick={onClose}
              className="mt-8 px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl"
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
      <div className="flex-shrink-0 bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Demande de devis entreprise
            </h1>
            <p className="text-sm text-gray-600">
              Plus de 200 licences • Accompagnement dédié
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <svg
              className="w-5 h-5"
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

      <div className="flex-1 overflow-y-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 text-sm"
          >
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              placeholder="Raison sociale *"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
            />
            <input
              name="siret"
              value={formData.siret}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, "").slice(0, 14);
                setFormData((prev) => ({ ...prev, siret: v }));
              }}
              required
              placeholder="SIRET (14 chiffres) *"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500"
            />

            <select
              name="activitySector"
              value={formData.activitySector}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 bg-white"
            >
              <option value="">Secteur d’activité *</option>
              <option>Industrie</option>
              <option>BTP</option>
              <option>Commerce</option>
              <option>Services</option>
              <option>Santé</option>
              <option>Éducation</option>
              <option>Transport</option>
              <option>Autre</option>
            </select>
            <select
              name="workforce"
              value={formData.workforce}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 bg-white"
            >
              <option value="">Effectif *</option>
              <option>201-500</option>
              <option>501-1000</option>
              <option>1000+</option>
            </select>

            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Type de poste
            </h3>

            <div className="md:col-span-2 flex flex-wrap gap-3 mb-3">
              {["Bureaux", "Commerciaux", "Télétravail"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.jobTypes.includes(type)}
                    onChange={() => handleCheckbox(type)}
                    className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                  />
                  <span className="text-gray-700">{type}</span>
                </label>
              ))}
            </div>

            <select
              name="offer"
              value={formData.offer}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 bg-white"
            >
              <option value="">Offre souhaitée *</option>
              <option>bipSOS™ Gardian</option>
              <option>bipSOS™ Active Assistance</option>
              <option>Mix des deux</option>
            </select>
            <input
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              required
              placeholder="Nom du contact *"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500"
            />

            <input
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              placeholder="Fonction *"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500"
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email pro *"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, "").slice(0, 10);
                setFormData((prev) => ({ ...prev, phone: v }));
              }}
              required
              placeholder="Téléphone *"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Message (facultatif)"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 resize-none"
            />

            <div className="md:col-span-2 flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold rounded-lg flex items-center gap-2"
              >
                {isSubmitting ? "Envoi..." : "Envoyer la demande"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
