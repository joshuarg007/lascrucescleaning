import fs from "node:fs";
import path from "node:path";

export type TipFaq = { q: string; a: string };

export type Tip = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** 11-char YouTube id, or null for a written tip with no video. */
  youtubeId: string | null;
  publishedAt: string;
  duration: string;
  summary: string;
  transcript: string[];
  localNote: string;
  faq: TipFaq[];
  relatedService: string | null;
};

const DIR = path.join(process.cwd(), "src/content/tips");

// Only the fields the page cannot render without. A tip missing one is a
// generator bug, so fail the build rather than ship a half-empty page.
const REQUIRED = ["slug", "title", "metaTitle", "metaDescription", "publishedAt", "summary"] as const;

function read(file: string): Tip {
  const raw = JSON.parse(fs.readFileSync(path.join(DIR, file), "utf8"));
  for (const key of REQUIRED) {
    if (!raw[key]) throw new Error(`src/content/tips/${file} is missing "${key}"`);
  }
  if (!Array.isArray(raw.transcript) || raw.transcript.length === 0) {
    throw new Error(`src/content/tips/${file} has no transcript, which is the whole point of the page`);
  }
  return { youtubeId: null, duration: "", localNote: "", faq: [], relatedService: null, ...raw } as Tip;
}

export function allTips(): Tip[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .map(read)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function tipBySlug(slug: string): Tip | undefined {
  return allTips().find((t) => t.slug === slug);
}

export function tipsForService(service: string, limit = 3): Tip[] {
  return allTips().filter((t) => t.relatedService === service).slice(0, limit);
}
