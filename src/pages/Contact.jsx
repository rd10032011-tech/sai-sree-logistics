import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Loader2, Phone, Mail, Clock, AlertCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (ref.current) {
      ref.current.classList.remove('opacity-0', 'translate-y-10')
      ref.current.classList.add('opacity-100', 'translate-y-0')
    }
  }, [])

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email format'
    if (!form.phone.trim()) errs.phone = 'Phone is required'
    else if (!/^[+]?[\d\s-]{10,}$/.test(form.phone)) errs.phone = 'Invalid phone number'
    if (!form.service) errs.service = 'Please select a service'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  return (
    <section className="relative pt-32 pb-24 lg:pb-32 min-h-screen bg-gradient-to-b from-[#F5F5F7] to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-extrabold text-sm transition-colors mb-8 group">
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
              <ArrowLeft size={16} className="stroke-[3]" />
            </div>
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent mb-4 tracking-tight">Contact Us</h1>
          <p className="text-accent/80 text-lg mb-12 leading-relaxed font-medium">Get in touch for quotes, inquiries, or support.</p>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-green-600" />
                  </div>
                  <h2 className="text-2xl font-black text-accent mb-2">Message Sent!</h2>
                  <p className="text-accent/70 mb-6">Thank you for reaching out. We'll get back to you within 2 business hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}
                    className="text-primary font-bold hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-accent mb-6">Send Us a Message</h2>
                  <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <input
                          type="text" placeholder="Your Name"
                          value={form.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className={`w-full bg-gray-50 border ${errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-primary'} rounded-xl px-5 py-3.5 text-accent placeholder-gray-400 focus:outline-none focus:bg-white transition-all font-medium`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1 font-semibold flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
                      </div>
                      <div>
                        <input
                          type="email" placeholder="Email Address"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={`w-full bg-gray-50 border ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-primary'} rounded-xl px-5 py-3.5 text-accent placeholder-gray-400 focus:outline-none focus:bg-white transition-all font-medium`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 font-semibold flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <input
                        type="tel" placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={`w-full bg-gray-50 border ${errors.phone ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-primary'} rounded-xl px-5 py-3.5 text-accent placeholder-gray-400 focus:outline-none focus:bg-white transition-all font-medium`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1 font-semibold flex items-center gap-1"><AlertCircle size={12} />{errors.phone}</p>}
                    </div>
                    <div>
                      <select
                        value={form.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        className={`w-full bg-gray-50 border ${errors.service ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-primary'} rounded-xl px-5 py-3.5 text-accent focus:outline-none focus:bg-white transition-all font-medium`}
                      >
                        <option value="" disabled>Select Service</option>
                        <option value="warehouse">Warehouse Management</option>
                        <option value="logistics">Inbound & Outbound Logistics</option>
                        <option value="transport">Transportation & Fleet</option>
                        <option value="manpower">Manpower Supply</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.service && <p className="text-red-500 text-xs mt-1 font-semibold flex items-center gap-1"><AlertCircle size={12} />{errors.service}</p>}
                    </div>
                    <div>
                      <textarea
                        placeholder="Tell us about your requirements..."
                        rows={4}
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className={`w-full bg-gray-50 border ${errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-primary'} rounded-xl px-5 py-3.5 text-accent placeholder-gray-400 focus:outline-none focus:bg-white transition-all resize-none font-medium`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1 font-semibold flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-primary hover:bg-primary-dark disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-extrabold py-4 rounded-xl transition-all shadow-md shadow-primary/10 flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <><Loader2 size={18} className="animate-spin" /> Sending...</>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-accent mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {[
                    { label: 'Address', value: 'Kannigaipur, Thiruvallur (Dist), Tamilnadu - 601102' },
                    { label: 'Phone', value: '+91 98409 23192', href: 'tel:+919840923192', icon: Phone },
                    { label: 'Email', value: 'saisreelogistics16@gmail.com', href: 'mailto:saisreelogistics16@gmail.com', icon: Mail },
                    { label: 'GST', value: '33AVFPS0910J1ZN' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      {item.icon && (
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                          <item.icon size={18} />
                        </div>
                      )}
                      <div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-accent hover:text-primary transition-colors font-semibold text-sm">{item.value}</a>
                        ) : (
                          <p className="text-accent font-semibold text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <Clock size={18} />
                  </div>
                  <h2 className="text-xl font-bold text-accent">Office Hours</h2>
                </div>
                <div className="space-y-2 text-sm font-semibold">
                  <div className="flex justify-between py-2 border-b border-gray-50"><span className="text-gray-500">Monday - Saturday</span><span className="text-accent">9:00 AM - 7:00 PM</span></div>
                  <div className="flex justify-between py-2"><span className="text-gray-500">Sunday</span><span className="text-accent">Closed</span></div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 shadow-lg shadow-primary/20">
                <h2 className="text-xl font-bold text-white mb-2">Need Immediate Help?</h2>
                <p className="text-white/80 text-sm mb-5 font-medium">Call our operations team for urgent inquiries.</p>
                <a href="tel:+919840923192" className="inline-flex items-center gap-2 bg-white text-primary font-extrabold px-6 py-3 rounded-xl hover:bg-gray-100 transition-all">
                  <Phone size={16} />
                  +91 98409 23192
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
