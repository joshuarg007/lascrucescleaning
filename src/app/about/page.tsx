import type { Metadata } from "next";
import {
  Hero,
  Section,
  CallToAction,
  Faq,
  faqSchema,
  Schema,
  type QA,
} from "@/components/ui";
import { site } from "@/lib/site";
import { image } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Las Cruces Cleaning",
  description:
    "Owner-operated house cleaning in Las Cruces, with the same two cleaners at each visit, published starting prices, and no subcontractors.",
  alternates: { canonical: "/about/" },
  openGraph: { url: "/about/" },
};

const faq: QA[] = [
  {
    q: "Are you registered to do business in Las Cruces?",
    a: "Yes. Las Cruces Cleaning is registered for gross receipts tax with the New Mexico Taxation and Revenue Department, and registered as a business with the City of Las Cruces. Both are public records you can check.",
  },
  {
    q: "Are you insured?",
    a: "Not yet. Our general liability policy is ready to activate, and coverage will be in place before our first paid cleaning. We would rather say that plainly than leave the word insured sitting on the page while it isn't true.",
  },
  {
    q: "Who will be in my home?",
    a: "The two owners. We don't send employees or subcontractors into your home, and you get the same two people at every visit.",
  },
  {
    q: "How many clients do you take?",
    a: "A limited number, so every job gets the time it needs. When the schedule is full we say so instead of squeezing another home in and running late for everyone else that day.",
  },
  {
    q: "What if I need to cancel or reschedule?",
    a: "Tell us as far ahead as you can and there's no charge. A visit canceled at the door is a slot nobody else could book, so we ask for notice, but nobody gets penalized for a sick child or a burst pipe.",
  },
];

export default function About() {
  return (
    <>
      <Schema data={faqSchema(faq)} />
      <Hero
        eyebrow="About"
        title="Owner-operated, with the same two people every visit."
        lede="Las Cruces Cleaning is run by two local owners who do the cleaning themselves."
        image={image("about")}
      />

      <Section tone="surface" title="Who comes into your home">
        <p>
          The same two people, every time. We don&apos;t run a rotating crew and
          we don&apos;t subcontract your home to someone you have never met. You
          tell us once how you want it done, and it&apos;s done that way at every
          visit.
        </p>
        <p>
          That&apos;s also why we keep the service area small and take a limited
          number of clients. Two people can only be in one place at a time, and a
          schedule that ignores that ends up late for everybody.
        </p>
      </Section>

      <Section tone="ground" title="Pricing and scheduling">
        <p>
          Our starting prices are published on the pricing page, so you can see
          what a recurring clean, a deep clean and a move-out cost before you
          speak to anyone. Call or text with three things: roughly how big the
          property is, how many bathrooms it has, and how long it&apos;s been
          since it was cleaned professionally. That&apos;s enough to quote a home
          in about three minutes.
        </p>
        <p>
          Your quote is fixed as long as the property matches what you described.
          If it doesn&apos;t, we call you before starting, not after
          finishing. There&apos;s no walkthrough for residential work, no deposit,
          and you pay after the cleaning. Commercial spaces are the one exception
          and do get a walkthrough first, because scope varies too much between
          offices to price one over the phone.
        </p>
      </Section>

      <Section tone="sand" title="Registration and insurance">
        <p>
          Las Cruces Cleaning is registered for gross receipts tax with the{" "}
          <a
            href="https://www.tax.newmexico.gov/"
            className="font-medium text-accent underline"
            rel="noopener"
          >
            New Mexico Taxation and Revenue Department
          </a>{" "}
          and registered as a business with the{" "}
          <a
            href="https://www.lascruces.gov/"
            className="font-medium text-accent underline"
            rel="noopener"
          >
            City of Las Cruces
          </a>
          .
        </p>
        <p>
          We are not insured yet. Our general liability policy is ready to
          activate, and coverage will be in place before our first paid cleaning.
        </p>
      </Section>

      <Section tone="surface" title="What we don&apos;t do">
        <p>
          We don&apos;t steam clean or shampoo carpet, which needs different
          equipment and is a separate trade. We don&apos;t clean exterior windows
          above the ground floor. We don&apos;t do dishes left in the sink, or
          anything that requires moving an appliance connected to the wall.
        </p>
        <p>
          We also don&apos;t repair, patch or paint. A move-out clean handles the
          cleaning, and it does nothing about a nail hole.
        </p>
      </Section>

      <Section tone="ground" title="Common questions">
        <Faq items={faq} />
      </Section>

      <CallToAction line={`Straightforward answers on the phone. ${site.phone}.`} />
    </>
  );
}
