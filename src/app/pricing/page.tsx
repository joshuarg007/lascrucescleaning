import type { Metadata } from "next";
import { Hero, Section, CallToAction, PriceCards, Schema } from "@/components/ui";
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
        text: "Recurring cleaning starts at $160 a visit for a home of roughly 1,400 to 1,600 square feet with three bedrooms and two bathrooms. A one-time standard clean starts at $180, a first-time deep clean at $320, and a move-out clean at $350. Square footage, bathroom count and condition move your quote.",
      },
    },
    {
      "@type": "Question",
      name: "Why is the first clean more expensive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The first visit to a home that has not been cleaned professionally takes longer, because it includes build-up that recurring visits then keep from returning. After that first clean the recurring rate applies.",
      },
    },
    {
      "@type": "Question",
      name: "Do you charge by the hour or by the job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By the job. You get your quote before the cleaning starts, so a slow day is our problem, not yours.",
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
        lede="Starting prices for every service we offer, and what moves them."
        showPricesLink={false}
        image={image("pricing")}
      />

      <Section tone="surface">
        <p className="mb-6 max-w-2xl text-lg text-ink-2">
          These starting prices assume a home of roughly 1,400 to 1,600 square
          feet with three bedrooms and two bathrooms. Your quote may change with
          the number of bathrooms, the home&apos;s condition, and any optional
          work you request.
        </p>
        <div className="not-prose pt-2">
          <PriceCards prices={prices} highlight="Recurring clean, every two weeks" />
        </div>
      </Section>

      <Section tone="ground" title="What moves the number">
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
          <strong>Whether anyone is living in it.</strong> An empty home has
          nothing standing in front of anything, so every cabinet, closet floor
          and corner is in scope.
        </p>
      </Section>

      <Section tone="sand" title="Add-ons, and what is already included">
        <p>
          For recurring and one-time standard cleaning, oven interiors,
          refrigerator interiors and full interior windows are optional add-ons,
          quoted on top.
        </p>
        <p>
          Oven and refrigerator interiors are already included in our deep-clean
          and move-out scopes. You don&apos;t need to add them to those jobs.
        </p>
      </Section>

      <Section tone="surface" title="What we don&apos;t do">
        <p>
          We don&apos;t clean up after pets beyond ordinary hair and tracked
          dirt, and we don&apos;t handle biohazard or hoarding situations. If
          that&apos;s the job you have, you want a specialist, and we&apos;ll say
          so on the phone rather than after we arrive.
        </p>
        <p>
          On furniture, we move smaller items that two people can shift safely
          without tools. We don&apos;t move loaded, oversized, fragile or
          connected items.
        </p>
      </Section>

      <Section tone="ground" title="Recurring costs less per visit">
        <p>
          A one-time standard clean is $180 and a recurring visit is $160.
          That&apos;s not a loyalty discount. A home cleaned two weeks ago is
          genuinely less work than one cleaned whenever it was last done, so the
          recurring rate reflects a smaller job.
        </p>
      </Section>

      <Section tone="surface" title="Why there is no per-square-foot rate">
        <p>
          Cleaning doesn&apos;t scale evenly with floor area. Kitchens and
          bathrooms carry most of the labor, so a 2,600-square-foot home with two
          bathrooms can be less work than a 1,800-square-foot home with three and
          a half. A rate per square foot would overcharge the first and
          undercharge the second.
        </p>
        <p>
          So we price the job. Give us the size, the bathroom count and the
          condition, and your quote is fixed as long as the property matches what
          you described.
        </p>
      </Section>

      <Section tone="ground" title="What is not on the invoice">
        <p>
          No trip charge, no supplies or equipment fee, no deposit, and no card
          details taken over the phone to hold a booking.
        </p>
        <p>
          Applicable New Mexico gross receipts tax is shown separately on the
          invoice.
        </p>
      </Section>

      <CallToAction line={`Call ${site.phone} and we will price your house on the call.`} />
    </>
  );
}
