import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "House Cleaning in Las Cruces, NM | Las Cruces Cleaning",
    template: "%s | Las Cruces Cleaning",
  },
  description:
    "House cleaning, deep cleaning and move-out cleaning in Las Cruces, New Mexico. Prices published up front. Call (575) 200-4717.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
  },
  robots: { index: true, follow: true },
};

const nav = [
  { href: "/house-cleaning/", label: "House Cleaning" },
  { href: "/deep-cleaning/", label: "Deep Cleaning" },
  { href: "/move-out-cleaning/", label: "Move-Out" },
  { href: "/commercial-cleaning/", label: "Commercial" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    telephone: "+1-575-200-4717",
    areaServed: {
      "@type": "City",
      name: "Las Cruces",
      containedInPlace: { "@type": "State", name: "New Mexico" },
    },
  };

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
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
            <a
              href={site.phoneHref}
              className="order-2 rounded bg-accent px-4 py-2 text-sm font-semibold text-white sm:order-3"
            >
              {site.phone}
            </a>
          </div>
        </header>

        <main className="flex-1">{children}</main>

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
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-accent">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
