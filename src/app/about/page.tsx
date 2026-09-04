import type { Metadata } from "next";
import { Hero, Section, CallToAction } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Las Cruces Cleaning",
  description:
    "Two owners who do the cleaning themselves, in Las Cruces, with published prices and a capped schedule.",
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="Two people, both owners, doing the work."
        lede="No crews, no subcontractors, and no chance of a stranger arriving at your house who has never been told how you like it done."
      />

      <Section title="How we work">
        <p>
          The schedule caps at roughly fifteen recurring clients. That number is
          not modesty, it is arithmetic: two people can properly clean about
          thirty hours a week, and a biweekly house takes around three and a half
          hours once travel is counted. Past fifteen we would have to hire, and
          then you would be getting somebody else.
        </p>
        <p>
          So the honest position is that we will be full at some point, and when
          we are, we will say so instead of stretching the schedule and arriving
          late to everyone.
        </p>
      </Section>

      <Section title="Why the prices are on the site">
        <p>
          We looked at every cleaning company advertising in Las Cruces and El
          Paso before starting this one. Not a single one publishes a price.
          Meanwhile the thing people actually search for is what it costs.
        </p>
        <p>
          Keeping the number back is a sales tactic. It works, which is why
          everybody does it. It also wastes an afternoon of your time before you
          find out we are too expensive or not expensive enough. We would rather
          publish the range and talk to people who are fine with it.
        </p>
      </Section>

      <Section title="Where we stand">
        <p>
          Las Cruces Cleaning is registered for gross receipts tax with the State
          of New Mexico and registered as a business with the City of Las Cruces.
          We are a new company and we are not going to pretend otherwise, which
          is also why there is no wall of five star reviews on this page yet.
        </p>
      </Section>

      <CallToAction line={`Straightforward answers on the phone. ${site.phone}.`} />
    </>
  );
}
