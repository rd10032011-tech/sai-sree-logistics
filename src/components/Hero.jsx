import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, Shield, Clock, TrendingUp, Users, ArrowRight } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  }

  const stats = [
    { value: '100+', label: 'Clients Served', icon: Users },
    { value: '50K+', label: 'Shipments / Yr', icon: TrendingUp },
    { value: '5+', label: 'Warehouses', icon: Shield },
    { value: '99.5%', label: 'On-Time Rate', icon: Clock },
  ]

  const sectors = [
    'AUTOMOTIVE', 'E-COMMERCE', 'MANUFACTURING', 'RETAIL', 'HEALTHCARE', 'FMCG', 'ELECTRONICS', 'TEXTILES'
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 overflow-hidden bg-gradient-to-b from-[#F5F5F7] via-white to-[#F5F5F7]">
      {/* Decorative clean ambient glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#1A1A2E]/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 bg-primary/10 border border-primary/15 px-4 py-1.5 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary text-xs font-extrabold tracking-wider uppercase">Trusted 3PL Partner in Tamil Nadu</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-black text-accent leading-[1.08] tracking-tight">
              Precision-Driven <br />
              <span className="text-gradient-warm">3PL & Warehousing</span> <br />
              Solutions.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-accent/80 max-w-xl leading-relaxed font-medium">
              Sai Sree Logistics optimizes your B2B supply chain with SOP-driven warehousing, 
              efficient fleet logistics, and expert manpower solutions. Built for performance 
              and reliability in Kannigaipur.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-primary/15 text-base flex items-center gap-2 group"
              >
                <span>Start Sending Now</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="bg-white hover:bg-gray-50 text-accent font-bold px-8 py-4 rounded-full transition-all duration-300 border border-gray-200 text-base shadow-sm"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Inline Stats section */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-200/60"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-3xl font-extrabold text-accent">{stat.value}</div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="/warehouse-bg.jpg"
                alt="Warehouse and logistics operations"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 via-transparent to-primary/20" />

              {/* Floating Benefit Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl z-20 shadow-xl flex items-center gap-3.5"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-sm">
                  <Shield size={20} />
                </div>
                <div>
                  <div className="text-accent font-extrabold text-sm">SOP-Driven</div>
                  <div className="text-gray-500 text-xs font-semibold">ISO Standard Excellence</div>
                </div>
              </motion.div>

              {/* Floating Performance Card */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl z-20 shadow-xl flex items-center gap-3.5"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shadow-sm">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-accent font-extrabold text-sm">99.5% Speed</div>
                  <div className="text-gray-500 text-xs font-semibold">On-Time Performance</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partners/Sectors Infinite Marquee Slider */}
      <div className="w-full border-t border-gray-200/60 pt-8 mt-12 bg-white/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 mb-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Trusted Across Industries</p>
        </div>
        
        {/* Infinite CSS Marquee */}
        <div className="w-full overflow-hidden relative py-3 bg-gray-50/50 border-y border-gray-100 flex">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 pr-16">
            {sectors.concat(sectors).map((sector, index) => (
              <span 
                key={index} 
                className="text-sm font-extrabold tracking-[0.25em] text-gray-400/80 hover:text-primary transition-colors duration-300 select-none cursor-default"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
