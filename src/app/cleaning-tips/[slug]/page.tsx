import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero, Section, CallToAction, Schema, Faq, faqSchema, videoSchema, articleSchema } from "@/components/ui";
import { VideoEmbed } from "@/components/VideoEmbed";
import { allTips, tipBySlug } from "@/lib/tips";

// `output: export` refuses an empty param list, so before the first tip
// exists we emit one noindexed placeholder. It is not linked and not in the
// sitemap, and it disappears on its own as soon as a real tip lands.
const PLACEHOLDER = "coming-soon";

export function generateStaticParams() {
  const tips = allTips();
  return tips.length ? tips.map((t) => ({ slug: t.slug })) : [{ slug: PLACEHOLDER }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tip = tipBySlug(slug);
  if (!tip) return { title: "Cleaning Tips", robots: { index: false, follow: false } };
  return {
    title: tip.metaTitle,
    description: tip.metaDescription,
    alternates: { canonical: `/cleaning-tips/${tip.slug}/` },
    openGraph: { url: `/cleaning-tips/${tip.slug}/`, type: "article" },
  };
}

const SERVICE_LABEL: Record<string, string> = {
  "house-cleaning": "House Cleaning",
  "deep-cleaning": "Deep Cleaning",
  "move-out-cleaning": "Move-Out Cleaning",
  "commercial-cleaning": "Commercial Cleaning",
};

export default async function TipPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tip = tipBySlug(slug);

  if (!tip) {
    if (slug !== PLACEHOLDER) notFound();
    return (
      <>
        <Hero eyebrow="Cleaning Tips" title="The first tips are on their way." lede="Check back shortly." />
        <Section tone="surface">
          <p>
            <Link href="/cleaning-tips/" className="underline">Back to cleaning tips</Link>
          </p>
        </Section>
      </>
    );
  }

  return (
    <>
      <Schema
        data={
          tip.youtubeId
            ? videoSchema({
                title: tip.title,
                description: tip.metaDescription,
                youtubeId: tip.youtubeId,
                publishedAt: tip.publishedAt,
                duration: tip.duration,
                transcript: tip.transcript,
              })
            : articleSchema({
                title: tip.title,
                description: tip.metaDescription,
                slug: tip.slug,
                publishedAt: tip.publishedAt,
              })
        }
      />
      {tip.faq.length > 0 && <Schema data={faqSchema(tip.faq)} />}

      <Hero eyebrow="Cleaning Tips" title={tip.title} lede={tip.summary} />

      <Section tone="surface">
        {tip.youtubeId && (
          <div className="not-prose mb-8">
            <VideoEmbed youtubeId={tip.youtubeId} title={tip.title} />
          </div>
        )}
        {tip.transcript.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Section>

      {tip.localNote && (
        <Section tone="sand" title="Why this matters in Las Cruces">
          <p>{tip.localNote}</p>
        </Section>
      )}

      {tip.faq.length > 0 && (
        <Section title="Questions we get about this">
          <Faq items={tip.faq} />
        </Section>
      )}

      <Section tone="surface">
        <p className="not-prose">
          {tip.relatedService && SERVICE_LABEL[tip.relatedService] ? (
            <>
              This comes up most on{" "}
              <Link href={`/${tip.relatedService}/`} className="font-semibold text-accent underline">
                {SERVICE_LABEL[tip.relatedService].toLowerCase()}
              </Link>{" "}
              jobs. <Link href="/cleaning-tips/" className="underline">All cleaning tips</Link>.
            </>
          ) : (
            <Link href="/cleaning-tips/" className="underline">All cleaning tips</Link>
          )}
        </p>
      </Section>

      <CallToAction line="We clean homes across Las Cruces, Mesilla and the East Mesa." />
    </>
  );
}
