import type { Metadata } from "next";
import { Hero, Section, Included, CallToAction, Schema, serviceSchema, Faq, faqSchema, type QA } from "@/components/ui";
import { RelatedTips } from "@/components/RelatedTips";
import { site } from "@/lib/site";
import { image } from "@/lib/images";

export const metadata: Metadata = {
  title: "Move-Out Cleaning in Las Cruces, NM",
  description:
    "Move-out and move-in cleaning in Las Cruces from $350. Empty houses cleaned for the landlord walkthrough or the new owner.",
  alternates: { canonical: "/move-out-cleaning/" },
  openGraph: { url: "/move-out-cleaning/" },
};

const faq: QA[] = [
  {
    q: "Will this get my deposit back?",
    a: "We can't guarantee what a landlord will return, because we don't control damage charges, lease terms, or the final inspection. What we can do is clean the property to the agreed scope so ordinary cleaning issues are not left behind.",
  },
  {
    q: "Does the house need to be completely empty?",
    a: "As close to empty as you can manage. The value of this clean is that nothing is covered, so a room with boxes still stacked in it is a room we can't finish. If a few items have to stay, put them in one room and tell us which one.",
  },
  {
    q: "How far ahead should I book?",
    a: "As soon as you know your date, and a week ahead at minimum. Move-out cleans cluster at the end of the month because leases do, so the last few days of any month fill first. Tell us the walkthrough date rather than the move date.",
  },
  {
    q: "Do you clean carpets?",
    a: "We vacuum thoroughly. We don't steam clean or shampoo carpet, which needs different equipment. If your lease requires professional carpet cleaning with a receipt, book that separately and let us handle everything else.",
  },
  {
    q: "Can you clean the garage?",
    a: "A sweep and a wipe down of surfaces, yes, if the garage is empty. Oil stains and paint overspray usually need specialty treatment beyond a standard garage clean. Ask when you call and we'll tell you what's realistic for yours.",
  },
  {
    q: "Is move-in cleaning the same thing?",
    a: "The same work in the same empty home at the same price. Plenty of people book it rather than trust that the last occupant cleaned on the way out.",
  },
];

export default function MoveOutCleaning() {
  return (
    <>
      <Schema data={faqSchema(faq)} />
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
        image={image("moveOutCleaning")}
      />

      <Section tone="surface" title="What gets cleaned">
        <Included
          items={[
            "Inside every cabinet and drawer",
            "Inside the oven, refrigerator and dishwasher",
            "All bathrooms, including grout and hardware",
            "Every floor, corner to corner, with nothing in the way",
            "Baseboards, door frames, switch plates and vents",
            "Interior windows, sills and tracks",
            "Closets and shelving",
            "Light fixtures and ceiling fans",
          ]}
        />
      </Section>

      <Section tone="ground" title="Timing is the whole job">
        <p>
          A move-out clean has a deadline attached to it, usually a landlord
          walkthrough or a closing. Tell us the date when you call and we work
          backward from it. The house needs to be empty, or close to it, because
          the value of this clean is that nothing is covered.
        </p>
        <p>
          Moving in is the same work in the same empty home, at the same price.
        </p>
      </Section>

      <Section tone="sand" title="What it costs">
        <p>
          A move-out clean starts at $350 for a home of roughly 1,400 to 1,600
          square feet. It&apos;s priced above a deep clean of the same home
          because an empty property puts every cabinet, closet floor and corner
          in scope, with nothing standing in front of it. Oven and refrigerator
          interiors are included.
        </p>
        <p>
          Size and bathroom count move your quote, and so does whether the
          property was maintained.
        </p>
      </Section>

      <Section tone="surface" title="The areas most often missed before a walkthrough">
        <p>
          The oven, the refrigerator, the inside of kitchen cabinets, the
          bathroom grout and hardware, the baseboards, and the floor in the
          corners where furniture used to sit. An empty home makes all of them
          reachable.
        </p>
        <p>
          Blinds, window tracks and light fixtures get forgotten most often,
          because they&apos;re invisible until a home is empty and the light comes
          through differently. All three are in the scope of this clean.
        </p>
      </Section>

      <Section tone="ground" title="Common questions">
        <Faq items={faq} />
      </Section>

      <RelatedTips service="move-out-cleaning" />


      <CallToAction line={`Call ${site.phone} with your move date.`} />
    </>
  );
}
