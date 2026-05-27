import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Warehouse, MoveHorizontal, Truck, Users2, ArrowUpRight, ChevronRight } from 'lucide-react'

import { services as allServices } from '../data/services.js'

const iconMap = {
  'warehouse-management': Warehouse,
  'inbound-outbound-logistics': MoveHorizontal,
  'transportation-fleet': Truck,
  'manpower-supply': Users2,
}

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section className="relative pt-32 pb-24 lg:pb-32 min-h-screen bg-gradient-to-b from-[#F5F5F7] to-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-extrabold text-sm transition-all mb-12 group">
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
              <ArrowLeft size={16} />
            </div>
            Back to Home
          </Link>

          <div className="max-w-3xl mb-20">
            <span className="inline-block text-primary font-extrabold text-xs tracking-[0.25em] uppercase mb-4">Our Services</span>
            <h1 className="text-5xl sm:text-6xl font-black text-accent leading-tight mb-8">
              Integrated <br />
              <span className="text-gradient-warm">3PL Solutions</span>
            </h1>
            <p className="text-accent/80 text-lg leading-relaxed font-medium">
              We provide comprehensive supply chain services, from intelligent warehousing 
              to reliable nationwide transportation and skilled manpower supply.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {allServices.map((service) => {
              const Icon = iconMap[service.slug] || Warehouse
              return (
                <motion.div key={service.slug} variants={itemVariants}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group block h-full bg-white border border-gray-100 rounded-[3rem] p-10 hover:border-primary/20 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-10">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-primary/15 group-hover:border-primary">
                        <Icon size={30} />
                      </div>
                      <div className="text-gray-400 group-hover:text-primary transition-colors translate-y-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300">
                        <ArrowUpRight size={26} />
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-accent mb-6 group-hover:text-primary transition-colors">{service.title}</h2>
                    <p className="text-gray-500 text-sm sm:text-base mb-8 leading-relaxed font-semibold">
                      {service.shortDesc}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                      {service.highlights.slice(0, 4).map((h, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-400 text-xs font-extrabold uppercase tracking-wider">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {h}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-primary font-extrabold text-sm pt-8 border-t border-gray-100 group-hover:text-primary-dark transition-colors duration-300">
                      <span>Explore Detailed Features</span>
                      <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
