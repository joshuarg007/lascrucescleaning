import Link from "next/link";
import type { Metadata } from "next";
import { Hero, Section, CallToAction } from "@/components/ui";
import { prices, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "House Cleaning in Las Cruces, NM | Las Cruces Cleaning",
  description:
    "House cleaning, deep cleaning and move-out cleaning in Las Cruces, New Mexico. Prices published up front, starting at $160 a visit. Call (575) 200-4717.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Las Cruces, New Mexico"
        title="House cleaning in Las Cruces, with the price on the page."
        lede="Recurring cleaning from $160 a visit. Deep cleans and move-outs quoted the same way, before anyone comes to the house."
      />

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
          We work {site.hours.toLowerCase()}, in {site.areaServed}.
        </p>
        <p className="text-sm">
          <Link href="/about/" className="font-semibold text-accent">
            More about how we work
          </Link>
        </p>
      </Section>

      <CallToAction line="Tell us the house and we will give you a number on the phone." />
    </>
  );
}
