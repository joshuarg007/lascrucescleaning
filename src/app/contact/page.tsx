import type { Metadata } from "next";
import { Hero, Section } from "@/components/ui";
import QuoteForm from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Las Cruces Cleaning",
  description:
    "Call or text (575) 200-4717 for a cleaning quote in Las Cruces. Monday through Saturday, 8am to 6pm.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Call or text, and you get a number on the call."
        lede="Tell us the house and the timing. Most quotes take about three minutes on the phone."
      />

      <Section title="How to reach us">
        <p className="text-2xl font-bold">
          <a href={site.phoneHref} className="text-accent">
            {site.phone}
          </a>
        </p>
        <p>{site.hours}. Texts are fine and often faster.</p>
        <p>Serving {site.areaServed}.</p>
      </Section>

      <Section title="Or send it in writing">
        <p>
          Fill this in and we will call you back with a number. It goes straight
          to us, not to a call centre.
        </p>
        <div className="not-prose">
          <QuoteForm />
        </div>
      </Section>

      <Section title="What we will ask you">
        <p>
          Four questions, every time, because the answers are the whole quote:
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-lg">
          <li>What is the property, roughly how big and how many bathrooms.</li>
          <li>When was it last cleaned professionally, if ever.</li>
          <li>Is anyone living in it right now.</li>
          <li>What is the timing, and is there a deadline attached.</li>
        </ol>
        <p>
          Answer those and we can price the job on the call rather than booking a
          walkthrough to tell you something we already know.
        </p>
      </Section>
    </>
  );
}
