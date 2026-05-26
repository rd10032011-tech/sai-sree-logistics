import { useEffect, useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { services } from '../data/services.js'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  const ref = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (ref.current) {
      ref.current.classList.remove('opacity-0', 'translate-y-10')
      ref.current.classList.add('opacity-100', 'translate-y-0')
    }
  }, [slug])

  if (!service) return <Navigate to="/services" replace />

  return (
    <section className="relative pt-32 pb-24 lg:pb-32 min-h-screen bg-gradient-to-b from-[#F5F5F7] to-white overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700">

          {/* Header Link */}
          <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-extrabold text-sm transition-colors mb-8 group">
            <svg className="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-4">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/15 flex-shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconPath} />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent tracking-tight">{service.title}</h1>
              <p className="text-primary font-extrabold text-base sm:text-lg mt-1">{service.tagline}</p>
            </div>
          </div>

          {/* Overview */}
          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5">
              {service.overview.map((para, i) => (
                <p key={i} className="text-accent/80 leading-relaxed text-lg font-medium">{para}</p>
              ))}
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm h-fit">
              <h3 className="text-accent font-black text-lg mb-4">Key Highlights</h3>
              <ul className="space-y-4">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-accent/80 font-semibold text-sm">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-24">
            <h2 className="text-2xl sm:text-3xl font-black text-accent mb-2 text-center">Why Choose Our {service.title}</h2>
            <p className="text-gray-500 text-center mb-10 font-semibold">What sets Sai Sree Logistics apart</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.whyUs.map((item) => (
                <div key={item} className="bg-white border border-gray-100 rounded-2xl p-6 flex items-start gap-3 shadow-sm hover:border-primary/20 hover:shadow-md transition-all">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-accent/90 text-sm font-semibold leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-24">
            <h2 className="text-2xl sm:text-3xl font-black text-accent mb-2 text-center">Key Benefits</h2>
            <p className="text-gray-500 text-center mb-10 font-semibold">What you get when you partner with us</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((b) => (
                <div key={b.title} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:border-primary/20 hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-primary/15 group-hover:border-primary shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-accent font-black text-lg mb-2 group-hover:text-primary transition-colors">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-semibold">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-24">
            <h2 className="text-2xl sm:text-3xl font-black text-accent mb-2 text-center">How It Works</h2>
            <p className="text-gray-500 text-center mb-10 font-semibold">Our streamlined process from start to finish</p>
            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-light to-gray-100 -translate-x-1/2" />
              <div className="space-y-8">
                {service.howItWorks.map((item, i) => (
                  <div key={item.step} className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`flex-1 hidden lg:block ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="bg-white border border-gray-100 rounded-2xl p-6 inline-block max-w-md shadow-sm">
                        <h3 className="text-primary font-black text-lg">{item.title}</h3>
                        <p className="text-gray-500 text-sm mt-1 leading-relaxed font-semibold">{item.desc}</p>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0 z-10">
                      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="text-white font-black text-sm">{item.step}</span>
                      </div>
                    </div>
                    <div className="flex-1 lg:hidden">
                      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">{item.step}</span>
                          <h3 className="text-accent font-bold">{item.title}</h3>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed font-semibold">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industries Served */}
          <div className="mt-24">
            <h2 className="text-2xl sm:text-3xl font-black text-accent mb-2 text-center">Industries We Serve</h2>
            <p className="text-gray-500 text-center mb-10 font-semibold font-medium">Trusted by businesses across sectors</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {service.industries.map((ind) => (
                <div key={ind} className="bg-white border border-gray-100 rounded-xl p-5 text-center hover:border-primary/20 hover:shadow-md shadow-sm transition-all duration-300">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 border border-primary/15 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="text-accent/90 text-xs font-extrabold uppercase tracking-wide">{ind}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          {service.faqs && (
            <div className="mt-24">
              <h2 className="text-2xl sm:text-3xl font-black text-accent mb-2 text-center">Frequently Asked Questions</h2>
              <p className="text-gray-500 text-center mb-10 font-semibold">Common questions about {service.title}</p>
              <div className="max-w-3xl mx-auto space-y-3">
                {service.faqs.map((faq) => (
                  <details key={faq.q} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                    <summary className="flex items-center justify-between p-5 sm:p-6 text-accent font-bold cursor-pointer list-none hover:bg-gray-50/50 transition-colors">
                      {faq.q}
                      <svg className="w-5 h-5 text-primary flex-shrink-0 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-gray-100 bg-gray-50/30">
                      <p className="text-gray-500 text-sm leading-relaxed pt-4 font-semibold">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* CTA Banner Section */}
          <div className="mt-24 bg-gradient-to-br from-primary via-[#F97316] to-primary-dark rounded-[2.5rem] p-10 sm:p-12 text-center text-white shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Ready to Get Started?</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8 font-medium">Contact us today for a personalized quote. We typically respond within 2 hours.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white hover:bg-[#1A1A2E] text-primary hover:text-white font-extrabold px-8 py-4 rounded-xl transition-all shadow-md inline-flex items-center gap-2 group"
              >
                <span>Get a Quote</span>
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+919840923192"
                className="border border-white/35 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                Call +91 98409 23192
              </a>
            </div>
          </div>

          {/* Other Services Grid */}
          <div className="mt-16 pt-12 border-t border-gray-100">
            <h3 className="text-xl font-extrabold text-accent mb-6 text-center">Explore Other Services</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {services.filter((s) => s.slug !== slug).map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="bg-white border border-gray-100 rounded-xl p-5 hover:border-primary/20 hover:shadow-md shadow-sm text-center group transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary border border-primary/15 group-hover:border-primary text-primary group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.iconPath} />
                    </svg>
                  </div>
                  <h4 className="text-accent font-black text-sm group-hover:text-primary transition-colors">{s.title}</h4>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
