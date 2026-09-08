import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, Faq, faqSchema, Schema, type QA } from "@/components/ui";
import QuoteForm from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Las Cruces Cleaning",
  description:
    "Call or text (575) 386-5714 or email info@lascrucescleaning.com for a cleaning quote in Las Cruces or Mesilla. Monday through Saturday, 8 a.m. to 6 p.m.",
  alternates: { canonical: "/contact/" },
  openGraph: { url: "/contact/" },
};

const faq: QA[] = [
  {
    q: "How fast will you get back to me?",
    a: "The phone is answered Monday through Saturday, 8 a.m. to 6 p.m. A call outside those hours or a form submission gets a reply the next business morning. The person who answers is the person who will be cleaning your home.",
  },
  {
    q: "Can you really quote without seeing the home?",
    a: "For homes, yes. Square footage, bathroom count and how long it's been are enough to quote accurately. Commercial spaces are the exception and do get a walkthrough.",
  },
  {
    q: "Is the quote fixed?",
    a: "Your quote is fixed as long as the property matches what you described. If it doesn't, we contact you before starting, not after finishing.",
  },
  {
    q: "How do I pay?",
    a: "After the cleaning. We don't take deposits for residential work and we don't ask for card details over the phone to hold a booking.",
  },
  {
    q: "What areas do you cover?",
    a: "Las Cruces, Mesilla and nearby addresses. We don't serve El Paso. If you're on the far edge of the valley, call and ask, because the answer depends on what else is booked that day.",
  },
  {
    q: "Can I book a one-time clean rather than a schedule?",
    a: "Yes. One-time standard cleans, deep cleans and move-out cleans are all available on their own, with no requirement to continue.",
  },
];

export default function Contact() {
  return (
    <>
      <Schema data={faqSchema(faq)} />
      <Hero
        eyebrow="Contact"
        title="Call or text for a cleaning quote."
        lede="Tell us about the home and the timing. Most quotes take about three minutes."
        showPricesLink={false}
      />

      <Section title="How to reach us">
        <p className="text-2xl font-bold">
          <a href={site.phoneHref} className="text-accent">
            {site.phone}
          </a>
        </p>
        <p>{site.hours}. Texts are fine and often faster.</p>
        <p>
          Prefer email?{" "}
          <a href={site.emailHref} className="text-accent font-medium">
            {site.email}
          </a>
        </p>
        <p>Serving {site.areaServed}.</p>
      </Section>

      <Section title="Or send it in writing">
        <p>
          Send us the basics and we&apos;ll call or text with a price, or ask one
          follow-up question if anything is unclear.
        </p>
        <div className="not-prose">
          <QuoteForm />
          <p className="mt-3 max-w-xl text-sm text-muted">
            We use your information only to respond to this cleaning request. We
            don&apos;t sell it or add you to a marketing list. See our{" "}
            <Link href="/privacy/" className="underline">
              privacy notice
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section title="What we will ask you">
        <p>Four questions, every time, because the answers are the quote:</p>
        <ol className="list-decimal space-y-2 pl-5 text-lg">
          <li>What the property is, roughly how big, and how many bathrooms.</li>
          <li>When it was last cleaned professionally, if ever.</li>
          <li>Whether anyone is living in it right now.</li>
          <li>The timing, and whether there&apos;s a deadline attached.</li>
        </ol>
        <p>
          Answer those and we can quote on the call, with no walkthrough first.
        </p>
      </Section>

      <Section title="When to call rather than write">
        <p>
          If there&apos;s a deadline attached, call. Move-out cleans cluster at
          the end of the month because leases do, and the last few days of any
          month book out first. A call gets you scheduled in the time it takes a
          form to reach an inbox.
        </p>
        <p>
          For everything else the form is fine, and texting the same number works
          too.
        </p>
      </Section>

      <Section title="Common questions">
        <Faq items={faq} />
      </Section>
    </>
  );
}
