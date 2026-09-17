import type { Metadata } from "next";
import { Hero, Section, Included, CallToAction, Schema, serviceSchema, Faq, faqSchema, type QA } from "@/components/ui";
import { site } from "@/lib/site";
import { image } from "@/lib/images";

export const metadata: Metadata = {
  /* Absolute, so the "| Las Cruces Cleaning" template does not push it past 60 characters. */
  title: { absolute: "Recurring House Cleaning in Las Cruces, NM" },
  description:
    "Recurring and one-time house cleaning in Las Cruces. From $160 a visit every two weeks, with the same cleaners at every visit.",
  alternates: { canonical: "/house-cleaning/" },
  openGraph: { url: "/house-cleaning/" },
};

const faq: QA[] = [
  {
    q: "How often should a house be cleaned?",
    a: "Every other week suits most homes here. Weekly makes sense with young children, pets that shed, or anyone working from home all day. Monthly works for a quiet household, but the home drifts between visits and each clean takes longer, so the monthly rate sits closer to a one-time price.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "No. Recurring service can be arranged with a key, a code or a garage remote, so you come home to a finished house. If you'd rather be there, that's fine too. We just ask that it's consistent, because a visit we can't get into still costs the slot.",
  },
  {
    q: "Do you bring your own supplies and equipment?",
    a: "Yes. Vacuum, mop, cloths and products all come with us. If you want a specific product used on a specific surface, leave it out with a note and we'll use it. Some stone and hardwood finishes want a particular cleaner, and the manufacturer knows those better than we do.",
  },
  {
    q: "What does not get done in a standard visit?",
    a: "Inside the oven and refrigerator and full interior windows are optional add-ons rather than part of a standard visit. Dishes left in the sink and anything needing a ladder taller than a two-step are out of scope entirely.",
  },
  {
    q: "What should I do before you arrive?",
    a: "Pick up whatever is on the floor and the counters. We clean surfaces, we don’t sort belongings, so three hours goes a lot further in a home that is tidy but dirty than one that is clean but cluttered. Nothing else is needed.",
  },
  {
    q: "What if something is not right?",
    a: "If we miss something, tell us that day or the following morning. We'll return and put it right at no charge.",
  },
  {
    q: "Do you clean houses with pets?",
    a: "Yes. Tell us the animal and the temperament when you book. A dog that needs to be shut in a bedroom is no problem as long as we know before we're at the front door.",
  },
];

export default function HouseCleaning() {
  return (
    <>
      <Schema data={faqSchema(faq)} />
      <Schema
        data={serviceSchema(
          "House Cleaning",
          "Recurring and one-time residential cleaning in Las Cruces, New Mexico, from $160 per visit.",
        )}
      />
      <Hero
        eyebrow="House Cleaning"
        title="Regular house cleaning, from $160 a visit."
        lede="Most people choose every other week. Weekly and monthly visits are available too, and the price changes with the schedule."
        image={image("houseCleaning")}
      />

      <Section tone="surface" title="What is included every visit">
        <Included
          items={[
            "Kitchen counters, sink, stovetop and outside of appliances",
            "Bathrooms, including toilets, tubs, showers and mirrors",
            "Floors vacuumed and mopped throughout",
            "Dusting of reachable surfaces, shelves and sills",
            "Beds made with the linens already on them, trash out, surfaces tidied",
            "Interior glass on doors where there are handprints",
          ]}
        />
      </Section>

      <Section tone="ground" title="How the schedule works">
        <p>
          If the home hasn&apos;t been cleaned professionally in a while,
          we&apos;ll usually recommend starting with a deep clean. A
          well-maintained home may be able to begin with a standard visit. After
          that first clean the recurring rate applies.
        </p>
        <p>
          You get the same two people every visit, so by the third one nobody has
          to be told where anything goes.
        </p>
      </Section>

      <Section tone="sand" title="What moves the price">
        <p>
          Recurring cleaning starts at $160 a visit and a one-time clean at $180,
          for a home of roughly 1,400 to 1,600 square feet. Three things move
          your quote:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-lg">
          <li>Home size</li>
          <li>Number of bathrooms</li>
          <li>Current condition</li>
        </ul>
        <p>
          Tell us those three on the phone and your quote is fixed, as long as
          the property matches what you described. If it doesn&apos;t, we call
          you before starting.
        </p>
      </Section>

      <Section tone="surface" title="How long a visit takes">
        <p>
          About three hours with two people on a typical Las Cruces home. A first
          deep clean on the same home takes most of a day. We book by the job, not the hour, so a slow morning doesn&apos;t appear on your
          invoice.
        </p>
      </Section>

      <Section tone="ground" title="Common questions">
        <Faq items={faq} />
      </Section>

      <CallToAction line={`Call ${site.phone} for a price on your house.`} />
    </>
  );
}
