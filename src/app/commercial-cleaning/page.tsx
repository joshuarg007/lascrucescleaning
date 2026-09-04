import type { Metadata } from "next";
import { Hero, Section, Included, CallToAction, Schema, serviceSchema } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Cleaning in Las Cruces, NM",
  description:
    "Office and small commercial cleaning in Las Cruces, scheduled after hours. Quoted per visit against a written scope.",
  alternates: { canonical: "/commercial-cleaning/" },
};

export default function CommercialCleaning() {
  return (
    <>
      <Schema
        data={serviceSchema(
          "Commercial Cleaning",
          "Office and small commercial cleaning in Las Cruces, New Mexico, scheduled outside business hours.",
        )}
      />
      <Hero
        eyebrow="Commercial Cleaning"
        title="Offices and small commercial spaces, cleaned after hours."
        lede="Priced per visit against a written scope, so both sides know what was agreed six months from now."
      />

      <Section title="What we take on">
        <p>
          Offices, studios, salons, clinics and small retail. The practical limit
          is size rather than industry: two people can cover a few thousand
          square feet properly in an evening, and we would rather say no than
          take a building we cannot finish.
        </p>
        <Included
          items={[
            "Restrooms, restocked and sanitized",
            "Break rooms, sinks and appliance exteriors",
            "Floors vacuumed, swept and mopped",
            "Desks and common surfaces, around your things not through them",
            "Trash and recycling out",
            "Entry glass and high-touch hardware",
          ]}
        />
      </Section>

      <Section title="How commercial pricing works">
        <p>
          Commercial work is quoted per visit after a walkthrough, because scope
          varies far more than it does in houses. What does not vary is the
          method: the scope goes in writing, the schedule is fixed, and the price
          does not move without a conversation first.
        </p>
      </Section>

      <CallToAction line={`Call ${site.phone} to arrange a walkthrough.`} />
    </>
  );
}
