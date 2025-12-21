"use client";

import "../../app/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function CGUPage() {
  return (
    <>
      <div
        className={`min-h-screen bg-white text-black antialiased ${poppins.variable} font-sans`}
      >
        <main className="mx-auto max-w-3xl px-6 py-12 pb-20 pt-30">
          <header className="mb-12 border-b-2 border-gray-100 pb-8">
            <h1 className="mb-4 text-3xl font-bold text-[#1A2B52] md:text-4xl">
              Conditions Générales d’Utilisation
            </h1>
            <p className="text-sm text-gray-600">
              <strong>Site :</strong> pro.bipsos.com
              <br />
              <strong>Date de mise à jour :</strong> 6 décembre 2025
              <br />
              <strong>Version :</strong> 1.0
            </p>
          </header>
          <nav className="mb-12 rounded-xl bg-gray-50 p-8">
            <h2 className="mb-4 text-lg font-bold text-[#1A2B52]">
              Sommaire
            </h2>
            <ol className="space-y-2 text-sm text-[#1A2B52]">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-[#E31E24] hover:underline transition"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-14">
            {articles.map((article) => (
              <section
                key={article.id}
                id={article.id}
                className="scroll-mt-20"
              >
                <h2 className="mb-5 border-b border-gray-200 pb-3 text-xl font-bold text-[#1A2B52]">
                  {article.title}
                </h2>
                {article.content}
              </section>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

const tocItems = [
  { id: "article-1", title: "Article 1 – Objet" },
  { id: "article-2", title: "Article 2 – Définitions" },
  { id: "article-3", title: "Article 3 – Acceptation des CGU" },
  { id: "article-4", title: "Article 4 – Accès au site" },
  { id: "article-5", title: "Article 5 – Création de compte" },
  { id: "article-6", title: "Article 6 – Vérification et validation" },
  { id: "article-7", title: "Article 7 – Obligations de l’utilisateur" },
  { id: "article-8", title: "Article 8 – Propriété intellectuelle" },
  { id: "article-9", title: "Article 9 – Responsabilités" },
  { id: "article-10", title: "Article 10 – Liens hypertextes" },
  { id: "article-11", title: "Article 11 – Modification des CGU" },
  { id: "article-12", title: "Article 12 – Droit applicable et juridiction" },
  { id: "article-13", title: "Article 13 – Contact" },
];

const articles = [
  {
    id: "article-1",
    title: "Article 1 – Objet",
    content: (
      <>
        <p>
          Les présentes Conditions Générales d’Utilisation (ci-après « CGU »)
          ont pour objet de définir les modalités et conditions d’utilisation du
          site <strong>pro.bipsos.com</strong> (ci-après le « Site »), ainsi que
          les droits et obligations des parties dans ce cadre.
        </p>
        <p className="mt-4">
          Le Site permet aux professionnels (entreprises, associations,
          fédérations, collectivités, indépendants) de créer un compte, de
          s’informer sur les solutions bipSOS et de souscrire aux offres de
          distribution ou de partenariat.
        </p>
      </>
    ),
  },
  {
    id: "article-2",
    title: "Article 2 – Définitions",
    content: (
      <ul className="ml-6 list-disc space-y-3">
        <li>
          <strong>Éditeur</strong> : SAS Optimus Prime, distributeur exclusif de
          bipSOS en France, éditeur du Site.
        </li>
        <li>
          <strong>Opérateur</strong> : Active Business Développement, éditeur et
          opérateur des applications et services bipSOS.
        </li>
        <li>
          <strong>Utilisateur</strong> : toute personne physique ou morale
          accédant au Site et/ou créant un compte.
        </li>
        <li>
          <strong>Compte</strong> : espace personnel créé par l’Utilisateur
          après validation de son inscription.
        </li>
        <li>
          <strong>Applications bipSOS</strong> : applications mobiles bipSOS
          World, bipSOS Gardian et bipSOS Active Assistance, téléchargeables sur
          App Store et Google Play.
        </li>
        <li>
          <strong>Utilisateur final</strong> : personne physique utilisant les
          applications bipSOS (salarié, client, follower, bénéficiaire selon le
          canal de distribution).
        </li>
      </ul>
    ),
  },
  {
    id: "article-3",
    title: "Article 3 – Acceptation des CGU",
    content: (
      <>
        <p>
          L’accès et l’utilisation du Site impliquent l’acceptation pleine et
          entière des présentes CGU. En créant un compte, l’Utilisateur
          reconnaît avoir pris connaissance des présentes CGU et les accepter
          sans réserve.
        </p>
        <p className="mt-4">
          L’Éditeur se réserve le droit de modifier les présentes CGU à tout
          moment. Les CGU applicables sont celles en vigueur à la date de
          connexion de l’Utilisateur au Site.
        </p>
      </>
    ),
  },
  {
    id: "article-4",
    title: "Article 4 – Accès au site",
    content: (
      <>
        <p>
          Le Site est accessible gratuitement à tout Utilisateur disposant d’un
          accès à Internet. Tous les coûts afférents à l’accès au Site (matériel
          informatique, connexion Internet) sont à la charge de l’Utilisateur.
        </p>
        <p className="mt-4">
          L’Éditeur met en œuvre tous les moyens raisonnables pour assurer un
          accès de qualité au Site, sans obligation de résultat. L’Éditeur se
          réserve le droit de suspendre, limiter ou interrompre l’accès au Site
          pour des raisons de maintenance ou pour toute autre raison, sans
          préavis ni indemnité.
        </p>
      </>
    ),
  },
  {
    id: "article-5",
    title: "Article 5 – Création de compte",
    content: (
      <>
        <p>
          La création d’un compte est réservée aux professionnels. L’Utilisateur
          s’engage à fournir des informations exactes, complètes et à jour lors
          de son inscription, notamment :
        </p>
        <ul className="ml-6 mt-4 list-disc space-y-2">
          <li>
            Identité du contact (civilité, nom, prénom, fonction, email,
            téléphone)
          </li>
          <li>
            Identification de la structure (raison sociale, adresse officielle,
            SIRET, RNA ou numéro professionnel selon le cas)
          </li>
          <li>
            Informations complémentaires selon le type de compte (type
            d’activité, effectif, taille du réseau, etc.)
          </li>
        </ul>
        <p className="mt-4">
          L’Utilisateur est seul responsable de la confidentialité de ses
          identifiants de connexion. Toute utilisation du compte avec ses
          identifiants est réputée effectuée par l’Utilisateur lui-même.
        </p>
      </>
    ),
  },
  {
    id: "article-6",
    title: "Article 6 – Vérification et validation",
    content: (
      <>
        <p>
          Toute demande de création de compte fait l’objet d’une vérification
          par l’Éditeur. Cette vérification porte notamment sur :
        </p>
        <ul className="ml-6 mt-4 list-disc space-y-2">
          <li>
            La validité du numéro SIRET, RNA ou du numéro professionnel
            communiqué
          </li>
          <li>La cohérence des informations fournies</li>
          <li>
            L’éligibilité au programme sollicité (Entreprise, Distributeur,
            Influenceur, Prescripteur)
          </li>
        </ul>
        <p className="mt-4">
          Le délai de vérification est généralement de 24 à 72 heures ouvrées
          selon le type de compte. L’Éditeur se réserve le droit de refuser
          toute demande sans avoir à justifier sa décision.
        </p>
        <p className="mt-4">
          Après validation, l’Utilisateur reçoit une confirmation par email et
          peut accéder à son espace personnel pour finaliser la
          contractualisation selon les conditions propres à chaque programme.
        </p>
      </>
    ),
  },
  {
    id: "article-7",
    title: "Article 7 – Obligations de l’utilisateur",
    content: (
      <>
        <p>L’Utilisateur s’engage à :</p>
        <ul className="ml-6 mt-4 list-disc space-y-2">
          <li>
            Utiliser le Site conformément à sa destination et aux présentes CGU
          </li>
          <li>Ne pas porter atteinte à la sécurité ou à l’intégrité du Site</li>
          <li>Ne pas collecter d’informations sur d’autres utilisateurs</li>
          <li>
            Ne pas utiliser le Site à des fins illicites ou contraires à l’ordre
            public
          </li>
          <li>
            Informer sans délai l’Éditeur de toute modification concernant sa
            structure (changement de raison sociale, cessation d’activité, etc.)
          </li>
          <li>Maintenir à jour les informations de son compte</li>
        </ul>
        <p className="mt-4">
          En cas de manquement à ces obligations, l’Éditeur se réserve le droit
          de suspendre ou supprimer le compte de l’Utilisateur sans préavis ni
          indemnité.
        </p>
      </>
    ),
  },
  {
    id: "article-8",
    title: "Article 8 – Propriété intellectuelle",
    content: (
      <>
        <p>
          Le Site et l’ensemble de ses contenus (textes, images, logos, vidéos,
          éléments graphiques, structure) sont protégés par les droits de
          propriété intellectuelle.
        </p>
        <p className="mt-4">
          La marque <strong>bipSOS</strong>, le logo et les applications
          associées sont la propriété exclusive d’Active Business Développement.
        </p>
        <p className="mt-4">
          Toute reproduction, représentation, modification, publication,
          adaptation de tout ou partie des éléments du Site, quel que soit le
          moyen ou le procédé utilisé, est interdite sans autorisation écrite
          préalable.
        </p>
        <p className="mt-4">
          L’Utilisateur bénéficie uniquement d’un droit d’usage privé, personnel
          et non exclusif du Site, dans le cadre de son activité professionnelle
          et conformément aux présentes CGU.
        </p>
      </>
    ),
  },
  {
    id: "article-9",
    title: "Article 9 – Responsabilités",
    content: (
      <>
        <p className="font-semibold">Responsabilité de l’Éditeur</p>
        <p className="mt-3">
          L’Éditeur s’efforce d’assurer l’exactitude et la mise à jour des
          informations diffusées sur le Site. Toutefois, il ne peut garantir
          l’exactitude, la précision ou l’exhaustivité des informations mises à
          disposition.
        </p>
        <p className="mt-3">
          Les informations présentes sur le Site sont fournies à titre indicatif
          et ne sauraient constituer un engagement contractuel. Seuls les
          contrats signés entre l’Éditeur et l’Utilisateur font foi.
        </p>
        <p className="mt-3">
          L’Éditeur décline toute responsabilité en cas de :
        </p>
        <ul className="ml-6 mt-3 list-disc space-y-1">
          <li>Interruption du Site pour maintenance ou mise à jour</li>
          <li>Impossibilité temporaire d’accéder au Site</li>
          <li>Présence de virus ou autres éléments nuisibles</li>
          <li>Utilisation frauduleuse du Site par un tiers</li>
        </ul>

        <p className="mt-6 font-semibold">Responsabilité de l’Utilisateur</p>
        <p className="mt-3">
          L’Utilisateur est seul responsable de l’utilisation qu’il fait du Site
          et des informations qu’il communique. Il garantit l’Éditeur contre
          toute réclamation de tiers liée à son utilisation du Site.
        </p>
      </>
    ),
  },
  {
    id: "article-10",
    title: "Article 10 – Liens hypertextes",
    content: (
      <>
        <p>
          Le Site peut contenir des liens hypertextes vers d’autres sites
          internet. L’Éditeur n’exerce aucun contrôle sur ces sites et décline
          toute responsabilité quant à leur contenu ou aux services qu’ils
          proposent.
        </p>
        <p className="mt-4">
          La création de liens hypertextes vers le Site est soumise à
          autorisation préalable de l’Éditeur.
        </p>
      </>
    ),
  },
  {
    id: "article-11",
    title: "Article 11 – Modification des CGU",
    content: (
      <>
        <p>
          L’Éditeur se réserve le droit de modifier les présentes CGU à tout
          moment. Les modifications entrent en vigueur dès leur publication sur
          le Site.
        </p>
        <p className="mt-4">
          L’Utilisateur est invité à consulter régulièrement les CGU. La
          poursuite de l’utilisation du Site après modification des CGU vaut
          acceptation des nouvelles conditions.
        </p>
      </>
    ),
  },
  {
    id: "article-12",
    title: "Article 12 – Droit applicable et juridiction",
    content: (
      <>
        <p>Les présentes CGU sont soumises au droit français.</p>
        <p className="mt-4">
          En cas de litige relatif à l’interprétation ou à l’exécution des
          présentes CGU, les parties s’efforceront de trouver une solution
          amiable. À défaut, le litige sera porté devant les tribunaux
          compétents du ressort du siège social de l’Éditeur.
        </p>
      </>
    ),
  },
  {
    id: "article-13",
    title: "Article 13 – Contact",
    content: (
      <>
        <p>
          Pour toute question relative aux présentes CGU ou à l’utilisation du
          Site, l’Utilisateur peut contacter l’Éditeur :
        </p>
        <div className="my-8 rounded-r-lg border-l-4 border-[#E31E24] bg-red-50/30 p-6 font-medium text-[#1A2B52]">
          <strong>SAS Optimus Prime</strong>
          <br />
          92 boulevard Président Wilson
          <br />
          06160 Antibes Juan-les-Pins – France
          <br />
          <br />
          <strong>Téléphone :</strong> 0805 620 450
          <br />
          <strong>Email :</strong> pro.contact@bipsos.com
          <br />
          <strong>RCS :</strong> Antibes B 844 682 336
          <br />
          <strong>TVA :</strong> FR08844682336
        </div>
      </>
    ),
  },
];
