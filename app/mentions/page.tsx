"use client";

import { useState, useRef, useEffect } from "react";

export default function LegalNoticePage() {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContentRef = contentRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentContentRef) {
      observer.observe(currentContentRef);
    }

    return () => {
      if (currentContentRef) {
        observer.unobserve(currentContentRef);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-200 mt-14">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Mentions légales
          </h1>
        </div>
      </div>

      <div ref={contentRef} className="max-w-4xl mx-auto px-6 py-20">
        <div className={`space-y-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <section className="space-y-2">
            <p className="text-gray-700 leading-relaxed">
              Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique (LCEN), les présentes mentions légales ont pour objet d’informer les utilisateurs du site pro.bipsos.com sur l’identité de l’éditeur et de l’hébergeur, ainsi que sur les conditions d’utilisation du site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">1. ÉDITEUR DU SITE</h2>
            <p className="text-gray-700 leading-relaxed">
              Le site pro.bipsos.com est édité par :
            </p>
            <p className="text-gray-700 font-semibold mt-4">
              SAS Optimus Prime
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Société par actions simplifiée au capital de 1 000 €
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                RCS Antibes B 844 682 336
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                N° TVA intracommunautaire : FR08844682336
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Siège social : 92 boulevard Président Wilson, 06160 Antibes Juan-les-Pins – France
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Téléphone : 0805 620 450
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Email : <a href="mailto:contact.pro@bipsos.com" className="hover:underline font-semibold ml-1">contact.pro@bipsos.com</a>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">2. DIRECTION DE LA PUBLICATION</h2>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Directeur de la publication : JL Dupré
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Fonction : Président
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Email de contact : <a href="mailto:contact.pro@bipsos.com" className="hover:underline font-semibold ml-1">contact.pro@bipsos.com</a>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">3. HÉBERGEMENT DU SITE</h2>
            <p className="text-gray-700 leading-relaxed">
              Le site pro.bipsos.com est hébergé par :
            </p>
            <p className="text-gray-700 font-semibold mt-4">
              Infomaniak Network SA
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Adresse : Rue Eugène-Marziano 25, 1227 Genève – Suisse
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Support technique : <a href="https://support.infomaniak.com" className="hover:underline font-semibold ml-1">https://support.infomaniak.com</a>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">4. DÉLÉGUÉ À LA PROTECTION DES DONNÉES (DPO)</h2>
            <p className="text-gray-700 leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous pouvez contacter notre Délégué à la Protection des Données pour toute question relative à vos données personnelles :
            </p>
            <ul className="space-y-2 text-gray-700 ml-4 mt-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Nom : JL Dupré
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Fonction : Président
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Email : <a href="mailto:dpo@bipsos.com" className="hover:underline font-semibold ml-1">dpo@bipsos.com</a>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">5. CONTACTS</h2>
            <p className="text-gray-700 leading-relaxed">
              Pour toute question ou demande d’information, vous pouvez nous contacter via les moyens suivants :
            </p>
            
            <div className="space-y-4 ml-4">
              <div>
                <h3 className="text-m font-semibold text-gray-900">5.1. Contact commercial B2B/B2B2C</h3>
                <ul className="space-y-1 text-gray-700 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Email : <a href="mailto:contact.pro@bipsos.com" className="hover:underline font-semibold ml-1">contact.pro@bipsos.com</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-m font-semibold text-gray-900">5.2. Données personnelles (RGPD)</h3>
                <ul className="space-y-1 text-gray-700 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Email : <a href="mailto:dpo@bipsos.com" className="hover:underline font-semibold ml-1">dpo@bipsos.com</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-m font-semibold text-gray-900">5.3. Support technique professionnel</h3>
                <ul className="space-y-1 text-gray-700 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Email : <a href="mailto:support@bipsos.com" className="hover:underline font-semibold ml-1">support@bipsos.com</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-m font-semibold text-gray-900">5.4. Téléphone</h3>
                <ul className="space-y-1 text-gray-700 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Numéro : 0805 620 450
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">6. PROPRIÉTÉ INTELLECTUELLE</h2>
            <p className="text-gray-700 leading-relaxed">
              L’ensemble des contenus présents sur le site pro.bipsos.com (textes, images, logos, graphismes, vidéos, icônes, sons, logiciels, bases de données, etc.) est la propriété exclusive de SAS Optimus Prime ou fait l’objet d’une autorisation d’utilisation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              La marque bipSOS™ est une marque déposée.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est strictement interdite sans l’autorisation écrite préalable de SAS Optimus Prime.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions du Code de la propriété intellectuelle.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">7. LIENS HYPERTEXTES</h2>
            <p className="text-gray-700 leading-relaxed">
              Le site pro.bipsos.com peut contenir des liens hypertextes vers d’autres sites internet. SAS Optimus Prime n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou leur politique de confidentialité.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Les liens présents sur le site peuvent notamment renvoyer vers :
            </p>
            <ul className="space-y-1 text-gray-700 list-disc list-inside ml-4">
              <li>App Store d’Apple (téléchargement des applications bipSOS)</li>
              <li>Google Play Store (téléchargement des applications bipSOS)</li>
              <li>Réseaux sociaux de bipSOS</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              L’utilisateur reconnaît que l’accès à ces sites externes s’effectue sous sa seule responsabilité.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">8. PROTECTION DES DONNÉES PERSONNELLES</h2>
            <p className="text-gray-700 leading-relaxed">
              Le traitement des données personnelles collectées sur le site pro.bipsos.com est régi par notre Politique de Confidentialité, accessible à l’adresse suivante :
            </p>
            <p className="text-gray-700 leading-relaxed">
              <a href="https://pro.bipsos.com/politique-confidentialite" className="hover:underline font-semibold">
                https://pro.bipsos.com/politique-confidentialite
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cette politique détaille les données collectées, leurs finalités, les durées de conservation, ainsi que vos droits en matière de protection des données personnelles conformément au RGPD.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">9. COOKIES</h2>
            <p className="text-gray-700 leading-relaxed">
              Le site pro.bipsos.com utilise des cookies pour améliorer l’expérience utilisateur et analyser la fréquentation du site. Les modalités d’utilisation des cookies sont détaillées dans notre Politique de Confidentialité.
            </p>
            <p className="text-gray-700 leading-relaxed">
              L’utilisateur peut à tout moment gérer ses préférences en matière de cookies via les paramètres de son navigateur ou le bandeau de consentement accessible sur le site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">10. CONDITIONS GÉNÉRALES D’UTILISATION</h2>
            <p className="text-gray-700 leading-relaxed">
              L’utilisation du site pro.bipsos.com est régie par nos Conditions Générales d’Utilisation, qui définissent les droits et obligations des utilisateurs ainsi que les limitations de responsabilité de SAS Optimus Prime.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Les CGU sont accessibles à l’adresse suivante :
            </p>
            <p className="text-gray-700 leading-relaxed">
              <a href="https://pro.bipsos.com/cgu" className="hover:underline font-semibold">
                https://pro.bipsos.com/cgu
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Tout accès et utilisation du site implique l’acceptation sans réserve des Conditions Générales d’Utilisation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">11. DROIT APPLICABLE ET JURIDICTION COMPÉTENTE</h2>
            <p className="text-gray-700 leading-relaxed">
              Les présentes mentions légales sont régies par le droit français.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En cas de litige relatif à l’interprétation ou à l’exécution des présentes mentions légales, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">12. MODIFICATIONS DES MENTIONS LÉGALES</h2>
            <p className="text-gray-700 leading-relaxed">
              SAS Optimus Prime se réserve le droit de modifier à tout moment les présentes mentions légales afin de les adapter aux évolutions du site, de la législation ou de la réglementation en vigueur.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Les mentions légales en vigueur sont celles accessibles sur le site pro.bipsos.com. La date de dernière mise à jour est indiquée en haut du présent document.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Les utilisateurs sont invités à consulter régulièrement les mentions légales afin de prendre connaissance des éventuelles modifications.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}