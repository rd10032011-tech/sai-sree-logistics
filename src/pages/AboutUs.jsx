import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Building2, Calendar, ShieldCheck, MapPin, Phone, Mail, Award } from 'lucide-react'

export default function AboutUs() {
  return (
    <section className="relative pt-32 pb-24 lg:pb-32 min-h-screen bg-gradient-to-b from-[#F5F5F7] to-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
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

          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
            <div>
              <span className="inline-block text-primary font-extrabold text-xs tracking-[0.25em] uppercase mb-4">Our Legacy</span>
              <h1 className="text-5xl sm:text-6xl font-black text-accent leading-tight mb-8">
                About <br />
                <span className="text-gradient-warm">Sai Sree Logistics</span>
              </h1>
              <p className="text-accent/80 text-lg mb-8 leading-relaxed font-medium">
                Established in 2015 by B. Prabakaran, Sai Sree Logistics has grown into a cornerstone 
                of the logistics landscape in Kannigaipur and across Tamil Nadu. We specialize 
                in high-precision third-party logistics (3PL) that empowers businesses to scale.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: 'Operational Excellence', text: 'We maintain strict Standard Operating Procedures (SOP) across all warehouse and fleet operations.' },
                  { icon: Award, title: 'Customer First', text: 'Our growth is a result of long-term partnerships built on transparency and reliable performance.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/15 shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-accent font-black text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed font-semibold">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-[3rem] p-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
              <h2 className="text-2xl font-black text-accent mb-10">Corporate Overview</h2>
              <div className="space-y-8">
                {[
                  { icon: Building2, label: 'Proprietor', value: 'B. Prabakaran' },
                  { icon: Calendar, label: 'Established', value: '2015' },
                  { icon: ShieldCheck, label: 'GST Number', value: '33AVFPS0910J1ZN' },
                  { icon: MapPin, label: 'Headquarters', value: 'Kannigaipur, Thiruvallur (Dist), Tamilnadu - 601102' },
                  { icon: Phone, label: 'Contact', value: '+91 98409 23192' },
                  { icon: Mail, label: 'Email', value: 'saisreelogistics16@gmail.com' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/15 shadow-sm">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-0.5">{item.label}</div>
                      <div className="text-accent font-extrabold text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-32">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl sm:text-4xl font-black text-accent mb-6">Our Operating Standards</h2>
              <p className="text-gray-500 font-semibold">We adhere to global logistics standards to ensure your inventory is managed with zero errors.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: 'FIFO Stock Rotation', desc: 'Precision inventory management for maximum efficiency.' },
                { title: 'Invoice Cross-Check', desc: '100% verification for every inbound and outbound load.' },
                { title: 'Bin Card Mapping', desc: 'Real-time synchronization between physical stock and ERP.' },
                { title: 'MIS Reporting', desc: 'Daily transparency with automated Custodian Certificates.' },
              ].map((item, idx) => (
                <div key={idx} className="group p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:border-primary/20 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white border border-primary/15 group-hover:border-primary transition-all duration-300 shadow-sm">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-accent font-black text-lg mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
