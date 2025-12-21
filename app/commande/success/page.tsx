import { Suspense } from 'react';
import SuccessClient from './SuccessClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paiement réussi - Bipsos Pro',
};

export default function SuccessPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SuccessClient />
    </Suspense>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 animate-pulse" />
        <p className="text-gray-600">Vérification du paiement...</p>
      </div>
    </div>
  );
}