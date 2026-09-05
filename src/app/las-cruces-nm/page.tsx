import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, CallToAction, Banner, Faq, faqSchema, Schema, type QA } from "@/components/ui";
import { site } from "@/lib/site";
import { image } from "@/lib/images";

export const metadata: Metadata = {
  title: "Cleaning Services in Las Cruces, New Mexico",
  description:
    "A cleaning company that works Las Cruces and only Las Cruces. Where we go and what we charge.",
  alternates: { canonical: "/las-cruces-nm/" },
  openGraph: { url: "/las-cruces-nm/" },
};

const faq: QA[] = [
  {
    q: "Which neighbourhoods do you cover?",
    a: "Anywhere inside Las Cruces, plus Mesilla and the immediate outskirts. That includes the east mesa, the university area, Sonoma Ranch, Telshor, Picacho Hills and the older neighbourhoods around downtown. If you are on the far side of the valley, call and ask rather than assuming.",
  },
  {
    q: "Do you clean in Mesilla?",
    a: "Yes. Mesilla is close enough that it costs the same as anywhere in Las Cruces, and the older houses there are some of the more interesting work in the valley.",
  },
  {
    q: "Why do you not serve El Paso?",
    a: "It is forty five miles away, which is close to two hours of driving for a three hour job. That time would have to appear on somebody's invoice, and it would be yours. Four times the search volume does not survive the arithmetic.",
  },
  {
    q: "Do you charge a travel fee?",
    a: "No. Staying inside one city is what makes that possible. Every drive is short enough that it is already priced in, and there is no separate line for it.",
  },
  {
    q: "Can you clean a rental property I do not live in?",
    a: "Yes, and a good share of the move-out work is exactly that. Tell us how we get in and who to call if something is not as described. Landlords and property managers are welcome to book on behalf of a tenant.",
  },
];

export default function LasCruces() {
  return (
    <>
      <Schema data={faqSchema(faq)} />
      <Hero
        eyebrow="Service Area"
        title="We clean Las Cruces, and only Las Cruces."
        lede="One city, short drives, and a schedule that holds."
      />

      <Section title="Where we work">
        <p>
          Anywhere inside Las Cruces, plus Mesilla and the immediate outskirts.
          If you are on the far side of the valley, call and ask. The answer
          depends on what else is on the schedule that day, and we would rather
          tell you no than take the job and arrive late.
        </p>
      </Section>

      <Section title="Why not El Paso">
        <p>
          El Paso is forty five miles away, which is close to two hours of
          driving for a three hour job, and that time would end up on your
          invoice. Staying in Las Cruces keeps the drives short, the arrival
          times reliable and the price where it is.
        </p>
      </Section>

      <Section title="What it costs here">
        <p>
          Recurring cleaning starts at $160 a visit, a deep clean at $320, and a
          move-out at $350. Those are Las Cruces numbers for Las Cruces houses,
          not a national average adjusted for the region.
        </p>
        <p className="text-sm">
          <Link href="/pricing/" className="font-semibold text-accent">
            Full pricing and what moves it
          </Link>
        </p>
      </Section>

      <Section title="Why one city">
        <p>
          Cleaning is a scheduling business before it is anything else. Two
          people can only be in one place at a time, and the difference between a
          ten minute drive and a forty minute drive is a whole extra job in a
          day. Companies that advertise across a wide region either charge for
          that driving or absorb it by rushing the work.
        </p>
        <p>
          Keeping to Las Cruces means the schedule holds. When we say a Tuesday
          morning, it is a Tuesday morning, because there is no ninety mile round
          trip sitting between you and the job before yours.
        </p>
      </Section>

      <Section title="What Las Cruces houses need">
        <p>
          Two local conditions shape almost every job here. The valley moves a lot
          of fine dust, which settles on sills, blinds and baseboards faster than
          it would in a wetter climate. And the water is hard, so mineral scale
          builds on glass, chrome and tile in a way that a house on softer water
          simply does not deal with.
        </p>
        <p>
          Both are reasons the every-two-weeks interval works better here than
          monthly. They are also the reason most first visits to a house that has
          never been cleaned professionally are booked as a deep clean rather
          than a standard one.
        </p>
      </Section>

      <Section title="Common questions">
        <Faq items={faq} />
      </Section>

      <CallToAction line={`Local, and easy to reach. ${site.phone}.`} />
    </>
  );
}
