import type { Metadata } from "next";
import { Hero, Section, Included, CallToAction, Schema, serviceSchema } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Move-Out Cleaning in Las Cruces, NM",
  description:
    "Move-out and move-in cleaning in Las Cruces from $350. Empty houses cleaned for the landlord walkthrough or the new owner.",
  alternates: { canonical: "/move-out-cleaning/" },
};

export default function MoveOutCleaning() {
  return (
    <>
      <Schema
        data={serviceSchema(
          "Move-Out Cleaning",
          "Move-out and move-in cleaning for empty homes in Las Cruces, New Mexico, from $350.",
        )}
      />
      <Hero
        eyebrow="Move-Out Cleaning"
        title="Empty house, cleaned for the walkthrough. From $350."
        lede="Booked around your move date, done after the last box is out, finished before the inspection."
      />

      <Section title="What gets cleaned">
        <Included
          items={[
            "Inside every cabinet and drawer",
            "Inside the oven, refrigerator and dishwasher",
            "All bathrooms, including grout and hardware",
            "Every floor, corner to corner, with nothing in the way",
            "Baseboards, door frames, switch plates and vents",
            "Interior windows, sills and tracks",
            "Closets, shelving and laundry hookups",
            "Light fixtures and ceiling fans",
          ]}
        />
      </Section>

      <Section title="Timing is the whole job">
        <p>
          A move-out clean has a deadline attached to it, usually a landlord
          walkthrough or a closing. Tell us the date when you call and we work
          backward from it. The house needs to be empty, or close to it, because
          the value of this clean is that nothing is covered.
        </p>
        <p>
          Moving in rather than out is the same work in the same empty house, and
          the same price. Most people would rather take possession of a house
          somebody else has already cleaned.
        </p>
      </Section>

      <CallToAction line={`Call ${site.phone} with your move date.`} />
    </>
  );
}
