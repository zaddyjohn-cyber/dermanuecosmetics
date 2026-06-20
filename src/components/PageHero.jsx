import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 gradient-soft-radial" />
      <div
        aria-hidden
        className="absolute -top-20 -left-32 w-[460px] h-[460px] rounded-full bg-blush/45 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-champagne/40 blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 text-[11px] tracking-luxe text-bronze mb-6"
        >
          <span className="line-divider" />
          {eyebrow}
          <span className="line-divider" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-espresso"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-cocoa/80 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
