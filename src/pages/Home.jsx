import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import VideoCard from "../components/VideoCard.jsx";

gsap.registerPlugin(ScrollTrigger);

const trustPoints = [
  { label: "100% Authentic Sourcing", icon: "◇" },
  { label: "Science-Backed Brands", icon: "✺" },
  { label: "Customer Education", icon: "❋" },
  { label: "Trusted Beauty Care", icon: "✦" },
];

const categories = [
  {
    name: "Skincare",
    desc: "Targeted treatments that support healthier, balanced skin.",
    image: "/dermanuecosmetics/assets/cat-skincare.jpg",
  },
  {
    name: "Cosmetics",
    desc: "Refined essentials crafted by trusted beauty houses.",
    image: "/dermanuecosmetics/assets/cat-cosmetics.jpg",
  },
  {
    name: "Beauty Essentials",
    desc: "Everyday luxuries curated for clean, modern routines.",
    image: "/dermanuecosmetics/assets/cat-beauty.jpg",
  },
  {
    name: "Personal Care",
    desc: "Gentle, effective formulas for a complete care ritual.",
    image: "/dermanuecosmetics/assets/cat-personal.jpg",
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
              A trusted beauty and cosmetics company connecting customers with
              authentic global skincare and cosmetic brands — science-backed,
              quality-led, and curated with care.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button to="/products" variant="primary" icon="→">
                Explore Products
              </Button>
              <Button to="/contact" variant="outline">
                Contact Us
              </Button>
            </div>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-softwhite/70 backdrop-blur-sm border border-champagne/50 pl-3 pr-5 py-2">
              <span className="w-7 h-7 rounded-full gradient-bronze flex items-center justify-center text-softwhite text-[10px] font-display">✦</span>
              <div className="leading-tight">
                <div className="text-[9px] tracking-[0.32em] text-bronze">100% AUTHENTIC SOURCING</div>
                <div className="text-[11px] text-cocoa/75">Verified global brand partnerships</div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-6">
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
                  Global skincare & cosmetics, curated for you
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative h-[460px] sm:h-[560px] lg:h-[640px] orbit-pause">
              {/* Decorative orbit ring */}
              <div
                aria-hidden
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-champagne/50"
                style={{
                  width: "calc(var(--orbit-r) * 2)",
                  height: "calc(var(--orbit-r) * 2)",
                }}
              />
              {/* Soft glow at center */}
              <div
                aria-hidden
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-blush/30 blur-3xl"
              />
              {/* Central DERMANUE mark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="font-display text-2xl text-espresso tracking-[0.32em]">
                  DERMANUE
                </div>
                <div className="text-[9px] tracking-[0.4em] text-bronze mt-1">
                  AUTHENTIC · SCIENCE-BACKED
                </div>
              </div>

              {/* Seven product cards orbiting (skincare/cosmetics only) */}
              {(() => {
                const orbit = [
                  "/dermanuecosmetics/assets/product-1.jpg",
                  "/dermanuecosmetics/assets/product-2.jpg",
                  "/dermanuecosmetics/assets/product-3.jpg",
                  "/dermanuecosmetics/assets/product-4.jpg",
                  "/dermanuecosmetics/assets/product-5.jpg",
                  "/dermanuecosmetics/assets/product-6.jpg",
                  "/dermanuecosmetics/assets/product-7.jpg",
                ];
                const step = 28 / orbit.length;
                return orbit.map((src, i) => (
                <div
                  key={src}
                  className="orbit-card absolute top-1/2 left-1/2 w-[88px] h-[112px] sm:w-[108px] sm:h-[138px] lg:w-[125px] lg:h-[160px] rounded-2xl overflow-hidden ring-1 ring-softwhite/40 shadow-[0_24px_50px_-25px_rgba(91,58,46,0.55)] hover:scale-[1.06] hover:z-10 transition-transform duration-500"
                  style={{ animationDelay: `${-(i * step)}s` }}
                >
                  <img
                    src={src}
                    alt="DERMANUE skincare"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-cocoa/55 via-transparent to-transparent pointer-events-none"
                  />
                  <div className="absolute bottom-2 inset-x-2">
                    <div className="rounded-md bg-cocoa/75 backdrop-blur-sm py-1.5 text-center">
                      <div className="text-[9px] tracking-[0.4em] text-softwhite leading-none">
                        DERMANUE
                      </div>
                    </div>
                  </div>
                </div>
                ));
              })()}
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
                <div className="aspect-square rounded-2xl relative overflow-hidden bg-cream">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-cocoa/30 via-transparent to-transparent pointer-events-none"
                  />
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

          {/* OUR COMMITMENT, AMPLIFIED — sub-section extending the science-backed standards */}
          <div className="mt-20 sm:mt-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12"
            >
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-espresso leading-tight tracking-wide">
                OUR COMMITMENT, AMPLIFIED
              </h3>
              <div className="mt-2 text-[11px] sm:text-xs tracking-[0.36em] text-bronze">
                THE WORK BEHIND THE STANDARDS
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  image: "/dermanuecosmetics/assets/commit-ingredient.jpg",
                  title: "EVERY INGREDIENT TRACED.",
                  desc: "For complete provenance and purity.",
                },
                {
                  image: "/dermanuecosmetics/assets/commit-formulas.jpg",
                  title: "VALIDATED FORMULAS.",
                  desc: "Our research ensures safety and efficacy.",
                },
                {
                  image: "/dermanuecosmetics/assets/commit-curated.jpg",
                  title: "CURATED FOR YOU.",
                  desc: "Products made to support the specific needs of diverse skin types.",
                },
                {
                  image: "/dermanuecosmetics/assets/commit-standards.jpg",
                  title: "EXCEEDING GLOBAL STANDARDS.",
                  desc: "Every batch is rigorously tested for safety.",
                },
              ].map((c, i) => (
                <motion.article
                  key={c.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-3xl overflow-hidden border border-champagne/40 bg-softwhite/70 backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(91,58,46,0.35)] transition-all duration-500"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-cocoa/25 via-transparent to-transparent pointer-events-none"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-base sm:text-lg text-espresso leading-tight tracking-wide">
                      {c.title}
                    </h4>
                    <p className="mt-2 text-sm text-cocoa/80 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button to="/about" variant="primary" icon="→">
                Learn More About Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DERMANUE MOMENTS — UGC video strip, each branded as DERMANUE ad */}
      <section className="py-24 sm:py-32 bg-cream-2/60 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-20 w-[460px] h-[460px] rounded-full bg-blush/40 blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="DERMANUE MOMENTS"
            title="Real care. Real beauty. Real moments."
            description="Quiet snapshots from the DERMANUE world — the products, the rituals, the people we serve."
          />
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            <VideoCard
              src="/dermanuecosmetics/assets/pinvideosaver_xaxh2seo.mp4"
              category="DAILY RITUAL"
              tagline="Soft skin, soft mornings."
              index={0}
            />
            <VideoCard
              src="/dermanuecosmetics/assets/pinvideosaver_aad9tz0b.mp4"
              category="HYDRATION EDIT"
              tagline="Drink it in."
              index={1}
            />
            <VideoCard
              src="/dermanuecosmetics/assets/pinvideosaver_ugnihg81.mp4"
              category="GLOW SERIES"
              tagline="Quiet luxury, lit from within."
              index={2}
            />
            <VideoCard
              src="/dermanuecosmetics/assets/pinvideosaver_d8435eu9.mp4"
              category="SCIENCE BACKED"
              tagline="Formulated with care."
              index={3}
            />
            <VideoCard
              src="/dermanuecosmetics/assets/pinvideosaver_aa0eo74d.mp4"
              category="CLEAN BEAUTY"
              tagline="Made with intention."
              index={4}
            />
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
                { t: "Authentic", s: "Verified sourcing", video: "/dermanuecosmetics/assets/Authentic.mp4" },
                { t: "Clinical", s: "Science-backed formulas", video: "/dermanuecosmetics/assets/clinical.mp4" },
                { t: "Educated", s: "Informed choices", video: "/dermanuecosmetics/assets/Educated.mp4" },
                { t: "Curated", s: "Premium selection", video: "/dermanuecosmetics/assets/Curated.mp4" },
              ].map((c, i) => (
                <motion.div
                  key={c.t}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7 }}
                  className="relative rounded-3xl border border-champagne/40 overflow-hidden aspect-[4/5] group"
                >
                  <video
                    src={c.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-cocoa/25 to-cocoa/15 pointer-events-none"
                  />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end text-softwhite">
                    <div className="font-display text-2xl sm:text-3xl leading-tight">
                      {c.t}
                    </div>
                    <div className="mt-1 text-sm text-softwhite/85">{c.s}</div>
                  </div>
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
