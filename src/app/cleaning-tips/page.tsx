import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, CallToAction } from "@/components/ui";
import { allTips } from "@/lib/tips";

export const metadata: Metadata = {
  title: "Cleaning Tips from a Las Cruces Cleaning Company",
  description:
    "How we handle hard water, desert dust, grout, swamp coolers and move-out cleans in Las Cruces. Every method written out step by step.",
  alternates: { canonical: "/cleaning-tips/" },
  openGraph: { url: "/cleaning-tips/" },
};

export default function CleaningTips() {
  const tips = allTips();

  return (
    <>
      <Hero
        eyebrow="Cleaning Tips"
        title="How we actually do it."
        lede="The methods we use on real jobs around Las Cruces, written out step by step so you can follow along."
      />

      <Section tone="surface" title="Every method, written out">
        {tips.length === 0 ? (
          <p>The first tips are on their way.</p>
        ) : (
          <div className="not-prose grid gap-8 sm:grid-cols-2">
            {tips.map((t) => (
              <article key={t.slug} className="border-t border-line pt-5">
                <h2 className="text-lg font-semibold text-ink">
                  <Link href={`/cleaning-tips/${t.slug}/`} className="hover:text-accent">
                    {t.title}
                  </Link>
                </h2>
                <p className="mt-2 leading-relaxed text-ink-2">{t.summary}</p>
              </article>
            ))}
          </div>
        )}
      </Section>

      <CallToAction line="Would rather not do it yourself? We clean homes across Las Cruces." />
    </>
  );
}
