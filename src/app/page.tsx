import Link from "next/link";
import type { Metadata } from "next";
import {
  Hero,
  Section,
  CallToAction,
  Thumb,
  Faq,
  faqSchema,
  Schema,
  Included,
  PriceCards,
  Steps,
  TrustStrip,
  type QA,
} from "@/components/ui";
import { prices, services, site } from "@/lib/site";
import { cardImage, image } from "@/lib/images";

export const metadata: Metadata = {
  title: { absolute: "House Cleaning in Las Cruces, NM: Prices From $160" },
  description:
    "House cleaning, deep cleaning and move-out cleaning in Las Cruces, New Mexico. Prices published up front, starting at $160 a visit. Call (575) 386-5714.",
  alternates: { canonical: "/" },
};

const faq: QA[] = [
  {
    q: "How much does house cleaning cost in Las Cruces?",
    a: "Recurring cleaning starts at $160 a visit, a one-time standard clean at $180, a first deep clean at $320 and a move-out clean at $350. Those starting prices assume a home of roughly 1,400 to 1,600 square feet with three bedrooms and two bathrooms.",
  },
  {
    q: "Why do you publish prices when nobody else does?",
    a: "Because it is the first thing people want to know, and finding it usually takes a phone call and a walkthrough. Publishing our starting prices means you can decide whether we are in your range before you spend an afternoon on it.",
  },
  {
    q: "What areas do you serve?",
    a: "Las Cruces, Mesilla and nearby addresses. We don't serve El Paso. Keeping the area close means short drives, reliable arrival times and no trip charge.",
  },
  {
    q: "Do you bring supplies?",
    a: "Yes, everything comes with us. If you want a particular product used on a particular surface, leave it out and we'll use that instead.",
  },
  {
    q: "How do I get a quote?",
    a: "Call or text (575) 386-5714 with the square footage, the number of bathrooms and roughly when it was last cleaned. That's enough to quote a home in about three minutes. No walkthrough, no appointment to get a price.",
  },
];

export default function Home() {
  return (
    <>
      <Schema data={faqSchema(faq)} />
      <Hero
        eyebrow="Las Cruces, New Mexico"
        title="House cleaning in Las Cruces, with the price on the page."
        lede="Recurring cleaning starts at $160 a visit. Tell us the size of the home, the number of bathrooms, and when it was last cleaned, and we'll quote the job before you book."
        image={image("homeHero")}
      />

      <TrustStrip
        items={[
          {
            label: "Prices on the page",
            detail: "Starting numbers published, before you call anyone.",
          },
          {
            label: "The same two cleaners",
            detail: "Owner operated. No rotating crews, no subcontractors.",
          },
          {
            label: "Quoted in three minutes",
            detail: "Over the phone. No walkthrough, no appointment.",
          },
          {
            label: "Nothing to sign",
            detail: "Pause, cancel or change the interval whenever.",
          },
        ]}
      />

      <Section
        tone="surface"
        eyebrow="Pricing"
        title="What cleaning costs in Las Cruces"
      >
        <p>
          These are starting prices for a home of roughly 1,400 to 1,600 square
          feet with three bedrooms and two bathrooms. Your quote moves with size,
          bathroom count and condition, and you get it before we start.
        </p>
        <div className="not-prose pt-2">
          <PriceCards prices={prices} highlight="Recurring clean, every two weeks" />
        </div>
        <p className="text-sm">
          <Link href="/pricing/" className="font-semibold text-accent underline-offset-4 hover:underline">
            What moves the price, and what is included
          </Link>
        </p>
      </Section>

      <Section tone="ground" eyebrow="Services" title="What we clean">
        <div className="not-prose grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}/`}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-shadow hover:shadow-lg hover:shadow-ink/5"
            >
              <Thumb image={cardImage(s.slug)} />
              <div className="flex flex-1 flex-col p-5">
                <p className="font-semibold text-ink">{s.title}</p>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                  {s.blurb}
                </p>
                <span className="mt-4 text-sm font-semibold text-accent">
                  See what is included
                  <span aria-hidden className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="sand" eyebrow="How it works" title="Three steps, and none of them is a sales visit">
        <Steps
          steps={[
            {
              title: "Tell us about the home",
              body: "Size, bathrooms, and roughly when it was last cleaned. That is enough to price it.",
            },
            {
              title: "Get a fixed quote",
              body: "It holds as long as the property matches what you described. If it does not, we call you before starting.",
            },
            {
              title: "We clean, you pay after",
              body: "No deposit and no card details over the phone. The same two owners every visit.",
            },
          ]}
        />
        <p>
          Recurring service can be arranged with a key, a code or a garage
          remote, so you come home to a finished house. If we miss something,
          tell us that day or the following morning and we&apos;ll come back and
          put it right at no charge.
        </p>
        <p>
          There&apos;s no long agreement to sign. A recurring slot costs less per
          visit because a home cleaned two weeks ago is genuinely less work.
          Cancel, pause over a holiday, or change the interval whenever you need
          to, with enough notice for us to fill the slot.
        </p>
      </Section>

      <Section
        tone="surface"
        eyebrow="Who shows up"
        title="The same cleaners at every visit"
        media={image("about")}
      >
        <p>
          Your home is cleaned by the same people each time, so you tell us once
          how you want it done. No crews rotating through and no work handed off
          to a subcontractor.
        </p>
        <p>
          We work {site.hours}, across {site.areaServed}.
        </p>
        <p className="text-sm">
          <Link href="/about/" className="font-semibold text-accent underline-offset-4 hover:underline">
            More about how we work
          </Link>
        </p>
      </Section>

      <Section tone="ground" eyebrow="Scope" title="What a standard visit includes">
        <p>
          The same list every time, so you know what you&apos;re paying for:
        </p>
        <Included
          items={[
            "Kitchen counters, sink, stovetop and appliance exteriors",
            "Bathrooms: toilets, tubs, showers, mirrors and hardware",
            "Floors vacuumed and mopped throughout",
            "Dusting of reachable surfaces, shelves and sills",
            "Beds made with the linens already on them",
            "Trash out and surfaces tidied",
            "Interior glass on doors where there are handprints",
          ]}
        />
        <p>
          Oven interiors, refrigerator interiors and full interior windows are
          optional add-ons on a standard visit. They&apos;re already included in a
          deep clean and a move-out clean.
        </p>
      </Section>

      <Section
        tone="dark"
        eyebrow="Local conditions"
        title="Cleaning in a desert town"
        media={image("houseCleaning")}
      >
        <p>
          Two local conditions shape almost every job here. The valley moves a
          lot of fine dust, which settles on sills, blinds and baseboards faster
          than it would in a wetter climate. And the water is hard, so mineral
          scale builds on glass, chrome and tile.
        </p>
        <p>
          Both are why every other week holds up here where monthly might be
          enough elsewhere. Where scale has been sitting for years it can etch
          the surface underneath, and we&apos;ll tell you when what&apos;s left is
          damage instead of charging you to keep scrubbing it.
        </p>
      </Section>

      <Section tone="surface" eyebrow="FAQ" title="Common questions">
        <Faq items={faq} />
      </Section>

      <CallToAction line="Tell us about the home and we’ll quote it on the phone." />
    </>
  );
}
