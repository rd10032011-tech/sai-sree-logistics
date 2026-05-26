import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const ref = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (ref.current) {
      ref.current.classList.remove('opacity-0', 'translate-y-10')
      ref.current.classList.add('opacity-100', 'translate-y-0')
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5F5F7] via-white to-[#F5F5F7] overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px]" />

      <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700 text-center px-4">
        <div className="text-[10rem] sm:text-[14rem] font-black text-gray-100 leading-none select-none">404</div>
        <h1 className="text-3xl sm:text-4xl font-black text-accent -mt-8 mb-4">Page Not Found</h1>
        <p className="text-accent/70 max-w-md mx-auto mb-10 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-primary/15 flex items-center gap-2"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-white hover:bg-gray-50 text-accent font-bold px-8 py-4 rounded-full border border-gray-200 transition-all flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </section>
  )
}
