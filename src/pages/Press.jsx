import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const articles = [
  {
    title: 'Sai Sree Logistics Expands Warehouse Capacity in Kannigaipur',
    source: 'Logistics Today',
    date: 'January 2025',
    excerpt: 'Sai Sree Logistics announces expansion of its warehouse facilities with an additional 50,000 sq ft of storage space to meet growing demand for 3PL services in northern Tamil Nadu.',
  },
  {
    title: 'Kannigaipur-Based Logistics Firm Achieves 99.5% On-Time Rate',
    source: 'Supply Chain Weekly',
    date: 'November 2024',
    excerpt: 'Sai Sree Logistics\' commitment to SOP-driven operations earns industry recognition with exceptional on-time delivery metrics across warehousing and transportation services.',
  },
  {
    title: 'Sai Sree Logistics Launches Dedicated Manpower Supply Division',
    source: 'HR Today India',
    date: 'September 2024',
    excerpt: 'The new division offers both permanent and temporary staffing solutions for warehouses and logistics operations, addressing a critical need in Tamil Nadu\'s industrial sector.',
  },
  {
    title: 'How Sai Sree Logistics is Digitizing Supply Chain Operations',
    source: 'Tech in Logistics',
    date: 'July 2024',
    excerpt: 'From ERP integration to real-time GPS tracking and digital MIS reporting, the company is leveraging technology to bring transparency and efficiency to traditional logistics operations.',
  },
  {
    title: 'Sai Sree Logistics Partners with Leading FMCG Brands for 3PL Services',
    source: 'Business Standard',
    date: 'May 2024',
    excerpt: 'The multi-year partnership covers end-to-end warehousing, inventory management, and distribution for major FMCG companies across Tamil Nadu distribution networks.',
  },
  {
    title: 'Safety First: Sai Sree Logistics Sets New Standards for Warehouse Operations',
    source: 'Industrial Safety Review',
    date: 'March 2024',
    excerpt: 'With 24/7 CCTV monitoring, regular safety drills, and comprehensive insurance coverage, the company is raising the bar for safety compliance in the logistics industry.',
  },
]

export default function Press() {
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

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">Press</h1>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">Media coverage and announcements from Sai Sree Logistics.</p>

          <div className="space-y-4">
            {articles.map((article) => (
              <div key={article.title} className="bg-dark-2/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full">{article.source}</span>
                  <span className="text-gray-600 text-xs">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{article.excerpt}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">For press inquiries, contact:</p>
            <a href="mailto:saisreelogistics16@gmail.com" className="text-accent hover:underline text-sm">saisreelogistics16@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}
