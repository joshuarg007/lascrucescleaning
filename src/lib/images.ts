import fs from "node:fs";
import path from "node:path";

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const PUBLIC_DIR = path.join(process.cwd(), "public");

const banner = (file: string, alt: string): SiteImage => ({
  src: `/images/${file}`,
  alt,
  width: 1600,
  height: 900,
});

const card = (file: string, alt: string): SiteImage => ({
  src: `/images/${file}`,
  alt,
  width: 640,
  height: 360,
});

export const images = {
  homeHero: banner(
    "las-cruces-house-cleaning-hero.jpg",
    "Sunlit living room in a Las Cruces home after a clean",
  ),
  houseCleaning: banner(
    "house-cleaning-las-cruces.jpg",
    "Tidy kitchen counters and clean floors in a Las Cruces house",
  ),
  deepCleaning: banner(
    "deep-cleaning-las-cruces.jpg",
    "Bathroom tile and fixtures cleaned back to the surface",
  ),
  moveOutCleaning: banner(
    "move-out-cleaning-las-cruces.jpg",
    "Empty room with clean floors and bare windows ready for a walkthrough",
  ),
  commercialCleaning: banner(
    "commercial-cleaning-las-cruces.jpg",
    "Small office cleaned after hours in Las Cruces",
  ),
  about: banner(
    "las-cruces-cleaning-supplies.jpg",
    "Cleaning cloths, brushes and spray bottles set out on a counter",
  ),
  pricing: banner(
    "las-cruces-cleaning-pricing.jpg",
    "Clean, uncluttered room in warm afternoon light",
  ),
  houseCleaningCard: card(
    "house-cleaning-las-cruces-card.jpg",
    "House cleaning in Las Cruces",
  ),
  deepCleaningCard: card(
    "deep-cleaning-las-cruces-card.jpg",
    "Deep cleaning in Las Cruces",
  ),
  moveOutCleaningCard: card(
    "move-out-cleaning-las-cruces-card.jpg",
    "Move-out cleaning in Las Cruces",
  ),
  commercialCleaningCard: card(
    "commercial-cleaning-las-cruces-card.jpg",
    "Commercial cleaning in Las Cruces",
  ),
} as const;

export type ImageKey = keyof typeof images;

/**
 * Returns the image only if the file is actually in public/. Slots stay empty
 * until the artwork lands, so the site never ships a broken image.
 */
export function image(key: ImageKey): SiteImage | null {
  const img = images[key];
  return fs.existsSync(path.join(PUBLIC_DIR, img.src)) ? img : null;
}

export function cardImage(slug: string): SiteImage | null {
  const map: Record<string, ImageKey> = {
    "house-cleaning": "houseCleaningCard",
    "deep-cleaning": "deepCleaningCard",
    "move-out-cleaning": "moveOutCleaningCard",
    "commercial-cleaning": "commercialCleaningCard",
  };
  const key = map[slug];
  return key ? image(key) : null;
}

export function ogImage(): string | null {
  const src = "/images/og-las-cruces-cleaning.jpg";
  return fs.existsSync(path.join(PUBLIC_DIR, src)) ? src : null;
}
