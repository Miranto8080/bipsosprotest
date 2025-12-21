"use client";

import { useState } from "react";

export default function AmbassadorContactForm({
  onClose,
}: {
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    status: "",
    siret: "",
    name: "",
    platform: "",
    contentLink: "",
    audienceSize: "",
    theme: "",
    estimatedConversions: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reference] = useState(
    () => `AMB-${Date.now().toString(36).toUpperCase()}`
  );

  const statusOptions = ["Particulier", "Professionnel", "Entreprise"];
  const platformOptions = ["Instagram", "TikTok", "YouTube", "Facebook", "Twitter/X", "LinkedIn", "Twitch", "Autre"];
  const audienceSizeOptions = ["< 1k", "1k-10k", "10k-50k", "50k-100k", "100k-500k", "500k-1M", "1M-5M", "5M+"];
  const themeOptions = ["Mode", "Beauté", "Technologie", "Voyage", "Cuisine", "Sport", "Lifestyle", "Jeux vidéo", "Finance", "Éducation", "Autre"];
  const conversionOptions = ["51-200", "201-500", "500+"];

  const showSiret = formData.status === "Entreprise" || formData.status === "Professionnel";

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
    console.log("Formulaire Ambassadeur envoyé →", { ...formData, reference });
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
            <h2 className="text-3xl font-bold mb-3">Merci pour votre candidature !</h2>
            <p className="text-lg text-gray-600 mb-6">
              Notre équipe reviendra vers vous dans les plus brefs délais.
            </p>
            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-sm text-gray-600">Référence de votre candidature</p>
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
              Formulaire Ambassadeur (volume supérieur)
            </h1>
            <p className="text-sm text-gray-600">
              Devenez ambassadeur de notre marque
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

      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 text-sm"
          >
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">
                Statut *
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none bg-white"
              >
                <option value="">Sélectionnez votre statut</option>
                {statusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {showSiret && (
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">
                  SIRET (si applicable)
                </label>
                <input
                  name="siret"
                  value={formData.siret}
                  onChange={(e) => {
                    const v = e.target.value.replace(/\D/g, "").slice(0, 14);
                    setFormData((prev) => ({ ...prev, siret: v }));
                  }}
                  placeholder="14 chiffres"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500"
                />
              </div>
            )}

            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">
                Nom / Pseudo *
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Votre nom ou pseudo"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Plateforme principale *
              </label>
              <select
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 bg-white"
              >
                <option value="">Sélectionnez une plateforme</option>
                {platformOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Taille d’audience *
              </label>
              <select
                name="audienceSize"
                value={formData.audienceSize}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 bg-white"
              >
                <option value="">Sélectionnez une taille</option>
                {audienceSizeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">
                Lien vers contenu *
              </label>
              <input
                name="contentLink"
                type="url"
                value={formData.contentLink}
                onChange={handleChange}
                required
                placeholder="https://..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Thématique *
              </label>
              <select
                name="theme"
                value={formData.theme}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 bg-white"
              >
                <option value="">Sélectionnez une thématique</option>
                {themeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Volume conversions estimé *
              </label>
              <select
                name="estimatedConversions"
                value={formData.estimatedConversions}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 bg-white"
              >
                <option value="">Sélectionnez un volume</option>
                {conversionOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">
                Email *
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="votre@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">
                Message (facultatif)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Votre message, informations supplémentaires..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 resize-none"
              />
            </div>

            <div className="md:col-span-2 flex justify-end gap-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold rounded-lg flex items-center gap-2 transition"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi...
                  </>
                ) : (
                  "Envoyer la candidature"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}