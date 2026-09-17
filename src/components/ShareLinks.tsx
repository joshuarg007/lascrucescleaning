"use client";

import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

/**
 * Referral is how a two-person cleaning company actually grows, so the share
 * row points at the ways a neighbor recommendation really travels here:
 * a Facebook neighborhood group, a post, or a text message.
 */
export function ShareLinks() {
  const pathname = usePathname();
  const url = `${site.url}${pathname}`;
  const said = `${site.name}, house cleaning in ${site.city} with prices on the page.`;
  const enc = encodeURIComponent(url);

  const targets = [
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${enc}`,
    },
    {
      label: "X",
      href: `https://x.com/intent/tweet?url=${enc}&text=${encodeURIComponent(said)}`,
    },
    {
      label: "Text a link",
      href: `sms:?&body=${encodeURIComponent(`${said} ${url}`)}`,
    },
  ];

  return (
    <p className="mt-6">
      Know someone who needs a cleaner?{" "}
      {targets.map((t, i) => (
        <span key={t.label}>
          {i > 0 ? <span aria-hidden> &middot; </span> : null}
          <a
            href={t.href}
            {...(t.href.startsWith("sms:")
              ? {}
              : { target: "_blank", rel: "noopener noreferrer" })}
            className="text-accent font-medium"
          >
            {t.label}
          </a>
        </span>
      ))}
    </p>
  );
}
