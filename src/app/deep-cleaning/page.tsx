import type { Metadata } from "next";
import { Hero, Section, Included, CallToAction, Schema, serviceSchema } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Deep Cleaning in Las Cruces, NM",
  description:
    "Deep cleaning in Las Cruces from $320. Baseboards, inside appliances, grout and vents, the build-up a standard clean does not reach.",
  alternates: { canonical: "/deep-cleaning/" },
};

export default function DeepCleaning() {
  return (
    <>
      <Schema
        data={serviceSchema(
          "Deep Cleaning",
          "One-time deep cleaning for homes in Las Cruces, New Mexico, from $320.",
        )}
      />
      <Hero
        eyebrow="Deep Cleaning"
        title="The reset clean, from $320."
        lede="For a house that has gone a while, or one that has never been cleaned professionally. It is the visit that makes the recurring rate possible."
      />

      <Section title="What a deep clean adds">
        <p>
          Everything in a standard clean, plus the work that a regular visit does
          not have time for:
        </p>
        <Included
          items={[
            "Baseboards, door frames and switch plates",
            "Inside the oven and inside the refrigerator",
            "Grout scrubbed in showers and on tile floors",
            "Vents, ceiling fans and light fixtures",
            "Cabinet fronts, including the handles",
            "Behind and under moveable furniture",
            "Window sills and interior glass throughout",
            "Build-up around faucets, drains and hardware",
          ]}
        />
      </Section>

      <Section title="Who this is for">
        <p>
          Three situations account for nearly all of them. A house that has never
          had a professional clean. A house where the last one was a year or more
          ago. And a house about to go on the market, where the buyer walkthrough
          is the deadline.
        </p>
        <p>
          A deep clean takes most of a day in a typical Las Cruces house. We
          quote it as one job rather than by the hour, so a slow morning is our
          problem rather than yours.
        </p>
      </Section>

      <CallToAction line={`Call ${site.phone} and describe the house.`} />
    </>
  );
}
