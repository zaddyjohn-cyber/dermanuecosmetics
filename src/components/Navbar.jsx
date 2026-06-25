import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/85 backdrop-blur-xl border-b border-champagne/30 shadow-[0_6px_30px_-20px_rgba(91,58,46,0.25)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/dermanue-logo.jpeg"
              alt="DERMANUE"
              className="h-11 w-11 rounded-full ring-1 ring-champagne/50 transition-transform duration-500 group-hover:rotate-[8deg]"
            />
            <div className="leading-tight">
              <div className="font-display text-lg tracking-[0.22em] text-espresso">
                DERMANUE
              </div>
              <div className="text-[9px] tracking-[0.32em] text-bronze uppercase">
                Cosmetics Limited
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative text-[12px] tracking-[0.28em] uppercase transition-colors duration-300 ${
                    isActive ? "text-bronze" : "text-cocoa hover:text-bronze"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-2 left-0 right-0 h-px bg-bronze"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button to="/contact" variant="primary" className="!py-2.5 !px-5 !text-[11px]">
              Make Inquiry
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full border border-champagne/50 bg-softwhite/60 backdrop-blur"
          >
            <span className="sr-only">Menu</span>
            <div className="relative w-5 h-3.5">
              <span
                className={`absolute left-0 right-0 top-0 h-px bg-cocoa transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-cocoa transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 right-0 bottom-0 h-px bg-cocoa transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-cream/95 backdrop-blur-xl" />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full flex flex-col justify-center items-center gap-10 px-6"
            >
              <ul className="flex flex-col items-center gap-7 text-center">
                {links.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      className={({ isActive }) =>
                        `font-display text-3xl ${
                          isActive ? "text-bronze" : "text-espresso"
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <Button to="/contact" variant="primary">Make Inquiry</Button>
              <div className="text-[10px] tracking-luxe text-bronze">
                AUTHENTIC · SCIENCE-BACKED · EFFECTIVE
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
