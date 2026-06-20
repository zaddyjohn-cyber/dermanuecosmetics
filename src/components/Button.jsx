import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm tracking-[0.18em] uppercase font-medium transition-all duration-300 will-change-transform";

const variants = {
  primary:
    "text-softwhite shadow-[0_10px_30px_-10px_rgba(168,117,97,0.6)] bg-[linear-gradient(135deg,#c7a896_0%,#a87561_100%)] hover:shadow-[0_18px_40px_-12px_rgba(168,117,97,0.7)] hover:-translate-y-0.5",
  outline:
    "border border-bronze/60 text-cocoa hover:bg-bronze hover:text-softwhite hover:-translate-y-0.5",
  ghost:
    "text-cocoa hover:text-bronze",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
  icon,
}) {
  const cls = `${base} ${variants[variant] || variants.primary} ${className}`;
  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2"
    >
      <span>{children}</span>
      {icon && <span aria-hidden>{icon}</span>}
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {content}
    </button>
  );
}
