import PageShell from './PageShell.jsx'

export default function TermsOfService() {
  return (
    <PageShell
      title="Terms of Service"
      subtitle="Last updated: May 2026"
    >
      <h2 className="text-white text-xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        By accessing or using Sai Sree Logistics services, you agree to be bound by these
        Terms of Service. If you do not agree with any part of these terms, please refrain
        from using our services. These terms constitute a legally binding agreement between
        you and Sai Sree Logistics.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">2. Services Description</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Sai Sree Logistics provides third-party logistics (3PL) services including warehousing,
        freight transportation, inbound and outbound logistics, manpower supply, and supply
        chain consulting. Specific service terms, pricing, and deliverables are outlined in
        individual service agreements or contracts signed between both parties.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">3. User Responsibilities</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        You agree to:
      </p>
      <ul className="text-gray-400 space-y-2 ml-6 mb-4">
        <li className="list-disc">Provide accurate and complete shipment, contact, and billing information</li>
        <li className="list-disc">Ensure proper packaging, labelling, and documentation of all goods</li>
        <li className="list-disc">Declare hazardous or special-handling items at the time of booking</li>
        <li className="list-disc">Comply with all applicable laws, regulations, and customs requirements</li>
        <li className="list-disc">Maintain the confidentiality of your account credentials and notify us of any unauthorized use</li>
      </ul>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">4. Prohibited Goods</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        The following goods are strictly prohibited from storage or transportation through our
        services: illegal substances and narcotics, explosives and weapons, radioactive materials,
        stolen goods, and any items prohibited by Indian law. We reserve the right to inspect
        shipments and refuse service for prohibited items without liability.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">5. Pricing & Payment</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Pricing is determined based on the scope of services, volume, duration, and any special
        requirements. All prices are quoted in Indian Rupees (INR) unless otherwise specified.
        Payment terms are outlined in individual service agreements. Late payments may incur
        interest charges as specified in the agreement.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Sai Sree Logistics shall not be liable for indirect, incidental, special, or consequential
        damages arising from the use of our services. Our total liability is limited to the value
        of the specific shipment or service as defined in your service agreement. We encourage
        clients to declare the full value of high-value shipments for appropriate coverage.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">7. Insurance</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        All stored goods are covered under our comprehensive warehouse insurance policy.
        For transportation, insurance can be arranged at an additional cost based on the
        declared value of the shipment. Claims must be filed within the timeframe specified
        in your service agreement with supporting documentation.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">8. Termination</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Either party may terminate the service agreement with written notice as per the notice
        period specified in the contract. Upon termination, all outstanding dues must be settled
        and stored goods must be collected within the agreed notice period. We reserve the right
        to suspend services for non-payment or material breach of terms.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">9. Governing Law</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        These terms shall be governed by and construed in accordance with the laws of India.
        Any disputes arising from these terms or the use of our services shall be subject to
        the exclusive jurisdiction of the courts in Thiruvallur, Tamil Nadu.
      </p>
    </PageShell>
  )
}
