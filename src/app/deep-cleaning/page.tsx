import type { Metadata } from "next";
import { Hero, Section, Included, CallToAction, Schema, serviceSchema, Banner, Faq, faqSchema, type QA } from "@/components/ui";
import { site } from "@/lib/site";
import { image } from "@/lib/images";

export const metadata: Metadata = {
  title: "Deep Cleaning in Las Cruces, NM",
  description:
    "Deep cleaning in Las Cruces from $320. Baseboards, inside appliances, grout and vents, the build-up a standard clean does not reach.",
  alternates: { canonical: "/deep-cleaning/" },
  openGraph: { url: "/deep-cleaning/" },
};

const faq: QA[] = [
  {
    q: "How long does a deep clean take?",
    a: "Most of a working day for two people on a typical Las Cruces home. A larger home, or one neglected for several years, can run longer. We quote the job, not the hour, so your quote holds even when it takes us longer than we expected.",
  },
  {
    q: "Do I have to start with a deep clean before recurring visits?",
    a: "Not always. If your home has been cleaned regularly and you're simply changing who does it, a standard visit is enough. If it's been a year, or it has never had a professional clean, we'll usually recommend starting here.",
  },
  {
    q: "What is the difference between a deep clean and a standard clean?",
    a: "A standard clean handles the surfaces you touch and see every day. A deep clean handles everything behind and beneath them: baseboards, door frames, grout, vents, ceiling fans, inside the oven, inside the refrigerator, cabinet fronts and the build-up around hardware. Same home, different depth.",
  },
  {
    q: "Do you move furniture?",
    a: "We move smaller items that two people can shift safely without tools. We don't move loaded, oversized, fragile or connected items. Tell us in advance if something specific matters and we'll say whether it's realistic.",
  },
  {
    q: "Will a deep clean remove hard water stains?",
    a: "Usually a lot of it, sometimes not all. Las Cruces water is hard, and scale sitting on glass or chrome for years can etch the surface underneath. We'll take it as far as cleaning goes and tell you when what's left is damage rather than dirt.",
  },
  {
    q: "How often does a house need a deep clean?",
    a: "Once at the start, then roughly once a year if recurring visits are keeping up in between. If several recurring visits are skipped, another deep clean may be needed sooner.",
  },
];

export default function DeepCleaning() {
  return (
    <>
      <Schema data={faqSchema(faq)} />
      <Schema
        data={serviceSchema(
          "Deep Cleaning",
          "One-time deep cleaning for homes in Las Cruces, New Mexico, from $320.",
        )}
      />
      <Hero
        eyebrow="Deep Cleaning"
        title="Deep cleaning in Las Cruces, from $320."
        lede="For a home that needs more than routine upkeep: before recurring service, after a long gap, or before it goes on the market."
      />

      <Banner image={image("deepCleaning")} priority />

      <Section title="What a deep clean adds">
        <p>
          Everything in a standard clean, plus the work that a regular visit does
          not have time for:
        </p>
        <Included
          items={[
            "Baseboards, door frames and switch plates",
            "Inside the oven and inside the refrigerator, both included",
            "Grout scrubbed in showers and on tile floors",
            "Vents, ceiling fans and light fixtures",
            "Cabinet fronts, including the handles",
            "Behind and under moveable furniture",
            "Window sills and interior glass throughout",
            "Build-up around faucets, drains and hardware",
          ]}
        />
      </Section>

      <Section title="Who this is for">
        <p>
          Three situations account for nearly all of them: a home that has never
          had a professional clean, one where the last was a year or more ago,
          and one about to go on the market with a buyer walkthrough as the
          deadline.
        </p>
        <p>
          A deep clean takes most of a day in a typical Las Cruces home, quoted
          as one job rather than by the hour.
        </p>
      </Section>

      <Section title="What it costs">
        <p>
          A deep clean starts at $320 for a home of roughly 1,400 to 1,600 square
          feet. Your quote moves with size, bathroom count, and most of all with
          how long it&apos;s been. A home cleaned last spring and one that has
          never had a professional clean can differ by close to double the time.
        </p>
        <p>
          Oven and refrigerator interiors are included in this scope. You
          don&apos;t need to add them.
        </p>
      </Section>

      <Section title="How to get the most out of it">
        <p>
          Clear the surfaces you want cleaned, along with closet floors and the
          area under beds. A deep clean is about reaching what a normal visit
          can&apos;t, and a counter covered in objects is a surface we work
          around.
        </p>
        <p>
          If a specific problem is driving the booking, say so when you call. A
          shower that has gone green, an oven nobody has opened in two years, a
          house being handed to a buyer next week. That changes how we plan the
          day more than a square footage number does.
        </p>
      </Section>

      <Section title="Common questions">
        <Faq items={faq} />
      </Section>

      <CallToAction line={`Call ${site.phone} and describe the house.`} />
    </>
  );
}
