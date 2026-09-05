import type { Metadata } from "next";
import { Hero, Section, CallToAction } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Las Cruces Cleaning",
  description:
    "A Las Cruces cleaning company with published prices, the same cleaners at every visit, and a straight answer on the phone.",
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="Cleaning done properly, by the same people every time."
        lede="You tell us once how you want your house handled, and it is handled that way at every visit."
      />

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
          Las Cruces Cleaning is registered for gross receipts tax with the State
          of New Mexico and registered as a business with the City of Las Cruces.
          We work {site.areaServed} and nowhere else.
        </p>
      </Section>

      <CallToAction line={`Straightforward answers on the phone. ${site.phone}.`} />
    </>
  );
}
