import type { Metadata } from "next";
import { Hero, Section, Faq, faqSchema, Schema, type QA } from "@/components/ui";
import QuoteForm from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Las Cruces Cleaning",
  description:
    "Call or text (575) 386-5714 for a cleaning quote in Las Cruces. Monday through Saturday, 8am to 6pm.",
  alternates: { canonical: "/contact/" },
  openGraph: { url: "/contact/" },
};

const faq: QA[] = [
  {
    q: "How fast will you get back to me?",
    a: "The phone is answered during working hours, Monday through Saturday, 8am to 6pm. A call outside those hours or a form submission gets a reply the next working morning. There is no call centre in between, so the person who answers is the person who will be cleaning your house.",
  },
  {
    q: "Can you really quote without seeing the house?",
    a: "For houses, yes. Square footage, bathroom count and how long it has been are enough to price the job accurately, and we would rather spend that time cleaning than driving to look at a kitchen we can already picture. Commercial spaces are the exception and do get a walkthrough.",
  },
  {
    q: "Is the quote a fixed price?",
    a: "Yes. The number you are given on the phone is the number you pay, provided the house matches the description. If we arrive to something substantially different from what was described, we call you before starting rather than after finishing.",
  },
  {
    q: "How do I pay?",
    a: "After the work, not before. We do not take deposits for residential cleaning and we do not ask for card details over the phone to hold a booking. Anyone in this trade who does should be treated with suspicion.",
  },
  {
    q: "What areas do you cover?",
    a: "Las Cruces and Mesilla, plus the immediate outskirts. We do not serve El Paso. If you are on the far edge of the valley, call and ask rather than assuming, because the answer depends on what else is booked that day.",
  },
  {
    q: "Can I book a one-time clean rather than a schedule?",
    a: "Yes. One-time standard cleans, deep cleans and move-out cleans are all available on their own with no requirement to continue. Recurring visits are cheaper per visit, but nobody has to sign up for a schedule to get the phone answered.",
  },
];

export default function Contact() {
  return (
    <>
      <Schema data={faqSchema(faq)} />
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

      <Section title="When to call rather than write">
        <p>
          If there is a deadline attached, call. Move-out cleans cluster at the
          end of the month because leases do, and the last few days of any month
          book out first. A phone call gets you a date in the diary in the time
          it takes a form to reach an inbox.
        </p>
        <p>
          For everything else the form is fine, and texting the same number works
          too. Plenty of people would rather type the details than describe a
          bathroom out loud, and a text with the square footage in it gets the
          same answer a call would.
        </p>
      </Section>

      <Section title="Common questions">
        <Faq items={faq} />
      </Section>
    </>
  );
}
