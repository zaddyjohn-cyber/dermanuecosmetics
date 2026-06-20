import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function VideoCard({
  src,
  category = "AUTHENTIC SKINCARE",
  tagline = "Trusted beauty, every day.",
  aspect = "aspect-[9/16]",
  className = "",
  showAd = true,
  index = 0,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const v = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${aspect} rounded-3xl overflow-hidden ring-1 ring-softwhite/40 shadow-[0_24px_50px_-25px_rgba(91,58,46,0.55)] bg-cocoa ${className}`}
    >
      <video
        ref={ref}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Top gradient for top labels */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-cocoa/70 via-cocoa/25 to-transparent pointer-events-none"
      />
      {/* Bottom gradient for caption */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-cocoa/80 via-cocoa/30 to-transparent pointer-events-none"
      />

      {/* Top brand bar — DERMANUE wordmark + AD badge */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full bg-cocoa/55 backdrop-blur-sm pl-2 pr-3 py-1 ring-1 ring-softwhite/15">
          <span className="w-1.5 h-1.5 rounded-full bg-bronze animate-pulse" />
          <span className="text-[9px] tracking-[0.32em] text-softwhite leading-none">
            DERMANUE
          </span>
        </div>
        {showAd && (
          <div className="px-2.5 py-1 rounded-full bg-bronze/90 text-[8px] tracking-[0.32em] text-softwhite leading-none">
            AD
          </div>
        )}
      </div>

      {/* Diagonal corner ribbon — premium brand stamp */}
      <div
        aria-hidden
        className="absolute -right-10 top-12 rotate-45 bg-bronze/0 pointer-events-none"
      />

      {/* Bottom caption — UGC ad style */}
      <div className="absolute bottom-3 inset-x-3 text-softwhite">
        <div className="text-[9px] tracking-[0.36em] opacity-85">
          {category}
        </div>
        <div className="font-display text-base sm:text-lg leading-tight mt-1 text-shadow-soft">
          {tagline}
        </div>
        <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-softwhite/15 backdrop-blur-sm px-2 py-0.5 text-[8px] tracking-[0.3em] text-softwhite/95">
          #DERMANUE
        </div>
      </div>
    </motion.div>
  );
}
