import Link from "next/link";
import { site } from "@/lib/site";
import type { SiteImage } from "@/lib/images";

export function Hero({
  eyebrow,
  title,
  lede,
  showPricesLink = true,
  secondary,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  showPricesLink?: boolean;
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:py-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-2">{lede}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={site.phoneHref}
            className="rounded bg-accent px-5 py-3 font-semibold text-white"
          >
            Call {site.phone}
          </a>
          <a
            href={site.smsHref}
            className="rounded border border-line px-5 py-3 font-semibold"
          >
            Text us
          </a>
          {secondary ? (
            <Link
              href={secondary.href}
              className="rounded border border-line px-5 py-3 font-semibold"
            >
              {secondary.label}
            </Link>
          ) : showPricesLink ? (
            <Link
              href="/pricing/"
              className="rounded border border-line px-5 py-3 font-semibold"
            >
              See prices
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function Banner({
  image,
  priority = false,
}: {
  image: SiteImage | null;
  priority?: boolean;
}) {
  if (!image) return null;
  return (
    <div className="border-b border-line bg-surface">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        srcSet={`${image.src.replace(".webp", "-800.webp")} 800w, ${image.src} 1600w`}
        sizes="(max-width: 800px) 100vw, 1600px"
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="h-52 w-full object-cover sm:h-72 lg:h-96"
      />
    </div>
  );
}

export function Thumb({ image }: { image: SiteImage | null }) {
  if (!image) return null;
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading="lazy"
      decoding="async"
      className="mb-4 h-36 w-full rounded object-cover"
    />
  );
}

export function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
        {title ? (
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
            {title}
          </h2>
        ) : null}
        <div className="max-w-2xl space-y-4 text-ink-2 [&_p]:text-lg">
          {children}
        </div>
      </div>
    </section>
  );
}

export function Included({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 grid gap-x-8 gap-y-2 sm:grid-cols-2">
      {items.map((i) => (
        <li key={i} className="flex gap-2 text-ink-2">
          <span aria-hidden className="text-accent">
            &#8226;
          </span>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function CallToAction({ line }: { line: string }) {
  return (
    <section className="bg-accent-soft">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-5 px-5 py-12">
        <p className="max-w-xl text-xl font-semibold">{line}</p>
        <a
          href={site.phoneHref}
          className="rounded bg-accent px-5 py-3 font-semibold text-white"
        >
          Call {site.phone}
        </a>
      </div>
    </section>
  );
}

export type QA = { q: string; a: string };

export function Faq({ items }: { items: QA[] }) {
  return (
    <div className="not-prose divide-y divide-line border-y border-line">
      {items.map((it) => (
        <div key={it.q} className="py-5">
          <h3 className="font-semibold text-ink">{it.q}</h3>
          <p className="mt-2 text-ink-2">{it.a}</p>
        </div>
      ))}
    </div>
  );
}

export function faqSchema(items: QA[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function serviceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    description,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: {
      "@type": "City",
      name: "Las Cruces",
      containedInPlace: { "@type": "State", name: "New Mexico" },
    },
  };
}

export function Schema({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
