import { motion } from "framer-motion";
import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Button from "../components/Button.jsx";
import VideoCard from "../components/VideoCard.jsx";

const values = [
  { name: "Authenticity", desc: "Every brand we present is verified at its source." },
  { name: "Quality", desc: "Standards held high — from formulation to finish." },
  { name: "Trust", desc: "Built through transparency and consistent care." },
  { name: "Education", desc: "Helping customers make informed beauty choices." },
  { name: "Customer Satisfaction", desc: "Long-term care over short-term wins." },
  { name: "Science-Backed Care", desc: "Formulas guided by research and evidence." },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <main className="bg-cream">
      <PageHero
        eyebrow="ABOUT DERMANUE"
        title="A premium house for authentic beauty."
        subtitle="DERMANUE Cosmetics Limited connects discerning customers with trusted, science-backed skincare and cosmetic brands — built on a foundation of authenticity, education, and care."
      />

      {/* BRAND STORY */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[36px] overflow-hidden border border-champagne/40">
              <div className="aspect-[4/5] gradient-cream relative">
                <div
                  aria-hidden
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blush/60 blur-3xl"
                />
                <img
                  src="/dermanuecosmetics/assets/dermanue.jpeg"
                  alt="DERMANUE brand story"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-cocoa/45 via-transparent to-cream/10"
                />
                <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-4">
                  <div className="text-[10px] tracking-luxe text-bronze">EST. CARE</div>
                  <div className="font-display text-espresso text-lg mt-1">
                    Built on authenticity
                  </div>
                </div>
              </div>
            </div>
            {/* Floating UGC ad accent — overlaps the brand image */}
            <div className="hidden md:block absolute -right-6 -bottom-6 w-32 lg:w-40">
              <VideoCard
                src="/dermanuecosmetics/assets/pinvideosaver_6d3jf5bm.mp4"
                category="OUR STORY"
                tagline="A house of care."
                showAd={false}
              />
            </div>
          </motion.div>
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-3 text-[11px] tracking-luxe text-bronze mb-5">
              <span className="line-divider" />
              OUR STORY
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-espresso leading-tight">
              Premium beauty, made accessible with care.
            </h2>
            <p className="mt-6 text-cocoa/85 text-lg leading-relaxed">
              DERMANUE Cosmetics Limited exists to make authentic, trusted, and
              premium beauty products more accessible. We work closely with
              science-backed skincare and cosmetic brands — focusing on
              quality, customer education, and the long-term satisfaction of
              every person we serve.
            </p>
            <p className="mt-5 text-cocoa/80 leading-relaxed">
              From everyday essentials to refined treatment formulas, our
              curation supports informed beauty choices — bringing the world's
              trusted houses closer to customers across Nigeria and beyond.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "100%", l: "AUTHENTIC SOURCING" },
                { v: "+30", l: "TRUSTED BRANDS" },
                { v: "1:1", l: "CUSTOMER CARE" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-champagne/40 bg-softwhite/70 p-4 text-center"
                >
                  <div className="font-display text-2xl text-espresso">{s.v}</div>
                  <div className="text-[9px] tracking-luxe text-bronze mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 sm:py-28 bg-rose-beige/40 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {[
            {
              eyebrow: "OUR MISSION",
              title: "To connect customers with authenticity.",
              body:
                "To connect consumers with authentic, trusted, and science-backed skincare and cosmetic brands while promoting informed beauty choices.",
            },
            {
              eyebrow: "OUR VISION",
              title: "A trusted beauty destination.",
              body:
                "To become a trusted beauty and cosmetics destination across Nigeria and beyond — where premium care is the standard, not the exception.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.eyebrow}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative rounded-[32px] border border-champagne/50 bg-softwhite/80 backdrop-blur-md p-10 overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-16 w-56 h-56 rounded-full bg-champagne/30 blur-3xl"
              />
              <div className="text-[11px] tracking-luxe text-bronze mb-4">
                {c.eyebrow}
              </div>
              <h3 className="font-display text-3xl text-espresso leading-tight">
                {c.title}
              </h3>
              <p className="mt-5 text-cocoa/85 leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="OUR VALUES"
            title="The principles behind every choice we make."
            description="These values quietly guide how we curate brands, support customers, and grow as a trusted name in beauty."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.name}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06 }}
                className="group relative rounded-3xl border border-champagne/40 bg-softwhite/80 p-8 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(91,58,46,0.35)] transition-all"
              >
                <div className="font-display text-[10px] tracking-luxe text-bronze">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-2xl text-espresso">
                  {v.name}
                </h3>
                <p className="mt-3 text-cocoa/80 leading-relaxed">{v.desc}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-bronze/40 via-champagne/40 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AUTHENTICITY MATTERS */}
      <section className="py-24 sm:py-32 bg-cream-2/60 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-blush/45 blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-3 text-[11px] tracking-luxe text-bronze mb-5">
              <span className="line-divider" />
              WHY AUTHENTICITY MATTERS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-espresso leading-tight">
              In a crowded market, trust becomes the most premium ingredient.
            </h2>
            <p className="mt-6 text-cocoa/85 text-lg leading-relaxed">
              Customers today want skincare and cosmetics that are safe,
              reliable, and effective. DERMANUE stands as a careful filter —
              ensuring every product we present is sourced from trusted
              houses, supported by science, and matched thoughtfully to real
              skincare needs.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                {
                  t: "Safer Choices",
                  d: "We help customers avoid counterfeit or unsafe products.",
                },
                {
                  t: "Real Results",
                  d: "We focus on brands with consistent, science-led performance.",
                },
                {
                  t: "Honest Guidance",
                  d: "Clear product information and considered recommendations.",
                },
                {
                  t: "Brand Integrity",
                  d: "Long-term partnerships with brands that share our values.",
                },
              ].map((p, i) => (
                <motion.div
                  key={p.t}
                  variants={fade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="rounded-2xl border border-champagne/40 bg-softwhite/80 p-5"
                >
                  <div className="font-display text-lg text-espresso">{p.t}</div>
                  <div className="mt-2 text-sm text-cocoa/80 leading-relaxed">
                    {p.d}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative">
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="rounded-[36px] overflow-hidden border border-champagne/50 bg-softwhite/70 p-8"
              >
                <div className="aspect-square gradient-cream rounded-3xl relative overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-6">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-xl ${
                          i % 4 === 0
                            ? "bg-bronze/70"
                            : i % 3 === 0
                            ? "bg-champagne/60"
                            : "bg-softwhite/70"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-[10px] tracking-luxe text-bronze">TRUSTED</div>
                      <div className="font-display text-3xl text-espresso mt-1">
                        Premium Care
                      </div>
                      <div className="text-[10px] tracking-luxe text-bronze mt-2">
                        AUTHENTIC · SAFE · EFFECTIVE
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="relative rounded-[40px] border border-champagne/50 bg-softwhite/80 backdrop-blur-md p-8 sm:p-12 overflow-hidden grid lg:grid-cols-12 gap-8 items-center"
          >
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blush/50 blur-3xl"
            />
            <div className="lg:col-span-7 relative">
              <div className="text-[11px] tracking-luxe text-bronze mb-6">
                A MESSAGE FROM DERMANUE
              </div>
              <p className="font-display text-2xl sm:text-3xl text-espresso leading-snug">
                “We built DERMANUE because beauty should never feel uncertain.
                Every product we present is chosen with intention — to support
                real people, real skin, and real confidence.”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-bronze flex items-center justify-center text-softwhite font-display text-xl">
                  D
                </div>
                <div>
                  <div className="font-display text-espresso text-lg">
                    The DERMANUE Team
                  </div>
                  <div className="text-[11px] tracking-luxe text-bronze">
                    COSMETICS LIMITED
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button to="/contact" variant="primary" icon="→">
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <VideoCard
                src="/dermanuecosmetics/assets/pinvideosaver_nosu2hpw.mp4"
                category="FROM OUR TEAM"
                tagline="Care, in motion."
                showAd={false}
                className="max-w-[280px] mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
