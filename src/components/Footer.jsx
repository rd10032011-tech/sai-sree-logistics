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
    { label: 'Track Shipment', to: '/track-shipment' },
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
              <a href="tel:+919840923192" className="hover:text-primary transition-colors">+91 98409 23192</a>
            </p>
            <p className="text-gray-300 text-sm mb-5 font-medium">
              <a href="mailto:saisreelogistics16@gmail.com" className="hover:text-primary transition-colors">saisreelogistics16@gmail.com</a>
            </p>
            <p className="text-gray-500 text-xs font-semibold mb-6 tracking-wide">GST: 33AVFPS0910J1ZN</p>
            
            <div className="flex gap-3">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-primary rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 shadow-sm"
                  aria-label={social}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
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
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Sai Sree Logistics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-xs transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-xs transition-colors duration-200">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-gray-500 hover:text-white text-xs transition-colors duration-200">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
