import Link from "next/link";
import { Section } from "@/components/ui";
import { tipsForService } from "@/lib/tips";

/**
 * Service pages link out to the tips that belong to them. Without this the
 * tips have exactly one inbound link each, from the hub, which is how
 * `/las-cruces-nm/` ended up orphaned once already.
 */
export function RelatedTips({ service }: { service: string }) {
  const tips = tipsForService(service);
  if (tips.length === 0) return null;

  return (
    <Section tone="sand" title="How we do it">
      <div className="not-prose grid gap-6 sm:grid-cols-2">
        {tips.map((t) => (
          <article key={t.slug} className="border-t border-line pt-4">
            <h3 className="text-base font-semibold text-ink">
              <Link href={`/cleaning-tips/${t.slug}/`} className="hover:text-accent">
                {t.title}
              </Link>
            </h3>
            <p className="mt-2 leading-relaxed text-ink-2">{t.summary}</p>
          </article>
        ))}
      </div>
      <p className="not-prose mt-6">
        <Link href="/cleaning-tips/" className="underline">
          All cleaning tips
        </Link>
      </p>
    </Section>
  );
}
