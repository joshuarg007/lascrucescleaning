import type { Metadata } from "next";
import { Hero, Section, Included, CallToAction, Schema, serviceSchema, Banner, Faq, faqSchema, type QA } from "@/components/ui";
import { site } from "@/lib/site";
import { image } from "@/lib/images";

export const metadata: Metadata = {
  title: "Commercial Cleaning in Las Cruces, NM",
  description:
    "Office and small commercial cleaning in Las Cruces, scheduled after hours. Quoted per visit against a written scope.",
  alternates: { canonical: "/commercial-cleaning/" },
  openGraph: { url: "/commercial-cleaning/" },
};

const faq: QA[] = [
  {
    q: "When do you clean commercial spaces?",
    a: "After hours, on a fixed weekday schedule agreed in advance. Cleaning around staff is slower, noisier and worse, so evenings suit both sides. If your business runs late, the schedule moves later rather than into your open hours.",
  },
  {
    q: "How big a space can you take?",
    a: "A few thousand square feet in an evening is realistic for two people doing it properly. Past that the schedule stops being honest, and we would rather turn work down than take a building we cannot finish and quietly do half of it.",
  },
  {
    q: "How is commercial work priced?",
    a: "Per visit, against a written scope, after a walkthrough. Offices vary far more than houses do, so a published starting price would be misleading. What is fixed is the method: the scope goes in writing, the schedule is agreed, and the price does not change without a conversation first.",
  },
  {
    q: "Do you sign a contract?",
    a: "A written scope and schedule, yes, because both sides should be able to check six months later what was actually agreed. A long lock-in term, no. If the work is good you will keep us, and if it is not you should not be trapped.",
  },
  {
    q: "Do you handle restroom supplies?",
    a: "We restock what you provide and tell you when stock is running low. Sourcing and billing consumables is a different arrangement, and most small offices would rather buy their own.",
  },
  {
    q: "Can you clean medical or clinical spaces?",
    a: "Front of house, waiting areas, restrooms and offices, yes. Clinical areas with regulated disinfection protocols need a contractor who specialises in that and can document it. We will say so rather than take the work.",
  },
];

export default function CommercialCleaning() {
  return (
    <>
      <Schema data={faqSchema(faq)} />
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

      <Banner image={image("commercialCleaning")} priority />

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

      <Section title="Why the scope goes in writing">
        <p>
          Most disputes between a business and its cleaner are not about quality.
          They are about whether something was ever in scope. Somebody assumed
          the interior glass was included, somebody else assumed it was not, and
          six months later there is no document to check.
        </p>
        <p>
          So we write the scope down before the first visit, room by room, with
          the frequency next to each item. Weekly for the floors, monthly for the
          vents, quarterly for the interior glass, whatever the space actually
          needs. When you want something added, the price changes with it and you
          hear about that before it appears on an invoice.
        </p>
      </Section>

      <Section title="What the walkthrough is for">
        <p>
          Twenty minutes in your space tells us what no phone call can: the floor
          surfaces, the restroom count and condition, how many desks, whether
          there is a kitchen, and how the building handles trash after hours. It
          also tells you who is going to be in your office at night, which is a
          fair thing to want to know before handing over a key.
        </p>
        <p>
          You get the scope and the per-visit price in writing after that
          walkthrough, and there is no charge and no obligation attached to it.
        </p>
      </Section>

      <Section title="Common questions">
        <Faq items={faq} />
      </Section>

      <CallToAction line={`Call ${site.phone} to arrange a walkthrough.`} />
    </>
  );
}
