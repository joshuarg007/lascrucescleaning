import type { Metadata } from "next";
import Link from "next/link";
import {
  Hero,
  Section,
  CallToAction,
  Faq,
  faqSchema,
  Schema,
  type QA,
} from "@/components/ui";
import { image } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cleaning Services in Las Cruces and Mesilla, NM",
  description:
    "House cleaning in Las Cruces, Mesilla, and nearby areas. See where we work, starting prices, and when to call about an address.",
  alternates: { canonical: "/las-cruces-nm/" },
  openGraph: { url: "/las-cruces-nm/" },
};

const faq: QA[] = [
  {
    q: "Which neighborhoods do you cover?",
    a: "Anywhere inside Las Cruces, plus Mesilla and nearby addresses. That includes the east mesa, the university area, Sonoma Ranch, Telshor, Picacho Hills and the older neighborhoods around downtown. If you're on the far side of the valley, call and ask rather than assuming.",
  },
  {
    q: "Do you clean in Mesilla?",
    a: "Yes, at the same price as anywhere in Las Cruces. It's close enough that the drive is already covered.",
  },
  {
    q: "Why don't you serve El Paso?",
    a: "It's forty five miles away, which is close to two hours of driving for a three hour job. That time would have to appear on somebody's invoice, and it would be yours.",
  },
  {
    q: "Do you charge a travel fee?",
    a: "No. Every drive inside our area is short enough that it's already in the price, and there's no separate line for it.",
  },
  {
    q: "Can you clean a rental property I don't live in?",
    a: "Yes, and a good share of the move-out work is exactly that. Tell us how we get in and who to call if something isn't as described. Landlords and property managers are welcome to book on behalf of a tenant.",
  },
];

export default function LasCruces() {
  return (
    <>
      <Schema data={faqSchema(faq)} />
      <Hero
        eyebrow="Service Area"
        title="House cleaning across Las Cruces and Mesilla."
        lede="We keep the service area close so we can spend the day cleaning instead of driving across southern New Mexico."
        image={image("homeHero")}
      />

      <Section tone="ground" title="Where we work">
        <p>
          Anywhere inside Las Cruces, plus Mesilla and nearby addresses. That
          covers the east mesa, the university area, Sonoma Ranch, Telshor,
          Picacho Hills and the older neighborhoods around downtown.
        </p>
        <p>
          If you&apos;re on the far side of the valley, call and ask. The answer
          depends on what else is on the schedule that day, and we&apos;d rather
          tell you no than take the job and arrive late.
        </p>
      </Section>

      <Section tone="ground" title="Why we keep it close">
        <p>
          El Paso is forty five miles away, which is close to two hours of
          driving for a three hour job. That time ends up on somebody&apos;s
          invoice, and it would be yours.
        </p>
        <p>
          Staying inside one area means the schedule holds. When we say Tuesday
          morning, it&apos;s Tuesday morning, because there&apos;s no ninety mile
          round trip sitting between you and the job before yours. It also means
          no trip charge on your invoice.
        </p>
      </Section>

      <Section tone="sand" title="What homes here need">
        <p>
          Two local conditions shape almost every job. The valley moves a lot of
          fine dust, which settles on sills, blinds and baseboards faster than it
          would in a wetter climate. And the water is hard, so mineral scale
          builds on glass, chrome and tile.
        </p>
        <p>
          Both are why every other week works better here than monthly, and why a
          first visit to a home that has never been cleaned professionally is
          usually booked as a deep clean.
        </p>
      </Section>

      <Section tone="surface" title="What it costs here">
        <p>
          Recurring cleaning starts at $160 a visit, a deep clean at $320 and a
          move-out at $350, for a home of roughly 1,400 to 1,600 square feet.
        </p>
        <p className="text-sm">
          <Link href="/pricing/" className="font-semibold text-accent">
            Full pricing and what moves it
          </Link>
        </p>
      </Section>

      <Section tone="ground" title="Common questions">
        <Faq items={faq} />
      </Section>

      <CallToAction line={`Local, and easy to reach. ${site.phone}.`} />
    </>
  );
}
