import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2, Award, Target, Zap, ChevronRight } from 'lucide-react'

const milestones = [
  { year: '2015', event: 'Founded in Thiruvallur by B. Prabakaran' },
  { year: '2017', event: 'Expanded to 50+ Fleet Vehicles' },
  { year: '2020', event: 'Digital MIS & ERP Implementation' },
  { year: '2023', event: 'New Manpower Supply Division' },
]

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/15 px-4 py-1.5 rounded-full mb-6">
              <Award className="text-primary" size={16} />
              <span className="text-primary text-xs font-extrabold uppercase tracking-widest">Industry Leader Since 2015</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-accent leading-[1.1] mb-8">
              Driving Excellence in <br />
              <span className="text-gradient-warm">3PL Logistics</span>
            </h2>

            <p className="text-accent/80 text-lg leading-relaxed mb-8 font-medium">
              Sai Sree Logistics is a premier third-party logistics provider based in Kannigaipur, 
              Tamil Nadu. We bridge the gap between businesses and their customers through 
              world-class warehousing and supply chain management.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                { icon: CheckCircle2, title: 'SOP Compliant', desc: 'Strict adherence to international standards' },
                { icon: Target, title: 'FIFO Focused', desc: 'Precision inventory management' },
                { icon: Zap, title: 'Real-time MIS', desc: 'Instant reporting and transparency' },
                { icon: Award, title: 'ISO Ready', desc: 'Built for quality and reliability' },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/15">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-accent font-bold text-sm mb-1">{feature.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed font-semibold">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about-us"
              className="inline-flex items-center gap-3 text-accent font-extrabold hover:text-primary transition-all group"
            >
              <span>Learn Our Full Story</span>
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 group-hover:translate-x-1.5 transition-all duration-300">
                <ChevronRight size={18} className="text-accent group-hover:text-primary" />
              </div>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-gray-50 border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-4xl font-black text-accent mb-2">10+</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Years of Trust</div>
                </div>
                <div className="bg-primary p-8 rounded-[2rem] shadow-lg shadow-primary/10 hover:translate-y-[-2px] transition-all duration-300">
                  <div className="text-4xl font-black text-white mb-2">100+</div>
                  <div className="text-xs font-bold text-white/80 uppercase tracking-widest">Active Clients</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#1A1A2E] p-8 rounded-[2rem] shadow-lg shadow-accent/10 hover:translate-y-[-2px] transition-all duration-300">
                  <div className="text-4xl font-black text-white mb-2">5+</div>
                  <div className="text-xs font-bold text-white/80 uppercase tracking-widest">Strategic Hubs</div>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-4xl font-black text-accent mb-2">99%</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">SLA Compliance</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-32 pt-20 border-t border-gray-100"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((m, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative group">
                <div className="text-5xl font-black text-gray-100 group-hover:text-primary/10 transition-colors absolute -top-8 left-0 select-none">
                  {m.year}
                </div>
                <div className="relative pt-4">
                  <div className="w-12 h-1 bg-primary mb-4 rounded-full group-hover:w-20 transition-all duration-500" />
                  <h4 className="text-accent font-extrabold mb-2">{m.year}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
