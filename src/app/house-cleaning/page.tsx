import type { Metadata } from "next";
import { Hero, Section, Included, CallToAction, Schema, serviceSchema } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "House Cleaning in Las Cruces, NM",
  description:
    "Recurring and one-time house cleaning in Las Cruces. From $160 a visit every two weeks. Same two people every time.",
  alternates: { canonical: "/house-cleaning/" },
};

export default function HouseCleaning() {
  return (
    <>
      <Schema
        data={serviceSchema(
          "House Cleaning",
          "Recurring and one-time residential cleaning in Las Cruces, New Mexico, from $160 per visit.",
        )}
      />
      <Hero
        eyebrow="House Cleaning"
        title="Regular house cleaning, from $160 a visit."
        lede="Every two weeks is what most houses want. Weekly and monthly work too, and the rate moves with the interval."
      />

      <Section title="What is included every visit">
        <Included
          items={[
            "Kitchen counters, sink, stovetop and outside of appliances",
            "Bathrooms, including toilets, tubs, showers and mirrors",
            "Floors vacuumed and mopped throughout",
            "Dusting of reachable surfaces, shelves and sills",
            "Beds made, trash out, general tidying of surfaces",
            "Interior glass on doors where there are handprints",
          ]}
        />
      </Section>

      <Section title="How the schedule works">
        <p>
          Most houses start with a deep clean, because a first visit to a house
          that has not been cleaned professionally is a different job. After
          that, the recurring rate holds as long as the schedule does. Skip too
          many visits and the house drifts back toward needing another deep
          clean, which is the honest reason cleaners price recurring work lower.
        </p>
        <p>
          You get the same two people every visit. That matters more than it
          sounds like it should, because by the third visit nobody has to be told
          where anything goes.
        </p>
      </Section>

      <Section title="What it costs">
        <p>
          Recurring cleaning starts at $160 a visit for a house of roughly 1,400
          to 1,600 square feet. A one-time clean starts at $180. Larger houses
          cost more and we tell you the number on the phone.
        </p>
      </Section>

      <CallToAction line={`Call ${site.phone} for a price on your house.`} />
    </>
  );
}
