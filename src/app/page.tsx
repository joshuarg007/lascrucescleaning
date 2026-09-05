import Link from "next/link";
import type { Metadata } from "next";
import { Hero, Section, CallToAction, Banner, Thumb, Faq, faqSchema, Schema, type QA } from "@/components/ui";
import { prices, services, site } from "@/lib/site";
import { cardImage, image } from "@/lib/images";

export const metadata: Metadata = {
  title: "House Cleaning in Las Cruces, NM | Las Cruces Cleaning",
  description:
    "House cleaning, deep cleaning and move-out cleaning in Las Cruces, New Mexico. Prices published up front, starting at $160 a visit. Call (575) 386-5714.",
  alternates: { canonical: "/" },
};

const faq: QA[] = [
  {
    q: "How much does house cleaning cost in Las Cruces?",
    a: "Recurring cleaning here starts at $160 a visit, a one-time standard clean at $180, a first deep clean at $320 and a move-out clean at $350. Those are our published starting prices for a house of roughly 1,400 to 1,600 square feet. Most companies in this market quote only after a walkthrough, which is why the figure is hard to find.",
  },
  {
    q: "Why do you publish prices when nobody else does?",
    a: "Because it is the first thing people want to know and the last thing they are told. Withholding the number is a sales tactic that works, and it also wastes an afternoon of your time before either side finds out whether the budget matches. We would rather publish the range and talk to people it suits.",
  },
  {
    q: "What areas do you serve?",
    a: "Las Cruces and Mesilla, plus the immediate outskirts. We do not serve El Paso. Staying in one city keeps the drives short, which keeps arrival times reliable and keeps the price where it is.",
  },
  {
    q: "Are you insured?",
    a: "Not yet. General liability cover is quoted and ready to bind, and it is bound the day the first job is scheduled rather than carried while there is nothing to cover. We would rather tell you that plainly than let you assume otherwise.",
  },
  {
    q: "Do you bring supplies?",
    a: "Yes, everything comes with us. If you want a particular product used on a particular surface, leave it out and we will use it instead.",
  },
  {
    q: "How do I get a quote?",
    a: "Call or text (575) 386-5714 with the square footage, the number of bathrooms and roughly when it was last cleaned. That is enough to price a house on the phone in about three minutes. No walkthrough, no appointment to get a number.",
  },
];

export default function Home() {
  return (
    <>
      <Schema data={faqSchema(faq)} />
      <Hero
        eyebrow="Las Cruces, New Mexico"
        title="House cleaning in Las Cruces, with the price on the page."
        lede="Recurring cleaning from $160 a visit. Deep cleans and move-outs quoted the same way, before anyone comes to the house."
      />

      <Banner image={image("homeHero")} priority />

      <Section title="What cleaning costs in Las Cruces">
        <p>
          Here is what the work starts at. The final number depends on the size
          and the condition of the house, and you get that number before we
          start, not after we finish.
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
          Your house is cleaned by the same people each time, so you tell us once
          how you want it done. No crews rotating through and no work handed off
          to a subcontractor.
        </p>
        <p>
          We work {site.hours}, in {site.areaServed}.
        </p>
        <p className="text-sm">
          <Link href="/about/" className="font-semibold text-accent">
            More about how we work
          </Link>
        </p>
      </Section>

      <Section title="What it is like to work with us">
        <p>
          You call, you describe the house, and you get a price on that call. No
          appointment to receive a number, no walkthrough before anyone will talk
          about money, and no sales visit dressed up as an estimate.
        </p>
        <p>
          If the price works, we agree a date. Recurring clients hand over a key
          or a code and come home to a finished house, which is how most of this
          work is done once the first visit has gone well. Payment happens after
          the work rather than before it, and we do not take deposits or ask for
          card details over the phone.
        </p>
        <p>
          If something is not right, call the same day or the next morning and we
          come back and fix it at no charge. That is a cheaper outcome for us
          than losing a recurring client over a bathroom.
        </p>
      </Section>

      <Section title="Cleaning in a desert town">
        <p>
          Las Cruces is harder on a house than most places, in two specific ways
          that show up in every job here.
        </p>
        <p>
          The first is dust. The valley moves a great deal of fine sand, and any
          house with windows that open collects it on sills, blinds and
          baseboards faster than a house in a wetter climate would. That is the
          honest reason cleaning every two weeks holds up here where monthly
          might be enough elsewhere.
        </p>
        <p>
          The second is the water. It is hard, and it leaves mineral scale on
          glass, chrome and tile that builds quietly until somebody scrubs it
          off. A recurring visit keeps ahead of it. A house that has gone a year
          usually needs a deep clean to get back to level, and sometimes what is
          left underneath is etching rather than dirt, in which case we will tell
          you that instead of charging you to keep scrubbing it.
        </p>
      </Section>

      <Section title="Common questions">
        <Faq items={faq} />
      </Section>

      <CallToAction line="Tell us the house and we will give you a number on the phone." />
    </>
  );
}
