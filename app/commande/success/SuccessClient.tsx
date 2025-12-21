'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const paymentIntent = searchParams.get('payment_intent');

  const status = paymentIntent ? 'success' as const : 'error' as const;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {status === 'success' ? (
          <>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Paiement Réussi !</h1>
            <p className="text-gray-600 mb-6">
              Votre commande a été confirmée. Vous recevrez un email de confirmation sous peu.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Référence de paiement : <span className="font-mono">{paymentIntent}</span>
            </p>
          </>
        ) : (
          <>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Paiement échoué ou invalide</h1>
            <p className="text-gray-600 mb-6">
              Aucun identifiant de paiement valide n’a été trouvé dans l’URL.
            </p>
          </>
        )}

        <div className="flex gap-4 justify-center mt-8">
          <Link
            href="/commander"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
          >
            Retour à la boutique
          </Link>
          {status === 'success' && (
            <Link
              href="/"
              className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
            >
              Accueil
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}