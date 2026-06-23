import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Button from "../components/Button.jsx";
import VideoCard from "../components/VideoCard.jsx";

const interests = [
  "Skincare Product Inquiry",
  "Cosmetics Inquiry",
  "Beauty Essentials",
  "Brand Partnership",
  "Wholesale / Distribution",
  "General Question",
];

const infoCards = [
  { label: "PHONE", value: "+234 000 000 0000", icon: "✆" },
  { label: "EMAIL", value: "hello@dermanue.com", icon: "✉" },
  { label: "LOCATION", value: "Lagos, Nigeria", icon: "◈" },
  { label: "SOCIAL", value: "@dermanuecosmetics", icon: "❖" },
];

const faqs = [
  {
    q: "Are your products authentic?",
    a: "Yes. Every product we present is sourced from verified, trusted brand partners or authorized distributors. Authenticity is a core principle of our company.",
  },
  {
    q: "Do you offer skincare guidance?",
    a: "We support customer education and offer guidance on routines, ingredients, and product suitability. Our team is happy to help you make confident choices.",
  },
  {
    q: "Do you deliver across Nigeria?",
    a: "Yes, we coordinate delivery across Nigeria and are expanding our reach beyond. Reach out and our team will share current delivery options for your location.",
  },
  {
    q: "Can beauty brands partner with DERMANUE?",
    a: "Absolutely. We welcome partnerships with science-backed, authentic skincare and cosmetic brands. Send us a message via the form and our partnerships team will reach out.",
  },
];

// To make the form actually send inquiries to your inbox:
//   1) Go to https://formspree.io and sign up (free tier is fine)
//   2) Create a new form, copy the endpoint (looks like https://formspree.io/f/abcd1234)
//   3) Replace YOUR_FORM_ID below with the real ID
// Until then, submissions fall back to opening the user's email client with a prefilled message.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    // Graceful fallback if Formspree isn't configured yet
    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      const subject = `DERMANUE inquiry — ${form.interest || "General"}`;
      const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterest: ${form.interest}\n\nMessage:\n${form.message}`;
      window.location.href = `mailto:hello@dermanue.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSent(true);
      setTimeout(() => setSent(false), 4500);
      return;
    }

    setSending(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", phone: "", interest: "", message: "" });
        setTimeout(() => setSent(false), 5500);
      } else {
        setError("Something went wrong sending your message. Please email hello@dermanue.com directly.");
      }
    } catch {
      setError("Network error. Please try again or email hello@dermanue.com.");
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "w-full bg-softwhite/70 border border-champagne/50 rounded-2xl px-5 py-3 text-cocoa placeholder:text-cocoa/45 focus:border-bronze focus:bg-softwhite outline-none transition-all";

  return (
    <main className="bg-cream">
      <PageHero
        eyebrow="WE'D LOVE TO HEAR FROM YOU"
        title="Contact DERMANUE"
        subtitle="Have questions about our products, brands, or availability? Send us a message and our team will respond with care."
      />

      {/* FORM + INFO */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-[36px] border border-champagne/45 bg-softwhite/80 backdrop-blur-md p-7 sm:p-10 overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blush/40 blur-3xl"
              />
              <div className="text-[11px] tracking-luxe text-bronze mb-2">
                INQUIRY FORM
              </div>
              <h2 className="font-display text-3xl text-espresso">
                Send us a message
              </h2>
              <p className="mt-2 text-cocoa/80 text-sm">
                We respond to inquiries with care and intention. Expect a reply
                within 24-48 hours.
              </p>

              <form onSubmit={submit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-1">
                  <label className="block text-[10px] tracking-luxe text-bronze mb-2">
                    FULL NAME
                  </label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handle}
                    placeholder="Your full name"
                    className={inputCls}
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-[10px] tracking-luxe text-bronze mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handle}
                    placeholder="you@email.com"
                    className={inputCls}
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-[10px] tracking-luxe text-bronze mb-2">
                    PHONE NUMBER
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handle}
                    placeholder="+234 ..."
                    className={inputCls}
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-[10px] tracking-luxe text-bronze mb-2">
                    INTEREST
                  </label>
                  <select
                    required
                    name="interest"
                    value={form.interest}
                    onChange={handle}
                    className={`${inputCls} appearance-none`}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {interests.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[10px] tracking-luxe text-bronze mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handle}
                    rows={5}
                    placeholder="Tell us a little about your inquiry..."
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <div className="sm:col-span-2 flex items-center justify-between flex-wrap gap-4 mt-2">
                  <p className="text-[11px] text-cocoa/70 max-w-sm">
                    By submitting, you agree to DERMANUE's privacy & care
                    standards. We treat every message with confidentiality.
                  </p>
                  <Button type="submit" variant="primary" icon={sending ? "" : "→"}>
                    {sending ? "Sending…" : "Send Inquiry"}
                  </Button>
                </div>
              </form>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 rounded-2xl border border-bronze/40 bg-cream-2/80 p-4 text-sm text-cocoa"
                  >
                    Thank you — your inquiry has been received. Our team will
                    be in touch shortly.
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 rounded-2xl border border-red-300/60 bg-red-50/70 p-4 text-sm text-red-900"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((c, i) => (
                <div
                  key={c.label}
                  className={`rounded-3xl border border-champagne/40 p-6 ${
                    i % 2 === 0 ? "bg-softwhite/80" : "bg-rose-beige/50"
                  }`}
                >
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cream to-blush flex items-center justify-center text-bronze text-xl">
                    {c.icon}
                  </div>
                  <div className="mt-4 text-[10px] tracking-luxe text-bronze">
                    {c.label}
                  </div>
                  <div className="mt-1 font-display text-lg text-espresso leading-tight">
                    {c.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 relative rounded-[32px] overflow-hidden border border-champagne/40 gradient-bronze p-7 text-softwhite">
              <div
                aria-hidden
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-softwhite/15 blur-3xl"
              />
              <div className="text-[11px] tracking-luxe text-softwhite/85">
                BUSINESS INQUIRY
              </div>
              <h3 className="mt-3 font-display text-2xl leading-tight">
                Partner with DERMANUE.
              </h3>
              <p className="mt-3 text-softwhite/85 text-sm leading-relaxed">
                For partnerships, wholesale, distribution, brand collaborations,
                and product inquiries — our team responds with diligence and
                discretion.
              </p>
              <a
                href="mailto:partnerships@dermanue.com"
                className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-luxe text-softwhite/95 hover:text-softwhite border-b border-softwhite/50 pb-1"
              >
                PARTNERSHIPS@DERMANUE.COM →
              </a>
            </div>

            <div className="mt-6 rounded-[32px] border border-champagne/40 bg-softwhite/80 p-7">
              <div className="text-[11px] tracking-luxe text-bronze">HOURS</div>
              <div className="mt-3 font-display text-lg text-espresso">
                Mon – Sat · 9:00 – 18:00 WAT
              </div>
              <div className="mt-1 text-sm text-cocoa/80">
                Inquiries received outside business hours are answered the next
                working day.
              </div>
            </div>

            {/* UGC ad accent — final visual reassurance */}
            <div className="mt-6">
              <VideoCard
                src="/dermanuecosmetics/assets/pinvideosaver_u6n0cnhh.mp4"
                category="JOIN DERMANUE"
                tagline="Begin your beauty journey."
                aspect="aspect-[4/5]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-28 bg-cream-2/60 relative">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            eyebrow="FREQUENTLY ASKED"
            title="Answers to common questions."
            description="Everything you might want to know before reaching out — clearly and concisely."
          />
          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.6 }}
                  className={`rounded-3xl border ${
                    open ? "border-bronze/60 bg-softwhite" : "border-champagne/40 bg-softwhite/80"
                  } transition-colors`}
                >
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  >
                    <span className="font-display text-lg text-espresso pr-4">
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 w-9 h-9 rounded-full border border-champagne/60 flex items-center justify-center text-bronze text-lg transition-transform ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-cocoa/85 leading-relaxed">
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-[40px] overflow-hidden border border-champagne/40 gradient-cream p-10 sm:p-14 text-center">
            <div
              aria-hidden
              className="absolute -top-24 left-1/4 w-72 h-72 rounded-full bg-blush/45 blur-3xl"
            />
            <div className="relative">
              <div className="inline-flex items-center gap-3 text-[11px] tracking-luxe text-bronze mb-5">
                <span className="line-divider" />
                YOUR TRUSTED BEAUTY JOURNEY
                <span className="line-divider" />
              </div>
              <h3 className="font-display text-3xl sm:text-5xl text-espresso leading-tight">
                Start your trusted beauty journey with DERMANUE.
              </h3>
              <p className="mt-4 max-w-2xl mx-auto text-cocoa/85">
                From the first inquiry to the products you love — we're here to
                make beauty feel certain, refined, and personal.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Button to="/products" variant="primary" icon="→">
                  Explore Products
                </Button>
                <Button to="/about" variant="outline">
                  Learn About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
