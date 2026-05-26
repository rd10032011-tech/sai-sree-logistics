import { motion } from 'framer-motion'
import { ShieldCheck, MapPin, Database, Award, Check } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'SOP-Driven Operations',
    description: 'We run on strict ISO-aligned standard operating procedures, ensuring absolute safety, strict inventory discipline, and zero-defect warehousing.'
  },
  {
    icon: MapPin,
    title: 'Strategic Hub Location',
    description: 'Based in Kannigaipur, Tamil Nadu, our facilities are perfectly positioned to connect with Chennai’s manufacturing clusters and major shipping highways.'
  },
  {
    icon: Database,
    title: 'Advanced Digital Mapping',
    description: 'Our warehouse systems map every single batch using digital MIS and FIFO bin cards, giving your enterprise full transparent stock visibility.'
  },
  {
    icon: Award,
    title: 'Verified 99.5% SLA Record',
    description: 'Combining our integrated logistics fleet and dedicated manpower supply, we consistently meet 99.5% on-time delivery commitments.'
  }
]

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-[#F5F5F7] overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-10%] w-[35%] h-[35%] bg-primary/5 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-[-5%] right-[-10%] w-[35%] h-[35%] bg-accent/5 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-primary font-extrabold text-xs tracking-[0.25em] uppercase mb-4">Core Strengths</span>
          <h2 className="text-4xl sm:text-5xl font-black text-accent mb-6 leading-tight tracking-tight">
            Why Companies <span className="text-gradient-warm">Trust Sai Sree</span>
          </h2>
          <p className="text-accent/80 text-lg font-medium leading-relaxed">
            We don’t just store and move cargo—we optimize your supply chain, reduce overheads, 
            and elevate your delivery speed through operational precision.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feat, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className="group bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white border border-primary/15 group-hover:border-primary transition-all duration-300">
                  <feat.icon size={22} />
                </div>
                
                <h3 className="text-lg font-black text-accent group-hover:text-primary transition-colors duration-200">
                  {feat.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed font-semibold">
                  {feat.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-50 flex items-center gap-2 text-primary text-xs font-extrabold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Check size={14} className="stroke-[3]" />
                <span>Verified Quality</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
