'use client';

import { useState } from 'react';

export default function DistributeurPage() {
  const [tab] = useState('dashboard');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contenu onglet : {tab}</h2>
      <p>Vous êtes maintenant sur la page de votre espace distributeur.</p>
    </div>
  );
}
