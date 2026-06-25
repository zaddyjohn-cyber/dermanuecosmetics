import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ProductCard from "../components/ProductCard.jsx";
import Button from "../components/Button.jsx";
import VideoCard from "../components/VideoCard.jsx";

const categoryList = [
  { name: "Facial Care", icon: "❖" },
  { name: "Body Care", icon: "✺" },
  { name: "Serums & Treatments", icon: "✦" },
  { name: "Cleansers & Toners", icon: "◇" },
  { name: "Moisturizers", icon: "❋" },
  { name: "Sunscreen", icon: "☀" },
  { name: "Cosmetics", icon: "◈" },
  { name: "Beauty Essentials", icon: "✿" },
];

// Generic category labels (DERMANUE is a curator/retailer, not a manufacturer).
// Replace with real partner-brand products once partnerships are confirmed.
const products = [
  {
    name: "Premium Sunscreens",
    category: "Sun Care",
    benefit: "Daily, weightless protection from trusted global skincare houses.",
    accent: "from-cream to-champagne/60",
    symbol: "☀",
    image: "/dermanuecosmetics/assets/product-5.jpg",
  },
  {
    name: "Facial Cleansers",
    category: "Cleansers & Toners",
    benefit: "Gentle, refreshing cleansers carefully selected for daily routines.",
    accent: "from-rose-beige to-blush",
    symbol: "◇",
    image: "/dermanuecosmetics/assets/product-6.jpg",
  },
  {
    name: "Beauty Essentials",
    category: "Cosmetics",
    benefit: "A curated edit of clean, premium cosmetic essentials.",
    accent: "from-blush to-rose-beige",
    symbol: "◈",
    image: "/dermanuecosmetics/assets/product-7.jpg",
  },
  {
    name: "Moisturizers",
    category: "Moisturizers",
    benefit: "Lightweight, science-backed hydration from trusted partners.",
    accent: "from-rose-beige to-cream-2",
    symbol: "❋",
    image: "/dermanuecosmetics/assets/product-9.jpg",
  },
  {
    name: "Serums & Treatments",
    category: "Serums & Treatments",
    benefit: "Targeted formulas from established, science-led skincare brands.",
    accent: "from-cream to-blush",
    symbol: "✦",
    image: "/dermanuecosmetics/assets/product-10.jpg",
  },
];

const selectionCriteria = [
  {
    title: "Authenticity Check",
    desc: "We verify origin, packaging, and supply integrity for every product.",
    icon: "❖",
  },
  {
    title: "Quality Standards",
    desc: "Brands must meet clear standards for safety, stability, and consistency.",
    icon: "✺",
  },
  {
    title: "Science-Backed Reputation",
    desc: "We favor formulations supported by published research and clinical care.",
    icon: "✦",
  },
  {
    title: "Customer Suitability",
    desc: "Products must suit real skin needs across diverse skin types.",
    icon: "◈",
  },
  {
    title: "Trusted Sourcing",
    desc: "We work directly with reputable distributors and brand partners.",
    icon: "◇",
  },
];

export default function Products() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <main className="bg-cream">
      <PageHero
        eyebrow="THE DERMANUE EDIT"
        title="Trusted Beauty & Skincare Products"
        subtitle="A curated selection of authentic, science-backed skincare and cosmetic products — carefully presented for the customers who care."
      />

      {/* INTRO + CATEGORIES */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 text-[11px] tracking-luxe text-bronze mb-4">
                <span className="line-divider" />
                EXPLORE CATEGORIES
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-espresso leading-tight">
                A complete spectrum of authentic, science-backed beauty.
              </h2>
            </div>
            <p className="lg:col-span-5 text-cocoa/80 text-base leading-relaxed">
              Browse by category to discover trusted skincare, refined
              cosmetics, and the everyday essentials you can confidently rely on.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categoryList.map((c, i) => (
              <motion.button
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                onClick={() => setActive(c.name)}
                className={`text-left rounded-3xl border p-6 transition-all duration-300 ${
                  active === c.name
                    ? "border-bronze bg-bronze text-softwhite shadow-[0_18px_40px_-22px_rgba(168,117,97,0.7)]"
                    : "border-champagne/40 bg-softwhite/70 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(91,58,46,0.35)]"
                }`}
              >
                <div
                  className={`text-2xl ${
                    active === c.name ? "text-softwhite" : "text-bronze"
                  }`}
                >
                  {c.icon}
                </div>
                <div
                  className={`mt-4 font-display text-lg ${
                    active === c.name ? "text-softwhite" : "text-espresso"
                  }`}
                >
                  {c.name}
                </div>
                <div
                  className={`mt-2 text-[10px] tracking-luxe ${
                    active === c.name ? "text-softwhite/80" : "text-bronze"
                  }`}
                >
                  VIEW EDIT →
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActive("All")}
                className={`px-5 py-2 rounded-full text-[11px] tracking-luxe border transition-colors ${
                  active === "All"
                    ? "bg-cocoa text-softwhite border-cocoa"
                    : "border-champagne/60 text-cocoa hover:bg-champagne/30"
                }`}
              >
                ALL PRODUCTS
              </button>
              {active !== "All" && (
                <button
                  onClick={() => setActive("All")}
                  className="text-[11px] tracking-luxe text-bronze hover:text-cocoa transition-colors"
                >
                  CLEAR FILTER
                </button>
              )}
            </div>
            <div className="text-[11px] tracking-luxe text-cocoa/70">
              SHOWING {filtered.length} / {products.length}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS GRID */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <ProductCard key={p.name} {...p} index={i} />
            ))}
            {/* Featured UGC ad card slots into the product grid */}
            <div className="sm:col-span-2 lg:col-span-2 flex items-stretch">
              <VideoCard
                src="/dermanuecosmetics/assets/pinvideosaver_uh6kug5d.mp4"
                category="FEATURED EDIT"
                tagline="Skincare that earns its place."
                aspect="aspect-auto"
                className="w-full h-full min-h-[420px]"
              />
            </div>
          </div>
          {filtered.length === 0 && (
            <div className="text-center text-cocoa/70 py-12">
              No products in this category yet — please make an inquiry.
            </div>
          )}
        </div>
      </section>

      {/* HOW WE SELECT BRANDS */}
      <section className="py-14 sm:py-20 bg-rose-beige/45 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-[460px] h-[460px] rounded-full bg-champagne/35 blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="HOW WE SELECT BRANDS"
            title="Every brand earns its place on the DERMANUE shelf."
            description="Our selection process ensures every product we present is authentic, safe, and worthy of the trust our customers place in us."
          />
          <div className="mt-16 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-[260px]">
                <VideoCard
                  src="/dermanuecosmetics/assets/pinvideosaver_x5lanip9.mp4"
                  category="OUR PROCESS"
                  tagline="Selected with care."
                />
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {selectionCriteria.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, duration: 0.7 }}
                  className="relative rounded-3xl border border-champagne/40 bg-softwhite/80 p-6 hover:-translate-y-1 transition-transform"
                >
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cream to-blush flex items-center justify-center text-bronze text-xl">
                    {s.icon}
                  </div>
                  <div className="mt-5 font-display text-lg text-espresso leading-tight">
                    {s.title}
                  </div>
                  <div className="mt-3 text-sm text-cocoa/80 leading-relaxed">
                    {s.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-[40px] overflow-hidden border border-champagne/40 bg-softwhite/80 p-10 sm:p-14 text-center">
            <div
              aria-hidden
              className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blush/45 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-champagne/40 blur-3xl"
            />
            <div className="relative">
              <div className="inline-flex items-center gap-3 text-[11px] tracking-luxe text-bronze mb-5">
                <span className="line-divider" />
                PERSONAL GUIDANCE
                <span className="line-divider" />
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-espresso leading-tight">
                Need help choosing the right product?
              </h3>
              <p className="mt-4 max-w-2xl mx-auto text-cocoa/85">
                Speak with DERMANUE — our team will guide you toward authentic,
                trusted options that suit your skin and your routine.
              </p>
              <div className="mt-8 flex justify-center">
                <Button to="/contact" variant="primary" icon="→">
                  Speak With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
