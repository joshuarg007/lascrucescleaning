"use client";

import { useRef, useState } from "react";
import { site, type Price } from "@/lib/site";

function CardBody({ p, lead, large = false }: { p: Price; lead: boolean; large?: boolean }) {
  return (
    <>
      {lead ? (
        <span className="mb-3 w-fit rounded-full bg-clay px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
          Most booked
        </span>
      ) : null}
      <p className={`${large ? "text-lg" : "text-sm"} font-semibold ${lead ? "text-white" : "text-ink"}`}>
        {p.service}
      </p>
      <p className="mt-4 flex items-baseline gap-1.5">
        <span className={`text-xs font-medium ${lead ? "text-white/60" : "text-muted"}`}>
          from
        </span>
        <span
          className={`font-display ${large ? "text-6xl" : "text-4xl"} font-semibold tracking-tight ${
            lead ? "text-white" : "text-ink"
          }`}
        >
          ${p.from}
        </span>
      </p>
      <p className={`mt-1 text-xs ${lead ? "text-white/60" : "text-muted"}`}>{p.unit}</p>
      <p
        className={`mt-4 border-t pt-4 ${large ? "text-base" : "text-sm"} leading-relaxed ${
          lead ? "border-white/20 text-white/75" : "border-line text-ink-2"
        }`}
      >
        {p.detail}
      </p>
    </>
  );
}

/** Published prices are the whole pitch, so they get to be the loudest thing here.
 *  Each card opens larger in the middle of the screen when clicked. */
export function PriceCards({
  prices,
  highlight,
}: {
  prices: Price[];
  highlight?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<Price | null>(null);

  const show = (p: Price) => {
    setOpen(p);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();

  const openLead = open?.service === highlight;

  return (
    <>
      <div className="not-prose grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {prices.map((p) => {
          const lead = p.service === highlight;
          return (
            <button
              type="button"
              key={p.service}
              onClick={() => show(p)}
              aria-haspopup="dialog"
              className={`flex cursor-pointer flex-col rounded-xl border p-6 text-left transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                lead
                  ? "border-accent bg-accent-deep text-white shadow-xl shadow-accent/15"
                  : "border-line bg-surface hover:shadow-lg"
              }`}
            >
              <CardBody p={p} lead={lead} />
            </button>
          );
        })}
      </div>

      {/* Native dialog: centered, Escape closes it, focus stays inside. A click on the backdrop closes it too. */}
      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        aria-label={open?.service}
        className="m-auto w-[min(92vw,30rem)] rounded-2xl bg-transparent p-0 backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      >
        {open ? (
          <div
            className={`relative flex flex-col rounded-2xl border p-8 ${
              openLead ? "border-accent bg-accent-deep text-white" : "border-line bg-surface"
            }`}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className={`absolute right-4 top-4 rounded-full p-2 text-2xl leading-none ${
                openLead ? "text-white/70 hover:text-white" : "text-muted hover:text-ink"
              }`}
            >
              ×
            </button>
            <CardBody p={open} lead={openLead} large />
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={site.phoneHref}
                className={`rounded-lg px-5 py-3 font-semibold ${
                  openLead ? "bg-white text-accent-deep" : "bg-accent text-white"
                }`}
              >
                Call {site.phone}
              </a>
              <a
                href={site.smsHref}
                className={`rounded-lg border px-5 py-3 font-semibold ${
                  openLead ? "border-white/40 text-white" : "border-line text-ink"
                }`}
              >
                Text us
              </a>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
