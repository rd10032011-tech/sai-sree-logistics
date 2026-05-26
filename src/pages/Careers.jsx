import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const positions = [
  {
    title: 'Warehouse Supervisor',
    type: 'Full-Time',
    location: 'Kannigaipur',
    desc: 'Oversee daily warehouse operations, manage inventory using FIFO method, supervise loading/unloading teams, and maintain bin card accuracy across all storage zones.',
  },
  {
    title: 'Delivery Driver',
    type: 'Full-Time / Day-Basis',
    location: 'Kannigaipur',
    desc: 'Transport goods to customer locations across Tamil Nadu, verify shipment documents at pickup and delivery, and provide real-time updates to the operations team.',
  },
  {
    title: 'Warehouse Labourer',
    type: 'Full-Time / Day-Basis',
    location: 'Kannigaipur',
    desc: 'Assist with loading, unloading, sorting, and stacking of goods. Maintain cleanliness and safety standards in the warehouse. No prior experience required — training provided.',
  },
  {
    title: 'Operations Coordinator',
    type: 'Full-Time',
    location: 'Kannigaipur',
    desc: 'Coordinate between warehouse, transport, and clients. Prepare daily MIS reports, track shipments end-to-end, and ensure strict SOP compliance across all operations.',
  },
  {
    title: 'Fleet Supervisor',
    type: 'Full-Time',
    location: 'Kannigaipur',
    desc: 'Manage vehicle scheduling, driver assignments, and route planning. Monitor GPS tracking, resolve transit issues, and ensure on-time delivery performance.',
  },
  {
    title: 'Client Account Executive',
    type: 'Full-Time',
    location: 'Kannigaipur',
    desc: 'Serve as the primary contact for assigned client accounts. Manage daily communication, coordinate service delivery, prepare performance reports, and handle escalations.',
  },
  {
    title: 'HR & Admin Associate',
    type: 'Full-Time',
    location: 'Kannigaipur',
    desc: 'Handle recruitment, attendance management, payroll processing, and statutory compliance. Maintain employee records and support the manpower supply division.',
  },
  {
    title: 'Safety Officer',
    type: 'Full-Time',
    location: 'Kannigaipur',
    desc: 'Conduct safety audits, enforce PPE compliance, organize fire safety drills, manage incident reporting, and ensure all facilities meet regulatory safety standards.',
  },
]

export default function Careers() {
  const ref = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (ref.current) {
      ref.current.classList.remove('opacity-0', 'translate-y-10')
      ref.current.classList.add('opacity-100', 'translate-y-0')
    }
  }, [])

  return (
    <section className="relative pt-32 pb-24 lg:pb-32 min-h-screen bg-dark">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-accent text-sm transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">Careers</h1>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">Join the Sai Sree Logistics team and grow with us.</p>
          <p className="text-gray-500 mb-12">
            Interested? Call us at <a href="tel:+919840923192" className="text-accent hover:underline">+91 98409 23192</a> or email your resume to{' '}
            <a href="mailto:saisreelogistics16@gmail.com" className="text-accent hover:underline">saisreelogistics16@gmail.com</a>.
          </p>

          <div className="space-y-4">
            {positions.map((job) => (
              <div key={job.title} className="bg-dark-2/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full">{job.type}</span>
                    <span className="bg-white/5 text-gray-400 text-xs font-medium px-3 py-1 rounded-full">{job.location}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{job.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-dark-2/50 border border-white/5 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Don't see the right role?</h2>
            <p className="text-gray-400 text-sm mb-6">We're always looking for talented individuals. Send us your resume anyway.</p>
            <a
              href="mailto:saisreelogistics16@gmail.com"
              className="bg-accent hover:bg-accent-dark text-dark font-semibold px-6 py-3 rounded-lg transition-all inline-block"
            >
              Send Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
