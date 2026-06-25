import { motion } from "framer-motion";

// DERMANUE WhatsApp number (E.164 format, no +, no spaces)
const PHONE = "447366557263";
const MESSAGE =
  "Hi DERMANUE, I'd like to inquire about your products and brand partnerships.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DERMANUE on WhatsApp"
      initial={{ scale: 0, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay: 1.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 group"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366]/45 animate-ping"
      />
      <span className="relative flex items-center gap-2 rounded-full bg-[#25D366] pl-3 pr-4 sm:pl-3.5 sm:pr-5 py-3 shadow-[0_18px_30px_-12px_rgba(37,211,102,0.55)] group-hover:shadow-[0_22px_38px_-14px_rgba(37,211,102,0.75)] group-hover:-translate-y-0.5 transition-all duration-300">
        <svg viewBox="0 0 32 32" className="w-6 h-6 text-white shrink-0" fill="currentColor" aria-hidden="true">
          <path d="M16.01 4C9.38 4 4 9.38 4 16.01c0 2.12.55 4.11 1.52 5.83L4 28l6.32-1.5c1.66.9 3.55 1.42 5.69 1.42C22.62 27.92 28 22.54 28 15.91 28 9.28 22.62 4 16.01 4zm0 21.91c-1.78 0-3.45-.46-4.91-1.27l-.35-.21-3.65.87.92-3.56-.23-.37c-.91-1.46-1.41-3.16-1.41-4.86 0-5.43 4.42-9.85 9.85-9.85 5.43 0 9.85 4.42 9.85 9.85 0 5.43-4.42 9.85-9.85 9.85z" />
          <path d="M21.45 18.27c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.57-.49-.49-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
        </svg>
        <span className="hidden sm:inline text-[11px] tracking-[0.28em] text-white font-medium">
          CHAT US
        </span>
      </span>
    </motion.a>
  );
}
