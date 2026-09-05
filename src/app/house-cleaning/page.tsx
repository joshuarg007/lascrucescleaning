import type { Metadata } from "next";
import { Hero, Section, Included, CallToAction, Schema, serviceSchema, Banner, Faq, faqSchema, type QA } from "@/components/ui";
import { site } from "@/lib/site";
import { image } from "@/lib/images";

export const metadata: Metadata = {
  title: "Recurring House Cleaning in Las Cruces, NM",
  description:
    "Recurring and one-time house cleaning in Las Cruces. From $160 a visit every two weeks, with the same cleaners at every visit.",
  alternates: { canonical: "/house-cleaning/" },
  openGraph: { url: "/house-cleaning/" },
};

const faq: QA[] = [
  {
    q: "How often should a house be cleaned?",
    a: "Every two weeks suits most houses in Las Cruces. Weekly makes sense with young children, pets that shed, or anyone working from home all day. Monthly works for a quiet household, but the house drifts between visits and each clean takes longer, which is why the monthly rate is closer to a one-time price than to the biweekly one.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "No. Most recurring clients give us a key, a code or a garage remote, and come home to a finished house. If you would rather be there, that is fine too. What we ask is that you are consistent, because a visit we cannot get into still costs us the slot.",
  },
  {
    q: "Do you bring your own supplies and equipment?",
    a: "Yes. Vacuum, mop, cloths and products all come with us. If you want a specific product used on a specific surface, leave it out with a note and we will use it. Some stone and hardwood finishes want a particular cleaner, and the manufacturer is a better authority on that than we are.",
  },
  {
    q: "What does not get done in a standard visit?",
    a: "Inside the oven and refrigerator, interior windows beyond the glass on doors, laundry, dishes left in the sink, and anything that needs a ladder taller than a two-step. Those belong to a deep clean or a separate arrangement. We would rather name the limits than have you find them.",
  },
  {
    q: "What should I do before you arrive?",
    a: "Pick up whatever is on the floor and on the counters. We clean surfaces rather than sort belongings, so a house that is tidy but dirty gets a much better result in the same three hours than one that is clean but cluttered. Nothing else is needed.",
  },
  {
    q: "What if something is not right?",
    a: "Call the same day or the next morning and we come back and put it right at no charge. That is easier for us than arguing about it, and a recurring client who is quietly unhappy is worth less than a phone call.",
  },
  {
    q: "Do you clean houses with pets?",
    a: "Yes. Tell us the animal and the temperament when you book. A dog that needs to be shut in a bedroom is not a problem as long as we know in advance rather than discovering it at the front door.",
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
        lede="Every two weeks is what most houses want. Weekly and monthly work too, and the rate moves with the interval."
      />

      <Banner image={image("houseCleaning")} priority />

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

      <Section title="What moves the price">
        <p>
          Recurring cleaning starts at $160 a visit for a house of roughly 1,400
          to 1,600 square feet. A one-time clean starts at $180. Three things
          move a house away from that starting number, and all three are visible
          before anyone arrives.
        </p>
        <p>
          Square footage is the obvious one. A 2,600 square foot house is not
          twice the work of a 1,300 square foot house, because kitchens and
          bathrooms carry most of the labour, but it is meaningfully more.
          Bathroom count is the second, since a bathroom takes longer per square
          foot than any other room in the house. Condition is the third, and it
          is the one people underestimate. A house cleaned two weeks ago and a
          house cleaned last year are different jobs even at identical size.
        </p>
        <p>
          Tell us those three things on the phone and you get a real number
          rather than a range. We do not need to walk the house first, and we do
          not raise the figure afterwards.
        </p>
      </Section>

      <Section title="How long a visit takes">
        <p>
          A recurring clean on a typical Las Cruces house runs about three hours
          with two people working. A first deep clean on the same house takes
          most of a day. We book by the job rather than by the hour, so a slow
          morning is our problem and not something that appears on your invoice.
        </p>
        <p>
          Dust here is the local complication. Las Cruces sits in a valley that
          moves a lot of fine sand, and any house with windows that open collects
          it on sills, blinds and baseboards faster than a house in a wetter
          climate would. That is a real reason biweekly holds up better here than
          the same interval would somewhere else.
        </p>
      </Section>

      <Section title="Common questions">
        <Faq items={faq} />
      </Section>

      <CallToAction line={`Call ${site.phone} for a price on your house.`} />
    </>
  );
}
