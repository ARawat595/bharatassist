export default function Home() {
  const FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSestNLySfi9uLQNQSJS11G8bHqyNUiNdZVQti6Rx_qRQA_t5w/viewform";

  const features = [
    {
      icon: "🔍",
      title: "Scheme Discovery",
      desc: "Search across 1,200+ central and state government schemes by category, state, or keyword. Updated daily from official sources.",
      tag: "Central + 28 States",
      bg: "bg-blue-50",
    },
    {
      icon: "✅",
      title: "AI Eligibility Checker",
      desc: "Input your profile once. Our engine checks income, caste, occupation, age, gender criteria and tells you exactly where you stand.",
      tag: "Instant Results",
      bg: "bg-green-50",
    },
    {
      icon: "💬",
      title: "AI Assistant",
      desc: "Ask anything about any scheme in your language. Get plain-language explanations and step-by-step application guidance.",
      tag: "Available on WhatsApp",
      bg: "bg-orange-50",
    },
    {
      icon: "📱",
      title: "Application Tracker",
      desc: "Track every application across different portals in one dashboard. Never lose track of where an application stands again.",
      tag: "Real-time Updates",
      bg: "bg-blue-50",
    },
    {
      icon: "📂",
      title: "Document Generator",
      desc: "Know exactly which documents each scheme requires. Check your Document Readiness Score before applying.",
      tag: "Score & Checklist",
      bg: "bg-green-50",
    },
    {
      icon: "🌐",
      title: "Regional Language UI",
      desc: "Switch the entire platform to Hindi, Tamil, Telugu, Bengali, or 8 other Indian languages. All content verified by native speakers.",
      tag: "12 Languages",
      bg: "bg-orange-50",
    },
  ];

  const steps = [
    { emoji: "👤", title: "Create Your Profile", desc: "Answer basic questions about your location, income, occupation, and family. Takes under 3 minutes.", active: true },
    { emoji: "🎯", title: "See Your Matches", desc: "Our AI instantly matches you with central and state schemes you're eligible for, ranked by benefit value.", active: false },
    { emoji: "📋", title: "Prepare Documents", desc: "Get a customized document checklist for each scheme. Check your readiness score and fill the gaps.", active: false },
    { emoji: "✅", title: "Apply & Track", desc: "Apply with AI guidance step-by-step and track your application status with real-time WhatsApp alerts.", active: false },
  ];

  const testimonials = [
    { initials: "RS", name: "Ramesh Sharma", meta: "Farmer, Rajasthan · Claims: ₹6,000/year", text: "I had no idea I was eligible for PM Kisan Samman Nidhi. BharatAssist showed me three schemes I qualified for and helped me apply in one afternoon.", bg: "bg-blue-900" },
    { initials: "LK", name: "Lakshmi Krishnan", meta: "Teacher, Tamil Nadu · Health Cover: ₹5L", text: "The Tamil language support made everything so much easier. I got enrolled in Ayushman Bharat without visiting a single government office.", bg: "bg-green-700" },
    { initials: "MB", name: "Mohammed Bashir", meta: "Small Trader, West Bengal", text: "Earlier I paid ₹2,000 to an agent to fill a form. Now I do everything myself with the AI assistant. It guides you like a patient government officer.", bg: "bg-blue-700" },
  ];

  const faqs = [
    { q: "Is BharatAssist an official government website?", a: "No. BharatAssist is an independent platform that aggregates and simplifies information from official government sources including MyScheme, UMANG, and state portals. All scheme data is sourced from official government publications." },
    { q: "Is my personal data safe?", a: "Your data is encrypted at rest and in transit. We never sell your personal information. You can delete your account and all associated data at any time. We comply with India's Digital Personal Data Protection Act 2023." },
    { q: "Does it work for state government schemes too?", a: "Yes. We cover schemes from all 28 states and 8 Union Territories, in addition to all major central government schemes. State-specific schemes are available in the regional language of the state." },
    { q: "How accurate is the eligibility information?", a: "Our eligibility engine is built on official scheme guidelines reviewed by policy experts. We update scheme rules within 24–48 hours of official announcements. Final eligibility is always determined by the government authority." },
    { q: "What if I don't have a smartphone or internet?", a: "Our WhatsApp chatbot works on basic smartphones with minimal data. We are also partnering with Common Service Centres (CSCs) so citizens without smartphones can access services at their nearest CSC operator." },
    { q: "Can I use it for my whole family?", a: "Yes. The Premium plan allows up to 5 family member profiles under one account. You can check scheme eligibility for parents, spouse, and children, each with their own profile details." },
  ];

  return (
    <main className="font-sans text-slate-800 bg-slate-50">

      {/* NAV */}
      <nav className="bg-[#003366] sticky top-0 z-50 border-b-[3px] border-[#FF9933]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3 no-underline">
            <div className="w-9 h-9 bg-[#FF9933] rounded-lg flex items-center justify-center text-lg">🇮🇳</div>
            <div>
              <div className="text-white font-bold text-lg leading-none font-poppins">BharatAssist</div>
              <div className="text-white/60 text-[10px] tracking-wide">सरकारी योजना सहायक</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-white/80 hover:text-white text-sm transition-colors">Features</a>
            <a href="#how" className="text-white/80 hover:text-white text-sm transition-colors">How It Works</a>
            <a href="#pricing" className="text-white/80 hover:text-white text-sm transition-colors">Pricing</a>
            <a href="#faq" className="text-white/80 hover:text-white text-sm transition-colors">FAQ</a>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer"
              className="bg-[#FF9933] text-[#003366] font-semibold text-sm px-4 py-2 rounded-md hover:bg-orange-500 transition-colors">
              Start Free →
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#003366] via-[#004080] to-[#005BAC] pt-20 pb-24 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-50" style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }} />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs text-white/90 mb-5">
              <span className="w-1.5 h-1.5 bg-[#FF9933] rounded-full" />
              Trusted by 50,000+ Citizens · Official Scheme Data
            </div>
            <p className="text-white/60 text-xl mb-3" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>नमस्ते, भारत</p>
            <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
              India&apos;s <span className="text-[#FF9933]">Smartest</span><br />Government<br />Scheme Guide
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              Discover the government schemes you qualify for, check eligibility in minutes, and get AI-powered guidance through every step — in your language.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer"
                className="bg-[#FF9933] text-[#003366] font-bold px-7 py-3.5 rounded-xl hover:bg-orange-500 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-400/40 no-underline inline-flex items-center gap-2">
                Check My Eligibility →
              </a>
              <a href="#features"
                className="bg-white/10 border border-white/25 text-white font-medium px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors no-underline">
                See All Features
              </a>
            </div>
            <div className="flex flex-wrap gap-5">
              {["1,000+ Central & State Schemes", "12 Indian Languages", "WhatsApp Support"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/80 text-sm">
                  <span className="w-4 h-4 bg-[#138808] rounded-full flex items-center justify-center text-[10px] text-white flex-shrink-0">✓</span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* DASHBOARD MOCKUP */}
          <div className="hidden md:block">
            <div className="bg-white/5 border border-white/15 rounded-2xl p-4 backdrop-blur-sm max-w-md mx-auto">
              <div className="bg-white/8 rounded-t-lg px-4 py-2.5 flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-white/40 text-xs ml-2">BharatAssist Dashboard</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                {[
                  { label: "Eligibility Score", value: "87%", sub: "High match", color: "text-green-400" },
                  { label: "Matched Schemes", value: "23", sub: "For your profile", color: "text-[#FF9933]" },
                  { label: "Docs Ready", value: "6/8", sub: "75% complete", color: "text-blue-300" },
                  { label: "Applications", value: "3", sub: "In progress", color: "text-white" },
                ].map((c) => (
                  <div key={c.label} className="bg-white/8 rounded-xl p-3.5">
                    <div className="text-white/50 text-[10px] uppercase tracking-wider mb-1">{c.label}</div>
                    <div className={`text-2xl font-bold ${c.color}`}>{c.value}</div>
                    <div className="text-white/40 text-[11px] mt-0.5">{c.sub}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white/6 rounded-xl p-3.5">
                <div className="text-white/40 text-[11px] uppercase tracking-wider mb-2.5">Top Recommendations</div>
                {[
                  { name: "PM Kisan Samman Nidhi", status: "Eligible", sc: "bg-green-900/40 text-green-400" },
                  { name: "Pradhan Mantri Awas Yojana", status: "Check docs", sc: "bg-orange-900/40 text-orange-400" },
                  { name: "Ayushman Bharat PM-JAY", status: "Applied", sc: "bg-blue-900/40 text-blue-300" },
                ].map((s) => (
                  <div key={s.name} className="flex items-center justify-between py-2 border-b border-white/6 last:border-0">
                    <span className="text-white/85 text-xs font-medium">{s.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${s.sc}`}>{s.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="bg-[#003366] py-6 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "1,200+", label: "Government Schemes" },
            { num: "50K+", label: "Citizens Helped" },
            { num: "12", label: "Indian Languages" },
            { num: "₹2.4Cr", label: "Benefits Unlocked" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-white">{s.num}</div>
              <div className="text-white/50 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-[#005BAC] text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100 uppercase tracking-wide mb-4">The Problem</span>
            <h2 className="text-4xl font-bold text-[#003366] leading-tight mb-4">Government Benefits Are Hidden<br />Behind Bureaucratic Walls</h2>
            <p className="text-slate-500 text-lg max-w-xl">Over ₹1 lakh crore in government benefits go unclaimed every year — not because people don&apos;t qualify, but because the system is too complex to navigate.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🌐", title: "Scattered Information", desc: "Scheme info is spread across 300+ government websites. Citizens waste days finding basic eligibility criteria.", num: "01" },
              { icon: "📄", title: "Document Confusion", desc: "Every scheme requires different documents. Wrong paperwork causes rejections with no explanation.", num: "02" },
              { icon: "🔄", title: "No Application Tracking", desc: "After submitting, citizens have no way to follow up. Applications disappear for months.", num: "03" },
              { icon: "🗣️", title: "Language Barrier", desc: "Most portals work only in English and Hindi. Citizens in Tamil Nadu, Bengal, or Odisha struggle.", num: "04" },
              { icon: "👨‍💼", title: "Middleman Exploitation", desc: "Citizens pay ₹500–₹5,000 to agents to fill forms that should take 10 minutes online, for free.", num: "05" },
              { icon: "⚠️", title: "Outdated Information", desc: "Scheme deadlines and eligibility rules change regularly. Most online information is months out of date.", num: "06" },
            ].map((p) => (
              <div key={p.num} className="bg-slate-50 border border-slate-200 rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute top-3 right-4 text-5xl font-extrabold text-slate-200 select-none">{p.num}</div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF9933]" />
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-semibold text-lg text-[#003366] mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-[#005BAC] text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100 uppercase tracking-wide mb-4">Platform Features</span>
            <h2 className="text-4xl font-bold text-[#003366] mb-4">Everything You Need to Access<br />Government Benefits</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">Designed with India&apos;s diverse population in mind — accessible from any smartphone, in any Indian language.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-[#005BAC] hover:shadow-lg hover:-translate-y-1 transition-all cursor-default">
                <div className={`w-14 h-14 ${f.bg} rounded-xl flex items-center justify-center text-2xl mb-5`}>{f.icon}</div>
                <h3 className="font-bold text-lg text-[#003366] mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{f.desc}</p>
                <span className="text-xs font-semibold text-[#005BAC] bg-blue-50 px-3 py-1 rounded-full">{f.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-[#003366] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15 uppercase tracking-wide mb-4">How It Works</span>
            <h2 className="text-4xl font-bold text-white mb-4">From Profile to Benefits in 4 Steps</h2>
            <p className="text-white/65 text-lg max-w-xl mx-auto">Most citizens find at least 3 schemes they qualify for within 5 minutes of signing up.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.title} className="text-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-5 border-2 ${s.active ? "bg-[#FF9933] border-[#FF9933]" : "bg-white/8 border-white/20"}`}>
                  {s.emoji}
                </div>
                <h3 className="font-semibold text-white text-base mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-48 mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-[#005BAC] text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100 uppercase tracking-wide mb-4">Citizen Stories</span>
            <h2 className="text-4xl font-bold text-[#003366] mb-4">Real People. Real Benefits.</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">Thousands of Indian citizens have discovered and claimed government benefits they didn&apos;t know they qualified for.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-slate-200 rounded-2xl p-7">
                <div className="text-[#FF9933] text-sm tracking-widest mb-4">★★★★★</div>
                <p className="text-slate-700 text-base leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 ${t.bg} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>{t.initials}</div>
                  <div>
                    <div className="font-semibold text-[#003366] text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{t.meta}</div>
                    <div className="text-[#138808] text-xs mt-0.5">✓ Verified User</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-[#005BAC] text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100 uppercase tracking-wide mb-4">Pricing</span>
            <h2 className="text-4xl font-bold text-[#003366] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">Government information should be accessible to everyone. Core features are free forever.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Free */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">Free</div>
              <div className="text-4xl font-extrabold text-[#003366] mb-1">₹0<span className="text-base font-normal text-slate-400">/mo</span></div>
              <div className="text-slate-400 text-sm mb-6">For every Indian citizen</div>
              <hr className="border-slate-200 mb-5" />
              <ul className="space-y-3 mb-8 text-sm">
                {["Search all 1,200+ schemes", "Basic eligibility check", "5 AI queries/month", "Hindi & English only"].map(f => (
                  <li key={f} className="flex items-center gap-2"><span className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-[10px] flex-shrink-0">✓</span>{f}</li>
                ))}
                {["Document readiness score", "Application tracking", "WhatsApp alerts"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-slate-400"><span className="w-5 h-5 bg-red-50 rounded-full flex items-center justify-center text-red-400 text-[10px] flex-shrink-0">✗</span>{f}</li>
                ))}
              </ul>
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center border-2 border-[#003366] text-[#003366] font-semibold py-3 rounded-xl hover:bg-blue-50 transition-colors no-underline">Get Started Free</a>
            </div>
            {/* Premium */}
            <div className="bg-[#003366] border border-[#003366] rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF9933] text-[#003366] text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">Most Popular</div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">Premium</div>
              <div className="text-4xl font-extrabold text-white mb-1">₹99<span className="text-base font-normal text-white/50">/mo</span></div>
              <div className="text-white/50 text-sm mb-6">Full access for individuals & families</div>
              <hr className="border-white/15 mb-5" />
              <ul className="space-y-3 mb-8 text-sm">
                {["Everything in Free", "Unlimited AI assistant", "All 12 Indian languages", "Document readiness score", "Application tracking dashboard", "WhatsApp & SMS alerts", "Family profile (up to 5 members)"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-white/85"><span className="w-5 h-5 bg-green-900/40 rounded-full flex items-center justify-center text-green-400 text-[10px] flex-shrink-0">✓</span>{f}</li>
                ))}
              </ul>
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#FF9933] text-[#003366] font-bold py-3 rounded-xl hover:bg-orange-400 transition-colors no-underline">Start 14-Day Free Trial</a>
            </div>
            {/* CSC */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">CSC / NGO</div>
              <div className="text-4xl font-extrabold text-[#003366] mb-1">₹499<span className="text-base font-normal text-slate-400">/mo</span></div>
              <div className="text-slate-400 text-sm mb-6">For Common Service Centres & NGOs</div>
              <hr className="border-slate-200 mb-5" />
              <ul className="space-y-3 mb-8 text-sm">
                {["Everything in Premium", "Up to 500 citizen profiles", "Bulk eligibility assessment", "Admin dashboard", "API access", "Priority support", "Custom branding"].map(f => (
                  <li key={f} className="flex items-center gap-2"><span className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-[10px] flex-shrink-0">✓</span>{f}</li>
                ))}
              </ul>
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center border-2 border-[#003366] text-[#003366] font-semibold py-3 rounded-xl hover:bg-blue-50 transition-colors no-underline">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-[#005BAC] text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100 uppercase tracking-wide mb-4">FAQ</span>
            <h2 className="text-4xl font-bold text-[#003366] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="font-semibold text-[#003366] text-sm mb-3">{f.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#003366] to-[#005BAC] py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF9933] via-transparent to-[#FF9933]" />
        <div className="flex justify-center gap-1 mb-8">
          <div className="h-0.5 w-10 bg-[#FF9933] rounded" />
          <div className="h-0.5 w-10 bg-white rounded" />
          <div className="h-0.5 w-10 bg-[#138808] rounded" />
        </div>
        <h2 className="text-4xl font-extrabold text-white mb-4">Discover Benefits Worth <span className="text-[#FF9933]">Lakhs</span><br />That Are Rightfully Yours</h2>
        <p className="text-white/70 text-lg mb-10 max-w-lg mx-auto">Join 50,000+ Indian citizens who have already found schemes they qualify for. Takes 3 minutes. Always free to start.</p>
        <a href={FORM_URL} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#FF9933] text-[#003366] font-bold text-lg px-10 py-4 rounded-xl hover:bg-orange-400 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-400/30 transition-all no-underline">
          Join Early Access →
        </a>
        <div className="text-white/40 text-xs mt-5">🔒 Your number is safe · No spam · OTP-based login only</div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#001a3d] pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[#FF9933] rounded-lg flex items-center justify-center text-lg">🇮🇳</div>
                <div>
                  <div className="text-white font-bold text-base leading-none">BharatAssist</div>
                  <div className="text-white/40 text-[10px] tracking-wide">सरकारी योजना सहायक</div>
                </div>
              </div>
              <p className="text-white/40 text-xs leading-relaxed mb-4">India&apos;s trusted AI-powered guide to government schemes, benefits, and entitlements. Built for every Indian citizen.</p>
              <div className="flex flex-wrap gap-2">
                {["हिंदी", "தமிழ்", "తెలుగు", "বাংলা", "ಕನ್ನಡ", "मराठी"].map(l => (
                  <span key={l} className="text-[11px] px-2.5 py-0.5 border border-white/15 text-white/40 rounded-full hover:border-[#FF9933] hover:text-[#FF9933] cursor-pointer transition-colors">{l}</span>
                ))}
              </div>
            </div>
            {[
              { title: "Platform", links: ["Scheme Finder", "Eligibility Check", "AI Assistant", "Application Tracker", "Document Guide", "WhatsApp Bot"] },
              { title: "Resources", links: ["All Schemes", "State Schemes", "Central Schemes", "Blog", "Help Center", "API Docs"] },
              { title: "Company", links: ["About Us", "Careers", "Press", "CSC Partners", "Contact"] },
            ].map(col => (
              <div key={col.title}>
                <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map(l => (
                    <li key={l}><a href="#" className="text-white/40 hover:text-white text-xs transition-colors no-underline">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-xs">© 2025 BharatAssist. Not affiliated with the Government of India.</p>
            <p className="text-white/25 text-xs flex items-center gap-2">🇮🇳 Data sourced from official government portals</p>
            <div className="flex gap-5">
              {["Privacy Policy", "Terms of Service", "DPDP Compliance"].map(l => (
                <a key={l} href="#" className="text-white/25 hover:text-white/60 text-xs transition-colors no-underline">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
