"use client";

import { useState, useRef, useEffect } from "react";

export default function PrivacyPolicyPage() {
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
            Politique de confidentialité
          </h1>
        </div>
      </div>

      <div ref={contentRef} className="max-w-4xl mx-auto px-6 py-20">
        <div className={`space-y-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <section className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              La présente Politique de Confidentialité a pour objet d’informer les utilisateurs du site pro.bipsos.com des modalités de collecte, de traitement et de protection de leurs données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">1. RESPONSABLE DU TRAITEMENT DES DONNÉES</h2>
            <p className="text-gray-700 leading-relaxed">
              Le responsable du traitement des données personnelles collectées sur le site pro.bipsos.com est :
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
                N° TVA : FR08844682336
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
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">2. DÉLÉGUÉ À LA PROTECTION DES DONNÉES (DPO)</h2>
            <p className="text-gray-700 leading-relaxed">
              Pour toute question relative à la protection de vos données personnelles, vous pouvez contacter notre Délégué à la Protection des Données :
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

          <section className="space-y-6">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">3. DONNÉES PERSONNELLES COLLECTÉES</h2>
            <p className="text-gray-700 leading-relaxed">
              Le site pro.bipsos.com collecte différentes catégories de données personnelles dans le cadre de la navigation, de la création de compte professionnel et du processus de commande.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-1xl font-semibold mb-3">3.1. Données de navigation</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Lors de votre navigation sur le site pro.bipsos.com, nous collectons automatiquement :
                </p>
                <ul className="space-y-1 text-gray-700 list-disc list-inside ml-4">
                  <li>Adresse IP</li>
                  <li>Type de navigateur et version</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Source de référencement</li>
                  <li>Données de mesure d’audience via Google Analytics (données anonymisées)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-1xl font-semibold mb-3">3.2. Données du compte professionnel</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Lors de la création de votre compte professionnel, nous collectons :
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
                <div className="ml-4 mt-3">
                  <p className="text-gray-700 font-semibold">Informations sur le contact professionnel :</p>
                  <ul className="space-y-1 text-gray-700 list-disc list-inside ml-4">
                    <li>Nom et prénom</li>
                    <li>Fonction dans l’entreprise</li>
                    <li>Adresse email professionnelle</li>
                    <li>Numéro de téléphone professionnel</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-1xl font-semibold mb-3">3.3. Données de commande et paiement</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Dans le cadre du processus de commande, nous collectons et conservons :
                </p>
                <ul className="space-y-1 text-gray-700 list-disc list-inside ml-4">
                  <li>Détails de la commande (offres choisies : Gardian et/ou Active Assistance, nombre de licences)</li>
                  <li>Historique des commandes</li>
                  <li>Licences achetées et dates d’activation</li>
                  <li>Date et heure de la commande</li>
                  <li>Montant de la transaction</li>
                </ul>
                <p className="text-gray-700 mt-3 leading-relaxed font-semibold">
                  Important : Les données bancaires (numéro de carte, cryptogramme) sont traitées exclusivement par notre prestataire de paiement sécurisé Stripe. SAS Optimus Prime ne stocke aucune donnée bancaire.
                </p>
              </div>

              <div>
                <h3 className="text-1xl font-semibold mb-3">3.4. Données de signature électronique</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Lors de la signature électronique des Conditions Générales du Contrat bipSOS, nous conservons :
                </p>
                <ul className="space-y-1 text-gray-700 list-disc list-inside ml-4">
                  <li>Adresse IP de connexion</li>
                  <li>Date et heure exacte de la signature (horodatage)</li>
                  <li>Version du document signé (PDF non modifiable)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">4. FINALITÉS DES TRAITEMENTS</h2>
            <p className="text-gray-700 leading-relaxed">
              Les données personnelles collectées sont utilisées pour les finalités suivantes :
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
              <li>Gestion des comptes professionnels : création, authentification, administration du compte</li>
              <li>Traitement des commandes : validation, paiement, activation des licences, envoi des emails de confirmation</li>
              <li>Gestion contractuelle : exécution du contrat, conservation des preuves de signature électronique</li>
              <li>Support technique et commercial : réponse aux demandes, assistance technique</li>
              <li>Amélioration du site : analyse statistique de fréquentation, optimisation de l’expérience utilisateur</li>
              <li>Obligations légales : facturation, comptabilité, respect des obligations fiscales et sociales</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">5. BASE LÉGALE DES TRAITEMENTS</h2>
            <p className="text-gray-700 leading-relaxed">
              Les traitements de données personnelles reposent sur les bases légales suivantes :
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
              <li>Exécution du contrat : traitement des commandes, gestion des licences, fourniture des services</li>
              <li>Consentement : utilisation de cookies (Google Analytics) après acceptation via le bandeau de consentement</li>
              <li>Obligation légale : conservation des données comptables et fiscales, conservation des preuves de signature électronique</li>
              <li>Intérêt légitime : amélioration du site, sécurité des systèmes d’information</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">6. DESTINATAIRES DES DONNÉES</h2>
            <p className="text-gray-700 leading-relaxed">
              Vos données personnelles sont destinées aux services internes de SAS Optimus Prime (équipes commerciales, techniques, administratives). Elles peuvent également être communiquées aux destinataires suivants :
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
              <li>Prestataire de paiement : Stripe (traitement sécurisé des paiements)</li>
              <li>Hébergeur du site : Infomaniak Network SA (Suisse)</li>
              <li>Outil de mesure d’audience : Google Analytics (données anonymisées)</li>
              <li>Autorités publiques : uniquement sur réquisition judiciaire ou administrative</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Aucune donnée personnelle n’est vendue ou louée à des tiers à des fins commerciales.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">7. DURÉES DE CONSERVATION DES DONNÉES</h2>
            <p className="text-gray-700 leading-relaxed">
              Les données personnelles sont conservées pendant les durées suivantes :
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
              <li>Données de navigation (Google Analytics) : 26 mois maximum (anonymisation automatique)</li>
              <li>Compte professionnel actif : durée du contrat (12 mois renouvelables)</li>
              <li>Compte professionnel inactif : suppression automatique après 24 mois sans commande</li>
              <li>Historique des commandes : 10 ans (obligations comptables et fiscales)</li>
              <li>Preuves de signature électronique : 10 ans (prescription commerciale et obligation de preuve contractuelle)</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">8. VOS DROITS (RGPD)</h2>
            <p className="text-gray-700 leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            
            <div className="space-y-4 ml-4">
              <div>
                <h3 className="text-m font-semibold text-gray-900">8.1. Droit d’accès</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vous pouvez obtenir la confirmation que des données vous concernant sont traitées et accéder à ces données.
                </p>
              </div>

              <div>
                <h3 className="text-m font-semibold text-gray-900">8.2. Droit de rectification</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vous pouvez demander la correction de données inexactes ou incomplètes vous concernant.
                </p>
              </div>

              <div>
                <h3 className="text-m font-semibold text-gray-900">8.3. Droit à l’effacement (« droit à l’oubli »)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vous pouvez demander la suppression de vos données personnelles, sauf si leur conservation est nécessaire pour respecter une obligation légale (comptabilité, fiscalité, preuves contractuelles).
                </p>
              </div>

              <div>
                <h3 className="text-m font-semibold text-gray-900">8.4. Droit à la limitation du traitement</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vous pouvez demander la limitation du traitement de vos données dans certaines situations (contestation de l’exactitude, traitement illicite, etc.).
                </p>
              </div>

              <div>
                <h3 className="text-m font-semibold text-gray-900">8.5. Droit à la portabilité</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vous pouvez recevoir vos données dans un format structuré et couramment utilisé, et les transmettre à un autre responsable de traitement.
                </p>
              </div>

              <div>
                <h3 className="text-m font-semibold text-gray-900">8.6. Droit d’opposition</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vous pouvez vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière, sauf si le traitement repose sur des motifs légitimes impérieux.
                </p>
              </div>

              <div>
                <h3 className="text-m font-semibold text-gray-900">8.7. Exercice de vos droits</h3>
                <p className="text-gray-700 leading-relaxed">
                  Pour exercer vos droits, vous pouvez nous contacter :
                </p>
                <ul className="space-y-1 text-gray-700 list-disc list-inside ml-4 mt-2">
                  <li>Par email : <a href="mailto:dpo@bipsos.com" className="hover:underline font-semibold">dpo@bipsos.com</a></li>
                  <li>Par courrier : SAS Optimus Prime – DPO – 92 boulevard Président Wilson, 06160 Antibes Juan-les-Pins</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Nous nous engageons à répondre à votre demande dans un délai maximum d’un mois à compter de sa réception. Une pièce d’identité pourra vous être demandée pour vérifier votre identité.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">9. COOKIES ET TRACEURS</h2>
            <p className="text-gray-700 leading-relaxed">
              Le site pro.bipsos.com utilise des cookies pour améliorer votre expérience de navigation et analyser la fréquentation du site.
            </p>

            <div className="space-y-4 ml-4">
              <div>
                <h3 className="text-m font-semibold text-gray-900">9.1. Types de cookies utilisés</h3>
                <ul className="space-y-1 text-gray-700 list-disc list-inside ml-4">
                  <li>Cookies strictement nécessaires : permettent le fonctionnement essentiel du site (authentification, sécurité, gestion de session). Ces cookies ne nécessitent pas de consentement.</li>
                  <li>Cookies de mesure d’audience (Google Analytics) : analysent la fréquentation du site de manière anonymisée. Ces cookies nécessitent votre consentement.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-m font-semibold text-gray-900">9.2. Gestion des cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lors de votre première visite, un bandeau de consentement vous permet d’accepter ou de refuser les cookies non essentiels. Vous pouvez à tout moment modifier vos préférences :
                </p>
                <ul className="space-y-1 text-gray-700 list-disc list-inside ml-4 mt-2">
                  <li>Via les paramètres de votre navigateur</li>
                  <li>Via le bandeau de gestion des cookies accessible en bas de page</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Le refus de cookies non essentiels n’empêche pas la navigation sur le site mais peut limiter certaines fonctionnalités.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">10. SÉCURITÉ DES DONNÉES</h2>
            <p className="text-gray-700 leading-relaxed">
              SAS Optimus Prime met en œuvre toutes les mesures techniques et organisationnelles appropriées pour assurer la sécurité de vos données personnelles et prévenir leur altération, leur perte ou tout accès non autorisé. Ces mesures incluent notamment :
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
              <li>Chiffrement des données sensibles (protocole HTTPS)</li>
              <li>Contrôle d’accès aux données personnelles (accès restreint aux personnels habilités)</li>
              <li>Sauvegarde régulière des données</li>
              <li>Hébergement sécurisé par Infomaniak (Suisse)</li>
              <li>Traitement des paiements par Stripe (prestataire certifié PCI-DSS)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              En cas de violation de données personnelles susceptible d’engendrer un risque élevé pour vos droits et libertés, nous vous en informerons dans les meilleurs délais conformément à la réglementation applicable.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">11. TRANSFERTS DE DONNÉES HORS UE</h2>
            <p className="text-gray-700 leading-relaxed">
              Les données collectées sur pro.bipsos.com sont hébergées en Suisse (Infomaniak Network SA). La Suisse bénéficie d’une décision d’adéquation de la Commission européenne reconnaissant un niveau de protection des données équivalent à celui de l’Union européenne.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Concernant Google Analytics, les données de mesure d’audience sont anonymisées et ne permettent pas l’identification des personnes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">12. DROIT DE RÉCLAMATION AUPRÈS DE LA CNIL</h2>
            <p className="text-gray-700 leading-relaxed">
              Si vous estimez que le traitement de vos données personnelles constitue une violation de la réglementation applicable, vous disposez du droit d’introduire une réclamation auprès de la Commission Nationale de l’Informatique et des Libertés (CNIL) :
            </p>
            <ul className="space-y-2 text-gray-700 ml-4 mt-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Site web : <a href="https://www.cnil.fr" className="hover:underline font-semibold ml-1">https://www.cnil.fr</a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Adresse : CNIL – 3 Place de Fontenoy – TSA 80715 – 75334 PARIS CEDEX 07
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Téléphone : 01 53 73 22 22
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">13. MODIFICATIONS DE LA POLITIQUE DE CONFIDENTIALITÉ</h2>
            <p className="text-gray-700 leading-relaxed">
              La présente Politique de Confidentialité peut être modifiée à tout moment pour refléter les évolutions de nos pratiques en matière de protection des données ou les changements législatifs. Toute modification substantielle fera l’objet d’une information préalable par email ou via une notification sur le site.
            </p>
            <p className="text-gray-700 leading-relaxed">
              La version en vigueur est celle accessible sur le site pro.bipsos.com. La date de dernière mise à jour est indiquée en haut du document.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-1xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">14. CONTACT</h2>
            <p className="text-gray-700 leading-relaxed">
              Pour toute question concernant la présente Politique de Confidentialité ou le traitement de vos données personnelles, vous pouvez nous contacter :
            </p>
            <ul className="space-y-2 text-gray-700 ml-4 mt-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Email : <a href="mailto:dpo@bipsos.com" className="hover:underline font-semibold ml-1">dpo@bipsos.com</a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Téléphone : 0805 620 450
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Courrier : SAS Optimus Prime – DPO – 92 boulevard Président Wilson, 06160 Antibes Juan-les-Pins – France
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}