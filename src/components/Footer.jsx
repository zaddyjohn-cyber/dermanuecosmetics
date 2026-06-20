import { Link } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

const categories = [
  "Skincare",
  "Cosmetics",
  "Beauty Essentials",
  "Personal Care",
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 gradient-cream"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-blush/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full bg-champagne/40 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/assets/dermanue-logo.jpeg"
                alt="DERMANUE"
                className="h-14 w-14 rounded-full ring-1 ring-champagne/60"
              />
              <div>
                <div className="font-display text-xl tracking-[0.22em] text-espresso">
                  DERMANUE
                </div>
                <div className="text-[10px] tracking-[0.32em] text-bronze uppercase">
                  Cosmetics Limited
                </div>
              </div>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cocoa/80">
              Connecting consumers with authentic, trusted, and science-backed
              skincare and cosmetic brands. Premium beauty made accessible
              across Nigeria and beyond.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 text-[10px] tracking-luxe text-bronze">
              <span className="line-divider" />
              AUTHENTIC · SCIENCE-BACKED · EFFECTIVE
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] tracking-luxe text-bronze mb-5">EXPLORE</div>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-sm text-cocoa hover:text-bronze transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] tracking-luxe text-bronze mb-5">CATEGORIES</div>
            <ul className="space-y-3">
              {categories.map((c) => (
                <li key={c} className="text-sm text-cocoa/80">{c}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] tracking-luxe text-bronze mb-5">CONTACT</div>
            <ul className="space-y-3 text-sm text-cocoa/85">
              <li>hello@dermanue.com</li>
              <li>+234 000 000 0000</li>
              <li>Lagos, Nigeria</li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {["IG", "FB", "TT", "X"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded-full border border-champagne/60 flex items-center justify-center text-[10px] tracking-widest text-cocoa hover:bg-bronze hover:text-softwhite hover:border-bronze transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-champagne/40 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="text-[11px] tracking-widest text-cocoa/70">
            © {new Date().getFullYear()} DERMANUE COSMETICS LIMITED. All rights reserved.
          </div>
          <div className="text-[10px] tracking-luxe text-bronze">
            AUTHENTIC BEAUTY · TRUSTED CARE
          </div>
        </div>
      </div>
    </footer>
  );
}
