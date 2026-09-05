import type { Metadata } from "next";
import { Hero, Section, Included, CallToAction, Schema, serviceSchema, Banner, Faq, faqSchema, type QA } from "@/components/ui";
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
    a: "It removes the cleaning grounds a landlord can withhold against, which is the part we control. It does not repair damage, patch nail holes or repaint, and no cleaner can promise a deposit outcome, because that decision belongs to the landlord. What we can say is that the house will be clean enough that cleaning is not the reason.",
  },
  {
    q: "Does the house need to be completely empty?",
    a: "As close to empty as you can manage. The value of a move-out clean is that nothing is covered, so a room with boxes still stacked in it is a room we cannot finish. If a few items have to stay, put them together in one room and tell us which one.",
  },
  {
    q: "How far ahead should I book?",
    a: "As soon as you know your date, and a week ahead at minimum. Move-out cleans cluster at the end of the month because leases do, so the last three days of any month fill first. Tell us the walkthrough date rather than the move date, since that is the deadline that actually matters.",
  },
  {
    q: "Do you clean carpets?",
    a: "We vacuum thoroughly. We do not steam clean or shampoo carpet, which is a different trade with different equipment. If your lease requires professional carpet cleaning with a receipt, book that separately and let us handle everything else.",
  },
  {
    q: "Can you clean the garage?",
    a: "A sweep and a wipe down of surfaces, yes, if the garage is empty. Oil stains on concrete and paint overspray are not cleaning problems. Ask when you call and we will tell you what is realistic for your garage rather than guessing on a web page.",
  },
  {
    q: "Is move-in cleaning the same thing?",
    a: "The same work in the same empty house at the same price. Plenty of people book it because they would rather take possession of a house somebody has already cleaned than trust that the last occupant did.",
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
      />

      <Banner image={image("moveOutCleaning")} priority />

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

      <Section title="What it costs">
        <p>
          A move-out clean starts at $350 for a house of roughly 1,400 to 1,600
          square feet. It is priced above a deep clean of the same house because
          an empty house means every cabinet, every closet floor and every corner
          is in scope, with nothing standing in front of it.
        </p>
        <p>
          Size and bathroom count move the number, and so does whether the house
          was maintained. A rental that has been cleaned regularly for three
          years and a rental that has not are the same square footage and a
          different day of work.
        </p>
      </Section>

      <Section title="What a landlord actually checks">
        <p>
          Walkthroughs are more predictable than people expect. The oven, the
          refrigerator, the inside of kitchen cabinets, the bathroom grout and
          hardware, the baseboards, and the floors in the corners where furniture
          used to be. Those are the places a deposit gets withheld over, and
          those are the places an empty house makes reachable.
        </p>
        <p>
          Blinds, window tracks and light fixtures are the ones people forget
          entirely, because they are invisible until a house is empty and the
          light comes through differently. They are in the scope of this clean.
        </p>
      </Section>

      <Section title="Common questions">
        <Faq items={faq} />
      </Section>

      <CallToAction line={`Call ${site.phone} with your move date.`} />
    </>
  );
}
