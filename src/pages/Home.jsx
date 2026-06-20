import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ProductCard from "../components/ProductCard.jsx";

gsap.registerPlugin(ScrollTrigger);

const trustPoints = [
  { label: "Authentic Products", icon: "◇" },
  { label: "Science-Backed Brands", icon: "✺" },
  { label: "Customer Education", icon: "❋" },
  { label: "Trusted Beauty Care", icon: "✦" },
];

const categories = [
  {
    name: "Skincare",
    desc: "Targeted treatments that support healthier, balanced skin.",
    accent: "from-cream to-rose-beige",
  },
  {
    name: "Cosmetics",
    desc: "Refined essentials crafted by trusted beauty houses.",
    accent: "from-rose-beige to-blush",
  },
  {
    name: "Beauty Essentials",
    desc: "Everyday luxuries curated for clean, modern routines.",
    accent: "from-blush to-champagne/70",
  },
  {
    name: "Personal Care",
    desc: "Gentle, effective formulas for a complete care ritual.",
    accent: "from-cream-2 to-rose-beige",
  },
];

const scienceCards = [
  {
    title: "Authentic Sourcing",
    desc: "Every brand we present is verified for authenticity and provenance.",
    icon: "❖",
  },
  {
    title: "Clinical Confidence",
    desc: "We favor formulations supported by established science and research.",
    icon: "✺",
  },
  {
    title: "Skin-First Selection",
    desc: "Products are curated to support real skin needs across diverse types.",
    icon: "◈",
  },
  {
    title: "Quality Standards",
    desc: "We hold our partners to clear standards for safety and consistency.",
    icon: "✦",
  },
];

const featured = [
  {
    name: "Radiance Renewal Serum",
    category: "SERUMS & TREATMENTS",
    benefit: "Helps support a luminous, even-toned complexion with daily use.",
    accent: "from-cream to-blush",
    symbol: "✦",
    image: "/dermanuecosmetics/assets/product-1.jpg",
  },
  {
    name: "Hydra-Calm Moisturizer",
    category: "MOISTURIZERS",
    benefit: "A weightless cream that helps comfort and replenish soft skin.",
    accent: "from-rose-beige to-cream-2",
    symbol: "❋",
    image: "/dermanuecosmetics/assets/product-2.jpg",
  },
  {
    name: "Gentle Clarity Cleanser",
    category: "CLEANSERS & TONERS",
    benefit: "A soothing formula that helps refresh skin without stripping.",
    accent: "from-blush to-champagne/60",
    symbol: "◇",
    image: "/dermanuecosmetics/assets/product-3.jpg",
  },
];

export default function Home() {
  const headlineRef = useRef(null);

  useEffect(() => {
    if (!headlineRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-word",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
      gsap.utils.toArray(".scroll-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, headlineRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={headlineRef} className="bg-cream">
      {/* HERO */}
      <section className="relative min-h-[100svh] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 gradient-soft-radial" />
        <div
          aria-hidden
          className="absolute -top-32 -left-40 w-[560px] h-[560px] rounded-full bg-blush/50 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute top-20 -right-32 w-[520px] h-[520px] rounded-full bg-champagne/40 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-rose-beige/60 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 text-[11px] tracking-luxe text-bronze mb-6">
              <span className="line-divider" />
              AUTHENTIC SKINCARE · SCIENCE-BACKED BEAUTY
              <span className="line-divider" />
            </div>
            <h1 className="font-display text-[2.6rem] sm:text-6xl md:text-7xl leading-[1.02] text-espresso">
              <span className="hero-word inline-block">Authentic</span>{" "}
              <span className="hero-word inline-block">Beauty.</span>
              <br />
              <span className="hero-word inline-block shimmer">Trusted</span>{" "}
              <span className="hero-word inline-block">Care.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base md:text-lg text-cocoa/85 leading-relaxed">
              Connecting consumers with authentic, trusted, and science-backed
              skincare and cosmetic brands across Nigeria and beyond.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button to="/products" variant="primary" icon="→">
                Explore Products
              </Button>
              <Button to="/contact" variant="outline">
                Contact Us
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {["#c7a896", "#cfa18f", "#e5ccbd", "#a87561"].map((c) => (
                  <span
                    key={c}
                    className="w-9 h-9 rounded-full border-2 border-softwhite"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <div>
                <div className="text-[10px] tracking-luxe text-bronze">
                  TRUSTED BY DISCERNING CUSTOMERS
                </div>
                <div className="text-sm text-cocoa/80">
                  Curated beauty across Nigeria & beyond
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
              {/* Main lifestyle skincare image */}
              <div className="absolute inset-0 rounded-[40px] border border-champagne/40 overflow-hidden shadow-[0_40px_80px_-40px_rgba(91,58,46,0.5)]">
                <img
                  src="/dermanuecosmetics/assets/lifestyle-1.png"
                  alt="Authentic skincare ritual"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-tr from-cream/30 via-transparent to-blush/25"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cocoa/55 via-cocoa/15 to-transparent"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 ring-1 ring-inset ring-softwhite/30 rounded-[40px]"
                />

                {/* Top chips */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <div className="glass-card rounded-full px-3.5 py-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze animate-pulse" />
                    <span className="text-[9px] tracking-luxe text-cocoa">
                      AUTHENTIC SKINCARE
                    </span>
                  </div>
                  <div className="glass-card rounded-full px-3.5 py-1.5 text-[9px] tracking-luxe text-cocoa">
                    SCIENCE-BACKED
                  </div>
                </div>

                {/* Bottom skincare ritual card */}
                <div className="absolute bottom-5 left-5 right-5 glass-card rounded-2xl p-4 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[9px] tracking-luxe text-bronze">
                      DAILY SKINCARE RITUAL
                    </div>
                    <div className="font-display text-softwhite text-base sm:text-lg leading-tight text-shadow-soft">
                      Trusted care, refined.
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {["#cfa18f", "#c7a896", "#a87561"].map((c) => (
                      <span
                        key={c}
                        className="w-2 h-2 rounded-full"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating skincare product cards */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:flex absolute -left-10 top-16 glass-card rounded-2xl p-3 shadow-[0_24px_40px_-20px_rgba(91,58,46,0.55)] gap-3 items-center float-slow"
              >
                <img
                  src="/dermanuecosmetics/assets/product-1.jpg"
                  alt="Hydrating serum"
                  className="w-16 h-20 object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="pr-2">
                  <div className="text-[9px] tracking-luxe text-bronze">SERUM</div>
                  <div className="font-display text-espresso text-base leading-tight">
                    Radiance Renewal
                  </div>
                  <div className="mt-1 text-[10px] text-cocoa/70">
                    For glowing skin
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:flex absolute -right-10 bottom-28 glass-card rounded-2xl p-3 shadow-[0_24px_40px_-20px_rgba(91,58,46,0.55)] gap-3 items-center"
              >
                <img
                  src="/dermanuecosmetics/assets/product-2.jpg"
                  alt="Hydrating moisturizer"
                  className="w-16 h-20 object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="pr-2">
                  <div className="text-[9px] tracking-luxe text-bronze">MOISTURIZER</div>
                  <div className="font-display text-espresso text-base leading-tight">
                    Hydra-Calm
                  </div>
                  <div className="mt-1 text-[10px] text-cocoa/70">
                    Soft, balanced skin
                  </div>
                </div>
              </motion.div>

              {/* Floating accent badge — product 3 thumbnail */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="hidden lg:flex absolute -right-6 top-6 glass-card rounded-full p-1.5 shadow-[0_18px_30px_-15px_rgba(91,58,46,0.5)] items-center gap-2 pr-3"
              >
                <img
                  src="/dermanuecosmetics/assets/product-3.jpg"
                  alt="Gentle cleanser"
                  className="w-10 h-10 object-cover rounded-full"
                  loading="lazy"
                />
                <div className="text-[9px] tracking-luxe text-cocoa">
                  NEW ARRIVAL
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-12 border-y border-champagne/40 bg-cream-2/60">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustPoints.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="text-bronze text-2xl">{t.icon}</span>
              <span className="text-[11px] tracking-luxe text-cocoa">
                {t.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="CURATED CATEGORIES"
            title="Beauty essentials, thoughtfully presented."
            description="From skincare staples to refined cosmetics, every category at DERMANUE is curated with care, intention, and an eye for authenticity."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                className="group relative rounded-3xl overflow-hidden border border-champagne/40 bg-softwhite/60 backdrop-blur-md p-6 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(91,58,46,0.35)] transition-all duration-500"
              >
                <div
                  className={`aspect-square rounded-2xl bg-gradient-to-br ${c.accent} relative overflow-hidden`}
                >
                  <div
                    aria-hidden
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-softwhite/40 blur-2xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-display text-3xl text-espresso/85">
                      0{i + 1}
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-2xl text-espresso">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm text-cocoa/75 leading-relaxed">
                    {c.desc}
                  </p>
                  <Link
                    to="/products"
                    className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-luxe text-bronze hover:text-cocoa transition-colors"
                  >
                    EXPLORE
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 sm:py-32 bg-rose-beige/40 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 right-0 w-[420px] h-[420px] rounded-full bg-champagne/40 blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative rounded-[36px] overflow-hidden border border-champagne/40">
              <div className="aspect-[4/5] relative">
                <img
                  src="/dermanuecosmetics/assets/lifestyle-1.png"
                  alt="DERMANUE skincare lifestyle"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-cocoa/40 via-transparent to-cream/10"
                />
                <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl px-5 py-4">
                  <div className="text-[10px] tracking-luxe text-bronze">
                    OUR PHILOSOPHY
                  </div>
                  <div className="font-display text-espresso text-lg mt-1">
                    Beauty rooted in trust
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 scroll-reveal">
            <div className="inline-flex items-center gap-3 text-[11px] tracking-luxe text-bronze mb-5">
              <span className="line-divider" />
              ABOUT DERMANUE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-espresso leading-tight">
              A beauty house built on authenticity, science, and care.
            </h2>
            <p className="mt-6 text-cocoa/85 text-lg leading-relaxed">
              DERMANUE Cosmetics Limited exists to connect customers with
              trusted, science-backed skincare and cosmetic brands. Our focus
              is quality, education, and the long-term satisfaction of every
              customer we serve.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-champagne/40 bg-softwhite/70 p-5">
                <div className="text-[10px] tracking-luxe text-bronze">MISSION</div>
                <div className="mt-2 text-cocoa text-sm leading-relaxed">
                  Make authentic, premium beauty accessible across Nigeria and beyond.
                </div>
              </div>
              <div className="rounded-2xl border border-champagne/40 bg-softwhite/70 p-5">
                <div className="text-[10px] tracking-luxe text-bronze">VISION</div>
                <div className="mt-2 text-cocoa text-sm leading-relaxed">
                  Become a trusted destination for science-backed beauty care.
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button to="/about" variant="outline">
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SCIENCE-BACKED */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="SCIENCE-BACKED BEAUTY"
            title="Where authenticity meets formulation."
            description="DERMANUE selects brands committed to safety, transparency, and clinically-informed care — so customers can choose with confidence."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scienceCards.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                className="relative rounded-3xl border border-champagne/40 bg-softwhite/70 backdrop-blur-md p-7 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(91,58,46,0.4)] transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cream to-blush flex items-center justify-center text-bronze text-2xl">
                  {s.icon}
                </div>
                <h3 className="mt-5 font-display text-xl text-espresso">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-cocoa/80 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS PREVIEW */}
      <section className="py-24 sm:py-32 bg-cream-2/60 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="FEATURED EDIT"
            title="A glimpse of the beauty edit."
            description="A small selection from the brands and products DERMANUE proudly presents to discerning customers."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <ProductCard key={p.name} {...p} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/products" variant="primary" icon="→">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* CUSTOMER EDUCATION */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 w-[460px] h-[460px] rounded-full bg-blush/50 blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 scroll-reveal">
            <div className="inline-flex items-center gap-3 text-[11px] tracking-luxe text-bronze mb-5">
              <span className="line-divider" />
              CUSTOMER EDUCATION
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-espresso leading-tight">
              Helping you choose beauty with intention.
            </h2>
            <p className="mt-6 text-cocoa/85 text-lg leading-relaxed">
              Premium beauty starts with informed choices. DERMANUE supports
              customers with clear guidance on ingredients, routines, and
              brand authenticity — so every purchase feels considered and
              cared for.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Guidance on ingredients and skin needs",
                "Education on routines and product layering",
                "Clarity on what makes a brand authentic",
                "Support from a team that genuinely cares",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-4 text-cocoa/85"
                >
                  <span className="mt-1 text-bronze">✦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button to="/contact" variant="outline">
                Get Personal Guidance
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { t: "Authentic", s: "Verified sourcing" },
                { t: "Clinical", s: "Science-backed formulas" },
                { t: "Educated", s: "Informed choices" },
                { t: "Curated", s: "Premium selection" },
              ].map((c, i) => (
                <motion.div
                  key={c.t}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7 }}
                  className={`rounded-3xl border border-champagne/40 p-6 ${
                    i % 2 === 0 ? "bg-softwhite/80" : "bg-rose-beige/60"
                  }`}
                >
                  <div className="text-[10px] tracking-luxe text-bronze">
                    0{i + 1}
                  </div>
                  <div className="mt-3 font-display text-2xl text-espresso">
                    {c.t}
                  </div>
                  <div className="mt-1 text-sm text-cocoa/80">{c.s}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-[40px] overflow-hidden border border-champagne/40">
            <div className="absolute inset-0 gradient-bronze" />
            <div
              aria-hidden
              className="absolute -top-24 -right-20 w-[320px] h-[320px] rounded-full bg-softwhite/20 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-20 w-[320px] h-[320px] rounded-full bg-rose-beige/30 blur-3xl"
            />
            <div className="relative px-8 sm:px-14 py-16 sm:py-20 text-center text-softwhite">
              <div className="inline-flex items-center gap-3 text-[11px] tracking-luxe text-softwhite/85 mb-6">
                <span className="line-divider" />
                START YOUR BEAUTY JOURNEY
                <span className="line-divider" />
              </div>
              <h2 className="font-display text-3xl sm:text-5xl leading-tight">
                Inquire, shop, or partner with DERMANUE.
              </h2>
              <p className="mt-5 max-w-2xl mx-auto text-softwhite/85 leading-relaxed">
                Whether you're a customer searching for trusted beauty, a brand
                seeking premium distribution, or a partner ready to collaborate
                — we'd love to hear from you.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm tracking-[0.18em] uppercase font-medium bg-softwhite text-cocoa hover:bg-cream transition-colors"
                >
                  Make Inquiry →
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm tracking-[0.18em] uppercase font-medium border border-softwhite/70 text-softwhite hover:bg-softwhite/15 transition-colors"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
