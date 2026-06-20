import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  const alignment =
    align === "left"
      ? "text-left items-start"
      : align === "right"
      ? "text-right items-end"
      : "text-center items-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${alignment} max-w-3xl ${align === "center" ? "mx-auto" : ""}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-5">
          <span className="line-divider" />
          <span
            className={`text-[11px] tracking-luxe uppercase ${
              light ? "text-softwhite/80" : "text-bronze"
            }`}
          >
            {eyebrow}
          </span>
          <span className="line-divider" />
        </div>
      )}
      {title && (
        <h2
          className={`font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] ${
            light ? "text-softwhite" : "text-espresso"
          }`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            light ? "text-softwhite/80" : "text-cocoa/80"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
