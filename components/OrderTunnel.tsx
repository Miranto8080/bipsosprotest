"use client";

import { useState, useCallback, useMemo } from "react";

interface ConfigStepProps {
  offer: "gardian" | "active-assistance";
  licenses: number;
  duration: number;
  onSetOffer: (offer: "gardian" | "active-assistance") => void;
  onSetLicenses: (licenses: number) => void;
  onSetDuration: (duration: number) => void;
  onNext: () => void;
  onClose: () => void;
  getSubtotal: () => number;
  getSavings: () => number;
}

function ConfigStep({
  offer,
  licenses,
  duration,
  onSetOffer,
  onSetLicenses,
  onSetDuration,
  onNext,
  onClose,
  getSubtotal,
  getSavings,
}: ConfigStepProps) {
  return (
    <div className="py-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Configuration de votre commande
      </h3>

      <div className="space-y-6">
        <div>
          <label className="block text-base font-semibold text-gray-900 mb-3">
            Offre choisie <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => onSetOffer("gardian")}
              className={`
                p-4 rounded-lg border-2 transition-all duration-300 text-left
                ${
                  offer === "gardian"
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }
              `}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-lg font-bold text-gray-900">
                    bipSOS™ Gardian
                  </h4>
                  {offer === "gardian" && (
                    <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                      Sélectionné
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  Protection essentielle
                </p>
                <div className="text-xl font-bold text-red-600">
                  {duration === 1 ? "9,99€" : "99,90€"}
                  <span className="text-base font-normal text-gray-500">
                    {" "}
                    / {duration === 1 ? "mois" : "an"}
                  </span>
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onSetOffer("active-assistance")}
              className={`
                p-4 rounded-lg border-2 transition-all duration-300 text-left
                ${
                  offer === "active-assistance"
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }
              `}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-lg font-bold text-gray-900">
                    bipSOS™ Active Assistance
                  </h4>
                  {offer === "active-assistance" && (
                    <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                      Sélectionné
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-2">Protection premium</p>
                <div className="text-xl font-bold text-gray-900">
                  {duration === 1 ? "24,99€" : "249,90€"}
                  <span className="text-base font-normal text-gray-500">
                    {" "}
                    / {duration === 1 ? "mois" : "an"}
                  </span>
                </div>
                <div className="mt-1 inline-block px-2 py-0.5 bg-red-100 text-red-800 rounded-full text-xs font-bold">
                  ACTIVE ASSISTANCE
                </div>
              </div>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-base font-semibold text-gray-900 mb-3">
            Nombre de licences <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() => onSetLicenses(Math.max(1, licenses - 1))}
              className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-xl"
              aria-label="Réduire le nombre de licences"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              max="200"
              value={licenses}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value) && value >= 1 && value <= 200) {
                  onSetLicenses(value);
                }
              }}
              className="flex-1 text-center text-2xl font-bold text-gray-900 border-2 border-gray-200 rounded-lg py-3"
              aria-label="Nombre de licences"
            />
            <button
              type="button"
              onClick={() => onSetLicenses(Math.min(200, licenses + 1))}
              className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-xl"
              aria-label="Augmenter le nombre de licences"
            >
              +
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1 text-center">
            Entre 1 et 200 licences
          </p>
        </div>

        <div>
          <label className="block text-base font-semibold text-gray-900 mb-3">
            Durée du contrat <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => onSetDuration(1)}
              className={`
                p-4 rounded-lg border-2 transition-all duration-300 text-left
                ${
                  duration === 1
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }
              `}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">1 mois</h4>
                  <p className="text-gray-600 text-sm">Sans engagement</p>
                </div>
                {duration === 1 && (
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
            </button>

            <button
              type="button"
              onClick={() => onSetDuration(12)}
              className={`
                p-4 rounded-lg border-2 transition-all duration-300 text-left
                ${
                  duration === 12
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }
              `}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">12 mois</h4>
                  <p className="text-gray-600 text-sm">Économisez 2 mois</p>
                </div>
                {duration === 12 && (
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
              {duration === 12 && (
                <div className="mt-2 inline-block px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  Économie : {getSavings().toFixed(2)}€
                </div>
              )}
            </button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-base font-semibold text-gray-900">
                Résumé de votre commande
              </h4>
              <p className="text-gray-600 text-xs">
                {licenses} licence{licenses > 1 ? "s" : ""} × {duration} mois
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-600">
                {getSubtotal().toFixed(2)}€
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-3">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-lg transition-colors duration-300"
          >
            Annuler
          </button>
          <button
            type="button"
            onClick={onNext}
            className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-300"
          >
            Continuer →
          </button>
        </div>
      </div>
    </div>
  );
}

interface SiretStepProps {
  companyName: string;
  siret: string;
  email: string;
  onSetCompanyName: (name: string) => void;
  onSetSiret: (siret: string) => void;
  onSetEmail: (email: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

function SiretStep({
  companyName,
  siret,
  email,
  onSetCompanyName,
  onSetSiret,
  onSetEmail,
  onPrev,
  onNext,
}: SiretStepProps) {
  return (
    <div className="py-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Informations entreprise
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom de l&apos;entreprise *
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => onSetCompanyName(e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
            placeholder="Ex: Ma Société SAS"
            required
            aria-label="Nom de l'entreprise"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Numéro SIRET (14 chiffres) *
          </label>
          <input
            type="text"
            value={siret}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              if (value.length <= 14) onSetSiret(value);
            }}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
            placeholder="Ex: 12345678901234"
            pattern="\d{14}"
            required
            aria-label="Numéro SIRET"
          />
          <p className="text-xs text-gray-500 mt-1">
            14 chiffres - Visible sur votre extrait Kbis
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email de contact *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => onSetEmail(e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
            placeholder="contact@entreprise.fr"
            required
            aria-label="Email de contact"
          />
          <p className="text-xs text-gray-500 mt-1">
            Pour l&apos;envoi des licences et la facturation
          </p>
        </div>

        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={onPrev}
            className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-lg transition-colors duration-300"
          >
            ← Retour
          </button>
          <button
            type="button"
            onClick={onNext}
            className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-300"
          >
            Paiement →
          </button>
        </div>
      </div>
    </div>
  );
}

interface PaymentStepProps {
  offer: "gardian" | "active-assistance";
  licenses: number;
  duration: number;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  onSetCardNumber: (number: string) => void;
  onSetCardExpiry: (expiry: string) => void;
  onSetCardCvc: (cvc: string) => void;
  onPrev: () => void;
  onComplete: () => void;
  getSubtotal: () => number;
}

function PaymentStep({
  offer,
  licenses,
  duration,
  cardNumber,
  cardExpiry,
  cardCvc,
  onSetCardNumber,
  onSetCardExpiry,
  onSetCardCvc,
  onPrev,
  onComplete,
  getSubtotal,
}: PaymentStepProps) {
  return (
    <div className="py-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Paiement sécurisé
      </h3>

      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-base font-semibold text-gray-900">
                Total à régler
              </h4>
              <p className="text-gray-600 text-xs">
                {licenses} licence{licenses > 1 ? "s" : ""} -{" "}
                {offer === "gardian" ? "Gardian" : "Active Assistance"}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-600">
                {getSubtotal().toFixed(2)}€
              </div>
              <p className="text-gray-600 text-xs">
                {duration === 1
                  ? "Facturation mensuelle"
                  : "Facturation annuelle"}
              </p>
            </div>
          </div>
        </div>

        <div className="border-2 border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-base font-semibold text-gray-900">
              Carte bancaire
            </h4>
            <div className="flex space-x-1">
              <div className="w-8 h-5 bg-gray-300 rounded"></div>
              <div className="w-8 h-5 bg-gray-300 rounded"></div>
              <div className="w-8 h-5 bg-gray-300 rounded"></div>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Numéro de carte *
              </label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 16) onSetCardNumber(value);
                }}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                placeholder="1234 5678 9012 3456"
                required
                aria-label="Numéro de carte"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date d&apos;expiration *
                </label>
                <input
                  type="text"
                  value={cardExpiry}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 4) onSetCardExpiry(value);
                  }}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="MM/AA"
                  required
                  aria-label="Date d'expiration de la carte"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Code CVC *
                </label>
                <input
                  type="text"
                  value={cardCvc}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 3) onSetCardCvc(value);
                  }}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="123"
                  required
                  aria-label="Code CVC"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center text-xs text-gray-600">
            <div className="w-4 h-4 bg-red-100 rounded flex items-center justify-center mr-1.5">
              <span className="text-red-600 text-xs">✓</span>
            </div>
            Paiement sécurisé SSL 256 bits
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={onPrev}
            className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-lg transition-colors duration-300"
          >
            ← Retour
          </button>
          <button
            type="button"
            onClick={onComplete}
            className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-300 flex items-center"
          >
            <span>Payer {getSubtotal().toFixed(2)}€</span>
            <span className="ml-1.5">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

interface ConfirmationStepProps {
  orderReference: string;
  licenses: number;
  offer: "gardian" | "active-assistance";
  email: string;
  getSubtotal: () => number;
}

function ConfirmationStep({
  orderReference,
  licenses,
  offer,
  email,
  getSubtotal,
}: ConfirmationStepProps) {
  return (
    <div className="py-4 flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <span className="text-3xl">✓</span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        Paiement accepté !
      </h3>

      <p className="text-gray-600 text-base mb-6 max-w-md">
        Votre commande a été validée avec succès. Les licences sont en cours de
        génération.
      </p>

      <div className="bg-gray-50 rounded-lg p-4 w-full max-w-md mb-6">
        <div className="text-left space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm">Référence :</span>
            <span className="font-semibold text-sm">
              {orderReference.startsWith("CMD-")
                ? orderReference
                : "CMD-XXXXXXXXX"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm">Montant :</span>
            <span className="font-semibold text-red-600 text-sm">
              {getSubtotal().toFixed(2)}€
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm">Licences :</span>
            <span className="font-semibold text-sm">
              {licenses} {offer === "gardian" ? "Gardian" : "Active Assistance"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm">Email :</span>
            <span className="font-semibold text-sm">{email}</span>
          </div>
        </div>
      </div>

      <div className="animate-pulse">
        <p className="text-gray-500 text-sm mb-3">
          Préparation de vos licences...
        </p>
        <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-red-500 animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
}

interface LicensesStepProps {
  licenses: number;
  offer: "gardian" | "active-assistance";
  email: string;
  onClose: () => void;
}

function LicensesStep({ licenses, offer, email, onClose }: LicensesStepProps) {
  return (
    <div className="py-4 flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
        <span className="text-3xl">🎉</span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        Licences envoyées !
      </h3>

      <p className="text-gray-600 text-base mb-4 max-w-md">
        Vos {licenses} licence{licenses > 1 ? "s" : ""} bipSOS™{" "}
        {offer === "gardian" ? "Gardian" : "Active Assistance"} ont été envoyées
        à :
      </p>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 max-w-md">
        <p className="text-red-700 font-semibold text-base">{email}</p>
        <p className="text-red-600 text-xs mt-1">
          Vérifiez vos spams si vous ne voyez pas notre email
        </p>
      </div>

      <div className="space-y-3 max-w-md">
        <div className="flex items-start">
          <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
            <span className="text-red-600 text-xs">1</span>
          </div>
          <p className="text-gray-600 text-sm text-left">
            Ouvrez l&apos;email &quot;Vos licences bipSOS™&quot;
          </p>
        </div>
        <div className="flex items-start">
          <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
            <span className="text-red-600 text-xs">2</span>
          </div>
          <p className="text-gray-600 text-sm text-left">
            Cliquez sur les liens d&apos;activation individuels
          </p>
        </div>
        <div className="flex items-start">
          <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
            <span className="text-red-600 text-xs">3</span>
          </div>
          <p className="text-gray-600 text-sm text-left">
            Chaque collaborateur télécharge l&apos;app et s&apos;inscrit
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="mt-8 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-300"
      >
        Retourner au site
      </button>
    </div>
  );
}

export default function OrderTunnel({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<
    "config" | "siret" | "payment" | "confirmation" | "licenses"
  >("config");
  const [offer, setOffer] = useState<"gardian" | "active-assistance">(
    "gardian"
  );
  const [licenses, setLicenses] = useState<number>(1);
  const [duration, setDuration] = useState<number>(1);
  const [companyName, setCompanyName] = useState("");
  const [siret, setSiret] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  const [orderReference] = useState(() => {
    if (typeof window === "undefined") {
      return "";
    }
    const timestamp = Date.now();
    const randomPart = Math.floor(Math.random() * 1000);
    return `CMD-${timestamp.toString(36).toUpperCase()}-${randomPart}`;
  });

  const prices = useMemo(
    () => ({
      gardian: { monthly: 9.99, yearly: 99.9 },
      "active-assistance": { monthly: 24.99, yearly: 249.9 },
    }),
    []
  );

  const getSubtotal = useCallback(() => {
    const price =
      offer === "gardian" ? prices.gardian : prices["active-assistance"];
    const unitPrice = duration === 1 ? price.monthly : price.yearly;
    return licenses * unitPrice;
  }, [offer, duration, licenses, prices]);

  const getSavings = useCallback(() => {
    if (duration === 12) {
      const monthlyPrice =
        offer === "gardian"
          ? prices.gardian.monthly
          : prices["active-assistance"].monthly;
      const yearlyPrice =
        offer === "gardian"
          ? prices.gardian.yearly
          : prices["active-assistance"].yearly;
      const monthlyTotal = licenses * monthlyPrice * 12;
      const yearlyTotal = licenses * yearlyPrice;
      return monthlyTotal - yearlyTotal;
    }
    return 0;
  }, [offer, duration, licenses, prices]);

  const handleNextStep = useCallback(() => {
    if (step === "config") setStep("siret");
    else if (step === "siret") setStep("payment");
    else if (step === "payment") setStep("confirmation");
    else if (step === "confirmation") setStep("licenses");
  }, [step]);

  const handlePrevStep = useCallback(() => {
    if (step === "siret") setStep("config");
    else if (step === "payment") setStep("siret");
    else if (step === "confirmation") setStep("payment");
  }, [step]);

  const handleCompleteOrder = useCallback(() => {
    console.log({
      offer,
      licenses,
      duration,
      companyName,
      siret,
      email,
      subtotal: getSubtotal(),
    });

    setStep("confirmation");

    setTimeout(() => {
      setStep("licenses");
    }, 3000);
  }, [offer, licenses, duration, companyName, siret, email, getSubtotal]);

  const steps = useMemo(
    () => [
      { id: "config", label: "Configuration" },
      { id: "siret", label: "Entreprise" },
      { id: "payment", label: "Paiement" },
      { id: "confirmation", label: "Confirmation" },
      { id: "licenses", label: "Licences" },
    ],
    []
  );

  const currentStepIndex = steps.findIndex((s) => s.id === step);

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">
      <div className="flex-shrink-0 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <h1 className="text-xl font-bold text-gray-900">
              Commander bipSOS™
            </h1>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Fermer"
              type="button"
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

          <div className="pb-5 mt-5">
            <div className="flex justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 -z-10 rounded-full"></div>
              <div
                className="absolute top-1/2 left-0 h-1 bg-red-500 -translate-y-1/2 -z-10 transition-all duration-500 rounded-full"
                style={{
                  width: `${(currentStepIndex / (steps.length - 1)) * 100}%`,
                }}
              ></div>

              {steps.map((s, index) => (
                <div key={s.id} className="flex flex-col items-center relative">
                  <button
                    onClick={() => {
                      if (index < currentStepIndex) {
                        setStep(s.id as typeof step);
                      }
                    }}
                    disabled={index > currentStepIndex}
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center mb-1.5 transition-all duration-300 text-xs
                      ${
                        step === s.id
                          ? "bg-red-500 text-white scale-110 shadow"
                          : currentStepIndex > index
                          ? "bg-red-100 text-red-600 cursor-pointer hover:bg-red-200"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      }
                    `}
                    type="button"
                    aria-label={`Aller à l'étape: ${s.label}`}
                  >
                    {currentStepIndex > index ? "✓" : index + 1}
                  </button>
                  <span
                    className={`
                    text-xs font-medium transition-colors duration-300 whitespace-nowrap
                    ${
                      step === s.id || currentStepIndex > index
                        ? "text-red-600 font-bold"
                        : "text-gray-500"
                    }
                  `}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out whitespace-nowrap"
              style={{ transform: `translateX(-${currentStepIndex * 100}%)` }}
            >
              <div className="w-full flex-shrink-0 inline-block align-top">
                <ConfigStep
                  offer={offer}
                  licenses={licenses}
                  duration={duration}
                  onSetOffer={setOffer}
                  onSetLicenses={setLicenses}
                  onSetDuration={setDuration}
                  onNext={handleNextStep}
                  onClose={onClose}
                  getSubtotal={getSubtotal}
                  getSavings={getSavings}
                />
              </div>

              <div className="w-full flex-shrink-0 inline-block align-top">
                <SiretStep
                  companyName={companyName}
                  siret={siret}
                  email={email}
                  onSetCompanyName={setCompanyName}
                  onSetSiret={setSiret}
                  onSetEmail={setEmail}
                  onPrev={handlePrevStep}
                  onNext={handleNextStep}
                />
              </div>

              <div className="w-full flex-shrink-0 inline-block align-top">
                <PaymentStep
                  offer={offer}
                  licenses={licenses}
                  duration={duration}
                  cardNumber={cardNumber}
                  cardExpiry={cardExpiry}
                  cardCvc={cardCvc}
                  onSetCardNumber={setCardNumber}
                  onSetCardExpiry={setCardExpiry}
                  onSetCardCvc={setCardCvc}
                  onPrev={handlePrevStep}
                  onComplete={handleCompleteOrder}
                  getSubtotal={getSubtotal}
                />
              </div>

              <div className="w-full flex-shrink-0 inline-block align-top">
                <div className="w-full flex-shrink-0 inline-block align-top">
                  <ConfirmationStep
                    orderReference={orderReference || "CMD-XXXXXXXXX"}
                    licenses={licenses}
                    offer={offer}
                    email={email}
                    getSubtotal={getSubtotal}
                  />
                </div>
              </div>

              <div className="w-full flex-shrink-0 inline-block align-top">
                <LicensesStep
                  licenses={licenses}
                  offer={offer}
                  email={email}
                  onClose={onClose}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
