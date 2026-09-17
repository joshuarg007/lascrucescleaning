"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mainNav, serviceNav } from "@/lib/nav";
import { site } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";

/**
 * Every hero on this site is dark, so from md up the header rides over it with
 * no background at all and only materialises into a solid pill once you scroll.
 * Phones keep a plain opaque bar, where a transparent one would be unreadable.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const services = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      /* A menu left hanging over the page while it moves reads as a glitch. */
      setServicesOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!services.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  const linkTone = scrolled
    ? "text-ink-2 hover:text-accent"
    : "md:text-white/85 md:hover:text-white text-ink-2 hover:text-accent";

  return (
    <header className="sticky top-0 z-50 md:fixed md:inset-x-0 md:top-0 md:px-5 md:pt-3">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 border-b border-line bg-surface px-5 py-3 md:rounded-full md:transition-all md:duration-300 ${
          scrolled
            ? "md:border md:border-line md:bg-surface/85 md:py-2 md:shadow-lg md:shadow-ink/10 md:backdrop-blur-md"
            : "md:border-transparent md:bg-transparent md:py-3 md:shadow-none md:backdrop-blur-none"
        }`}
      >
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/las-cruces-cleaning-logo.webp"
            alt={site.name}
            width={90}
            height={48}
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-9" : "h-10 md:h-11 md:brightness-0 md:invert"
            }`}
          />
        </Link>

        {/* Desktop: services collapse into one menu so the bar stays short. */}
        <nav className="hidden md:block">
          <ul className={`flex items-center gap-6 text-sm font-medium ${linkTone}`}>
            <li className="relative" ref={services}>
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((v) => !v)}
                className="flex items-center gap-1.5 transition-colors"
              >
                Services
                <svg
                  aria-hidden
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                >
                  <path d="M5.5 7.5 10 12l4.5-4.5z" />
                </svg>
              </button>
              {servicesOpen ? (
                <ul className="absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 overflow-hidden rounded-xl border border-line bg-surface py-1.5 shadow-xl shadow-ink/10">
                  {serviceNav.map((n) => (
                    <li key={n.href}>
                      <Link
                        href={n.href}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-2.5 text-sm text-ink-2 transition-colors hover:bg-accent-soft hover:text-accent"
                      >
                        {n.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
            {mainNav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/*
          960, not a named breakpoint: the bar needs 876px of content width, so
          the icons are the first thing to overflow the pill below that.
        */}
        <SocialLinks
          className="hidden shrink-0 min-[960px]:flex"
          iconClassName="h-4 w-4"
          linkClassName={
            scrolled
              ? "text-ink-2 hover:text-accent"
              : "text-white/75 hover:text-white"
          }
        />

        <a
          href={site.phoneHref}
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
            scrolled
              ? "bg-accent text-white hover:-translate-y-0.5"
              : "bg-accent text-white hover:-translate-y-0.5 md:border md:border-white/45 md:bg-white/10 md:backdrop-blur-sm md:hover:bg-white/20"
          }`}
        >
          {site.phone}
        </a>
      </div>

      {/* Phones: the full list, wrapped, under the bar. */}
      <nav className="border-b border-line bg-surface md:hidden">
        <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-4 gap-y-1.5 px-5 pb-3 text-sm text-ink-2">
          {[...serviceNav, ...mainNav].map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="hover:text-accent">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <SocialLinks
          className="mx-auto max-w-6xl gap-3 px-5 pb-3"
          iconClassName="h-4 w-4"
        />
      </nav>
    </header>
  );
}
