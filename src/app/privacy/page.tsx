import type { Metadata } from "next";
import { Hero, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "What Las Cruces Cleaning does with the name, phone number and email address you send through the quote form.",
  alternates: { canonical: "/privacy/" },
  openGraph: { url: "/privacy/" },
};

export default function Privacy() {
  return (
    <>
      <Hero
        eyebrow="Privacy"
        title="What we do with your information."
        lede="Short, because we collect very little of it."
        showPricesLink={false}
      />

      <Section title="What we collect">
        <p>
          When you use the quote form, we collect your name, phone number, and an
          email address if you give one, along with whatever you tell us about
          the property. When you call or text, we keep the same details so we can
          quote the job and schedule it.
        </p>
        <p>
          The website itself does not run advertising trackers and does not set
          cookies to follow you to other sites.
        </p>
      </Section>

      <Section title="What we do with it">
        <p>
          We use it to respond to your request, to quote the cleaning, and to
          contact you about work you have booked with us. That is all. We
          don&apos;t sell it, we don&apos;t rent it, and we don&apos;t add you to
          a marketing list.
        </p>
      </Section>

      <Section title="Who else sees it">
        <p>
          Form submissions are delivered through Site2CRM, the software that runs
          the form and stores the messages so we can answer them. Nobody else
          receives your details, and we don&apos;t share them with other cleaning
          companies, lead brokers or advertisers.
        </p>
      </Section>

      <Section title="How long we keep it">
        <p>
          We keep quote requests and contact details for as long as we
          are working together, and for a reasonable period afterward for
          scheduling and tax records. Ask us to delete your details and we will.
        </p>
      </Section>

      <Section title="Asking us about your information">
        <p>
          Call or text {site.phone} and ask. You can request a copy of what we
          hold, ask us to correct it, or ask us to delete it.
        </p>
      </Section>
    </>
  );
}
