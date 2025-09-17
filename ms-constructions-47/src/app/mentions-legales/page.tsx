import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales - MS Constructions 47',
  description: 'Mentions légales de MS Constructions 47, entreprise de maçonnerie dans le Lot-et-Garonne.',
  robots: { index: false, follow: false }
}

export default function MentionsLegales() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Informations sur l&apos;entreprise</h2>
            <p className="mb-4">
              <strong>Dénomination sociale :</strong> MS Constructions 47<br/>
              <strong>Forme juridique :</strong> Société à Responsabilité Limitée (SARL)<br/>
              <strong>Siège social :</strong> 15 Avenue de la République, 47000 Agen<br/>
              <strong>SIRET :</strong> 123 456 789 00012<br/>
              <strong>Code APE :</strong> 4399C - Travaux de maçonnerie générale et gros œuvre de bâtiment<br/>
              <strong>TVA Intracommunautaire :</strong> FR12345678900<br/>
              <strong>Téléphone :</strong> 05 53 12 34 56<br/>
              <strong>Email :</strong> contact@ms-constructions47.fr
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">2. Responsable de publication</h2>
            <p className="mb-4">
              Le responsable de publication du site est le gérant de la société MS Constructions 47.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">3. Hébergement</h2>
            <p className="mb-4">
              Le site est hébergé par Vercel Inc.<br/>
              340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">4. Assurances et garanties</h2>
            <p className="mb-4">
              <strong>Assurance Responsabilité Civile Professionnelle :</strong><br/>
              Assureur : [Nom de l&apos;assureur]<br/>
              Numéro de police : [Numéro]<br/>
              <br/>
              <strong>Garantie Décennale :</strong><br/>
              Assureur : [Nom de l&apos;assureur]<br/>
              Numéro de police : [Numéro]
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">5. Qualifications professionnelles</h2>
            <p className="mb-4">
              • Certification RGE (Reconnu Garant de l&apos;Environnement)<br/>
              • Qualification Qualibat<br/>
              • 35 années d&apos;expérience dans le secteur de la maçonnerie
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">6. Propriété intellectuelle</h2>
            <p className="mb-4">
              Tous les éléments du site (textes, images, logos, etc.) sont protégés par le droit d&apos;auteur. 
              Toute reproduction sans autorisation est interdite.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}