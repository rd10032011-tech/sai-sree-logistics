import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const topics = [
  { q: 'How do I get a quote?', a: 'Visit our Contact page or call +91 98409 23192. Provide your shipment details — volume, type of goods, pickup/delivery locations — and we\'ll respond within 2 hours with a customized proposal.' },
  { q: 'What documents do I need for warehousing?', a: 'You\'ll need a signed storage agreement, goods receipt note, and GST invoice copy for incoming stock. We handle all ongoing documentation including Custodian Certificates, daily MIS reports, and bin card updates.' },
  { q: 'Can I track my shipments in real time?', a: 'Yes. Every shipment is tracked from pickup to delivery via GPS. You can contact our operations team for live tracking updates, ETA information, or use our Track Shipment page for self-service.' },
  { q: 'Do you provide manpower for short-term projects?', a: 'Absolutely. We offer both permanent and day-based temporary staffing. Whether you need 5 or 50 workers, we can scale within 24-48 hours. All workers are background-verified and trained.' },
  { q: 'What is your billing cycle?', a: 'We offer flexible billing — weekly, bi-weekly, or monthly — based on the service agreement. All invoices include detailed breakouts with supporting MIS reports for complete transparency.' },
  { q: 'How does FIFO work in your warehouses?', a: 'FIFO (First-In, First-Out) is strictly enforced through our ERP system. Incoming stock is logged with date and batch details. Outbound picking automatically prioritizes older stock, and bin cards are updated in real time to reflect movements.' },
  { q: 'What safety measures are in place at your facilities?', a: 'Our warehouses have 24/7 CCTV surveillance, controlled access with visitor logging, fire extinguishers and safety equipment, regular safety drills for staff, and comprehensive insurance coverage for all stored goods.' },
  { q: 'Can you handle e-commerce fulfillment?', a: 'Yes. We provide end-to-end e-commerce fulfillment including bulk receipt, quality check, storage, pick-pack, labelling, and dispatch. We integrate with major e-commerce platforms for seamless order processing.' },
  { q: 'What is your claims process for damaged goods?', a: 'Any damage or discrepancy must be reported within 48 hours of delivery. We document with photographs, investigate the root cause, and process claims as per the terms outlined in your service agreement. Our team guides you through every step.' },
  { q: 'Do you offer customized reporting?', a: 'Yes. While our standard MIS report includes daily stock status, inward/outward movements, and Custodian Certificates, we can customize formats, metrics, and delivery schedules to match your internal reporting requirements.' },
]

export default function HelpCenter() {
  const ref = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (ref.current) {
      ref.current.classList.remove('opacity-0', 'translate-y-10')
      ref.current.classList.add('opacity-100', 'translate-y-0')
    }
  }, [])

  return (
    <section className="relative pt-32 pb-24 lg:pb-32 min-h-screen bg-dark">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-accent text-sm transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">Help Center</h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">Find answers to common questions about our logistics services.</p>

          <div className="bg-dark-2/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 sm:p-10 divide-y divide-white/5">
            {topics.map((item) => (
              <div key={item.q} className="py-6 first:pt-0 last:pb-0">
                <h3 className="text-white font-semibold text-lg mb-2">{item.q}</h3>
                <p className="text-gray-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 mb-4">Still need help?</p>
            <Link to="/contact" className="bg-accent hover:bg-accent-dark text-dark font-semibold px-6 py-3 rounded-lg transition-all inline-block">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
