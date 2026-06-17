'use client'

import { useState } from 'react'

const STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh',
  'Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka',
  'Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram',
  'Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana',
  'Tripura','Uttar Pradesh','Uttarakhand','West Bengal',
  'Delhi','Jammu & Kashmir','Ladakh','Puducherry'
]

export default function WaitlistForm() {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', state: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage('You\'re on the list! We\'ll contact you within 24 hours.')
        setForm({ name: '', mobile: '', email: '', state: '' })
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-900/30 border border-green-500/40 rounded-2xl p-8 text-center max-w-md mx-auto">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-white font-bold text-xl mb-2">You&apos;re on the list!</h3>
        <p className="text-white/70 text-sm">{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-3">
      <input
        type="text"
        placeholder="Your full name *"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
        className="w-full px-4 py-3 rounded-xl border-none text-slate-800 text-sm outline-none focus:ring-2 focus:ring-[#FF9933]"
      />
      <input
        type="tel"
        placeholder="Mobile number (10 digits) *"
        value={form.mobile}
        onChange={e => setForm({ ...form, mobile: e.target.value.replace(/\D/g, '').slice(0, 10) })}
        required
        className="w-full px-4 py-3 rounded-xl border-none text-slate-800 text-sm outline-none focus:ring-2 focus:ring-[#FF9933]"
      />
      <input
        type="email"
        placeholder="Email address (optional)"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        className="w-full px-4 py-3 rounded-xl border-none text-slate-800 text-sm outline-none focus:ring-2 focus:ring-[#FF9933]"
      />
      <select
        value={form.state}
        onChange={e => setForm({ ...form, state: e.target.value })}
        className="w-full px-4 py-3 rounded-xl border-none text-slate-500 text-sm outline-none focus:ring-2 focus:ring-[#FF9933] bg-white"
      >
        <option value="">Select your state (optional)</option>
        {STATES.map(s => <option key={s} value={s}>{s}</option>)}
      </select>

      {status === 'error' && (
        <p className="text-red-400 text-xs text-center">{message}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#FF9933] text-[#003366] font-bold py-3.5 rounded-xl hover:bg-orange-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-base"
      >
        {status === 'loading' ? 'Joining...' : 'Join Early Access →'}
      </button>
      <p className="text-white/40 text-xs text-center">🔒 No spam · Your data is safe · Delete anytime</p>
    </form>
  )
}
