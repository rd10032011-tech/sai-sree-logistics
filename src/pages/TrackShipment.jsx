import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Package, MapPin, Warehouse, Truck, CheckCircle2, Clock, Search, AlertCircle } from 'lucide-react'

const sampleTracking = {
  id: 'SL-2025-4821',
  status: 'in-transit',
  estimatedDelivery: 'May 28, 2025',
  origin: 'Kannigaipur Warehouse',
  destination: 'Chennai Port',
  currentLocation: 'Kannigaipair, Tamil Nadu',
  milestones: [
    { label: 'Pickup Completed', date: 'May 25, 2025 - 09:30 AM', done: true },
    { label: 'Reached Sorting Hub', date: 'May 25, 2025 - 02:15 PM', done: true },
    { label: 'In Transit', date: 'May 26, 2025 - 08:00 AM', done: true },
    { label: 'Arrived at Destination City', date: 'Estimated May 27, 2025', done: false },
    { label: 'Out for Delivery', date: 'Estimated May 28, 2025', done: false },
    { label: 'Delivered', date: 'Pending', done: false },
  ],
}

export default function TrackShipment() {
  const ref = useRef(null)
  const [trackingId, setTrackingId] = useState('')
  const [searched, setSearched] = useState(false)
  const [loading, setLoading] = useState(false)
  const data = sampleTracking

  useEffect(() => {
    window.scrollTo(0, 0)
    if (ref.current) {
      ref.current.classList.remove('opacity-0', 'translate-y-10')
      ref.current.classList.add('opacity-100', 'translate-y-0')
    }
  }, [])

  const handleTrack = () => {
    if (!trackingId.trim()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSearched(true)
    }, 800)
  }

  const statusColors = {
    picked: 'bg-blue-500',
    'in-transit': 'bg-amber-500',
    delivered: 'bg-green-500',
  }

  return (
    <section className="relative pt-32 pb-24 lg:pb-32 min-h-screen bg-gradient-to-b from-[#F5F5F7] to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-extrabold text-sm transition-all mb-12 group">
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
              <ArrowLeft size={16} className="stroke-[3]" />
            </div>
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent mb-4 tracking-tight">Track Your Shipment</h1>
          <p className="text-accent/80 text-lg mb-10 leading-relaxed font-medium">Enter your tracking ID to get real-time status.</p>

          {/* Search */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => { setTrackingId(e.target.value); setSearched(false) }}
                  onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                  placeholder="Enter Tracking ID (e.g. SL-2025-XXXX)"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-5 py-4 text-accent placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all font-medium"
                />
              </div>
              <button
                onClick={handleTrack}
                disabled={loading || !trackingId.trim()}
                className="bg-primary hover:bg-primary-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-extrabold px-8 py-4 rounded-xl transition-all shadow-md shadow-primary/10 whitespace-nowrap flex items-center gap-2 justify-center"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                    Tracking...
                  </span>
                ) : (
                  'Track Now'
                )}
              </button>
            </div>
            <p className="text-gray-500 text-sm font-semibold mt-4">
              Don't have a tracking ID? <Link to="/contact" className="text-primary hover:underline font-bold">Contact us</Link> for assistance.
            </p>
          </div>

          {/* Result */}
          {searched && (
            <div className="mt-10 space-y-6 animate-fadeIn">
              {/* Status Banner */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${data.status === 'delivered' ? 'bg-green-500' : 'bg-amber-500'} text-white shadow-lg`}>
                      {data.status === 'delivered' ? <CheckCircle2 size={28} /> : <Truck size={28} />}
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-gray-400 uppercase tracking-wider">Tracking ID</p>
                      <h3 className="text-xl font-black text-accent">{data.id}</h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-extrabold text-gray-400 uppercase tracking-wider">Estimated Delivery</p>
                    <p className="text-lg font-black text-accent">{data.estimatedDelivery}</p>
                  </div>
                </div>
              </div>

              {/* Live Location */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { icon: Warehouse, label: 'Origin', value: data.origin },
                    { icon: MapPin, label: 'Current Location', value: data.currentLocation, highlight: true },
                    { icon: Package, label: 'Destination', value: data.destination },
                  ].map((item) => (
                    <div key={item.label} className={`p-4 rounded-2xl ${item.highlight ? 'bg-primary/5 border border-primary/10' : 'bg-gray-50 border border-gray-100'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <item.icon size={16} className={item.highlight ? 'text-primary' : 'text-gray-400'} />
                        <span className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">{item.label}</span>
                      </div>
                      <p className={`font-bold text-sm ${item.highlight ? 'text-primary' : 'text-accent'}`}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestones */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-black text-accent mb-6">Tracking Milestones</h3>
                <div className="relative">
                  <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gray-200" />
                  <div className="space-y-0">
                    {data.milestones.map((m, i) => (
                      <div key={i} className="relative flex items-start gap-5 pb-8 last:pb-0">
                        <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${m.done ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-gray-100 text-gray-400'}`}>
                          {m.done ? <CheckCircle2 size={18} /> : <Clock size={18} />}
                        </div>
                        <div className="pt-1.5">
                          <p className={`font-bold text-sm ${m.done ? 'text-accent' : 'text-gray-400'}`}>{m.label}</p>
                          <p className="text-xs font-semibold text-gray-400 mt-0.5">{m.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {!searched && (
            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              {[
                { step: '1', title: 'Pickup', desc: 'Shipment collected from your location' },
                { step: '2', title: 'In Transit', desc: 'Real-time tracking from origin to destination' },
                { step: '3', title: 'Delivered', desc: 'Confirmed delivery with proof' },
              ].map((item) => (
                <div key={item.step} className="text-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-extrabold text-lg shadow-md shadow-primary/15">
                    {item.step}
                  </div>
                  <h3 className="text-accent font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
