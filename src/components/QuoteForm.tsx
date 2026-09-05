"use client";

import { useEffect, useRef } from "react";

const FORM_KEY = "486728db2a343685f6d3";
const WIDGET_SRC = "https://api.site2crm.io/api/public/forms/widget.js";

export default function QuoteForm() {
  const mounted = useRef(false);

  useEffect(() => {
    // The widget appends into the container on load, so guard against React
    // running the effect twice in development and rendering two forms.
    if (mounted.current) return;
    mounted.current = true;

    const s = document.createElement("script");
    s.src = WIDGET_SRC;
    s.defer = true;
    s.dataset.formKey = FORM_KEY;
    s.dataset.container = "s2c-form";
    document.body.appendChild(s);
  }, []);

  return (
    <div className="rounded border border-line bg-surface p-5">
      <div id="s2c-form" />
      <noscript>
        <p className="text-ink-2">
          The quote form needs JavaScript. Call (575) 200-4717 instead and we
          will price the job on the phone.
        </p>
      </noscript>
    </div>
  );
}
