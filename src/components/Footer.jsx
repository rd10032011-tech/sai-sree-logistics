import { Link } from 'react-router-dom'

const footerLinks = {
  services: [
    { label: 'Warehouse Management', to: '/services/warehouse-management' },
    { label: 'Inbound & Outbound Logistics', to: '/services/inbound-outbound-logistics' },
    { label: 'Transportation & Fleet', to: '/services/transportation-fleet' },
    { label: 'Manpower Supply', to: '/services/manpower-supply' },
  ],
  company: [
    { label: 'About Us', to: '/about-us' },
    { label: 'Our Team', to: '/our-team' },
    { label: 'Careers', to: '/careers' },
    { label: 'Blog', to: '/blog' },
    { label: 'Press', to: '/press' },
  ],
  support: [
    { label: 'Help Center', to: '/help-center' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'FAQs', to: '/faqs' },
    { label: 'Shipping Policy', to: '/shipping-policy' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-[#1A1A2E] text-[#D1D1E9] border-t border-white/10 overflow-hidden">
      {/* Decorative subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-primary/20">
                <img src="/logo.png" alt="Sai Sree Logistics" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="font-black text-lg text-white group-hover:text-primary transition-colors">
                  SAI SREE
                </span>
                <span className="font-extrabold text-[10px] text-primary tracking-[0.25em] uppercase">
                  Logistics
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Kannigaipur, Thiruvallur (Dist), Tamilnadu - 601102.
            </p>
            <p className="text-gray-300 text-sm mb-1.5 font-medium">
              <a href="tel:+919791120354" className="hover:text-primary transition-colors">+91 97911 20354</a>
            </p>
            <p className="text-gray-300 text-sm mb-5 font-medium">
              <a href="mailto:saisreelogistics16@gmail.com" className="hover:text-primary transition-colors">saisreelogistics16@gmail.com</a>
            </p>
            <p className="text-gray-400 text-xs font-semibold mb-6 tracking-wide">GST: 33AVFPS0910J1ZN</p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-l-2 border-primary pl-3">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-l-2 border-primary pl-3">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-l-2 border-primary pl-3">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Sai Sree Logistics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-xs transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-xs transition-colors duration-200">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-white text-xs transition-colors duration-200">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
