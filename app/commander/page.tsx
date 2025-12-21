"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useStripe, useElements, PaymentElement, Elements } from '@stripe/react-stripe-js';
import { getStripe } from '../../lib/stripe';

/* ============================================================= */
/*                     TYPES ET DONNÉES                         */
/* ============================================================= */

type Product = {
  id: string;
  label: string;
  priceTTC: number;
};

const PRODUCTS: Product[] = [
  { id: "gardian", label: "Gardian", priceTTC: 9.99 },
  { id: "active", label: "Active Assistance", priceTTC: 24.99 },
];

const TVA_RATE = 0.20;
const BASE_DISCOUNT = 0.30;

type FormData = {
  companyName: string;
  address1: string;
  addressComplement: string;
  postalCode: string;
  city: string;
  fullName: string;
  position: string;
  phone: string;
  email: string;
  differentShipping: boolean;
  shippingAddress1: string;
  shippingAddressComplement: string;
  shippingPostalCode: string;
  shippingCity: string;
};

type OrderLine = {
  id: string;
  label: string;
  priceTTC: number;
  qty: number;
  totalTTCBeforeDiscount: number;
  lineHT: number;
  lineTax: number;
  lineTTC: number;
};

type Totals = {
  totalHT: number;
  totalTax: number;
  totalTTC: number;
};

// Composant de paiement
function CheckoutForm({ 
  totals, 
  onSuccess, 
  onCancel 
}: { 
  totals: Totals;
  onSuccess: () => void;
  onCancel: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/commande/success`,
      },
      redirect: 'if_required',
    });

    if (error) {
      alert(`Erreur de paiement: ${error.message}`);
    } else {
      onSuccess();
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
        <div className="w-3 h-8 bg-red-600 rounded-full" />
        Paiement sécurisé
      </h3>
      
      <div className="mb-6">
        <PaymentElement />
      </div>
      
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-semibold"
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-400 transition-colors font-semibold"
        >
          {isProcessing ? "Traitement..." : `Payer ${totals.totalTTC.toFixed(2)} €`}
        </button>
      </div>
    </form>
  );
}

function CommanderForm() {
  const [quantities, setQuantities] = useState({
    gardian: 0,
    active: 0,
  });

  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    address1: "",
    addressComplement: "",
    postalCode: "",
    city: "",
    fullName: "",
    position: "",
    phone: "",
    email: "",
    differentShipping: false,
    shippingAddress1: "",
    shippingAddressComplement: "",
    shippingPostalCode: "",
    shippingCity: "",
  });

  const [acceptCGV, setAcceptCGV] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentStep, setPaymentStep] = useState<'contact' | 'billing' | 'payment'>('contact');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleQtyChange = (id: "gardian" | "active", value: number) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, Math.floor(value)) }));
  };

  const totalUnits = quantities.gardian + quantities.active;

  const volumeDiscount = useMemo(() => {
    if (totalUnits >= 501) return 0.10;
    if (totalUnits >= 101) return 0.05;
    if (totalUnits >= 50) return 0.03;
    return 0;
  }, [totalUnits]);

  const totalDiscountRate = BASE_DISCOUNT + volumeDiscount;

  const lines = useMemo((): OrderLine[] => {
    return PRODUCTS.map((product) => {
      const qty = quantities[product.id as keyof typeof quantities] || 0;
      
      const totalTTCBeforeDiscount = product.priceTTC * qty;

      const totalTTCAfterDiscount = totalTTCBeforeDiscount * (1 - totalDiscountRate);

      const lineHT = totalTTCAfterDiscount / (1 + TVA_RATE);
      const lineTax = lineHT * TVA_RATE;
      const lineTTC = lineHT + lineTax;

      return {
        ...product,
        qty,
        totalTTCBeforeDiscount: +totalTTCBeforeDiscount.toFixed(2),
        lineHT: +lineHT.toFixed(2),
        lineTax: +lineTax.toFixed(2),
        lineTTC: +lineTTC.toFixed(2),
      };
    });
  }, [quantities, totalDiscountRate]);

  const totals = useMemo((): Totals => {
    const totalHT = lines.reduce((s, l) => s + l.lineHT, 0);
    const totalTax = lines.reduce((s, l) => s + l.lineTax, 0);
    const totalTTC = lines.reduce((s, l) => s + l.lineTTC, 0);
    return { 
      totalHT: +totalHT.toFixed(2), 
      totalTax: +totalTax.toFixed(2), 
      totalTTC: +totalTTC.toFixed(2) 
    };
  }, [lines]);

  const handleCreatePaymentIntent = async () => {
    if (!acceptCGV) {
      alert("Veuillez accepter les conditions générales de vente");
      return;
    }
    if (totalUnits === 0) {
      alert("Veuillez sélectionner au moins un produit");
      return;
    }

    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Veuillez remplir tous les champs obligatoires de contact");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totals.totalTTC,
          contactInfo: {
            fullName: formData.fullName,
            position: formData.position,
            phone: formData.phone,
            email: formData.email,
          }
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de la création du paiement');
      }

      setClientSecret(data.clientSecret);
      setPaymentStep('billing');
      
    } catch (error) {
      console.error("Erreur création payment intent:", error);
      alert(error instanceof Error ? error.message : "Erreur lors de la préparation du paiement");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateCustomerAndConfirmOrder = async () => {
    if (!formData.companyName || !formData.address1 || !formData.postalCode || !formData.city) {
      alert("Veuillez remplir tous les champs obligatoires de l'entreprise");
      return;
    }

    setIsLoading(true);

    try {
      const orderLines = lines
        .filter((l) => l.qty > 0)
        .map((l) => ({
          productId: l.id,
          label: l.label,
          quantity: l.qty,
          unitPriceHT: Number((l.lineHT / l.qty).toFixed(4)),
          totalHT: Number(l.lineHT.toFixed(2)),
          totalTTC: Number(l.lineTTC.toFixed(2)),
        }));

      const payload = {
        company: {
          name: formData.companyName,
          address: formData.address1,
          addressComplement: formData.addressComplement || null,
          postalCode: formData.postalCode,
          city: formData.city,
        },
        contact: {
          fullName: formData.fullName,
          position: formData.position,
          phone: formData.phone,
          email: formData.email,
        },
        shipping: formData.differentShipping
          ? {
              address: formData.shippingAddress1,
              complement: formData.shippingAddressComplement || null,
              postalCode: formData.shippingPostalCode,
              city: formData.shippingCity,
            }
          : null,
        order: {
          totalUnits,
          remiseRevendeur: 30,
          remiseVolume: volumeDiscount * 100,
          remiseTotale: Math.round(totalDiscountRate * 100),
          lines: orderLines,
          totals: {
            totalHT: Number(totals.totalHT.toFixed(2)),
            tva: Number(totals.totalTax.toFixed(2)),
            totalTTC: Number(totals.totalTTC.toFixed(2)),
          },
        },
      };

      const response = await fetch('/api/create-customer-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de la confirmation de la commande');
      }

      setPaymentStep('payment');
      setShowPayment(true);

    } catch (error) {
      console.error("Erreur création customer:", error);
      alert(error instanceof Error ? error.message : "Erreur lors de la confirmation de la commande");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaymentSuccess = () => {
    alert("Paiement réussi ! Votre commande a été confirmée.");
    setQuantities({ gardian: 0, active: 0 });
    setFormData({
      companyName: "", address1: "", addressComplement: "", postalCode: "", city: "",
      fullName: "", position: "", phone: "", email: "",
      differentShipping: false,
      shippingAddress1: "", shippingAddressComplement: "", shippingPostalCode: "", shippingCity: "",
    });
    setAcceptCGV(false);
    setShowPayment(false);
    setPaymentStep('contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 mt-12">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Rejoignez la tendance nationale dès aujourd’hui
          </h1>
          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mb-6" />
          <p className="text-1xl md:text-2xl text-gray-600">
            Commandez vos packs bipSOS en 2 minutes
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900">
            <span className="w-3 h-10 bg-red-600 rounded-full" />
            Tarifs & Remises Revendeur
          </h2>

          <p className="text-gray-600 mb-10 leading-relaxed">
            Retrouvez ci-dessous les tarifs publics de nos produits ainsi que les remises automatiques accordées aux revendeurs 
            en fonction des volumes commandés.
          </p>

          <div className="grid md:grid-cols-2 gap-10 text-sm">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Produits disponibles</h3>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left font-medium text-gray-900">Référence</th>
                      <th className="border p-3 text-left font-medium text-gray-900">Prix TTC</th>
                      <th className="border p-3 text-left font-medium text-gray-900">Prix HT estimé</th>
                    </tr>
                  </thead>

                  <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                    {PRODUCTS.map((p) => {
                      const ht = (p.priceTTC / (1 + TVA_RATE)).toFixed(2);
                      return (
                        <tr key={p.id}>
                          <td className="border p-3 text-gray-900">{p.label}</td>
                          <td className="border p-3 text-gray-900">{p.priceTTC.toFixed(2)} €</td>
                          <td className="border p-3 text-gray-900">{ht} €</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Remises appliquées</h3>

                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-red-600 text-lg">•</span>
                    Remise revendeur standard : <strong className="text-gray-900">30 %</strong>
                  </li>

                  <li className="flex gap-2">
                    <span className="text-red-600 text-lg">•</span>
                    Remise supplémentaire selon volume :
                  </li>

                  <ul className="ml-6 space-y-2 text-gray-700">
                    <li>50 – 100 pièces → +3 %</li>
                    <li>101 – 500 pièces → +5 %</li>
                    <li>≥ 501 pièces → +10 %</li>
                  </ul>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>

        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
              <div className="w-3 h-8 bg-red-600 rounded-full" />
              Votre commande
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-4 text-left text-gray-900">Produit</th>
                    <th className="border p-4 text-left text-gray-900">Prix unit. TTC</th>
                    <th className="border p-4 text-left text-gray-900">Quantité</th>
                    <th className="border p-4 text-left text-gray-900">Total avant remise</th>
                    <th className="border p-4 text-left text-gray-900">Remise totale</th>
                    <th className="border p-4 text-left text-gray-900">Montant TTC</th>
                  </tr>
                </thead>
                <tbody>
                  {lines.map((l) => (
                    <tr key={l.id}>
                      <td className="border p-4 font-medium text-gray-900">{l.label}</td>
                      <td className="border p-4 text-gray-900">{l.priceTTC.toFixed(2)} €</td>
                      <td className="border p-4">
                        <input
                          type="number"
                          min="0"
                          value={l.qty}
                          onChange={(e) => handleQtyChange(l.id as "gardian" | "active", Number(e.target.value))}
                          className="w-28 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
                        />
                      </td>
                      <td className="border p-4 text-gray-900">
                        {l.totalTTCBeforeDiscount.toFixed(2)} €
                      </td>
                      <td className="border p-4 font-bold text-green-600">
                        {Math.round(totalDiscountRate * 100)}%
                      </td>
                      <td className="border p-4 font-bold text-gray-900">{l.lineTTC.toFixed(2)} €</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 max-w-md ml-auto mt-8">
              <div className="flex justify-between text-lg font-semibold mb-2 text-gray-900">
                <span>Total pièces commandées :</span>
                <span>{totalUnits}</span>
              </div>
              <div className="flex justify-between mb-2 text-gray-900">
                <span>Remise volume :</span>
                <span className="font-bold text-green-600">+{volumeDiscount * 100}%</span>
              </div>
              <div className="flex justify-between text-gray-900">
                <span>Total HT :</span>
                <span>{totals.totalHT.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-gray-900">
                <span>TVA (20 %) :</span>
                <span>{totals.totalTax.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-xl font-bold mt-3 pt-3 border-t text-gray-900">
                <span>Total TTC :</span>
                <span className="text-red-600">{totals.totalTTC.toFixed(2)} €</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-8 mt-15 flex items-center gap-3 text-gray-900">
              <div className="w-3 h-8 bg-red-600 rounded-full" />
              Personne à contacter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nom & Prénom *</label>
                <input 
                  required 
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition text-gray-900" 
                  placeholder="Jean Dupont" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Fonction *</label>
                <input 
                  required 
                  name="position" 
                  value={formData.position} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition text-gray-900" 
                  placeholder="Responsable Sécurité" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
                <input 
                  required 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition text-gray-900" 
                  placeholder="+33 6 12 34 56 78" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input 
                  required 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition text-gray-900" 
                  placeholder="contact@entreprise.fr" 
                />
              </div>
            </div>

            {paymentStep === 'contact' && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-10 mt-10 max-w-2xl mx-auto">
                  <input
                    type="checkbox"
                    id="cgv"
                    checked={acceptCGV}
                    onChange={(e) => setAcceptCGV(e.target.checked)}
                    required
                    className="w-5 h-5 text-red-600 rounded focus:ring-red-500 cursor-pointer"
                  />
                  <label
                    htmlFor="cgv"
                    className="text-lg leading-relaxed cursor-pointer select-none text-gray-700"
                  >
                    J’accepte les{' '}
                    <a
                      href="/cgv"
                      target="_blank"
                      className="text-red-600 underline font-semibold hover:text-red-700"
                    >
                      conditions générales de vente
                    </a>
                  </label>
                </div>

                <button
                  type="button"
                  onClick={handleCreatePaymentIntent}
                  disabled={!acceptCGV || totalUnits === 0 || isLoading}
                  className={`px-14 py-5 rounded-full text-xl font-bold tracking-wide transition-all duration-300 mb-5
                    ${acceptCGV && totalUnits > 0 && !isLoading
                      ? "bg-[#003366] hover:bg-[#002244] text-white shadow-lg hover:shadow-2xl transform hover:scale-[1.04]"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                >
                  {isLoading ? "Préparation..." : "Payer"}
                </button>
              </motion.section>
            )}
          </motion.section>

          {paymentStep === 'billing' && (
            <motion.section 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.3 }} 
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
                <div className="w-3 h-8 bg-red-600 rounded-full" />
                Identification de votre entreprise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nom de l’entreprise *</label>
                  <input 
                    required 
                    name="companyName" 
                    value={formData.companyName} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition text-gray-900" 
                    placeholder="Entreprise SARL" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Adresse *</label>
                  <input 
                    required 
                    name="address1" 
                    value={formData.address1} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition text-gray-900" 
                    placeholder="12 rue des Lilas" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Complément d’adresse</label>
                  <input 
                    name="addressComplement" 
                    value={formData.addressComplement} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition text-gray-900" 
                    placeholder="Bâtiment A, 3ème étage" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Code postal *</label>
                  <input 
                    required 
                    name="postalCode" 
                    value={formData.postalCode} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition text-gray-900" 
                    placeholder="75001" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Ville *</label>
                  <input 
                    required 
                    name="city" 
                    value={formData.city} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition text-gray-900" 
                    placeholder="Paris" 
                  />
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 40 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.7 }} 
                className="text-center pb-12 mt-8"
              >
                <button
                  type="button"
                  onClick={handleCreateCustomerAndConfirmOrder}
                  disabled={isLoading}
                  className="px-16 py-6 bg-red-600 hover:bg-red-700 text-white font-bold text-2xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Validation..." : `Valider la commande – ${totals.totalTTC.toFixed(2)} € TTC`}
                </button>
              </motion.div>
            </motion.section>
          )}

          {showPayment && clientSecret && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <Elements stripe={getStripe()} options={{ clientSecret }}>
                <CheckoutForm
                  totals={totals}
                  onSuccess={handlePaymentSuccess}
                  onCancel={() => {
                    setShowPayment(false);
                    setPaymentStep('billing');
                  }}
                />
              </Elements>
            </motion.section>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CommanderPage() {
  return (
    <Elements stripe={getStripe()}>
      <CommanderForm />
    </Elements>
  );
}