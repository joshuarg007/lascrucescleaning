import type { Metadata } from "next";
import { Hero, Section, CallToAction, Schema } from "@/components/ui";
import { prices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "House Cleaning Prices in Las Cruces",
  description:
    "What house cleaning costs in Las Cruces. Recurring from $160 a visit, deep clean from $320, move-out from $350, with the things that move the price explained.",
  alternates: { canonical: "/pricing/" },
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does house cleaning cost in Las Cruces?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recurring cleaning starts at $160 a visit for a typical three bedroom house. A one-time standard clean starts at $180, a first-time deep clean at $320, and a move-out clean at $350. Square footage and condition move the final number.",
      },
    },
    {
      "@type": "Question",
      name: "Why is the first clean more expensive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The first visit to a house that has not been cleaned professionally takes longer, because it includes the build-up that recurring visits keep from returning. After that first clean the recurring rate applies.",
      },
    },
    {
      "@type": "Question",
      name: "Do you charge by the hour or by the job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By the job. You get the number before the work starts, so a slow day is our problem rather than yours.",
      },
    },
  ],
};

export default function Pricing() {
  return (
    <>
      <Schema data={faq} />
      <Hero
        eyebrow="Pricing"
        title="What cleaning costs in Las Cruces."
        lede="Starting prices for every service we offer, and an honest account of what moves them."
        showPricesLink={false}
      />

      <Section>
        <div className="not-prose space-y-4">
          {prices.map((p) => (
            <div
              key={p.service}
              className="rounded border border-line bg-surface p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="text-lg font-semibold text-ink">
                  {p.service}
                </h2>
                <p className="text-xl font-bold text-accent">
                  from ${p.from}{" "}
                  <span className="text-sm font-normal text-muted">
                    {p.unit}
                  </span>
                </p>
              </div>
              <p className="mt-2 text-ink-2">{p.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What moves the number">
        <p>
          <strong>Square footage.</strong> The starting prices assume roughly
          1,400 to 1,600 square feet, three bedrooms and two bathrooms. A larger
          house takes longer and costs more.
        </p>
        <p>
          <strong>How long it has been.</strong> A house cleaned professionally
          last month is a different job from one that has never been cleaned
          professionally. That is why most recurring clients start with a deep
          clean and then drop to the recurring rate.
        </p>
        <p>
          <strong>Whether anyone is living in it.</strong> An empty house is
          faster to clean and slower to finish, because everything is visible and
          nothing gets skipped.
        </p>
        <p>
          <strong>Add-ons.</strong> Inside the refrigerator, inside the oven,
          interior windows and laundry are quoted on top rather than folded into
          a headline price that then has to be walked back.
        </p>
      </Section>

      <Section title="What we do not do">
        <p>
          We do not clean up after pets beyond ordinary hair and tracked dirt, we
          do not handle biohazard or hoarding situations, and we do not move
          furniture heavier than a dining chair. If that is the job you have, you
          want a specialist and we will say so on the phone rather than after we
          arrive.
        </p>
      </Section>

      <CallToAction line={`Call ${site.phone} and we will price your house on the call.`} />
    </>
  );
}
