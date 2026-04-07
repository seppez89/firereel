import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPost, getAllSlugs } from "@/lib/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | FireReel Blog",
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://firereel.net/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://firereel.net/blog/${post.slug}`,
      siteName: "FireReel",
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "FireReel",
      url: "https://firereel.net",
    },
    publisher: {
      "@type": "Organization",
      name: "FireReel",
      url: "https://firereel.net",
      logo: {
        "@type": "ImageObject",
        url: "https://firereel.net/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://firereel.net/blog/${post.slug}`,
    },
  };

  return (
    <div className="text-text bg-bg min-h-screen">
      {/* ─── SCHEMA ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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
            href="https://firereel.net/#contact"
            className="bg-primary text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:brightness-110 transition shadow-[0_0_20px_rgba(224,92,42,0.25)]"
          >
            Get started →
          </a>
        </div>
        <a href="https://firereel.net/#contact" className="md:hidden bg-primary text-white rounded-lg px-4 py-2 text-sm font-semibold">
          Start →
        </a>
      </nav>

      {/* ─── ARTICLE LAYOUT ─── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-12 pb-20">
        <div className="flex gap-16 items-start">

          {/* ─── MAIN CONTENT ─── */}
          <article className="flex-1 min-w-0">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition mb-10 group"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className={`text-[10px] font-semibold tracking-[1.5px] uppercase px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-card text-text-secondary"}`}
              >
                {post.category}
              </span>
              <span className="text-xs text-text-tertiary">{formatDate(post.date)}</span>
              <span className="text-border-secondary">·</span>
              <span className="text-xs text-text-tertiary">{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(32px,5vw,62px)] leading-[0.95] tracking-[0.3px] mb-8">
              {post.title}
            </h1>

            {/* Excerpt / lede */}
            <p className="text-[18px] text-text-secondary leading-[1.8] mb-10 font-light border-l-2 border-primary pl-5">
              {post.excerpt}
            </p>

            {/* Article body */}
            <div
              className="
                [&>p]:text-[16px] [&>p]:leading-[1.85] [&>p]:text-text-secondary [&>p]:mb-5 [&>p]:font-light
                [&>h2]:font-[family-name:var(--font-bebas)] [&>h2]:text-[clamp(22px,3vw,34px)] [&>h2]:leading-[1] [&>h2]:tracking-[0.3px] [&>h2]:text-text [&>h2]:mt-12 [&>h2]:mb-4
                [&>h3]:text-[15px] [&>h3]:font-semibold [&>h3]:text-text [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:tracking-[0.1px]
                [&>ul]:mb-6 [&>ul]:pl-0 [&>ul]:space-y-2
                [&>ul>li]:text-[15px] [&>ul>li]:text-text-secondary [&>ul>li]:leading-[1.75] [&>ul>li]:pl-5 [&>ul>li]:relative [&>ul>li]:font-light
                [&>ul>li]:before:content-['—'] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:text-primary [&>ul>li]:before:font-normal
                [&>strong]:text-text [&>strong]:font-medium
                [&_strong]:text-text [&_strong]:font-medium
                [&_em]:text-text-secondary [&_em]:italic
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* ─── ARTICLE FOOTER CTA ─── */}
            <div className="mt-16 rounded-2xl border border-border bg-card p-8 md:p-10">
              <p className="text-[11px] tracking-[2px] uppercase text-text-tertiary mb-3">Ready to get your own?</p>
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(28px,4vw,44px)] leading-[0.95] tracking-[0.3px] mb-4">
                Premium video ads,{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #E05C2A 0%, #FF8C5A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  delivered monthly.
                </span>
              </h2>
              <p className="text-[15px] text-text-secondary leading-[1.75] mb-6 font-light max-w-md">
                FireReel combines AI production speed with human creative direction. From $590/mo. No lock-in contracts.
              </p>
              <a
                href="https://firereel.net/#contact"
                className="inline-block text-white rounded-xl px-8 py-3.5 text-[14px] font-semibold transition"
                style={{
                  background: "linear-gradient(135deg, #E05C2A 0%, #FF7040 100%)",
                  boxShadow: "0 4px 20px rgba(224,92,42,0.3)",
                }}
              >
                Get started →
              </a>
            </div>

            {/* ─── MORE POSTS ─── */}
            {otherPosts.length > 0 && (
              <div className="mt-16">
                <h2 className="font-[family-name:var(--font-bebas)] text-[28px] tracking-[0.3px] mb-6 text-text">
                  More from the blog
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {otherPosts.slice(0, 2).map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group rounded-xl border border-border bg-card p-5 hover:border-text-tertiary transition-colors"
                    >
                      <span
                        className={`text-[10px] font-semibold tracking-[1.5px] uppercase px-2.5 py-1 rounded-full inline-block mb-3 ${categoryColors[p.category] ?? "bg-card text-text-secondary"}`}
                      >
                        {p.category}
                      </span>
                      <h3 className="font-[family-name:var(--font-bebas)] text-[18px] leading-[1.1] tracking-[0.3px] mb-2 group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs text-text-tertiary">{p.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* ─── STICKY SIDEBAR ─── */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              {/* CTA card */}
              <div className="rounded-2xl border border-border bg-card p-6 mb-6">
                <p className="text-[10px] tracking-[2px] uppercase text-text-tertiary mb-3">
                  Ready to get your own?
                </p>
                <p className="font-[family-name:var(--font-bebas)] text-[22px] leading-[1] tracking-[0.3px] mb-3 text-text">
                  Premium video ads on subscription
                </p>
                <p className="text-[13px] text-text-secondary leading-[1.65] mb-5 font-light">
                  AI speed. Human quality. From $590/mo with no lock-in.
                </p>
                <a
                  href="https://firereel.net/#contact"
                  className="block text-center text-white rounded-lg px-4 py-3 text-[13px] font-semibold transition hover:brightness-110"
                  style={{
                    background: "linear-gradient(135deg, #E05C2A 0%, #FF7040 100%)",
                    boxShadow: "0 4px 20px rgba(224,92,42,0.25)",
                  }}
                >
                  Get started →
                </a>
              </div>

              {/* Other posts */}
              {otherPosts.length > 0 && (
                <div>
                  <p className="text-[10px] tracking-[2px] uppercase text-text-tertiary mb-4">More articles</p>
                  <div className="space-y-3">
                    {otherPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="group block rounded-xl border border-border p-4 hover:border-text-tertiary hover:bg-card transition-colors"
                      >
                        <p className="text-[12px] font-medium text-text leading-[1.4] group-hover:text-primary transition-colors mb-1">
                          {p.title}
                        </p>
                        <p className="text-[11px] text-text-tertiary">{p.readTime}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
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
