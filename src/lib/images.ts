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
    "las-cruces-house-cleaning-hero.webp",
    "Sunlit southwestern living room with a jute rug, kiva fireplace and desert mountains through the window",
  ),
  houseCleaning: banner(
    "house-cleaning-las-cruces.webp",
    "Clean kitchen with empty countertops, a stainless sink and the Organ Mountains through the window",
  ),
  deepCleaning: banner(
    "deep-cleaning-las-cruces.webp",
    "Spotless bathroom with a white tile counter, folded towels and a clear glass shower",
  ),
  moveOutCleaning: banner(
    "move-out-cleaning-las-cruces.webp",
    "Empty room with swept wood floors and bare walls, sunlight falling across the floor",
  ),
  commercialCleaning: banner(
    "commercial-cleaning-las-cruces.webp",
    "Small office with clean desks, dark screens and freshly vacuumed carpet at dusk",
  ),
  about: banner(
    "las-cruces-cleaning-supplies.webp",
    "Amber spray bottles, folded microfiber cloths, a wooden brush and a bowl of baking soda on a stone counter",
  ),
  pricing: banner(
    "las-cruces-cleaning-pricing.webp",
    "Simple dining room with a bare wooden table in warm afternoon light",
  ),
  houseCleaningCard: card(
    "house-cleaning-las-cruces-card.webp",
    "House cleaning in Las Cruces",
  ),
  deepCleaningCard: card(
    "deep-cleaning-las-cruces-card.webp",
    "Deep cleaning in Las Cruces",
  ),
  moveOutCleaningCard: card(
    "move-out-cleaning-las-cruces-card.webp",
    "Move-out cleaning in Las Cruces",
  ),
  commercialCleaningCard: card(
    "commercial-cleaning-las-cruces-card.webp",
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
