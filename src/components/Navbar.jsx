import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'FAQ', to: '/faqs' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, to) => {
    if (!isHome || !to.startsWith('/#')) return
    e.preventDefault()
    const id = to.replace('/#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-primary/20"
            >
              <img src="/src/assets/logo.png" alt="Sai Sree Logistics" className="w-full h-full object-contain" />
            </motion.div>
            <div className="flex flex-col -space-y-1">
              <span className="font-black text-lg text-accent tracking-tight group-hover:text-primary transition-colors">
                SAI SREE
              </span>
              <span className="font-extrabold text-[10px] text-primary tracking-[0.25em] uppercase">
                Logistics
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={(e) => handleNavClick(e, link.to)}
                    className="relative py-2 text-sm font-semibold tracking-wide transition-colors duration-300 text-accent/80 hover:text-primary"
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                        layoutId="activeNavUnderline"
                      />
                    )}
                  </Link>
                )
              })}
            </div>
            
            <div className="h-5 w-px bg-gray-200" />
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary-dark text-white font-bold px-5 py-2.5 rounded-full transition-all shadow-md shadow-primary/10 flex items-center gap-1.5 group text-sm"
              >
                <span>Get a Quote</span>
                <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-accent p-2 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-8 space-y-5">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={link.to}
                    onClick={(e) => {
                      handleNavClick(e, link.to)
                      setMobileOpen(false)
                    }}
                    className={`text-xl font-bold flex items-center justify-between group py-1.5 ${
                      pathname === link.to ? 'text-primary' : 'text-accent hover:text-primary'
                    }`}
                  >
                    {link.label}
                    <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4 border-t border-gray-50"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-4 rounded-xl w-full text-base shadow-md shadow-primary/10 hover:bg-primary-dark transition-all"
                >
                  <Phone size={18} />
                  Contact Us Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
