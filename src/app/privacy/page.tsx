import type { Metadata } from "next";
import { Hero, Section } from "@/components/ui";
import { image } from "@/lib/images";
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
        image={image("moveOutCleaning")}
      />

      <Section tone="ground" title="What we collect">
        <p>
          When you use the quote form, we collect your name, phone number, and an
          email address if you give one, along with whatever you tell us about
          the property. When you call or text, we keep the same details so we can
          quote the job and schedule it.
        </p>
        <p>
          The chat bubble in the corner of this site is run by Site2CRM. Anything
          you type into it reaches us the same way a form submission does, so
          treat it as a message to us rather than a private note. It collects
          what you type and nothing more.
        </p>
        <p>
          The website itself does not run advertising trackers, does not use
          Google Analytics, and does not set cookies to follow you to other
          sites.
        </p>
      </Section>

      <Section tone="ground" title="What we do with it">
        <p>
          We use it to respond to your request, to quote the cleaning, and to
          contact you about work you have booked with us. That is all. We
          don&apos;t sell it, we don&apos;t rent it, and we don&apos;t add you to
          a marketing list.
        </p>
        <p>
          If you send us a phone number, we may text you about your quote or your
          appointment. Reply STOP to any message and we will stop texting you.
          Standard message rates from your carrier still apply.
        </p>
      </Section>

      <Section tone="sand" title="Who else sees it">
        <p>
          Form submissions and chat messages are delivered through Site2CRM, the
          software that runs the form and stores the messages so we can answer
          them. Nobody else receives your details, and we don&apos;t share them
          with other cleaning companies, lead brokers or advertisers.
        </p>
        <p>
          This site is hosted on Amazon Web Services. Like any web host, it keeps
          server logs that record the IP address and browser of each request.
          Those logs exist to keep the site running and to stop abuse. We do not
          use them to build a profile of you, and we do not connect them to your
          quote request.
        </p>
      </Section>

      <Section tone="surface" title="How long we keep it">
        <p>
          We keep quote requests and contact details for as long as we
          are working together, and for a reasonable period afterward for
          scheduling and tax records. Ask us to delete your details and we will.
        </p>
        <p>
          A quote that never turned into a booking gets cleared out once it is
          clearly stale. We keep records tied to work we actually performed for
          longer, because tax rules require it.
        </p>
      </Section>

      <Section tone="ground" title="Children">
        <p>
          This site sells a cleaning service to adults and is not directed at
          children. We do not knowingly collect information from anyone under 13.
          If you believe a child has sent us their details, call or text us and we
          will delete them.
        </p>
      </Section>

      <Section tone="ground" title="Asking us about your information">
        <p>
          Call or text {site.phone} and ask. You can request a copy of what we
          hold, ask us to correct it, or ask us to delete it. You can also email{" "}
          <a href={site.emailHref}>{site.email}</a>. We answer these ourselves,
          so there is no form to fill out and no ticket queue.
        </p>
        <p>
          If we change this notice, the changed version replaces this one on this
          page. We are a two-person cleaning company in Las Cruces, not a data
          business, and any change here will be about describing what we do more
          plainly rather than collecting more from you.
        </p>
      </Section>

    </>
  );
}
