import Link from "next/link";
import { site, type Price } from "@/lib/site";
import type { SiteImage } from "@/lib/images";

export type Tone = "ground" | "surface" | "sand" | "dark" | "accent";

const toneClass: Record<Tone, string> = {
  ground: "bg-ground text-ink",
  surface: "bg-surface text-ink",
  sand: "bg-sand text-ink",
  dark: "bg-ink text-white",
  accent: "bg-accent-deep text-white",
};

const isDark = (tone: Tone) => tone === "dark" || tone === "accent";

export function Hero({
  eyebrow,
  title,
  lede,
  image,
  showPricesLink = true,
  secondary,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  image?: SiteImage | null;
  showPricesLink?: boolean;
  secondary?: { href: string; label: string };
}) {
  const secondaryLink =
    secondary ?? (showPricesLink ? { href: "/pricing/", label: "See prices" } : null);

  /* Green on a photo, white on the green hero, where green on green vanishes. */
  const buttons = (onImage: boolean) => (
    <div className="mt-9 flex flex-wrap items-center gap-3">
      <a
        href={site.phoneHref}
        className={`rounded-lg px-6 py-3.5 font-semibold shadow-lg shadow-black/25 transition-transform hover:-translate-y-0.5 ${
          onImage ? "bg-accent text-white" : "bg-white text-accent-deep"
        }`}
      >
        Call {site.phone}
      </a>
      <a
        href={site.smsHref}
        className="rounded-lg border border-white/40 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        Text us
      </a>
      {secondaryLink ? (
        <Link
          href={secondaryLink.href}
          className="rounded-lg border border-white/40 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          {secondaryLink.label}
        </Link>
      ) : null}
    </div>
  );

  /* No artwork for this page yet, so fall back to the plain typographic hero. */
  if (!image) {
    return (
      /* Kept dark on purpose: the floating header rides over every hero. */
      <section className="relative isolate overflow-hidden bg-accent-deep text-white">
        <span
          aria-hidden
          className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-clay/20 blur-3xl"
        />
        <span
          aria-hidden
          className="absolute -bottom-32 left-1/3 -z-10 h-80 w-80 rounded-full bg-accent/40 blur-3xl"
        />
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24 md:pt-36">
          <p className="rule-eyebrow mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-clay-soft">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{lede}</p>
          {buttons(false)}
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate bg-ink">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        srcSet={`${image.src.replace(".webp", "-800.webp")} 800w, ${image.src} 1600w`}
        sizes="100vw"
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* Dark where the words sit, clear on the right so the room still reads. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/45 to-black/5"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/50 via-transparent to-black/20"
      />
      <div className="mx-auto flex min-h-[560px] max-w-6xl flex-col justify-center px-5 py-20 sm:min-h-[660px] sm:py-28 md:pt-36">
        <p className="rule-eyebrow mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]">{lede}</p>
        {buttons(true)}
      </div>
    </section>
  );
}

/** The four promises that separate this shop from the rest of the market. */
export function TrustStrip({
  items,
}: {
  items: { label: string; detail: string }[];
}) {
  return (
    <section className="bg-accent-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-7 px-5 py-9 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.label} className="flex gap-3">
            <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-clay" />
            <div>
              <p className="font-semibold leading-tight">{i.label}</p>
              <p className="mt-1 text-sm leading-snug text-white/70">{i.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
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
      className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  );
}

export function Section({
  title,
  eyebrow,
  tone = "ground",
  media,
  children,
}: {
  title?: string;
  eyebrow?: string;
  tone?: Tone;
  /** Pairs the copy with a photo instead of leaving half the row empty. */
  media?: SiteImage | null;
  children: React.ReactNode;
}) {
  const dark = isDark(tone);

  const head = (
    <>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${
            dark ? "text-clay-soft" : "text-clay"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2
          className={`${eyebrow ? "" : "rule-eyebrow "}mb-7 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl`}
        >
          {title}
        </h2>
      ) : null}
    </>
  );

  const prose = (
    <div
      className={`space-y-5 ${
        dark ? "text-white/80" : "text-ink-2"
      } [&>ol]:max-w-2xl [&>p]:max-w-2xl [&>p]:text-lg [&>p]:leading-relaxed [&>ol]:text-lg`}
    >
      {children}
    </div>
  );

  return (
    <section className={toneClass[tone]}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        {media ? (
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
            <div>
              {head}
              {prose}
            </div>
            <div className="relative">
              <span
                aria-hidden
                className="absolute -bottom-3 -right-3 h-full w-full rounded-xl border-2 border-clay/50"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={media.src}
                srcSet={`${media.src.replace(".webp", "-800.webp")} 800w, ${media.src} 1600w`}
                sizes="(max-width: 1024px) 100vw, 900px"
                alt={media.alt}
                width={media.width}
                height={media.height}
                loading="lazy"
                decoding="async"
                className="relative aspect-4/3 w-full rounded-xl object-cover"
              />
            </div>
          </div>
        ) : (
          <>
            {head}
            {prose}
          </>
        )}
      </div>
    </section>
  );
}

export function Included({ items, tone = "ground" }: { items: string[]; tone?: Tone }) {
  const dark = isDark(tone);
  return (
    <ul className="mt-2 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((i) => (
        <li
          key={i}
          className={`flex gap-3 border-t pt-3 ${
            dark ? "border-white/15 text-white/80" : "border-line text-ink-2"
          }`}
        >
          <svg
            aria-hidden
            viewBox="0 0 20 20"
            className={`mt-0.5 h-5 w-5 shrink-0 ${dark ? "text-clay-soft" : "text-accent"}`}
            fill="currentColor"
          >
            <path d="M8.1 13.9 4.6 10.4l1.3-1.3 2.2 2.2 5.9-5.9 1.3 1.3z" />
          </svg>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

/** Published prices are the whole pitch, so they get to be the loudest thing here. */
export function PriceCards({
  prices,
  highlight,
}: {
  prices: Price[];
  highlight?: string;
}) {
  return (
    <div className="not-prose grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {prices.map((p) => {
        const lead = p.service === highlight;
        return (
          <div
            key={p.service}
            className={`flex flex-col rounded-xl border p-6 ${
              lead
                ? "border-accent bg-accent-deep text-white shadow-xl shadow-accent/15"
                : "border-line bg-surface"
            }`}
          >
            {lead ? (
              <span className="mb-3 w-fit rounded-full bg-clay px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                Most booked
              </span>
            ) : null}
            <p className={`text-sm font-semibold ${lead ? "text-white" : "text-ink"}`}>
              {p.service}
            </p>
            <p className="mt-4 flex items-baseline gap-1.5">
              <span className={`text-xs font-medium ${lead ? "text-white/60" : "text-muted"}`}>
                from
              </span>
              <span
                className={`font-display text-4xl font-semibold tracking-tight ${
                  lead ? "text-white" : "text-ink"
                }`}
              >
                ${p.from}
              </span>
            </p>
            <p className={`mt-1 text-xs ${lead ? "text-white/60" : "text-muted"}`}>{p.unit}</p>
            <p
              className={`mt-4 border-t pt-4 text-sm leading-relaxed ${
                lead ? "border-white/20 text-white/75" : "border-line text-ink-2"
              }`}
            >
              {p.detail}
            </p>
          </div>
        );
      })}
    </div>
  );
}

/** Numbered steps, sized so the sequence reads before the words do. */
export function Steps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    /* Wrapped so the section's prose measure does not apply to the grid. */
    <div className="not-prose">
      <ol className="grid gap-6 sm:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="border-t-2 border-clay pt-5">
            <span className="font-display text-4xl font-semibold leading-none text-clay">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-4 font-semibold text-ink">{s.title}</p>
            <p className="mt-2 leading-relaxed text-ink-2">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function CallToAction({ line }: { line: string }) {
  return (
    <section className="bg-accent-deep text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 px-5 py-16 sm:py-20 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="rule-eyebrow text-xs font-semibold uppercase tracking-[0.18em] text-clay-soft">
            Get a number today
          </p>
          <p className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {line}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a
            href={site.phoneHref}
            className="rounded-lg bg-white px-6 py-3.5 font-semibold text-accent-deep transition-transform hover:-translate-y-0.5"
          >
            Call {site.phone}
          </a>
          <a
            href={site.smsHref}
            className="rounded-lg border border-white/40 bg-white/10 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/20"
          >
            Text us
          </a>
        </div>
      </div>
    </section>
  );
}

export type QA = { q: string; a: string };

export function Faq({ items }: { items: QA[] }) {
  return (
    <div className="not-prose grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {items.map((it) => (
        <div key={it.q} className="border-t border-line pt-5">
          <h3 className="text-lg font-semibold text-ink">{it.q}</h3>
          <p className="mt-2 leading-relaxed text-ink-2">{it.a}</p>
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
