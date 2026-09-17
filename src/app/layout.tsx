import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { nav, legalNav } from "@/lib/nav";
import { site, social } from "@/lib/site";
import { SocialLinks } from "@/components/SocialLinks";
import { ShareLinks } from "@/components/ShareLinks";
import { ogImage } from "@/lib/images";
import "./globals.css";

/* Self-hosted by next/font, so the CSP stays font-src 'self'. */
const heading = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

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
    email: site.email,
    logo: `${site.url}/las-cruces-cleaning-logo.webp`,
    sameAs: social.map((s) => s.href),
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
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
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
        <SiteHeader />

        <main id="main-content" className="flex-1">{children}</main>

        <footer className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-muted">
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
              <span aria-hidden> &middot; </span>
              <a href={site.emailHref} className="text-accent font-medium">
                {site.email}
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

            <ShareLinks />

            <h2 className="sr-only">Follow Las Cruces Cleaning</h2>
            <SocialLinks className="mt-6" />
          </div>

          <div className="border-t border-line">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-ink-2 sm:flex-row sm:items-center sm:justify-between">
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

        {/*
          Site2CRM AI chat, this site's own widget key. Loaded lazily because a
          chat bubble should never sit ahead of LCP on the critical path. The
          Amplify CSP allowlists api.site2crm.io for script-src, connect-src and
          frame-src, which this needs.
        */}
        <Script
          src="https://api.site2crm.io/api/public/chat-widget/widget.js"
          data-widget-key="wgt_t7RqWBxfDa0Ncksow-VOWg"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
