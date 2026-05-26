import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Manufacturing Division',
    role: '3PL Warehousing & Distribution Partner',
    text: 'Sai Sree Logistics transformed our distribution network in Tamil Nadu. Their warehousing is exceptionally clean, strictly FIFO-driven, and their digital ERP integration keeps us 100% informed of stock levels. They have been a reliable extension of our supply chain team.',
    rating: 5
  },
  {
    name: 'Operations & Logistics Team',
    role: 'Warehouse & Manpower Outsourcing Partner',
    text: 'We have been outsourcing our core warehouse operations and logistics manpower to Sai Sree for over three years. Their workers are skilled, extremely disciplined, and they scale operations with ease during peak export seasons. A true partner in every sense.',
    rating: 5
  },
  {
    name: 'Supply Chain Department',
    role: 'Freight & Fleet Management Partner',
    text: 'Their fleet transportation and logistics support are top-tier. They successfully managed our high-value freight delivery across India with 99.5% on-time SLA performance. The real-time GPS tracking and proactive updates give us complete peace of mind.',
    rating: 5
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 8000)
    return () => clearInterval(timer)
  }, [activeIndex])

  const handlePrev = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    })
  }

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-white overflow-hidden border-t border-gray-100">
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-primary font-extrabold text-xs tracking-[0.25em] uppercase mb-4">Client Feedback</span>
        <h2 className="text-4xl sm:text-5xl font-black text-accent mb-16 tracking-tight">
          What Our <span className="text-gradient-warm">Partners Say</span>
        </h2>

        {/* Testimonials Slider */}
        <div className="relative min-h-[320px] sm:min-h-[260px] flex items-center justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-primary/5 pointer-events-none">
            <Quote size={120} className="transform rotate-180" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="max-w-3xl space-y-6 select-none relative z-10"
            >
              <div className="flex justify-center gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#E8530E" className="text-primary" />
                ))}
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-accent/80 font-medium italic leading-relaxed px-4">
                "{testimonials[activeIndex].text}"
              </p>
              <div>
                <h4 className="text-lg font-black text-accent">{testimonials[activeIndex].name}</h4>
                <p className="text-xs font-extrabold text-primary uppercase tracking-widest mt-1">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-gray-200 hover:border-primary hover:bg-primary/5 flex items-center justify-center text-accent hover:text-primary transition-all duration-300 shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > activeIndex ? 1 : -1)
                  setActiveIndex(i)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-gray-200 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-gray-200 hover:border-primary hover:bg-primary/5 flex items-center justify-center text-accent hover:text-primary transition-all duration-300 shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
