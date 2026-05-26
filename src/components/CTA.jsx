import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 mx-4 sm:mx-6 lg:mx-8 my-4 rounded-[3.5rem] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#F97316] to-primary-dark" />
        <div className="absolute inset-0 bg-[url('/src/assets/cta-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-25 grayscale" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 lg:p-20 overflow-hidden relative shadow-2xl">
          {/* Decorative shapes */}
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-primary-light/10 rounded-full blur-[80px]" />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-8">
                Ready to <span className="text-[#1A1A2E]">Scale</span> Your Logistics?
              </h2>
              <p className="text-white/80 text-lg lg:text-xl mb-10 leading-relaxed max-w-lg font-medium">
                Optimize your supply chain with Kannigaipur's most trusted 3PL partner. 
                Custom solutions for warehousing, transport, and manpower.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  'Free Initial Consultation',
                  'Customized Logistics Strategy',
                  '24/7 Support for Enterprise Clients'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/95 font-bold text-sm sm:text-base">
                    <CheckCircle size={20} className="text-[#1A1A2E]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white hover:bg-[#1A1A2E] text-primary hover:text-white font-extrabold px-8 py-4 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 group text-base"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-[2.5rem] relative z-20"
            >
              <h3 className="text-2xl font-black text-white mb-8">Contact Our Experts</h3>
              <div className="space-y-6">
                <a 
                  href="tel:+919840923192" 
                  className="flex items-center gap-5 p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-md group-hover:scale-105 transition-transform duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-0.5">Call Now</div>
                    <div className="text-lg sm:text-xl font-black text-white">+91 98409 23192</div>
                  </div>
                </a>
                <a 
                  href="mailto:saisreelogistics16@gmail.com" 
                  className="flex items-center gap-5 p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-md group-hover:scale-105 transition-transform duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-0.5">Email Us</div>
                    <div className="text-lg sm:text-xl font-black text-white break-all">saisreelogistics16@gmail.com</div>
                  </div>
                </a>
              </div>
              <p className="text-white/55 text-xs text-center mt-8 font-semibold tracking-wide">
                Typically responds within 2 business hours
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
