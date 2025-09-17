import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | MS Constructions 47',
  description: 'CGV de MS Constructions 47 – conditions de devis, paiement, garanties, délais et responsabilités.',
  robots: { index: false, follow: false },
}

export default function CGVPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Conditions Générales de Vente</h1>
      <p className="text-gray-900 mb-8">
        Les présentes conditions générales régissent les relations contractuelles entre MS Constructions 47 et ses clients.
        Elles précisent notamment les modalités de devis, d’exécution des travaux, de paiement, de garanties et de responsabilité.
      </p>

      <div className="space-y-6 text-gray-900">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Devis et validité</h2>
          <p>Les devis sont gratuits et valables 30 jours à compter de leur date d’émission, sauf mention contraire.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Commande et acompte</h2>
          <p>La commande est réputée acceptée après signature du devis et versement éventuel d’un acompte.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Délais et exécution</h2>
          <p>Les délais sont indiqués à titre prévisionnel et peuvent varier selon conditions météorologiques et contraintes de chantier.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Paiement</h2>
          <p>Les modalités de paiement (échelonnement, échéances) figurent sur le devis. Tout retard pourra entraîner des pénalités.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Garanties</h2>
          <p>Nos travaux bénéficient des garanties légales applicables (décennale, parfait achèvement le cas échéant).</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Responsabilité</h2>
          <p>La responsabilité de MS Constructions 47 ne saurait être engagée en cas de force majeure ou fait d’un tiers.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Litiges</h2>
          <p>Tout litige sera de la compétence des juridictions d’Agen. Une solution amiable sera recherchée en priorité.</p>
        </section>
      </div>
    </div>
  )
}
