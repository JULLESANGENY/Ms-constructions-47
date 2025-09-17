import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - MS Constructions 47',
  description: 'Politique de confidentialité et protection des données personnelles de MS Constructions 47.',
  robots: { index: false, follow: false }
}

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Collecte des données personnelles</h2>
            <p className="mb-4">
              Nous collectons des données personnelles uniquement lorsque vous nous contactez via :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Le formulaire de contact du site</li>
              <li>L&apos;envoi d&apos;un email</li>
              <li>Un appel téléphonique</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">2. Types de données collectées</h2>
            <p className="mb-4">
              Les données que nous collectons peuvent inclure :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Adresse postale</li>
              <li>Informations sur votre projet</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">3. Utilisation des données</h2>
            <p className="mb-4">
              Vos données personnelles sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Répondre à vos demandes de devis</li>
              <li>Vous contacter concernant votre projet</li>
              <li>Assurer le suivi de nos prestations</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">4. Partage des données</h2>
            <p className="mb-4">
              Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, 
              sauf obligation légale.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">5. Conservation des données</h2>
            <p className="mb-4">
              Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles 
              elles ont été collectées, conformément à la réglementation en vigueur.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">6. Vos droits</h2>
            <p className="mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit d&apos;effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">7. Contact</h2>
            <p className="mb-4">
              Pour exercer vos droits ou pour toute question concernant cette politique, 
              contactez-nous à : contact@ms-constructions47.fr
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}