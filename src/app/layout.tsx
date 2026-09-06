import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { ogImage } from "@/lib/images";
import "./globals.css";

const og = ogImage();

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "House Cleaning in Las Cruces, NM | Las Cruces Cleaning",
    template: "%s | Las Cruces Cleaning",
  },
  description:
    "House cleaning, deep cleaning and move-out cleaning in Las Cruces, New Mexico. Prices published up front. Call (575) 386-5714.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
    ...(og ? { images: [{ url: og, width: 1200, height: 630 }] } : {}),
  },
  robots: { index: true, follow: true },
};

const nav = [
  { href: "/house-cleaning/", label: "House Cleaning" },
  { href: "/deep-cleaning/", label: "Deep Cleaning" },
  { href: "/move-out-cleaning/", label: "Move-Out" },
  { href: "/commercial-cleaning/", label: "Commercial" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/las-cruces-nm/", label: "Service Area" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

const legalNav = [{ href: "/privacy/", label: "Privacy" }];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const org = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HouseCleaningBusiness", "Organization"],
    "@id": `${site.url}#business`,
    name: site.name,
    url: site.url,
    telephone: "+1-575-386-5714",
    priceRange: "$$",
    currenciesAccepted: "USD",
    ...(og ? { image: `${site.url}${og}` } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Cruces",
      addressRegion: "NM",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Las Cruces",
        containedInPlace: { "@type": "State", name: "New Mexico" },
      },
      {
        "@type": "City",
        name: "Mesilla",
        containedInPlace: { "@type": "State", name: "New Mexico" },
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning services",
      itemListElement: [
        ["House Cleaning", 160, "/house-cleaning/"],
        ["Deep Cleaning", 320, "/deep-cleaning/"],
        ["Move-Out Cleaning", 350, "/move-out-cleaning/"],
        ["Commercial Cleaning", null, "/commercial-cleaning/"],
      ].map(([name, price, path]) => ({
        "@type": "Offer",
        url: `${site.url}${path}`,
        itemOffered: { "@type": "Service", name },
        ...(price
          ? {
              priceSpecification: {
                "@type": "PriceSpecification",
                price,
                priceCurrency: "USD",
                valueAddedTaxIncluded: false,
              },
            }
          : {}),
      })),
    },
  };

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
        />
        <header className="border-b border-line bg-surface">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-4">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Las Cruces Cleaning
            </Link>
            <nav className="order-3 w-full sm:order-2 sm:w-auto">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-2">
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="hover:text-accent">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="order-2 flex items-center gap-2 sm:order-3">
              <a
                href={site.phoneHref}
                className="rounded bg-accent px-4 py-2 text-sm font-semibold text-white"
              >
                {site.phone}
              </a>
              <a
                href={site.smsHref}
                className="rounded border border-line px-3 py-2 text-sm font-semibold text-ink"
              >
                Text
              </a>
            </div>
          </div>
        </header>

        <main id="main-content" className="flex-1">{children}</main>

        <footer className="border-t border-line bg-surface">
          <div className="mx-auto max-w-5xl px-5 py-10 text-sm text-muted">
            <p className="mb-2 font-semibold text-ink">{site.name}</p>
            <p className="mb-1">
              Serving {site.areaServed}. {site.hours}.
            </p>
            <p className="mb-4">
              <a href={site.phoneHref} className="text-accent font-medium">
                {site.phone}
              </a>
              <span aria-hidden> &middot; </span>
              <a href={site.smsHref} className="text-accent font-medium">
                Text us
              </a>
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {[...nav, ...legalNav].map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-accent">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-line">
            <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-5 text-xs text-ink-2 sm:flex-row sm:items-center sm:justify-between">
              <span>
                &copy; {new Date().getFullYear()} {site.name}. Serving{" "}
                {site.areaServed}.
              </span>
              <a
                href="https://axiondeepdigital.com/?utm_source=lascrucescleaning&utm_medium=footer_badge&utm_campaign=built_by"
                target="_blank"
                rel="noopener"
                aria-label="Website built by Axion Deep Digital"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-[#131318] px-2.5 py-1.5 text-white/85 opacity-90 transition-opacity hover:opacity-100"
              >
                <span className="text-[11px] font-medium text-white/85">
                  Built by
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/axiondeepdigital-badge.webp"
                  alt="Axion Deep Digital"
                  width={68}
                  height={20}
                  loading="lazy"
                  decoding="async"
                  className="h-5 w-auto"
                />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
