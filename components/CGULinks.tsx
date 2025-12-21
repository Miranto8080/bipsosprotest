'use client';

import Link from 'next/link';

export default function CGULinks() {
  return (
    <>
      J&apos;accepte les{' '}
      <Link
        href="/conditionutilisation"
        className="font-medium text-[#0a1a33] hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        conditions générales d&apos;utilisation
      </Link>{' '}
      et la{' '}
      <Link
        href="/politique-confidentialite"
        className="font-medium text-[#0a1a33] hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        politique de confidentialité
      </Link>
      <span className="text-[#0a1a33]"> *</span>
    </>
  );
}