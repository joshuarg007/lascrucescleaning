export const dynamic = "force-static";

import { site, services, prices } from "@/lib/site";
import { allTips } from "@/lib/tips";

/**
 * Generated, not static. The old public/llms.txt was hand-maintained and had
 * already fallen a day behind the cleaning tips. Anything listed here comes
 * from the same source the pages render from, so it cannot drift.
 *
 * Links must be markdown. Bare URLs fail the llms.txt checks.
 */
const SERVICE_DETAIL: Record<string, string> = {
  "house-cleaning": "Recurring and one-time cleaning for homes, from $160 a visit.",
  "deep-cleaning": "Baseboards, inside appliances, grout and vents, from $320.",
  "move-out-cleaning": "Empty houses cleaned for a landlord walkthrough or a buyer, from $350.",
  "commercial-cleaning": "Offices and small commercial spaces, cleaned after hours, quoted per visit.",
};

function priceLine() {
  const by = (s: string) => prices.find((p) => p.service.startsWith(s))?.from;
  return `Recurring house cleaning starts at $${by("Recurring")} a visit, a one-time standard clean at $${by("One-time")}, a first-time deep clean at $${by("First-time")}, and a move-out clean at $${by("Move-out")}. Final prices depend on the size and condition of the house and are given before the work starts.`;
}

export function GET() {
  const tips = allTips();

  const body = [
    `# ${site.name}`,
    "",
    "> A house cleaning company serving Las Cruces, New Mexico. Prices are published on the site rather than quoted only after a walkthrough, which is unusual in this market.",
    "",
    priceLine(),
    "",
    `Service area is ${site.areaServedShort} only. El Paso is not served. Hours are Monday through Saturday, 8am to 6pm. Phone is ${site.phone}.`,
    "",
    `${site.name} is registered for gross receipts tax with the State of New Mexico and registered as a business with the City of Las Cruces.`,
    "",
    "## Services",
    "",
    ...services.map(
      (s) => `- [${s.title}](${site.url}/${s.slug}/): ${SERVICE_DETAIL[s.slug] ?? s.blurb}`,
    ),
    "",
    "## Reference",
    "",
    `- [Pricing](${site.url}/pricing/): Full price list and what moves a quote up or down.`,
    `- [Service Area](${site.url}/las-cruces-nm/): Where we work and why we do not drive to El Paso.`,
    `- [About](${site.url}/about/): How the company works.`,
    `- [Contact](${site.url}/contact/): Phone and quote request form.`,
  ];

  if (tips.length > 0) {
    body.push(
      "",
      "## Cleaning tips",
      "",
      "Written methods, each covering one job start to finish.",
      "",
      ...tips.map((t) => `- [${t.title}](${site.url}/cleaning-tips/${t.slug}/): ${t.summary}`),
      `- [All cleaning tips](${site.url}/cleaning-tips/): Index of every written method.`,
    );
  }

  return new Response(body.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
