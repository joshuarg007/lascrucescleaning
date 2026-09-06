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
    a: "After hours, on a fixed weekday schedule agreed in advance. Cleaning around staff is slower and noisier, so evenings suit both sides. If your business runs late, the schedule moves later rather than into your open hours.",
  },
  {
    q: "How big a space can you take?",
    a: "A few thousand square feet in an evening is realistic for two people doing it properly. Past that we'd turn the work down rather than take a building we can't finish.",
  },
  {
    q: "How is commercial work priced?",
    a: "Per visit, against a written scope, after a walkthrough. Offices vary far more than homes do, so a published starting price would be misleading. The scope goes in writing, the schedule is agreed, and the price doesn't change without a conversation first.",
  },
  {
    q: "Do you sign a contract?",
    a: "A written scope and schedule, yes. A long lock-in term, no.",
  },
  {
    q: "Do you handle restroom supplies?",
    a: "We restock what you provide and tell you when stock is running low. Sourcing and billing consumables is a separate job, and most small offices prefer to buy their own.",
  },
  {
    q: "Can you clean medical or clinical spaces?",
    a: "Front of house, waiting areas, restrooms and offices, yes. Clinical areas with regulated disinfection protocols need a contractor who specializes in that and can document it.",
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
        lede="We walk the space, write down what gets cleaned and how often, and quote a per-visit price before the first service."
        showPricesLink={false}
        secondary={{ href: "/contact/", label: "Arrange a walkthrough" }}
      />

      <Banner image={image("commercialCleaning")} priority />

      <Section title="What we take on">
        <p>
          Offices, studios, salons, clinics and small retail. The practical limit
          is size, not industry: two people can cover a few thousand
          square feet properly in an evening.
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



      <Section title="What the walkthrough covers">
        <p>
          Twenty minutes in your space tells us what a phone call can&apos;t: the
          floor surfaces, the restroom count and condition, how many desks,
          whether there&apos;s a kitchen, and how the building handles trash after
          hours. It also tells you who will be in your office at night, which is
          fair to want to know before handing over a key.
        </p>
        <p>
          You get the scope and the per-visit price in writing afterward. No
          charge, no obligation.
        </p>
      </Section>

      <Section title="What appears in the written scope">
        <p>
          Every item, with the frequency next to it, so both sides can check six
          months later what was agreed. A small office might read:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-lg">
          <li>Every visit: restrooms, trash, floors, break room</li>
          <li>Monthly: vents and baseboards</li>
          <li>Quarterly: interior glass</li>
        </ul>
        <p>
          When you want something added, the price changes with it and you hear
          about that before it reaches an invoice.
        </p>
      </Section>

      <Section title="Common questions">
        <Faq items={faq} />
      </Section>

      <CallToAction line={`Arrange a walkthrough. Call ${site.phone}.`} />
    </>
  );
}
