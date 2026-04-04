"use client";

import { useState } from "react";

/* ─── DATA ─── */

const steps = [
  { n: "01", title: "Send us what you've got", desc: "Got footage? Product shots? A phone video from the shop floor? Send it through. Got nothing? That's fine too — we'll source everything from scratch." },
  { n: "02", title: "We write & produce", desc: "A real scriptwriter crafts your messaging. Then our AI pipeline and human editors build cinematic video ads — fast, without cutting corners." },
  { n: "03", title: "Human quality check", desc: "Every single ad is reviewed frame-by-frame by our production team. Nothing leaves until a real person says it's ready." },
  { n: "04", title: "Deliver & repeat", desc: "Finished ads drop into your portal. Download, post, and watch them work. Next month, we do it all again with fresh angles." },
];

const checkpoints = [
  { icon: "✍️", label: "Script & strategy", desc: "Written by a real copywriter who understands what makes people stop scrolling and actually pay attention." },
  { icon: "🎬", label: "Creative direction", desc: "A commercial videographer reviews every cut, transition, and frame before anything goes out." },
  { icon: "✅", label: "Final QA", desc: "Branding, captions, formatting, audio — checked against every platform's specs. Pixel perfect." },
];

const plans = [
  {
    tier: "Starter",
    price: "590",
    perAd: "295",
    subtitle: "For businesses ready to start showing up",
    features: [
      "2 premium video ads per month",
      "Reels & Stories format",
      "Human-written scripts",
      "Your footage or ours — either works",
      "Branded captions & music",
      "1 revision round included",
      "5 business day delivery",
    ],
    cta: "Start getting ads",
  },
  {
    tier: "Growth",
    price: "997",
    perAd: "249",
    hot: true,
    subtitle: "For brands that need to be everywhere",
    features: [
      "4 premium video ads per month",
      "All formats — Reels, Stories, TikTok, YouTube",
      "Professional AI presenter option",
      "Human script & strategy included",
      "Your footage, ours, or a mix of both",
      "2 revision rounds per ad",
      "A/B variant testing included",
      "Priority 3-day delivery",
    ],
    cta: "Start getting ads",
  },
  {
    tier: "Brand",
    price: "2,050",
    perAd: "256",
    subtitle: "For serious brands that want to dominate",
    features: [
      "8 premium video ads per month",
      "Every format, every platform",
      "Custom branded AI presenter",
      "Cloned voice of your choice",
      "Full ad strategy, scripting & creative direction",
      "Unlimited revisions",
      "Dedicated strategist",
      "Priority 48-hour turnaround",
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
  { icon: "🎬", title: "Human craft, AI speed", desc: "Every ad is directed by a commercial videographer and polished by human editors. AI handles the heavy lifting so we can deliver volume without sacrificing quality." },
  { icon: "📦", title: "Your footage or ours", desc: "Send us raw clips from your phone, professional footage, product shots — whatever you have. Or send us nothing at all. We'll build stunning ads either way." },
  { icon: "🧠", title: "Strategy, not just edits", desc: "We don't just make pretty videos. Every script is written to convert — with hooks, objection handling, and calls to action that actually drive results." },
  { icon: "🌍", title: "Global reach, personal service", desc: "We work with businesses worldwide — from local shops to international brands. Real people, real accountability, and a production team that understands what makes audiences click, call, and buy." },
];

const testimonials = [
  {
    quote: "I sent them shaky phone footage from a property walkthrough. What came back looked like it cost $5,000 to produce. Our engagement tripled in the first month.",
    name: "Sarah M.",
    business: "E-commerce, Melbourne AU",
    metric: "3× engagement",
  },
  {
    quote: "We had zero footage, zero assets, zero idea what we wanted. They handled everything. Six ads landed in our portal on day three and every single one was usable.",
    name: "James T.",
    business: "Real Estate Agency, London UK",
    metric: "0 assets needed",
  },
  {
    quote: "The difference between FireReel and the AI tools I tried myself? These ads actually look like a human made them. Because one did.",
    name: "Priya K.",
    business: "Health & Fitness, Toronto CA",
    metric: "Premium quality",
  },
];

const faqs = [
  {
    q: "Do I need to provide footage?",
    a: "No — but you can if you want to. We work with whatever you have. Send us raw phone clips, professional footage, product photos, or literally nothing. We'll source premium stock, use AI-generated visuals, and produce everything from scratch if needed. The best results usually come from a mix — even a 10-second phone video of your product or shopfront gives us something authentic to work with.",
  },
  {
    q: "Will the ads actually look good, or will they look like AI slop?",
    a: "They'll look like you hired a proper production team — because you did. AI helps us move fast, but every ad is scripted by a human copywriter, edited by a human with commercial video production experience, and quality-checked before delivery. If it looks generated, it doesn't ship. Period.",
  },
  {
    q: "What platforms are the ads made for?",
    a: "Meta (Facebook & Instagram Reels and Stories), TikTok, YouTube Shorts, and LinkedIn. We format everything to spec for each platform — aspect ratios, safe zones, caption placement, the lot. All included in your plan.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Month to month. No lock-in contracts, no cancellation fees, no awkward conversations. If it's not working for you, cancel before your next billing cycle and that's it.",
  },
  {
    q: "How is this different from using an AI video tool myself?",
    a: "You could try. But you'd spend hours figuring out prompts, templates, and editing. And the result would look like everyone else's AI content — because it is. FireReel gives you the speed of AI with the taste of a real creative team. That's the difference your audience feels when they stop scrolling, even if they can't explain why.",
  },
  {
    q: "What if I don't like what you produce?",
    a: "Every plan includes revision rounds. Tell us what's off and we'll fix it. Our Brand plan includes unlimited revisions. We're not happy until you are — a real person will personally rework anything that doesn't meet the brief.",
  },
];

const clientTypes = ["Real Estate", "E-Commerce", "Health & Fitness", "Hospitality", "SaaS", "Trades", "Coaches", "Property", "Retail", "Finance"];

const adPreviews = [
  {
    id: 1,
    industry: "Real Estate",
    format: "Reel",
    brand: "Prestige Property Co.",
    headline: "Stunning 4-bed home with views",
    cta: "Book a viewing →",
    bg: "from-[#1a1a2e] to-[#16213e]",
    accent: "#4A90D9",
    tag: "JUST LISTED",
    tagBg: "#E05C2A",
    videoUrl: "https://pub-4ef325eb18e2417496a343f696ab87f1.r2.dev/firereel/lockleysfirereel.mp4",
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredAds = activeFilter === "All"
    ? adPreviews
    : adPreviews.filter((a) => a.industry === activeFilter);

  return (
    <div className="text-text bg-bg min-h-screen">

      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 border-b border-border bg-bg/90 backdrop-blur-xl">
        <a href="/">
          <img src="/logo.png" alt="FireReel" className="h-10 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-text-secondary hover:text-text transition">How it works</a>
          <a href="#pricing" className="text-sm text-text-secondary hover:text-text transition">Pricing</a>
          <a href="#work" className="text-sm text-text-secondary hover:text-text transition">Our work</a>
          <a href="#contact" className="bg-primary text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:brightness-110 transition shadow-[0_0_20px_rgba(224,92,42,0.25)]">
            Get started →
          </a>
        </div>
        <a href="#contact" className="md:hidden bg-primary text-white rounded-lg px-4 py-2 text-sm font-semibold">Start →</a>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative pt-20 pb-16 px-6 md:px-10 max-w-[920px] mx-auto text-center overflow-hidden">
        {/* Subtle ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(224,92,42,0.07) 0%, transparent 70%)" }} />

        <div className="relative">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-text-tertiary mb-8 border border-border rounded-full px-4 py-2 bg-card">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-[pulse_2s_infinite]" />
            AI speed · Human quality · Delivered globally
          </div>

          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(58px,11vw,112px)] leading-[0.88] tracking-[0.5px] mb-7">
            Video ads that<br />
            actually{" "}
            <span style={{ background: "linear-gradient(135deg, #E05C2A 0%, #FF8C5A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              convert.
            </span>
          </h1>

          <p className="text-[17px] text-text-secondary leading-[1.8] max-w-[560px] mx-auto mb-3 font-light">
            We combine <strong className="text-text font-medium">AI production speed</strong> with{" "}
            <strong className="text-text font-medium">human creative direction</strong> to deliver scroll-stopping video ads every month — on subscription.
          </p>
          <p className="text-[13px] text-text-tertiary mb-10 font-light">
            Send us footage. Or don&apos;t. We make stunning ads either way.
          </p>

          <div className="flex gap-3 justify-center flex-wrap mb-14">
            <a href="#contact" className="text-white rounded-xl px-9 py-4 text-[15px] font-semibold transition"
              style={{ background: "linear-gradient(135deg, #E05C2A 0%, #FF7040 100%)", boxShadow: "0 4px 30px rgba(224,92,42,0.35)" }}>
              Get your first ads →
            </a>
            <a href="#work" className="bg-card text-text border border-border rounded-xl px-9 py-4 text-[15px] font-normal hover:border-text-secondary transition">
              See examples
            </a>
          </div>

          {/* Social proof bar */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-[12px] text-text-secondary ml-1.5">4.9 / 5 from clients</span>
            </div>
            <span className="text-border-secondary hidden sm:block">|</span>
            <span className="text-[12px] text-text-secondary">200+ brands served</span>
            <span className="text-border-secondary hidden sm:block">|</span>
            <span className="text-[12px] text-text-secondary">$2M+ in ad spend managed</span>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="border-y border-border py-4 overflow-hidden bg-card">
        <div className="marquee-track">
          {[...clientTypes, ...clientTypes, ...clientTypes, ...clientTypes].map((t, i) => (
            <span key={i} className="text-[11px] text-text-tertiary font-medium uppercase tracking-[2.5px] shrink-0 px-6">
              {t} <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── STATS ─── */}
      <div className="py-14 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "3", suffix: " days", label: "average delivery" },
            { num: "100%", suffix: "", label: "human-reviewed" },
            { num: "10×", suffix: "", label: "cheaper than an agency" },
            { num: "$0", suffix: "", label: "setup fee, ever" },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition">
              <div className="font-[family-name:var(--font-bebas)] leading-none mb-2"
                style={{ fontSize: "clamp(36px,5vw,52px)", background: "linear-gradient(135deg, #E05C2A, #FF8C5A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {s.num}{s.suffix}
              </div>
              <div className="text-[11px] text-text-tertiary tracking-[0.5px]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── YOUR FOOTAGE OR OURS ─── */}
      <section className="py-16 px-6 md:px-10 max-w-[1000px] mx-auto">
        <div className="text-[11px] tracking-[3px] uppercase text-primary mb-4 font-medium">Flexible by design</div>
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,62px)] leading-none mb-3">
          Your footage.<br />Or ours. Or both.
        </h2>
        <p className="text-base text-text-secondary font-light mb-10 max-w-[520px]">
          Some clients send us raw iPhone clips. Others send us nothing at all. Either way, we produce ads that look like serious money was spent on them.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              label: "01",
              title: "You have footage",
              tag: "Send it over",
              desc: "Phone clips, drone shots, product videos, shopfront walk-throughs — send whatever you've got. We'll transform raw footage into scroll-stopping ads with pro editing, captions, music, and voiceover.",
              highlight: false,
            },
            {
              label: "02",
              title: "You have nothing",
              tag: "We build from scratch",
              desc: "No footage, no assets, no brief. Tell us what you sell and we'll handle the rest — sourcing premium visuals, writing the script, producing the full ad. You won't be able to tell we didn't film it.",
              highlight: true,
            },
            {
              label: "03",
              title: "Mix and match",
              tag: "Best of both",
              desc: "The highest-converting ads usually blend both — your authentic brand moments combined with cinematic production, AI-enhanced visuals, and a script designed to stop the scroll.",
              highlight: false,
            },
          ].map((card) => (
            <div key={card.title}
              className={`rounded-2xl p-7 border transition relative overflow-hidden ${card.highlight
                ? "border-primary/50 bg-primary/[0.04] hover:bg-primary/[0.07]"
                : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <div className="font-[family-name:var(--font-bebas)] text-[52px] leading-none mb-1 text-border-secondary select-none">{card.label}</div>
              <div className="text-[10px] tracking-[2px] uppercase text-primary font-semibold mb-2">{card.tag}</div>
              <h3 className="text-[16px] font-semibold mb-3 text-text">{card.title}</h3>
              <p className="text-[13px] text-text-secondary leading-[1.7]">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── AD PREVIEW ─── */}
      <section id="work" className="py-16 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="text-[11px] tracking-[3px] uppercase text-primary mb-4 font-medium">Our work</div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,62px)] leading-none mb-2">
              See what we produce.
            </h2>
            <p className="text-base text-text-secondary font-light max-w-[420px]">
              Real ads. Every one scripted, edited, and quality-checked by our team.
            </p>
          </div>
          <a href="#contact" className="shrink-0 text-sm text-primary font-medium hover:underline">Get ads like these →</a>
        </div>

        <div className="flex gap-2 flex-wrap mb-8">
          {filterTabs.map((tab) => (
            <button key={tab} onClick={() => setActiveFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-[12px] font-medium border transition cursor-pointer ${
                activeFilter === tab
                  ? "bg-primary text-white border-primary shadow-[0_0_15px_rgba(224,92,42,0.3)]"
                  : "bg-card text-text-secondary border-border hover:border-text-secondary"
              }`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {filteredAds.filter(ad => ad.videoUrl).map((ad) => (
            <div key={ad.id} className="relative w-full rounded-2xl overflow-hidden border border-border" style={{ aspectRatio: "16/9" }}>
              <video src={ad.videoUrl} controls playsInline className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute top-3 left-3 z-10 pointer-events-none">
                <div className="text-[8px] font-bold tracking-[1.5px] uppercase px-2 py-[3px] rounded-full text-white" style={{ background: ad.tagBg }}>{ad.tag}</div>
              </div>
            </div>
          ))}
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 md:overflow-visible">
            {filteredAds.filter(ad => !ad.videoUrl).map((ad) => (
              <div key={ad.id} className="group relative shrink-0 w-[180px] md:w-auto snap-start rounded-2xl overflow-hidden cursor-pointer border border-border" style={{ aspectRatio: "9/16" }}>
                <div className={`absolute inset-0 bg-gradient-to-b ${ad.bg}`} />
                <div className="absolute top-0 left-0 right-0 p-3 flex items-center justify-between z-10">
                  <div className="text-[8px] font-bold tracking-[1.5px] uppercase px-2 py-[3px] rounded-full text-white" style={{ background: ad.tagBg }}>{ad.tag}</div>
                  <div className="text-[9px] text-white/50 font-medium">{ad.format}</div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full opacity-20 blur-2xl" style={{ background: ad.accent }} />
                </div>
                <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                    <div className="text-[9px] text-white/50 mb-1">{ad.brand}</div>
                    <div className="text-[11px] font-semibold text-white leading-tight">{ad.headline}</div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                  <div className="w-full text-center text-[9px] font-bold py-2 rounded-lg text-white" style={{ background: ad.accent }}>{ad.cta}</div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                    <svg className="w-5 h-5 text-gray-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {filteredAds.length === 0 && <p className="text-text-tertiary text-sm text-center py-12">No samples in this category yet.</p>}
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="py-16 px-6 md:px-10 max-w-[1000px] mx-auto">
        <div className="text-[11px] tracking-[3px] uppercase text-primary mb-4 font-medium">How it works</div>
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,62px)] leading-none mb-3">
          You brief us once.<br />We deliver every month.
        </h2>
        <p className="text-base text-text-secondary font-light mb-10 max-w-[480px]">
          Four steps. No meetings. No back-and-forth. Just ads in your portal, ready to post.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.n} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition">
              <div className="font-[family-name:var(--font-bebas)] text-[52px] leading-none mb-4 text-border-secondary">{s.n}</div>
              <h3 className="text-[14px] font-semibold mb-2 text-text">{s.title}</h3>
              <p className="text-[12px] text-text-secondary leading-[1.65]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3 HUMAN CHECKPOINTS ─── */}
      <div className="py-14 px-6 md:px-10 border-y border-border bg-card">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-14">
            <div className="md:w-60 shrink-0">
              <div className="text-[11px] tracking-[3px] uppercase text-primary mb-3 font-medium">Human guarantee</div>
              <h3 className="font-[family-name:var(--font-bebas)] text-[clamp(28px,3vw,42px)] leading-none">
                Every ad passes 3 human checkpoints.
              </h3>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {checkpoints.map((c) => (
                <div key={c.label} className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-base shrink-0 mt-0.5">{c.icon}</div>
                  <div>
                    <div className="text-[13px] font-semibold mb-1 text-text">{c.label}</div>
                    <div className="text-[12px] text-text-secondary leading-[1.65]">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="py-20 px-6 md:px-10 max-w-[1000px] mx-auto">
        <div className="text-[11px] tracking-[3px] uppercase text-primary mb-4 font-medium">Pricing</div>
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,62px)] leading-none mb-3">
          One subscription.<br />Unlimited potential.
        </h2>
        <p className="text-base text-text-secondary font-light mb-12 max-w-[480px]">No lock-in. No setup fees. No hidden costs. Cancel anytime.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div key={plan.tier}
              className={`relative rounded-2xl p-7 transition ${plan.hot ? "border border-primary/60 bg-bg" : "border border-border bg-card hover:border-primary/30"}`}
              style={plan.hot ? { boxShadow: "0 0 40px rgba(224,92,42,0.10)" } : {}}>
              {plan.hot && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-[10px] tracking-[1.5px] uppercase px-4 py-1 rounded-full whitespace-nowrap font-semibold"
                  style={{ background: "linear-gradient(135deg, #E05C2A, #FF7040)", boxShadow: "0 0 20px rgba(224,92,42,0.4)" }}>
                  Most popular
                </div>
              )}
              <div className="text-[10px] tracking-[2px] uppercase text-text-tertiary mb-2">{plan.tier}</div>
              <div className="font-[family-name:var(--font-bebas)] text-[62px] leading-none flex items-start gap-[2px] mb-0.5">
                <sup className="text-[20px] mt-[16px] font-[family-name:var(--font-dm)] font-light text-text-secondary">$</sup>
                <span style={plan.hot ? { background: "linear-gradient(135deg, #E05C2A, #FF8C5A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } : {}}>
                  {plan.price}
                </span>
              </div>
              <div className="text-[11px] text-text-tertiary mb-0.5">per month · cancel anytime</div>
              <div className="text-[11px] text-primary/80 mb-4 font-medium">from ${plan.perAd}/ad</div>
              <div className="text-[12px] text-text-secondary mb-5">{plan.subtitle}</div>
              <div className="h-px bg-border mb-5" />
              <ul className="space-y-0 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="text-[12px] text-text-secondary py-[5px] flex items-start gap-2.5">
                    <span className="w-[5px] h-[5px] rounded-full bg-primary shrink-0 mt-[5px]" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact"
                className={`block w-full py-3 rounded-xl text-[13px] font-semibold text-center cursor-pointer transition ${plan.hot ? "text-white" : "bg-bg text-text border border-border hover:border-text-secondary"}`}
                style={plan.hot ? { background: "linear-gradient(135deg, #E05C2A, #FF7040)", boxShadow: "0 4px 20px rgba(224,92,42,0.3)" } : {}}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-[12px] text-text-tertiary mt-6">
          💡 Traditional agency video ads cost $2,000–$10,000 <em>per ad</em>. FireReel starts at <strong className="text-text">$295/ad</strong>.
        </p>
      </section>

      {/* ─── WHO WE WORK WITH ─── */}
      <div className="py-16 px-6 md:px-10 border-y border-border bg-card">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-[11px] tracking-[3px] uppercase text-primary mb-4 font-medium">Who we work with</div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(30px,4vw,50px)] leading-none mb-8">
            If you sell something,<br />we can make it sell faster.
          </h2>
          <div className="flex flex-wrap gap-3">
            {chips.map((c) => (
              <div key={c.label}
                className={`py-2 px-5 rounded-full text-[12px] font-medium border cursor-default transition ${c.fire
                  ? "border-primary/50 text-primary bg-primary/[0.06] hover:bg-primary/[0.1]"
                  : "border-border text-text-secondary bg-bg hover:border-text-tertiary"
                }`}>
                {c.fire && "🔥 "}{c.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── WHY FIREREEL ─── */}
      <section className="py-16 px-6 md:px-10 max-w-[1000px] mx-auto">
        <div className="text-[11px] tracking-[3px] uppercase text-primary mb-4 font-medium">Why FireReel</div>
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,62px)] leading-none mb-3">
          AI production.<br />Human standards.
        </h2>
        <p className="text-base text-text-secondary font-light mb-10 max-w-[480px]">
          Anyone can generate a video with AI. We built a pipeline that uses AI where it makes things faster — and humans where it makes things better.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {differCards.map((card) => (
            <div key={card.title} className="p-6 border border-border rounded-2xl bg-card hover:border-primary/40 transition">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 text-lg">{card.icon}</div>
              <h3 className="text-[14px] font-semibold mb-2 text-text">{card.title}</h3>
              <p className="text-[13px] text-text-secondary leading-[1.65]">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <div className="py-16 px-6 md:px-10 border-y border-border bg-card">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-[11px] tracking-[3px] uppercase text-primary mb-4 font-medium">Client results</div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(30px,4vw,50px)] leading-none mb-10">
            Don&apos;t take our word for it.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-bg border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/30 transition">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{t.metric}</span>
                </div>
                <p className="text-[13px] text-text-secondary leading-[1.75] flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="text-[13px] font-semibold text-text">{t.name}</div>
                  <div className="text-[11px] text-text-tertiary">{t.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── FAQ ─── */}
      <section className="py-16 px-6 md:px-10 max-w-[700px] mx-auto">
        <div className="text-[11px] tracking-[3px] uppercase text-primary mb-4 font-medium">FAQ</div>
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(30px,4vw,50px)] leading-none mb-8">
          Everything you need<br />to know.
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="border border-border rounded-xl overflow-hidden bg-card">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-bg transition cursor-pointer">
                <span className="text-[14px] font-medium text-text">{faq.q}</span>
                <span className={`text-primary text-xl shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-[13px] text-text-secondary leading-[1.8] border-t border-border pt-4">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section id="contact" className="py-16 px-6 md:px-10 max-w-[680px] mx-auto">
        <div className="text-[11px] tracking-[3px] uppercase text-primary mb-4 font-medium">Get started</div>
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(30px,4vw,50px)] leading-none mb-2">
          Your first batch of ads<br />is one form away.
        </h2>
        <p className="text-base text-text-secondary font-light mb-2 max-w-[480px]">
          Tell us about your business. We&apos;ll show you exactly how we&apos;d make it look incredible on video.
        </p>
        <div className="inline-flex items-center gap-2 mb-8 text-[12px] text-text-tertiary">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-[pulse_2s_infinite]" />
          A real human responds within 4 business hours.
        </div>

        {formSubmitted ? (
          <div className="border border-primary/30 rounded-2xl p-10 text-center bg-primary/[0.04]">
            <div className="text-5xl mb-4">🔥</div>
            <h3 className="font-[family-name:var(--font-bebas)] text-3xl mb-2">You&apos;re in!</h3>
            <p className="text-sm text-text-secondary">Thanks for reaching out. A member of our team will be in touch within 4 business hours.</p>
          </div>
        ) : (
          <form action="https://formspree.io/f/xdapwbye" method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
                .then((res) => { if (res.ok) setFormSubmitted(true); });
            }}
            className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input name="name" type="text" required placeholder="Full name" className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text placeholder-text-tertiary focus:outline-none focus:border-primary transition" />
              <input name="email" type="email" required placeholder="Email address" className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text placeholder-text-tertiary focus:outline-none focus:border-primary transition" />
            </div>
            <input name="business" type="text" required placeholder="Business name" className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text placeholder-text-tertiary focus:outline-none focus:border-primary transition" />
            <select name="plan" className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-primary transition">
              <option value="starter">Starter — 2 ads · $590/mo</option>
              <option value="growth">Growth — 4 ads · $997/mo</option>
              <option value="brand">Brand — 8 ads · $2,050/mo</option>
              <option value="unsure">Not sure yet</option>
            </select>
            <select name="footage" className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-primary transition">
              <option value="have-footage">I have footage / assets to send</option>
              <option value="no-footage">I don&apos;t have footage — build from scratch</option>
              <option value="mix">I have some stuff, you fill the gaps</option>
              <option value="unsure">Not sure yet</option>
            </select>
            <textarea name="message" rows={4} placeholder="Tell us about your business — what you sell, who your customers are, and what kind of ads you're after"
              className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text placeholder-text-tertiary focus:outline-none focus:border-primary transition resize-none" />
            <button type="submit" className="w-full text-white rounded-xl py-4 text-[15px] font-semibold cursor-pointer transition"
              style={{ background: "linear-gradient(135deg, #E05C2A 0%, #FF7040 100%)", boxShadow: "0 4px 30px rgba(224,92,42,0.3)" }}>
              Get my first ads →
            </button>
          </form>
        )}
      </section>

      {/* ─── CTA BANNER ─── */}
      <div className="relative text-center py-24 px-6 md:px-10 border-t border-border overflow-hidden bg-card">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(224,92,42,0.07) 0%, transparent 70%)" }} />
        <div className="relative">
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(40px,7vw,82px)] leading-[0.9] mb-5">
            Your competitors are<br />already running{" "}
            <span style={{ background: "linear-gradient(135deg, #E05C2A, #FF8C5A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              video ads.
            </span>
          </h2>
          <p className="text-base text-text-secondary mb-4 font-light max-w-lg mx-auto">
            The businesses winning on social aren&apos;t spending $10k on production crews. They&apos;re using FireReel.
          </p>
          <p className="text-[13px] text-text-tertiary mb-10">Not happy with your first batch? A real human will personally rework it — guaranteed.</p>
          <a href="#contact" className="inline-block text-white rounded-xl px-10 py-4 text-base font-semibold transition"
            style={{ background: "linear-gradient(135deg, #E05C2A 0%, #FF7040 100%)", boxShadow: "0 4px 40px rgba(224,92,42,0.35)" }}>
            Start your first month →
          </a>
        </div>
      </div>

      {/* ─── FOOTER ─── */}
      <footer className="px-6 md:px-10 py-6 border-t border-border flex justify-between items-center flex-wrap gap-2">
        <span className="text-xs text-text-tertiary">© 2026 FireReel · firereel.net</span>
        <span className="text-xs text-text-tertiary">AI production. Human standards. · Born in Adelaide, serving the world</span>
      </footer>
    </div>
  );
}
