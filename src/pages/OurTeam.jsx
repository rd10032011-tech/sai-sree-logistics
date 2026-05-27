import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const leaders = [
  {
    name: 'B. Prabakaran',
    role: 'Director — Operations',
    bio: 'With over a decade of hands-on experience in logistics and supply chain management, B. Prabakaran is the driving force behind Sai Sree Logistics. He built the company from the ground up — starting with a single warehouse in Kannigaipur and growing it into a trusted 3PL network serving 100+ businesses across Tamil Nadu. His relentless focus on SOP-driven operations, FIFO inventory discipline, and client transparency has set the standard for logistics excellence in the region. Under his leadership, the company has consistently maintained a 99.5% on-time delivery rate while scaling warehousing, fleet, and manpower divisions simultaneously.',
    quote: '"Logistics is not just about moving goods — it\'s about building trust, one shipment at a time."',
    expertise: ['Warehouse Operations', 'Fleet Management', 'SOP Development', 'Business Strategy'],
  },
  {
    name: 'S. Raghul',
    role: 'Manager — Supply Chain',
    bio: 'S. Raghul brings strategic depth to Sai Sree Logistics\' supply chain operations. With expertise in end-to-end logistics planning, he oversees the seamless integration of warehousing, transportation, and manpower deployment to deliver measurable efficiency gains for every client. Raghul is known for his data-driven approach — leveraging daily MIS reports, real-time tracking systems, and ERP integrations to optimize supply chain workflows. His ability to identify bottlenecks and implement corrective actions quickly has made him an invaluable asset to both the company and its clients.',
    quote: '"A great supply chain is invisible — when everything works, businesses grow without friction."',
    expertise: ['Supply Chain Optimization', 'ERP & MIS Systems', 'Client Coordination', 'Process Improvement'],
  },
]

export default function OurTeam() {
  const ref = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (ref.current) {
      ref.current.classList.remove('opacity-0', 'translate-y-10')
      ref.current.classList.add('opacity-100', 'translate-y-0')
    }
  }, [])

  return (
    <section className="relative pt-32 pb-24 lg:pb-32 min-h-screen bg-gradient-to-b from-[#F5F5F7] to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-extrabold text-sm transition-all mb-12 group">
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
              <ArrowLeft size={16} className="stroke-[3]" />
            </div>
            Back to Home
          </Link>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-extrabold text-xs tracking-[0.25em] uppercase mb-4">
              Leadership
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-accent leading-tight tracking-tight mb-6">
              Meet the People Behind{' '}
              <span className="text-gradient-warm">Sai Sree</span>
            </h1>
            <p className="text-accent/80 text-lg font-medium leading-relaxed">
              Every great logistics operation is built on people. Our leadership team brings 
              decades of combined experience, unwavering commitment, and a shared vision 
              to make supply chains simpler for every client we serve.
            </p>
          </div>

          <div className="space-y-16">
            {leaders.map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
              >
                <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 sm:p-12 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
                    {/* Photo Column */}
                    <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
                      <div className="relative mb-6">
                        <div className="w-44 h-44 rounded-[2rem] border-2 border-dashed border-gray-200 bg-gray-50 flex items-center justify-center shadow-sm">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-2">
                              <span className="text-3xl font-black text-primary/30">
                                {person.name.split(' ').pop().charAt(0)}
                              </span>
                            </div>
                            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Photo</p>
                          </div>
                        </div>
                      </div>
                      <h2 className="text-2xl font-black text-accent text-center lg:text-left">{person.name}</h2>
                      <p className="text-primary font-extrabold text-sm tracking-wide uppercase mt-1 text-center lg:text-left">{person.role}</p>

                      <div className="flex flex-wrap gap-2 mt-5 justify-center lg:justify-start">
                        {person.expertise.map((skill) => (
                          <span key={skill} className="bg-primary/5 border border-primary/10 text-primary text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wide">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-2 flex flex-col justify-center">
                      <div className="relative mb-6">
                        <Quote size={36} className="text-primary/10 absolute -top-2 -left-2" />
                        <blockquote className="text-lg sm:text-xl text-accent/80 font-medium italic leading-relaxed pl-8 border-l-4 border-primary">
                          {person.quote}
                        </blockquote>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-[15px]">
                        {person.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 text-sm font-semibold">
              Want to be part of our team?{' '}
              <Link to="/careers" className="text-primary font-extrabold hover:underline">View Open Positions</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
