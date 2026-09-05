import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, CallToAction } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cleaning Services in Las Cruces, New Mexico",
  description:
    "A cleaning company that works Las Cruces and only Las Cruces. Where we go and what we charge.",
  alternates: { canonical: "/las-cruces-nm/" },
  openGraph: { url: "/las-cruces-nm/" },
};

export default function LasCruces() {
  return (
    <>
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

      <CallToAction line={`Local, and easy to reach. ${site.phone}.`} />
    </>
  );
}
