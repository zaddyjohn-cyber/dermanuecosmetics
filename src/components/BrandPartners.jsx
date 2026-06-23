import { motion } from "framer-motion";

// TODO: replace with your confirmed brand partners.
// Use plain text wordmarks here; only swap in real partner logos once
// you have written permission to display their trademarks.
const partners = [
  "The Ordinary",
  "CeraVe",
  "Cetaphil",
  "La Roche-Posay",
  "Neutrogena",
  "Bioderma",
  "Olay",
];

export default function BrandPartners() {
  return (
    <section className="py-16 sm:py-20 border-y border-champagne/40 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 text-[11px] tracking-luxe text-bronze">
            <span className="line-divider" />
            GLOBAL BRAND PARTNERSHIPS
            <span className="line-divider" />
          </div>
          <h3 className="mt-4 font-display text-2xl sm:text-3xl text-espresso leading-tight">
            Trusted houses we connect customers to.
          </h3>
        </motion.div>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-cream to-transparent z-10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-cream to-transparent z-10"
          />
          <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-5 sm:gap-x-14 px-4">
            {partners.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="font-display text-base sm:text-lg md:text-xl text-espresso/70 hover:text-espresso transition-colors tracking-wide whitespace-nowrap"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center text-[11px] tracking-luxe text-cocoa/60">
          100% AUTHENTIC SOURCING · VERIFIED PARTNERSHIPS · NIGERIA & BEYOND
        </div>
      </div>
    </section>
  );
}
