import PageHero from "../components/PageHero.jsx";

const sections = [
  {
    title: "Acceptance of terms",
    body: "By accessing or using the DERMANUE Cosmetics Limited website, you agree to these Terms of Use. If you do not agree, please discontinue use of the site.",
  },
  {
    title: "About DERMANUE",
    body: "DERMANUE is a beauty and cosmetics company connecting customers with authentic, science-backed skincare and cosmetic brands. Products presented on this website are sourced from verified, trusted brand partners or authorized distributors.",
  },
  {
    title: "No medical advice",
    body: "Content on this site is for informational purposes only. We do not provide medical, dermatological, or clinical advice, and the information on this site is not a substitute for consultation with a qualified healthcare professional. Discontinue use of any product and consult a professional if you experience adverse reactions.",
  },
  {
    title: "Product information",
    body: "We make reasonable efforts to ensure product names, descriptions, and benefits are accurate at the time of publication. Formulas, packaging, and availability may change from time to time. Always read the product label and follow the manufacturer's instructions.",
  },
  {
    title: "Inquiries and orders",
    body: "Submitting an inquiry through our forms does not constitute a binding sales contract. Specific order terms — pricing, availability, delivery, and payment — will be confirmed in writing by our team in response to your inquiry.",
  },
  {
    title: "Intellectual property",
    body: "The DERMANUE name, logo, copy, photography, and design on this site are the property of DERMANUE Cosmetics Limited. Brand names, logos, and product images of partner brands remain the property of their respective owners. You may not copy, reproduce, or commercially use this content without prior written permission.",
  },
  {
    title: "Third-party links",
    body: "Our site may link to external services, social platforms, or partner websites. We are not responsible for the content, privacy practices, or policies of those third parties.",
  },
  {
    title: "Limitation of liability",
    body: "To the fullest extent permitted by law, DERMANUE will not be liable for any indirect, incidental, or consequential losses arising from your use of this site or any product information shown here.",
  },
  {
    title: "Changes",
    body: "We may update these Terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised Terms.",
  },
  {
    title: "Governing law",
    body: "These Terms are governed by the laws of the Federal Republic of Nigeria. Any dispute relating to your use of the site will be subject to the exclusive jurisdiction of Nigerian courts.",
  },
];

export default function Terms() {
  return (
    <main className="bg-cream">
      <PageHero
        eyebrow="LEGAL"
        title="Terms of Use"
        subtitle="The rules of the road for using the DERMANUE website."
      />
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-[32px] border border-champagne/40 bg-softwhite/80 backdrop-blur-md p-8 sm:p-12">
            <p className="text-[11px] tracking-luxe text-bronze mb-8">
              LAST UPDATED · {new Date().toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).toUpperCase()}
            </p>
            <div className="space-y-8">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="font-display text-xl sm:text-2xl text-espresso leading-tight">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-cocoa/85 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-champagne/40 text-sm text-cocoa/75">
              Questions about these terms? Email{" "}
              <a className="text-bronze hover:underline" href="mailto:hello@dermanue.com">
                hello@dermanue.com
              </a>
              .
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
