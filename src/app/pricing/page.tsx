import type { Metadata } from "next";
import { Hero, Section, CallToAction, Schema, Banner } from "@/components/ui";
import { prices, site } from "@/lib/site";
import { image } from "@/lib/images";

export const metadata: Metadata = {
  title: "House Cleaning Prices in Las Cruces",
  description:
    "What house cleaning costs in Las Cruces. Recurring from $160 a visit, deep clean from $320, move-out from $350, with the things that move the price explained.",
  alternates: { canonical: "/pricing/" },
  openGraph: { url: "/pricing/" },
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

      <Banner image={image("pricing")} priority />

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

      <Section title="Recurring against one-time, in numbers">
        <p>
          A one-time standard clean costs $180 and a recurring visit costs $160.
          People sometimes read that as a small discount for loyalty. It is not.
          A house cleaned two weeks ago is genuinely less work than a house
          cleaned whenever it was last done, so the recurring rate reflects a
          smaller job rather than a favour.
        </p>
        <p>
          Over a year, biweekly visits at $160 come to twenty six cleans. Monthly
          visits cost more per visit and add up to twelve, and the house sits
          further from level for most of that time. Which of those is right for
          you depends on the house and who is in it, and we would rather say so
          than push everyone onto the most frequent schedule available.
        </p>
      </Section>

      <Section title="Why there is no per-square-foot rate">
        <p>
          Cleaning does not scale evenly with floor area. Kitchens and bathrooms
          carry most of the labour in any house, and a 2,600 square foot house
          with two bathrooms can be less work than an 1,800 square foot house
          with three and a half. A rate per square foot would quietly overcharge
          the first and undercharge the second.
        </p>
        <p>
          So we price the job. Give us the size, the bathroom count and the
          condition on the phone, and the number you hear is the number you pay
          as long as the house matches the description.
        </p>
      </Section>

      <Section title="What is not on the invoice">
        <p>
          No trip charge, because we only work inside Las Cruces and Mesilla and
          that driving is already in the price. No supplies or equipment fee,
          because we bring our own. No deposit, and no card details taken over
          the phone to hold a booking.
        </p>
        <p>
          New Mexico gross receipts tax applies to services, so it appears on
          your invoice as its own line at the Las Cruces rate. It is a real cost
          rather than a fee we invented, and showing it separately is more honest
          than folding it into the headline number.
        </p>
      </Section>

      <CallToAction line={`Call ${site.phone} and we will price your house on the call.`} />
    </>
  );
}
