export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/pricing",
  "/house-cleaning",
  "/deep-cleaning",
  "/move-out-cleaning",
  "/commercial-cleaning",
  "/las-cruces-nm",
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r}/`.replace(/([^:]\/)\/+/g, "$1"),
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r === "/pricing" ? 0.9 : 0.7,
  }));
}
