import type { Metadata } from "next";
import { Hero, Section, CallToAction, Banner, Faq, faqSchema, Schema, type QA } from "@/components/ui";
import { site } from "@/lib/site";
import { image } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Las Cruces Cleaning",
  description:
    "A Las Cruces cleaning company with published prices, the same cleaners at every visit, and a straight answer on the phone.",
  alternates: { canonical: "/about/" },
  openGraph: { url: "/about/" },
};

const faq: QA[] = [
  {
    q: "Are you licensed and registered?",
    a: "Yes. Las Cruces Cleaning is registered for gross receipts tax with the New Mexico Taxation and Revenue Department and registered as a business with the City of Las Cruces. Both of those are checkable rather than claims on a web page.",
  },
  {
    q: "Are you insured?",
    a: "Not yet. General liability cover is quoted and ready to bind, and it gets bound the day the first job is scheduled. We are telling you that rather than letting the word insured sit on the page while it is not true.",
  },
  {
    q: "Do you run background checks?",
    a: "The people cleaning your house are the owners of the business. There is no rotating crew and no subcontractor, which is a stronger answer than a background check on somebody you will never meet twice.",
  },
  {
    q: "How many clients do you take?",
    a: "A limited number, so that every job gets the time it needs. When the schedule is full we say so instead of squeezing a house in and arriving late to everyone else that day.",
  },
  {
    q: "What happens if I need to cancel or reschedule?",
    a: "Tell us as far ahead as you can and there is no charge. A cancelled visit at the door is a slot nobody else could book, so we ask for notice, but nobody is being penalised for a sick child or a burst pipe.",
  },
];

export default function About() {
  return (
    <>
      <Schema data={faqSchema(faq)} />
      <Hero
        eyebrow="About"
        title="Cleaning done properly, by the same people every time."
        lede="You tell us once how you want your house handled, and it is handled that way at every visit."
      />

      <Banner image={image("about")} priority />

      <Section title="How we work">
        <p>
          Every job is scheduled with enough time to finish it properly, so we
          take a limited number of recurring clients rather than packing the
          calendar and running late. If we cannot fit you in on the day you want,
          we will say so on the phone instead of promising a window we cannot
          keep.
        </p>
        <p>
          You get the same cleaners each visit, working from your instructions.
          Nothing is subcontracted.
        </p>
      </Section>

      <Section title="Prices you can see before you call">
        <p>
          Our rates are published on the pricing page. You can see what a
          recurring clean, a deep clean and a move-out cost before you speak to
          anyone, and the quote you get on the phone comes from those same
          numbers.
        </p>
        <p>
          The final price depends on the size and the condition of the house. We
          give you that figure up front, and it does not change after the work is
          done.
        </p>
      </Section>

      <Section title="Registered and local">
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
          . We work {site.areaServed} and nowhere else.
        </p>
      </Section>

      <Section title="What we will not do">
        <p>
          A short list, and worth stating because most of this trade leaves it
          vague. We do not steam clean or shampoo carpet, which needs different
          equipment and is a separate trade. We do not clean exterior windows
          above the ground floor. We do not do laundry, dishes left in the sink,
          or anything that requires moving an appliance plumbed into a wall.
        </p>
        <p>
          We also do not repair, patch or paint. A move-out clean removes the
          cleaning grounds a landlord can withhold a deposit against, and it does
          nothing about a nail hole. Being clear about that in advance is worth
          more than a longer list of things we imply we might do.
        </p>
      </Section>

      <Section title="How to get a price">
        <p>
          Call or text with three things: roughly how big the property is, how
          many bathrooms it has, and how long it has been since it was cleaned
          professionally. That is enough to quote a house accurately, and it
          takes about three minutes.
        </p>
        <p>
          There is no walkthrough for residential work, no appointment required
          to receive a number, and no deposit. Commercial spaces are the one
          exception, because scope varies too much between offices to price one
          over the phone honestly.
        </p>
      </Section>

      <Section title="Common questions">
        <Faq items={faq} />
      </Section>

      <CallToAction line={`Straightforward answers on the phone. ${site.phone}.`} />
    </>
  );
}
