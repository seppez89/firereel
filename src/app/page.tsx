"use client";

import { useState } from "react";

/* ─── DATA ─── */

const steps = [
  { n: "01", title: "Brand brief", desc: "15 minutes to fill in your colours, tone, product, and audience. Done once, used every single month." },
  { n: "02", title: "We build", desc: "Scripts written by humans. Edited with AI precision. Voiceover, captions, music — all handled." },
  { n: "03", title: "Human review", desc: "Every ad is checked and approved by our production team before it ever reaches your portal." },
  { n: "04", title: "Monthly refresh", desc: "Each cycle we rotate creative angles and formats. Your ads never go stale." },
];

const checkpoints = [
  { icon: "✍️", label: "Script & strategy", desc: "A real human writes and reviews every script for your brand voice." },
  { icon: "🎬", label: "Creative direction", desc: "Our videographer signs off on every edit before it leaves production." },
  { icon: "✅", label: "Final QA", desc: "Each ad is checked for quality, branding, and platform compliance." },
];

const plans = [
  {
    tier: "Starter",
    price: "590",
    features: [
      "4 × 30-sec video ads",
      "Reels & Stories format",
      "Human-written scripts",
      "Branded captions & music",
      "5 business day delivery",
    ],
    cta: "Get started",
  },
  {
    tier: "Growth",
    price: "997",
    hot: true,
    features: [
      "6 × mixed format ads",
      "Reels, Stories & horizontal",
      "Professional AI presenter",
      "Human script writing included",
      "Priority 3-day delivery",
      "Monthly performance review",
    ],
    cta: "Get started",
  },
  {
    tier: "Brand",
    price: "2,050",
    features: [
      "12 × ads, all formats",
      "Custom branded presenter",
      "Cloned voice of your choice",
      "Full ad strategy & copy",
      "48-hour turnaround",
      "Dedicated account manager",
      "Monthly strategy call",
    ],
    cta: "Talk to us",
  },
];

const chips = [
  { label: "Real estate agencies", fire: true },
  { label: "E-commerce brands", fire: true },
  { label: "Health & fitness", fire: true },
  { label: "Restaurants & hospitality", fire: false },
  { label: "SaaS & apps", fire: false },
  { label: "Trade businesses", fire: false },
  { label: "Coaches & consultants", fire: false },
  { label: "Retail stores", fire: false },
  { label: "Property developers", fire: false },
  { label: "Local service businesses", fire: false },
];

const differCards = [
  { icon: "🎬", title: "Cinematic quality", desc: "Built by a commercial videographer with real production credits. Your ads look premium, not generated." },
  { icon: "⚡", title: "AI-powered speed", desc: "What used to take a creative team weeks, we deliver in days. AI handles the scale, humans handle the craft." },
  { icon: "🔁", title: "Truly hands-free", desc: "Brief us once. After that, ads land in your portal every month without you lifting a finger." },
  { icon: "📍", title: "Adelaide-born", desc: "Local business. Real accountability. We know the Australian market and we're in your timezone." },
];

const testimonials = [
  {
    quote: "I was sceptical about AI video but these don't look AI at all. Our Meta ads went from 1.2% CTR to 3.8% in the first month. The scripts are sharp and the editing is genuinely impressive.",
    name: "Sarah M.",
    business: "E-commerce, Melbourne",
  },
  {
    quote: "We were paying a freelancer $3,000 a month for four videos. FireReel gives us ten ads for less and they're ready in three days. The human quality check makes all the difference.",
    name: "James T.",
    business: "Real Estate Agency, Brisbane",
  },
  {
    quote: "What got me was that it doesn't feel like a tool — it feels like having a production team. The ads look like we spent serious money on them.",
    name: "Priya K.",
    business: "Health & Fitness, Sydney",
  },
];

const faqs = [
  { q: "Do I need to provide my own footage?", a: "No. We use AI-generated visuals, premium stock footage, and your product photos or images. If you have footage, great — we'll use it. If not, we've got it covered." },
  { q: "Will the ads look AI-generated?", a: "No — and this is what separates us. Every ad is written and reviewed by a real commercial videographer before delivery. AI gives us the speed; our production team gives it the finish. The result looks like you hired a proper agency." },
  { q: "What platforms are the ads formatted for?", a: "Meta (Facebook & Instagram), TikTok, YouTube Shorts, and LinkedIn. All formats included depending on your plan." },
  { q: "Can I cancel anytime?", a: "Yes. Month to month. No lock-in contracts, no cancellation fees, no questions asked." },
  { q: "How is this different from just using an AI tool myself?", a: "You could try. But you'd spend hours learning the tools, and the output would look like everyone else's AI content. We bring 10+ years of commercial production experience to every ad. That's the difference your audience feels, even if they can't explain why." },
];

const clientTypes = ["Real Estate", "E-Commerce", "Health & Fitness", "Hospitality", "SaaS", "Trades"];

const adPreviews = [
  {
    id: 1,
    industry: "Real Estate",
    format: "Reel",
    brand: "Adelaide Property Co.",
    headline: "Stunning 4-bed home in the Hills",
    cta: "Book a viewing →",
    bg: "from-[#1a1a2e] to-[#16213e]",
    accent: "#4A90D9",
    tag: "JUST LISTED",
    tagBg: "#E05C2A",
    videoUrl: "https://pub-4ef325eb18e2417496a343f696ab87f1.r2.dev/Untitled.m4v",
  },
  {
    id: 2,
    industry: "E-Commerce",
    format: "TikTok",
    brand: "Glow Skin Co.",
    headline: "Your skin routine just got easier",
    cta: "Shop the range →",
    bg: "from-[#2d1b3d] to-[#1a0a2e]",
    accent: "#C084FC",
    tag: "NEW DROP",
    tagBg: "#7C3AED",
  },
  {
    id: 3,
    industry: "Health & Fitness",
    format: "Reel",
    brand: "Peak Performance Gym",
    headline: "7-day free trial. No lock-in.",
    cta: "Claim your pass →",
    bg: "from-[#1a2e1a] to-[#0a1a0a]",
    accent: "#4ADE80",
    tag: "LIMITED OFFER",
    tagBg: "#16A34A",
  },
];

const filterTabs = ["All", "Real Estate", "E-Commerce", "Health & Fitness"];

/* ─── COMPONENT ─── */

export default function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredAds = activeFilter === "All"
    ? adPreviews
    : adPreviews.filter((a) => a.industry === activeFilter);

  return (
    <div className="text-text">
      {/* ─── NAV ─── */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-border">
        <div className="flex items-center gap-2 font-[family-name:var(--font-bebas)] text-2xl tracking-[3px]">
          <svg className="w-5 h-6" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2C10 2 14 7 14 11C14 11 16 9 15 6C15 6 19 10 19 15C19 20.5 14.97 24 10 24C5.03 24 1 20.5 1 15C1 10 5 6 7 4C7 4 6.5 8 8 10C8 10 8 5 10 2Z" fill="#E05C2A" />
            <path d="M10 14C10 14 12 16 12 18C12 19.1 11.1 20 10 20C8.9 20 8 19.1 8 18C8 16 10 14 10 14Z" fill="#FF8C5A" />
          </svg>
          <span>
            <span className="text-primary">FIRE</span>
            <span className="text-text">REEL</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-text-secondary cursor-pointer hover:text-text transition">How it works</a>
          <a href="#pricing" className="text-sm text-text-secondary cursor-pointer hover:text-text transition">Pricing</a>
          <a
            href="#work"
            className="bg-primary text-white border-none rounded-md px-[22px] py-[9px] text-sm font-medium cursor-pointer hover:brightness-110 transition"
          >
            See sample ads ↗
          </a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="pt-20 pb-14 px-8 max-w-[860px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-xs tracking-[2.5px] uppercase text-text-tertiary mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-[pulse_2s_infinite]" />
          Human-directed · AI-powered · Australia-wide
        </div>
        <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(52px,10vw,96px)] leading-[0.92] tracking-[1px] mb-7">
          Video ads that<br />
          <span className="text-primary">actually</span>{" "}
          <span className="text-text-secondary">convert.</span>
        </h1>
        <p className="text-[17px] text-text-secondary leading-[1.75] max-w-[500px] mx-auto mb-4 font-light">
          <strong className="text-text font-medium">Scroll-stopping, cinematically edited video ads</strong>{" "}
          delivered to your inbox every month. No agency fees. No filming. No back-and-forth. Just ads that work.
        </p>
        <p className="text-[14px] text-text-tertiary mb-10 font-light">
          Every ad reviewed and approved by a real commercial videographer before it reaches you.
        </p>
        <div className="flex gap-3 justify-center flex-wrap mb-12">
          <a
            href="#contact"
            className="bg-primary text-white border-none rounded-lg px-[30px] py-[14px] text-[15px] font-medium cursor-pointer hover:brightness-110 transition"
          >
            Start getting ads →
          </a>
          <a
            href="#why-firereel"
            className="bg-transparent text-text border border-border rounded-lg px-[30px] py-[14px] text-[15px] font-normal cursor-pointer hover:border-text-secondary transition"
          >
            How it compares
          </a>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <div className="border-t border-b border-border py-7 px-8 flex justify-center gap-[clamp(1.5rem,4vw,4rem)] flex-wrap">
        {[
          { num: "20min", label: "avg. production per ad" },
          { num: "97%", label: "time saved vs agency" },
          { num: "10×", label: "more creatives per dollar" },
          { num: "$0", label: "setup fee, ever" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <span className="font-[family-name:var(--font-bebas)] text-[38px] text-primary leading-none block">
              {s.num}
            </span>
            <div className="text-xs text-text-tertiary mt-[3px] tracking-[0.5px]">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ─── CLIENT LOGO STRIP ─── */}
      <div className="py-6 px-8 border-b border-border">
        <p className="text-center text-[11px] tracking-[2px] uppercase text-text-tertiary mb-4">Trusted by Australian businesses in</p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {clientTypes.map((t) => (
            <span key={t} className="text-[13px] text-text-secondary font-medium">{t}</span>
          ))}
        </div>
      </div>

      {/* ─── AD PREVIEW ─── */}
      <section id="work" className="py-[4.5rem] px-8 max-w-[1200px] mx-auto">
        <div className="text-[11px] tracking-[3px] uppercase text-primary mb-4 font-medium">Client work</div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(34px,5vw,56px)] leading-none mb-2">
              Ads that actually ran.
            </h2>
            <p className="text-base text-text-secondary font-light max-w-[420px]">
              A sample of real work across industries. Every one of these was delivered in under 5 days.
            </p>
          </div>
          <a href="#contact" className="shrink-0 text-sm text-primary font-medium hover:underline">
            Get ads like these →
          </a>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-[12px] font-medium border transition cursor-pointer ${
                activeFilter === tab
                  ? "bg-primary text-white border-primary"
                  : "bg-transparent text-text-secondary border-border hover:border-text-secondary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Scrollable ad cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible">
          {filteredAds.map((ad) => (
            <div
              key={ad.id}
              className="group relative shrink-0 w-[180px] md:w-auto snap-start rounded-2xl overflow-hidden cursor-pointer"
              style={{ aspectRatio: "9/16" }}
            >
              {ad.videoUrl ? (
                /* ── Native video embed ── */
                <>
                  <video
                    src={ad.videoUrl}
                    controls
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Label overlay */}
                  <div className="absolute top-2 left-2 z-10 pointer-events-none">
                    <div
                      className="text-[8px] font-bold tracking-[1.5px] uppercase px-2 py-[3px] rounded-full text-white"
                      style={{ background: ad.tagBg }}
                    >
                      {ad.tag}
                    </div>
                  </div>
                </>
              ) : (
                /* ── Mock card ── */
                <>
                  {/* Background */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${ad.bg}`} />

                  {/* Noise texture overlay */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

                  {/* Top bar */}
                  <div className="absolute top-0 left-0 right-0 p-3 flex items-center justify-between z-10">
                    <div
                      className="text-[8px] font-bold tracking-[1.5px] uppercase px-2 py-[3px] rounded-full text-white"
                      style={{ background: ad.tagBg }}
                    >
                      {ad.tag}
                    </div>
                    <div className="text-[9px] text-white/50 font-medium">{ad.format}</div>
                  </div>

                  {/* Simulated visual area */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full opacity-20 blur-2xl" style={{ background: ad.accent }} />
                    <div className="absolute w-24 h-24 rounded-full opacity-10 blur-3xl" style={{ background: ad.accent }} />
                  </div>

                  {/* Caption bar */}
                  <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                      <div className="text-[9px] text-white/50 mb-1">{ad.brand}</div>
                      <div className="text-[11px] font-semibold text-white leading-tight">{ad.headline}</div>
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                    <div className="w-full text-center text-[9px] font-bold py-2 rounded-lg text-white" style={{ background: ad.accent }}>
                      {ad.cta}
                    </div>
                    <div className="text-[8px] text-white/30 text-center mt-1.5">{ad.industry}</div>
                  </div>

                  {/* Play button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                      <svg className="w-5 h-5 text-gray-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-white/20 rounded-2xl transition-all group-hover:scale-[1.01] pointer-events-none" />
                </>
              )}
            </div>
          ))}
        </div>

        {filteredAds.length === 0 && (
          <p className="text-text-tertiary text-sm text-center py-12">No samples in this category yet.</p>
        )}
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="py-[4.5rem] px-8 max-w-[920px] mx-auto">
        <div className="text-[11px] tracking-[3px] uppercase text-primary mb-4 font-medium">How it works</div>
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(34px,5vw,56px)] leading-none mb-2">
          Brief once.<br />Receive forever.
        </h2>
        <p className="text-base text-text-secondary font-light mb-10 max-w-[480px]">
          Four steps. Then it just runs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border rounded-xl overflow-hidden">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`p-8 pr-6 bg-bg ${i < steps.length - 1 ? "border-b lg:border-b-0 lg:border-r" : ""} border-border`}
            >
              <div className="font-[family-name:var(--font-bebas)] text-5xl leading-none text-border-secondary mb-4">
                {s.n}
              </div>
              <h3 className="text-[15px] font-medium mb-1.5">{s.title}</h3>
              <p className="text-[13px] text-text-secondary leading-[1.65]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3 HUMAN CHECKPOINTS ─── */}
      <div className="bg-card py-12 px-8 border-y border-border">
        <div className="max-w-[920px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="md:w-64 shrink-0">
              <div className="text-[11px] tracking-[3px] uppercase text-primary mb-2 font-medium">Our guarantee</div>
              <h3 className="font-[family-name:var(--font-bebas)] text-[clamp(26px,3vw,38px)] leading-none">
                Every ad passes 3 human checkpoints.
              </h3>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {checkpoints.map((c) => (
                <div key={c.label} className="flex gap-3 items-start">
                  <span className="text-xl mt-0.5">{c.icon}</span>
                  <div>
                    <div className="text-[13px] font-medium mb-1">{c.label}</div>
                    <div className="text-[12px] text-text-secondary leading-[1.6]">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="py-[4.5rem] px-8 max-w-[920px] mx-auto">
        <div className="text-[11px] tracking-[3px] uppercase text-primary mb-4 font-medium">Pricing</div>
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(34px,5vw,56px)] leading-none mb-2">
          Simple plans.<br />No surprises.
        </h2>
        <p className="text-base text-text-secondary font-light mb-10 max-w-[480px]">
          Cancel anytime. No lock-in. No setup fees.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.tier}
              className={`border rounded-xl p-7 bg-bg relative ${
                plan.hot ? "border-[1.5px] border-primary" : "border-border"
              }`}
            >
              {plan.hot && (
                <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] tracking-[1.5px] uppercase px-4 py-[3px] rounded-full whitespace-nowrap font-medium">
                  Most popular
                </div>
              )}
              <div className="text-[11px] tracking-[2px] uppercase text-text-tertiary mb-3">{plan.tier}</div>
              <div className="font-[family-name:var(--font-bebas)] text-[54px] leading-none flex items-start gap-[3px]">
                <sup className="text-[22px] mt-[10px] font-[family-name:var(--font-dm)] font-light">$</sup>
                {plan.price}
              </div>
              <div className="text-[13px] text-text-tertiary mb-5">per month · cancel anytime</div>
              <div className="h-px bg-border mb-5" />
              <ul className="list-none space-y-0">
                {plan.features.map((f) => (
                  <li key={f} className="text-[13px] text-text-secondary py-[5px] flex items-start gap-[10px]">
                    <span className="w-[5px] h-[5px] rounded-full bg-primary shrink-0 mt-[6px]" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full mt-6 py-3 rounded-[7px] text-sm font-medium text-center cursor-pointer transition ${
                  plan.hot
                    ? "bg-primary text-white border border-primary hover:brightness-110"
                    : "bg-transparent text-text border border-border hover:border-text-secondary"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHO WE WORK WITH ─── */}
      <div className="bg-card py-14 px-8 border-y border-border">
        <div className="max-w-[920px] mx-auto">
          <div className="text-[11px] tracking-[3px] uppercase text-primary mb-4 font-medium">Who we work with</div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(28px,4vw,44px)] leading-none mb-2">
            Built for businesses that need<br />video at scale.
          </h2>
          <div className="flex flex-wrap gap-[10px] mt-7">
            {chips.map((c) => (
              <div
                key={c.label}
                className={`py-[7px] px-[18px] rounded-full text-[13px] cursor-default border bg-bg ${
                  c.fire ? "border-primary text-primary" : "border-border text-text-secondary"
                }`}
              >
                {c.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── WHY FIREREEL ─── */}
      <section id="why-firereel" className="py-[4.5rem] px-8 max-w-[920px] mx-auto">
        <div className="text-[11px] tracking-[3px] uppercase text-primary mb-4 font-medium">Why FireReel</div>
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(34px,5vw,56px)] leading-none mb-2">
          Not just another<br />AI tool.
        </h2>
        <p className="text-base text-text-secondary font-light mb-10 max-w-[480px]">
          There are tools. Then there&apos;s someone who actually knows what great video looks like.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {differCards.map((card) => (
            <div key={card.title} className="p-6 border border-border rounded-xl bg-bg">
              <div className="w-9 h-9 rounded-lg bg-card flex items-center justify-center mb-4 text-base">
                {card.icon}
              </div>
              <h3 className="text-sm font-medium mb-1.5">{card.title}</h3>
              <p className="text-[13px] text-text-secondary leading-[1.6]">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <div className="bg-card py-14 px-8 border-y border-border">
        <div className="max-w-[920px] mx-auto">
          <div className="text-[11px] tracking-[3px] uppercase text-primary mb-4 font-medium">Results</div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(28px,4vw,44px)] leading-none mb-8">
            What our clients say.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-bg border border-border rounded-xl p-6 flex flex-col gap-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[13px] text-text-secondary leading-[1.7] flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="text-[13px] font-medium">{t.name}</div>
                  <div className="text-[12px] text-text-tertiary">{t.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── FAQ ─── */}
      <section className="py-16 px-8 max-w-[680px] mx-auto">
        <div className="text-[11px] tracking-[3px] uppercase text-primary mb-4 font-medium">Questions</div>
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(28px,4vw,44px)] leading-none mb-6">
          The obvious ones,<br />answered.
        </h2>
        {faqs.map((faq) => (
          <div key={faq.q} className="border-b border-border py-5">
            <div className="text-[15px] font-medium mb-2">{faq.q}</div>
            <div className="text-[13px] text-text-secondary leading-[1.7]">{faq.a}</div>
          </div>
        ))}
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section id="contact" className="py-[4.5rem] px-8 max-w-[680px] mx-auto">
        <div className="text-[11px] tracking-[3px] uppercase text-primary mb-4 font-medium">Get started</div>
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(28px,4vw,44px)] leading-none mb-2">
          Let&apos;s make your<br />first ads.
        </h2>
        <p className="text-base text-text-secondary font-light mb-2 max-w-[480px]">
          Fill in the form and we&apos;ll be in touch within one business day.
        </p>
        <div className="inline-flex items-center gap-2 mb-8 text-[12px] text-text-tertiary">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
          You&apos;ll hear from a real person within 4 business hours.
        </div>

        {formSubmitted ? (
          <div className="border border-primary/30 rounded-xl p-10 text-center bg-card">
            <div className="text-5xl mb-4">🔥</div>
            <h3 className="font-[family-name:var(--font-bebas)] text-3xl mb-2">You&apos;re in!</h3>
            <p className="text-sm text-text-secondary">
              Thanks for reaching out. A member of our team will be in touch within 4 business hours.
            </p>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/xdapwbye"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" },
              }).then((res) => {
                if (res.ok) setFormSubmitted(true);
              });
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                required
                placeholder="Full name"
                className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text placeholder-text-tertiary focus:outline-none focus:border-primary transition"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text placeholder-text-tertiary focus:outline-none focus:border-primary transition"
              />
            </div>
            <input
              name="business"
              type="text"
              required
              placeholder="Business name"
              className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text placeholder-text-tertiary focus:outline-none focus:border-primary transition"
            />
            <select
              name="plan"
              className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:border-primary transition"
            >
              <option value="starter">Starter — $590/mo</option>
              <option value="growth">Growth — $997/mo</option>
              <option value="brand">Brand — $2,050/mo</option>
              <option value="unsure">Not sure yet</option>
            </select>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your business and what kind of ads you need"
              className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text placeholder-text-tertiary focus:outline-none focus:border-primary transition resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-white border-none rounded-lg py-3.5 text-[15px] font-medium cursor-pointer hover:brightness-110 transition"
            >
              Send enquiry →
            </button>
          </form>
        )}
      </section>

      {/* ─── CTA ─── */}
      <div className="text-center py-20 px-8 border-t border-border">
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(38px,7vw,72px)] leading-none mb-4">
          Your competitors are already<br />running <span className="text-primary">video ads.</span>
        </h2>
        <p className="text-base text-text-secondary mb-4 font-light">
          Get your first month of cinematic video ads and see what the difference looks like.
        </p>
        <p className="text-[13px] text-text-tertiary mb-10">
          Not happy with your first batch? A real person will personally fix it — guaranteed.
        </p>
        <a
          href="#contact"
          className="inline-block bg-primary text-white border-none rounded-lg px-9 py-4 text-base font-medium cursor-pointer hover:brightness-110 transition"
        >
          Start your first month →
        </a>
      </div>

      {/* ─── FOOTER ─── */}
      <footer className="px-8 py-6 text-center text-xs text-text-tertiary border-t border-border flex justify-between items-center flex-wrap gap-2">
        <span>© 2026 FireReel · firereel.net</span>
        <span>Creative direction by our production team · Adelaide, South Australia</span>
      </footer>
    </div>
  );
}
