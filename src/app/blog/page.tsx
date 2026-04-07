import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Video Ad Strategy, Tips & Industry Insights | FireReel",
  description:
    "Practical guides and industry insights on video ad strategy, AI production, social media formats, and getting the most from your video advertising budget.",
  keywords: [
    "video ad strategy",
    "AI video ads",
    "social media video ads",
    "video ad formats",
    "affordable video ads",
    "video ads subscription",
    "AI ad creator",
    "video marketing tips",
  ],
  alternates: {
    canonical: "https://firereel.net/blog",
  },
  openGraph: {
    title: "Blog — Video Ad Strategy & Insights | FireReel",
    description:
      "Practical guides on video advertising strategy, AI production, social media formats, and getting real ROI from your video ads.",
    url: "https://firereel.net/blog",
    siteName: "FireReel",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Video Ad Strategy & Insights | FireReel",
    description:
      "Practical guides on video advertising strategy, AI production, and social media formats.",
  },
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const categoryColors: Record<string, string> = {
  "Industry Insights": "bg-primary/10 text-primary",
  "Strategy": "bg-[#1C1C1A]/8 text-text-secondary",
  "Tips & Advice": "bg-[#E2E0D8] text-text-secondary",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="text-text bg-bg min-h-screen">
      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 border-b border-border bg-bg/90 backdrop-blur-xl">
        <a href="/">
          <img src="/logo.png" alt="FireReel" className="h-16 w-auto -my-4" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/#how-it-works" className="text-sm text-text-secondary hover:text-text transition">How it works</a>
          <a href="/#pricing" className="text-sm text-text-secondary hover:text-text transition">Pricing</a>
          <a href="/#work" className="text-sm text-text-secondary hover:text-text transition">Our work</a>
          <a
            href="/#contact"
            className="bg-primary text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:brightness-110 transition shadow-[0_0_20px_rgba(224,92,42,0.25)]"
          >
            Get started →
          </a>
        </div>
        <a href="/#contact" className="md:hidden bg-primary text-white rounded-lg px-4 py-2 text-sm font-semibold">
          Start →
        </a>
      </nav>

      {/* ─── HEADER ─── */}
      <header className="px-6 md:px-10 pt-16 pb-12 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-text-tertiary mb-6 border border-border rounded-full px-4 py-2 bg-card">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          FireReel Blog
        </div>
        <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(42px,7vw,80px)] leading-[0.9] tracking-[0.5px] mb-4">
          Strategy, Insights &{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #E05C2A 0%, #FF8C5A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Video Ad Tips
          </span>
        </h1>
        <p className="text-[17px] text-text-secondary leading-[1.8] max-w-[560px] font-light">
          Practical guides on getting more from your video advertising — from format strategy to
          production decisions to platform tactics.
        </p>
      </header>

      {/* ─── FEATURED POST ─── */}
      <section className="px-6 md:px-10 pb-12 max-w-6xl mx-auto">
        <Link
          href={`/blog/${featured.slug}`}
          className="block group rounded-2xl border border-border bg-card overflow-hidden hover:border-text-tertiary transition-colors duration-200"
        >
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span
                className={`text-[11px] font-semibold tracking-[1.5px] uppercase px-3 py-1.5 rounded-full ${categoryColors[featured.category] ?? "bg-card text-text-secondary"}`}
              >
                {featured.category}
              </span>
              <span className="text-xs text-text-tertiary">Featured</span>
            </div>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(28px,4vw,48px)] leading-[1] tracking-[0.3px] mb-4 group-hover:text-primary transition-colors duration-200">
              {featured.title}
            </h2>
            <p className="text-[16px] text-text-secondary leading-[1.75] max-w-[640px] mb-8 font-light">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-text-tertiary">{formatDate(featured.date)}</span>
              <span className="text-border-secondary">·</span>
              <span className="text-xs text-text-tertiary">{featured.readTime}</span>
              <span
                className="text-sm font-medium text-primary group-hover:underline ml-auto"
              >
                Read article →
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* ─── POST GRID ─── */}
      <section className="px-6 md:px-10 pb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-5">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card hover:border-text-tertiary transition-colors duration-200 overflow-hidden"
            >
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-[10px] font-semibold tracking-[1.5px] uppercase px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-card text-text-secondary"}`}
                  >
                    {post.category}
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(22px,2.5vw,30px)] leading-[1.05] tracking-[0.3px] mb-3 group-hover:text-primary transition-colors duration-200 flex-1">
                  {post.title}
                </h2>
                <p className="text-[14px] text-text-secondary leading-[1.7] mb-6 font-light line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <span className="text-xs text-text-tertiary">{formatDate(post.date)}</span>
                  <span className="text-border-secondary">·</span>
                  <span className="text-xs text-text-tertiary">{post.readTime}</span>
                  <span className="text-xs font-medium text-primary group-hover:underline ml-auto">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="px-6 md:px-10 py-20 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] tracking-[2px] uppercase text-text-tertiary mb-4">Ready to get started?</p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,6vw,64px)] leading-[0.9] tracking-[0.5px] mb-5">
            Stop reading about video ads.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #E05C2A 0%, #FF8C5A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get them.
            </span>
          </h2>
          <p className="text-[16px] text-text-secondary leading-[1.75] mb-8 font-light">
            FireReel delivers premium video ads on subscription — human scripts, AI speed, delivered monthly.
            From $590/mo. No lock-in contracts.
          </p>
          <a
            href="https://firereel.net/#contact"
            className="inline-block text-white rounded-xl px-10 py-4 text-[15px] font-semibold transition"
            style={{
              background: "linear-gradient(135deg, #E05C2A 0%, #FF7040 100%)",
              boxShadow: "0 4px 30px rgba(224,92,42,0.35)",
            }}
          >
            Get your first ads →
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="px-6 md:px-10 py-6 border-t border-border flex justify-between items-center flex-wrap gap-2">
        <span className="text-xs text-text-tertiary">© 2026 FireReel · firereel.net</span>
        <span className="text-xs text-text-tertiary">AI production. Human standards. · Born in Adelaide, serving the world</span>
      </footer>
    </div>
  );
}
