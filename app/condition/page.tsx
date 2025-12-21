"use client";

import { useState, useRef, useEffect } from "react";

export default function TermsOfServicePage() {
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
            Conditions Générales d’Utilisation
          </h1>
        </div>
      </div>

      <div ref={contentRef} className="max-w-4xl mx-auto px-6 py-20">
        <div
          className={`space-y-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <section className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Les présentes Conditions Générales d’Utilisation (ci-après « CGU ») ont pour objet de définir les modalités d’accès et d’utilisation du site internet pro.bipsos.com (ci-après « le Site »), édité par SAS Optimus Prime.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Tout accès et utilisation du Site implique l’acceptation sans réserve des présentes CGU.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">
              1. OBJET DU SITE
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Le Site pro.bipsos.com est un site professionnel destiné aux entreprises, indépendants, associations, fédérations, collectivités et administrations. Il a pour objet de :
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
              <li>Présenter les offres de services bipSOS destinées aux professionnels (applications Gardian et Active Assistance)</li>
              <li>Permettre la création de comptes professionnels donnant accès aux tarifs dégressifs selon volume</li>
              <li>Permettre la commande en ligne de licences d’utilisation des applications bipSOS</li>
              <li>Permettre la signature électronique des Conditions Générales du Contrat bipSOS</li>
              <li>Permettre le paiement sécurisé via la plateforme Stripe</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">
              2. ACCEPTATION DES CGU
            </h2>
            <p className="text-gray-700 leading-relaxed">
              L’utilisation du Site, la création d’un compte professionnel ou le passage d’une commande impliquent l’acceptation pleine et entière des présentes CGU.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Si vous n’acceptez pas les présentes CGU, vous devez vous abstenir d’utiliser le Site.
            </p>
            <p className="text-gray-700 leading-relaxed">
              SAS Optimus Prime se réserve le droit de modifier à tout moment les présentes CGU. Les CGU applicables sont celles en vigueur au moment de votre accès au Site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">
              3. ACCÈS AU SITE
            </h2>
            <p className="text-gray-700 leading-relaxed">
              L’accès au Site est gratuit et libre pour la consultation des informations générales.
            </p>
            <p className="text-gray-700 leading-relaxed">
              La création d’un compte professionnel est nécessaire pour accéder aux tarifs dégressifs selon volume, configurer une commande et procéder au paiement. Elle nécessite la fourniture d’informations d’identification professionnelle (SIRET, raison sociale, contact professionnel).
            </p>
            <p className="text-gray-700 leading-relaxed">
              L’utilisateur garantit l’exactitude et l’actualité des informations communiquées et s’engage à les mettre à jour en cas de modification.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">
              4. CONTENU INFORMATIF DU SITE
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Les informations présentées sur le Site concernant les applications bipSOS (fonctionnalités d’alerte, géolocalisation, détection de chute, services de téléassistance 24/7, etc.) ont un caractère purement informatif et non contractuel.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Seules les Conditions Générales du Contrat bipSOS, signées électroniquement lors du processus de commande, définissent les droits et obligations contractuels des parties.
            </p>
            <p className="text-gray-700 leading-relaxed">
              SAS Optimus Prime s’efforce de maintenir les informations du Site à jour et exactes, mais ne saurait garantir l’exactitude, la complétude ou l’actualité des informations diffusées.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En conséquence, SAS Optimus Prime décline toute responsabilité en cas d’erreur, d’omission ou d’information obsolète présente sur le Site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">
              5. DISPONIBILITÉ ET MAINTENANCE DU SITE
            </h2>
            <p className="text-gray-700 leading-relaxed">
              SAS Optimus Prime s’efforce d’assurer l’accessibilité du Site 24 heures sur 24, 7 jours sur 7, sous réserve des opérations de maintenance et des mises à jour nécessaires au bon fonctionnement du Site.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Toutefois, SAS Optimus Prime ne garantit pas la disponibilité continue et ininterrompue du Site.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Le Site peut être temporairement indisponible en raison d’opérations de maintenance technique, de mises à jour, de pannes techniques ou de circonstances indépendantes de la volonté de SAS Optimus Prime.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En cas d’indisponibilité temporaire du Site, l’impossibilité de passer commande est considérée comme acceptable et ne saurait engager la responsabilité de SAS Optimus Prime.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">
              6. PROCESSUS DE COMMANDE
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Le processus de commande sur le Site pro.bipsos.com se déroule en six étapes successives :
            </p>

            <div className="space-y-6 ml-4">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Étape 1 : Création du compte professionnel</h3>
                <p className="text-gray-700 leading-relaxed">
                  L’utilisateur crée un compte professionnel en fournissant les informations suivantes :
                </p>
                <div className="ml-4">
                  <p className="text-gray-700 font-semibold">Informations sur l’entreprise :</p>
                  <ul className="space-y-1 text-gray-700 list-disc list-inside ml-4">
                    <li>SIRET</li>
                    <li>Raison sociale</li>
                    <li>Adresse du siège social</li>
                    <li>Effectif de l’entreprise</li>
                    <li>Secteur d’activité</li>
                  </ul>
                </div>
                <div className="ml-4">
                  <p className="text-gray-700 font-semibold">Informations sur le contact professionnel :</p>
                  <ul className="space-y-1 text-gray-700 list-disc list-inside ml-4">
                    <li>Nom et prénom</li>
                    <li>Fonction dans l’entreprise</li>
                    <li>Adresse email professionnelle</li>
                    <li>Numéro de téléphone professionnel</li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  La création du compte professionnel donne accès aux tarifs dégressifs selon volume.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Étape 2 : Choix de l’offre et du nombre de licences</h3>
                <p className="text-gray-700 leading-relaxed">
                  Une fois connecté à son compte professionnel, l’utilisateur sélectionne l’offre ou les offres souhaitées :
                </p>
                <ul className="space-y-1 text-gray-700 list-disc list-inside ml-4">
                  <li>Gardian (furtivité, commande vocale, double-clic, détection de chute, alertes vers services d’urgence OU proches)</li>
                  <li>Active Assistance (toutes fonctionnalités Gardian + centre de téléassistance 24/7 multilingue avec temps de réponse garanti 10 secondes)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  L’utilisateur indique le nombre de licences souhaitées pour chaque offre. Les tarifs dégressifs selon volume s’appliquent automatiquement.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Étape 3 : Signature électronique des Conditions Générales du Contrat bipSOS</h3>
                <p className="text-gray-700 leading-relaxed">
                  Avant tout paiement, l’utilisateur doit obligatoirement prendre connaissance et accepter les Conditions Générales du Contrat bipSOS en cliquant sur le bouton « J’accepte ».
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Cette acceptation constitue une signature électronique simple au sens du règlement européen eIDAS n°910/2014. Le signataire est identifié via son compte professionnel créé à l’étape 1.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Les données suivantes sont collectées et conservées à titre de preuve contractuelle : adresse IP de connexion, date et heure exacte de la signature (horodatage), version du document signé (PDF non modifiable).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Cette preuve est conservée pendant 10 ans conformément aux délais de prescription commerciale.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Étape 4 : Paiement via Stripe</h3>
                <p className="text-gray-700 leading-relaxed">
                  Le paiement s’effectue via la plateforme sécurisée Stripe. SAS Optimus Prime agit en qualité de marchand et Stripe en qualité de processeur de paiement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Les données bancaires (numéro de carte, cryptogramme) sont traitées exclusivement par Stripe. SAS Optimus Prime ne stocke aucune donnée bancaire.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Le paiement est sécurisé selon les normes PCI-DSS (Payment Card Industry Data Security Standard).
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Étape 5 : Confirmation de commande</h3>
                <p className="text-gray-700 leading-relaxed">
                  Une fois le paiement validé, l’utilisateur reçoit une confirmation de commande par email à l’adresse professionnelle fournie lors de la création du compte.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Cette confirmation comporte : le récapitulatif de la commande (offres choisies, nombre de licences), le montant total payé, les coordonnées du compte professionnel.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Étape 6 : Activation des licences et téléchargement des applications</h3>
                <p className="text-gray-700 leading-relaxed">
                  Le responsable de l’entreprise reçoit par email les codes d’activation des licences achetées.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Les applications bipSOS (Gardian et/ou Active Assistance) sont à télécharger sur les stores officiels :
                </p>
                <ul className="space-y-1 text-gray-700 list-disc list-inside ml-4">
                  <li>App Store (iOS) : disponible sur <a href="https://apps.apple.com" className="hover:underline">https://apps.apple.com</a></li>
                  <li>Google Play Store (Android) : disponible sur <a href="https://play.google.com" className="hover:underline">https://play.google.com</a></li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Une fois les applications téléchargées, les utilisateurs finaux (salariés, membres de l’organisation) activent leur licence en saisissant le code d’activation fourni.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">
              7. SIGNATURE ÉLECTRONIQUE
            </h2>
            <p className="text-gray-700 leading-relaxed">
              La signature électronique des Conditions Générales du Contrat bipSOS s’effectue par la méthode du « clic d’acceptation » (signature électronique simple).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Conformément au règlement européen eIDAS n°910/2014, cette signature électronique simple possède une valeur probante et constitue un engagement contractuel juridiquement contraignant.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Le signataire est identifié via son compte professionnel préalablement créé (étape 1), garantissant ainsi la traçabilité et l’authenticité de la signature.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Les éléments de preuve suivants sont conservés :
            </p>
            <ul className="space-y-1 text-gray-700 list-disc list-inside ml-4">
              <li>Identité du signataire (compte professionnel avec SIRET et contact)</li>
              <li>Adresse IP de connexion au moment de la signature</li>
              <li>Date et heure exacte de la signature (horodatage certifié)</li>
              <li>Version intégrale du document accepté (PDF non modifiable)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Ces preuves sont conservées pendant 10 ans conformément aux délais de prescription commerciale applicables en droit français.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">
              8. LIENS HYPERTEXTES EXTERNES
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Le Site peut contenir des liens hypertextes renvoyant vers des sites internet exploités par des tiers, notamment :
            </p>
            <ul className="space-y-1 text-gray-700 list-disc list-inside ml-4">
              <li>App Store d’Apple (téléchargement des applications bipSOS)</li>
              <li>Google Play Store (téléchargement des applications bipSOS)</li>
              <li>Réseaux sociaux de bipSOS (LinkedIn, Twitter, Facebook, etc.)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Ces liens externes sont fournis à titre informatif uniquement. SAS Optimus Prime n’exerce aucun contrôle sur le contenu, la disponibilité ou les politiques de confidentialité de ces sites tiers et décline toute responsabilité à leur égard.
            </p>
            <p className="text-gray-700 leading-relaxed">
              L’utilisateur reconnaît que l’accès à ces sites externes s’effectue sous sa seule et entière responsabilité.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">
              9. PROPRIÉTÉ INTELLECTUELLE
            </h2>
            <p className="text-gray-700 leading-relaxed">
              L’ensemble des contenus présents sur le Site (textes, images, logos, graphismes, vidéos, icônes, sons, logiciels, bases de données, etc.) est la propriété exclusive de SAS Optimus Prime ou fait l’objet d’une autorisation d’utilisation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              La marque bipSOS™ est une marque déposée.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est strictement interdite sans l’autorisation écrite préalable de SAS Optimus Prime.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Toute exploitation non autorisée du Site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions du Code de la propriété intellectuelle.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">
              10. LIMITATION DE RESPONSABILITÉ
            </h2>
            <p className="text-gray-700 leading-relaxed">
              SAS Optimus Prime met tout en œuvre pour assurer le bon fonctionnement du Site, mais ne saurait garantir :
            </p>
            <ul className="space-y-1 text-gray-700 list-disc list-inside ml-4">
              <li>L’exactitude, la complétude ou l’actualité des informations diffusées sur le Site</li>
              <li>La disponibilité permanente et ininterrompue du Site</li>
              <li>L’absence d’erreurs, de bugs ou de dysfonctionnements techniques</li>
              <li>L’absence de virus ou d’éléments malveillants</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              En conséquence, SAS Optimus Prime décline toute responsabilité pour :
            </p>
            <ul className="space-y-1 text-gray-700 list-disc list-inside ml-4">
              <li>Tout dommage direct ou indirect résultant de l’utilisation du Site ou de l’impossibilité d’y accéder</li>
              <li>Toute décision prise sur la base des informations présentes sur le Site</li>
              <li>Toute perte de données, altération de fichiers ou intrusion malveillante</li>
              <li>Tout dysfonctionnement ou indisponibilité des sites tiers accessibles via des liens hypertextes</li>
            </ul>
            <p className="text-gray-700 leading-relaxed font-semibold mt-4">
              Important : Les présentes CGU concernent uniquement l’utilisation du Site pro.bipsos.com. Les conditions d’utilisation des applications bipSOS (Gardian et Active Assistance) sont régies par les Conditions Générales du Contrat bipSOS, signées électroniquement lors du processus de commande et consultables sur les stores officiels (App Store, Google Play Store).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">
              11. PROTECTION DES DONNÉES PERSONNELLES
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Le traitement des données personnelles collectées sur le Site est régi par notre Politique de Confidentialité, accessible à l’adresse suivante :
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
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">
              12. DROIT APPLICABLE ET JURIDICTION COMPÉTENTE
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Les présentes CGU sont régies par le droit français.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En cas de litige relatif à l’interprétation ou à l’exécution des présentes CGU, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">
              13. MODIFICATIONS DES CGU
            </h2>
            <p className="text-gray-700 leading-relaxed">
              SAS Optimus Prime se réserve le droit de modifier à tout moment les présentes CGU afin de les adapter aux évolutions du Site, de la législation ou de la réglementation en vigueur.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Les CGU applicables sont celles en vigueur au moment de votre accès au Site. La date de dernière mise à jour est indiquée en haut du présent document.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Les utilisateurs sont invités à consulter régulièrement les CGU afin de prendre connaissance des éventuelles modifications.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">
              14. CONTACT
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Pour toute question concernant les présentes CGU, vous pouvez nous contacter :
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>Email : <a href="mailto:contact.pro@bipsos.com" className="hover:underline font-semibold">contact.pro@bipsos.com</a></li>
              <li>Téléphone : 0805 620 450</li>
              <li>Courrier : SAS Optimus Prime – 92 boulevard Président Wilson, 06160 Antibes Juan-les-Pins – France</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}