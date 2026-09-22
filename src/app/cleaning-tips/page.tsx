import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Section, CallToAction } from "@/components/ui";
import { allTips } from "@/lib/tips";

export const metadata: Metadata = {
  title: "Cleaning Tips and How-To Videos | Las Cruces",
  description:
    "Short cleaning how-to videos from a working Las Cruces cleaning company, each with the full written method. Hard water, dust, grout and move-out cleaning.",
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
        lede="Short videos from real jobs around Las Cruces, each written out in full so you can follow it without watching."
      />

      <Section tone="surface" title="Every method, written out">
        {tips.length === 0 ? (
          <p>The first videos are on their way.</p>
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
