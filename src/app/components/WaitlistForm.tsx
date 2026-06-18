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
        setMessage("We'll contact you within 24 hours to help find schemes you qualify for.")
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
      <div className="max-w-md mx-auto bg-white rounded-2xl p-8 text-center shadow-2xl">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-[#003366] font-bold text-xl mb-2">You&apos;re on the list!</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{message}</p>
        <div className="mt-4 flex items-center justify-center gap-2 text-[#138808] text-sm font-medium">
          <span>✓</span> Entry saved successfully
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Card header */}
      <div className="bg-[#003366] px-6 py-4 flex items-center gap-3">
        <div className="w-8 h-8 bg-[#FF9933] rounded-lg flex items-center justify-center text-base">🇮🇳</div>
        <div>
          <div className="text-white font-semibold text-sm">Join Early Access</div>
          <div className="text-white/60 text-xs">Free · No spam · Cancel anytime</div>
        </div>
        <div className="ml-auto bg-[#138808] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">FREE</div>
      </div>

      {/* Form body */}
      <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Ramesh Kumar"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 px-4 py-3 rounded-xl text-sm outline-none focus:border-[#005BAC] focus:ring-2 focus:ring-[#005BAC]/20 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium">+91</span>
            <input
              type="tel"
              placeholder="98765 43210"
              value={form.mobile}
              onChange={e => setForm({ ...form, mobile: e.target.value.replace(/\D/g, '').slice(0, 10) })}
              required
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 pl-12 pr-4 py-3 rounded-xl text-sm outline-none focus:border-[#005BAC] focus:ring-2 focus:ring-[#005BAC]/20 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Email <span className="text-slate-300 font-normal normal-case">(optional)</span>
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 px-4 py-3 rounded-xl text-sm outline-none focus:border-[#005BAC] focus:ring-2 focus:ring-[#005BAC]/20 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            State <span className="text-slate-300 font-normal normal-case">(optional)</span>
          </label>
          <select
            value={form.state}
            onChange={e => setForm({ ...form, state: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 text-slate-600 px-4 py-3 rounded-xl text-sm outline-none focus:border-[#005BAC] focus:ring-2 focus:ring-[#005BAC]/20 transition-all appearance-none cursor-pointer"
          >
            <option value="">Select your state</option>
            {STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-xs px-4 py-3 rounded-xl">
            ⚠️ {message}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-[#FF9933] text-[#003366] font-bold py-3.5 rounded-xl hover:bg-orange-400 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed text-base shadow-lg shadow-orange-300/30"
        >
          {status === 'loading' ? '⏳ Joining...' : 'Join Early Access →'}
        </button>

        <div className="flex items-center justify-center gap-4 text-slate-400 text-[11px]">
          <span>🔒 Secure</span>
          <span>·</span>
          <span>No spam</span>
          <span>·</span>
          <span>Delete anytime</span>
        </div>
      </form>
    </div>
  )
}