import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Warehouse, 
  Truck, 
  MoveHorizontal, 
  Users2, 
  ChevronRight,
  ArrowUpRight
} from 'lucide-react'

const services = [
  {
    slug: 'warehouse-management',
    icon: Warehouse,
    title: 'Warehouse Management',
    description: 'Expert 3PL warehousing in Tamil Nadu with FIFO-based stock rotation and real-time ERP mapping.',
    highlights: ['FIFO-based stock rotation', 'Bin Card & ERP mapping', 'CCTV-monitored secure storage'],
  },
  {
    slug: 'inbound-outbound-logistics',
    icon: MoveHorizontal,
    title: 'Inbound & Outbound',
    description: 'Seamless supply chain logistics management with real-time tracking and MIS reporting.',
    highlights: ['Real-time tracking', 'MIS reports & Certificates', 'Daily stock reconciliation'],
  },
  {
    slug: 'transportation-fleet',
    icon: Truck,
    title: 'Transportation & Fleet',
    description: 'Reliable logistics fleet services for Pan-India coverage with end-to-end shipment monitoring.',
    highlights: ['All vehicle types available', 'Real-time vehicle tracking', 'Pan-India coverage'],
  },
  {
    slug: 'manpower-supply',
    icon: Users2,
    title: 'Manpower Supply',
    description: 'Skilled logistics manpower supply in Kannigaipur, including warehouse workers and drivers.',
    highlights: ['Permanent & temporary staffing', 'Skilled workers & drivers', 'Rapid scaling for peak seasons'],
  },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
    <section id="services" className="relative py-24 lg:py-32 bg-gradient-to-b from-[#F5F5F7] to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-[0%] left-[-5%] w-[40%] h-[40%] bg-accent/5 rounded-full filter blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary font-extrabold text-xs tracking-[0.25em] uppercase mb-4">Our Core Expertise</span>
            <h2 className="text-4xl sm:text-5xl font-black text-accent leading-tight">
              Integrated <br />
              <span className="text-gradient-warm">3PL Logistics Solutions</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pb-2"
          >
            <p className="text-accent/80 text-lg leading-relaxed max-w-xl font-medium">
              From automated warehouse management to nationwide transportation, 
              we provide end-to-end supply chain services tailored for efficiency and scale.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={itemVariants}>
              <Link
                to={`/services/${service.slug}`}
                className="group relative block h-full bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl hover:translate-y-[-4px] hover:border-primary/20 transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-primary/15 group-hover:border-primary">
                      <service.icon size={26} />
                    </div>
                    <div className="text-gray-400 group-hover:text-primary transition-colors duration-300">
                      <ArrowUpRight size={22} />
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-accent mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2 font-semibold">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.highlights.map((h, idx) => (
                      <li key={idx} className="text-gray-400 text-xs font-extrabold uppercase tracking-wider flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-1.5 text-primary font-extrabold text-sm group-hover:text-primary-dark transition-colors duration-300">
                    <span>Learn More</span>
                    <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
