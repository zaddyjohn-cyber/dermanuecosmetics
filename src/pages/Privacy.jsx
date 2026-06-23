import PageHero from "../components/PageHero.jsx";

const sections = [
  {
    title: "Who we are",
    body: "DERMANUE Cosmetics Limited (“DERMANUE”, “we”, “us”) is a beauty and cosmetics company connecting customers with authentic, science-backed skincare and cosmetic brands across Nigeria and beyond. This policy explains how we handle information you share with us.",
  },
  {
    title: "Information we collect",
    body: "When you submit our contact or inquiry form, we collect the details you provide: your name, email address, phone number, your selected area of interest, and your message. We do not knowingly collect information from anyone under the age of 13.",
  },
  {
    title: "How we use your information",
    body: "We use your information solely to respond to your inquiry, provide guidance on the products you ask about, and follow up on any partnership or wholesale request. We do not sell your information to third parties. With your consent, we may send occasional updates about new arrivals or brand partnerships — you can opt out at any time.",
  },
  {
    title: "How we store and protect it",
    body: "Inquiries are stored securely with our form provider and email systems and are accessible only to authorized DERMANUE team members. We retain inquiry data for as long as needed to serve you well and to meet any legal record-keeping obligations.",
  },
  {
    title: "Cookies and analytics",
    body: "Our site may use minimal cookies and privacy-respecting analytics to understand how visitors engage with our pages. These tools never identify you personally to us.",
  },
  {
    title: "Your rights",
    body: "You can ask us to access, correct, or delete the personal data you have shared with us. Send a request to hello@dermanue.com and we will respond within a reasonable time.",
  },
  {
    title: "Updates to this policy",
    body: "We may update this policy from time to time. The latest version will always be available on this page with the date of last revision shown below.",
  },
];

export default function Privacy() {
  return (
    <main className="bg-cream">
      <PageHero
        eyebrow="LEGAL"
        title="Privacy Policy"
        subtitle="How DERMANUE handles the information you share with us — clearly and respectfully."
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
                  <p className="mt-3 text-cocoa/85 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-champagne/40 text-sm text-cocoa/75">
              Questions about this policy? Email{" "}
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
