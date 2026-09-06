import Link from "next/link";
import type { Metadata } from "next";
import { Hero, Section, CallToAction, Banner, Thumb, Faq, faqSchema, Schema, type QA } from "@/components/ui";
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
      />

      <Banner image={image("homeHero")} priority />

      <Section title="What cleaning costs in Las Cruces">
        <p>
          These are starting prices for a home of roughly 1,400 to 1,600 square
          feet with three bedrooms and two bathrooms. Your quote moves with size,
          bathroom count and condition, and you get it before we start.
        </p>
        <div className="not-prose mt-6 overflow-x-auto rounded border border-line bg-surface">
          <table className="w-full text-left text-sm">
            <tbody>
              {prices.map((p) => (
                <tr key={p.service} className="border-b border-line last:border-0">
                  <td className="px-4 py-3 font-medium text-ink">
                    {p.service}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-right font-semibold text-ink">
                    from ${p.from}{" "}
                    <span className="font-normal text-muted">
                      {p.unit}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm">
          <Link href="/pricing/" className="font-semibold text-accent">
            What moves the price, and what is included
          </Link>
        </p>
      </Section>

      <Section title="What we clean">
        <div className="not-prose grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}/`}
              className="rounded border border-line bg-surface p-5 hover:border-accent"
            >
              <Thumb image={cardImage(s.slug)} />
              <p className="font-semibold text-ink">{s.title}</p>
              <p className="mt-1 text-sm text-muted">{s.blurb}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="The same cleaners at every visit">
        <p>
          Your home is cleaned by the same people each time, so you tell us once
          how you want it done. No crews rotating through and no work handed off
          to a subcontractor.
        </p>
        <p>
          We work {site.hours}, across {site.areaServed}.
        </p>
        <p className="text-sm">
          <Link href="/about/" className="font-semibold text-accent">
            More about how we work
          </Link>
        </p>
      </Section>

      <Section title="How it works">
        <ol className="list-decimal space-y-3 pl-5 text-lg">
          <li>Tell us about the home: size, bathrooms, and when it was last cleaned.</li>
          <li>
            Get a fixed quote before you book. It holds as long as the property
            matches what you described, and if it doesn&apos;t we call you before
            starting.
          </li>
          <li>
            The same two owners clean it each visit, and you pay afterward. No
            deposit, and no card details over the phone.
          </li>
        </ol>
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

      <Section title="Cleaning in a desert town">
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

      <Section title="Common questions">
        <Faq items={faq} />
      </Section>

      <CallToAction line="Tell us about the home and we\u2019ll quote it on the phone." />
    </>
  );
}
