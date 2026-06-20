import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard({
  name,
  category,
  benefit,
  accent = "from-cream to-blush",
  symbol = "✦",
  image,
  index = 0,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-3xl bg-softwhite/70 backdrop-blur-md border border-champagne/40 p-6 overflow-hidden hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(91,58,46,0.35)] transition-all duration-500"
    >
      <div
        className={`relative aspect-[4/5] rounded-2xl bg-gradient-to-br ${accent} overflow-hidden`}
      >
        <div
          aria-hidden
          className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-softwhite/40 blur-2xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-bronze/20 blur-2xl"
        />
        {image ? (
          <>
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-cocoa/30 via-transparent to-transparent"
            />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-24 h-36 rounded-[28px] bg-gradient-to-b from-softwhite via-rose-beige to-blush shadow-[inset_0_-30px_60px_-20px_rgba(168,117,97,0.4),0_18px_30px_-15px_rgba(91,58,46,0.35)] group-hover:scale-105 transition-transform duration-700">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full bg-cocoa/70" />
              <div className="absolute top-9 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-bronze/60" />
              <div className="absolute bottom-5 inset-x-3 text-center">
                <div className="text-[8px] tracking-luxe text-cocoa">DERMANUE</div>
                <div className="text-[6px] tracking-[0.32em] text-bronze mt-0.5">
                  BEAUTY
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3 text-bronze text-xl select-none drop-shadow-[0_2px_4px_rgba(47,32,27,0.4)]">
          {symbol}
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <div className="text-[10px] tracking-luxe text-bronze">
            {category}
          </div>
          <h3 className="mt-1 font-display text-xl text-espresso leading-tight">
            {name}
          </h3>
        </div>
      </div>
      <p className="mt-3 text-sm text-cocoa/80 leading-relaxed">{benefit}</p>

      <Link
        to="/contact"
        className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-luxe text-bronze hover:text-cocoa transition-colors"
      >
        MAKE INQUIRY
        <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </motion.article>
  );
}
