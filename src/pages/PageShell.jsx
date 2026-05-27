import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function PageShell({ title, subtitle, children }) {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.remove('opacity-0', 'translate-y-10')
      ref.current.classList.add('opacity-100', 'translate-y-0')
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="relative pt-32 pb-24 lg:pb-32 min-h-screen bg-gradient-to-b from-[#F5F5F7] to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="opacity-0 translate-y-10 transition-all duration-700"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-extrabold text-sm transition-colors mb-8"
          >
            <svg className="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent mb-4 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-accent/80 font-semibold text-base sm:text-lg mb-10 leading-relaxed">{subtitle}</p>
          )}

          <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-sm">
            <div className="text-accent/90 max-w-none space-y-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
