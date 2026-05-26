import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const faqs = [
  {
    q: 'What areas do you serve?',
    a: 'We are based in Kannigaipur, Tamil Nadu, and serve clients across the state. We also coordinate pan-India transportation through our partner network covering all major industrial corridors.',
  },
  {
    q: 'What types of vehicles do you offer?',
    a: 'We provide all kinds of vehicles — from small delivery vans (1 ton) to full-size trucks (6-wheel, 10-wheel), container trailers (20ft/40ft), and specialized vehicles for oversized cargo. Temperature-controlled vehicles are also available on request.',
  },
  {
    q: 'How do you ensure inventory accuracy?',
    a: 'We follow a strict SOP: FIFO-based stock rotation, Invoice vs Physical cross-verification at every stage, Bin Card and ERP mapping for real-time accuracy, and daily MIS reporting with Custodian Certificates.',
  },
  {
    q: 'Do you provide temporary labour?',
    a: 'Yes. We supply both permanent and day-based temporary labour. Whether it\'s a seasonal spike or a one-time project, we can scale from 5 to 100+ workers within 24-48 hours.',
  },
  {
    q: 'What is your pricing model?',
    a: 'Pricing depends on the service — warehousing (per sq ft/month based on location and volume), transportation (per trip or per km depending on distance), and manpower (per person/day for temporary or fixed monthly for permanent). Contact us for a detailed custom quote.',
  },
  {
    q: 'How do I start working with you?',
    a: 'Simply call us at +91 98409 23192, email saisreelogistics16@gmail.com, or fill out the contact form on our website. We\'ll discuss your requirements, visit your facility if needed, and propose a tailored solution within 2 business days.',
  },
  {
    q: 'Do you provide CCTV-monitored storage?',
    a: 'Yes. All our warehouse facilities are equipped with 24/7 CCTV surveillance with recorded backup. Access is controlled and restricted to authorized personnel only.',
  },
  {
    q: 'What is your on-time delivery rate?',
    a: 'We maintain a 99.5% on-time delivery rate across all our services, backed by real-time GPS tracking and dedicated operations coordination for every shipment.',
  },
  {
    q: 'What is the minimum storage space I can rent?',
    a: 'We offer flexible storage starting from as low as 100 sq ft. Whether you need a small locker for samples or an entire warehouse for bulk inventory, we can accommodate your needs.',
  },
  {
    q: 'Do you handle hazardous materials?',
    a: 'Yes, subject to proper declaration and compliance with safety regulations. We have designated storage zones for hazardous goods and our staff is trained in handling dangerous cargo.',
  },
  {
    q: 'Can I visit my stored goods anytime?',
    a: 'Yes, with prior notice during business hours (Monday to Saturday, 9 AM - 7 PM). Our warehouse team will accompany you and provide complete access to your inventory with documentation.',
  },
  {
    q: 'What documents do I need for warehousing?',
    a: 'You need a signed storage agreement, goods receipt note, and GST invoice copy for incoming stock. We handle all ongoing documentation including daily MIS reports, bin card updates, and Custodian Certificates.',
  },
  {
    q: 'How does billing work for logistics services?',
    a: 'We offer flexible billing cycles — weekly, bi-weekly, or monthly — based on the service agreement. All invoices include detailed breakouts with supporting MIS reports for complete transparency.',
  },
  {
    q: 'Do you provide pan-India transportation?',
    a: 'Yes. Through our network of vetted partner transporters, we cover all major cities and industrial corridors across India. We handle the coordination so you get single-point accountability.',
  },
  {
    q: 'What happens if my shipment is delayed?',
    a: 'Our operations team proactively communicates any delays with reasons and revised ETAs. We have escalation protocols to resolve issues quickly and backup vehicle arrangements for urgent shipments.',
  },
]

export default function Faqs() {
  const ref = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (ref.current) {
      ref.current.classList.remove('opacity-0', 'translate-y-10')
      ref.current.classList.add('opacity-100', 'translate-y-0')
    }
  }, [])

  return (
    <section className="relative pt-32 pb-24 lg:pb-32 min-h-screen bg-gradient-to-b from-[#F5F5F7] to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-extrabold text-sm transition-all mb-12 group">
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
              <ArrowLeft size={16} className="stroke-[3]" />
            </div>
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent mb-4 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-accent/80 text-lg mb-10 leading-relaxed font-medium">Everything you need to know about Sai Sree Logistics.</p>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-gray-50/50"
                >
                  <span className="text-accent font-bold pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-gray-100 bg-gray-50/20">
                    <p className="text-gray-500 font-semibold text-sm pt-4 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 font-semibold mb-4">Have more questions?</p>
            <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white font-extrabold px-6 py-3 rounded-full transition-all inline-block shadow-md shadow-primary/10">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
