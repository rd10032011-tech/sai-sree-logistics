import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'The Importance of FIFO in Warehouse Management',
    date: 'March 15, 2025',
    excerpt: 'First-In, First-Out (FIFO) is more than a method — it\'s a commitment to inventory accuracy. Learn how Sai Sree Logistics implements FIFO across all warehouses to reduce wastage and improve stock turnover.',
  },
  {
    title: 'Why Small Businesses Need a 3PL Partner',
    date: 'February 20, 2025',
    excerpt: 'From warehousing to transportation, outsourcing logistics can save small businesses time, money, and operational headaches. Here\'s what to look for in a 3PL partner and how to make the transition seamless.',
  },
  {
    title: 'Last-Mile Delivery Trends in Tamil Nadu (2025)',
    date: 'January 10, 2025',
    excerpt: 'The logistics landscape is evolving rapidly. Explore the key trends shaping last-mile delivery in Tamil Nadu and how Sai Sree Logistics stays ahead with technology and operational excellence.',
  },
  {
    title: 'How Daily MIS Reports Improve Supply Chain Visibility',
    date: 'December 5, 2024',
    excerpt: 'Transparency is the foundation of trust in logistics. Discover how our daily MIS reporting with Custodian Certificates keeps clients fully informed and in control of their inventory at all times.',
  },
  {
    title: 'Warehouse Safety Best Practices for 2025',
    date: 'November 18, 2024',
    excerpt: 'Safety is non-negotiable in warehousing operations. From CCTV surveillance to fire safety drills, learn about the comprehensive safety measures we implement across all our facilities.',
  },
  {
    title: 'The Role of Technology in Modern Supply Chain Management',
    date: 'October 22, 2024',
    excerpt: 'Technology is transforming supply chains. From ERP integration to real-time GPS tracking, see how Sai Sree Logistics leverages digital tools to deliver superior results for clients.',
  },
  {
    title: 'Planning Your Peak Season Logistics Strategy',
    date: 'September 8, 2024',
    excerpt: 'Peak seasons can make or break your supply chain. Learn practical strategies for scaling warehouse capacity, managing temporary workforce, and ensuring on-time delivery during high-demand periods.',
  },
  {
    title: 'Understanding 3PL: A Complete Guide for Manufacturers',
    date: 'August 12, 2024',
    excerpt: 'Thinking about outsourcing your logistics? This comprehensive guide covers everything manufacturers need to know about third-party logistics — from cost benefits to implementation best practices.',
  },
]

export default function Blog() {
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-accent text-sm transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent mb-4 tracking-tight">Blog</h1>
          <p className="text-gray-500 text-lg mb-12 leading-relaxed">Insights and updates from Sai Sree Logistics.</p>

          <div className="grid sm:grid-cols-2 gap-6">
            {posts.map((post) => (
              <div key={post.title} className="bg-dark-2/80 backdrop-blur-sm border border-gray-100/30 rounded-2xl p-8 hover:border-primary/30 transition-all group cursor-pointer">
                <p className="text-gray-600 text-xs mb-3">{post.date}</p>
                <h3 className="text-xl font-bold text-accent mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  Read More <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-10 text-sm">More articles coming soon.</p>
        </div>
      </div>
    </section>
  )
}
