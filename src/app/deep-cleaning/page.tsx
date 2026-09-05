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
    a: "Most of a working day for two people on a typical Las Cruces house. A larger house, or one that has gone several years, can run longer. We quote the job rather than the hour, so the number you are told is the number you pay even when it takes us longer than we expected.",
  },
  {
    q: "Do I have to start with a deep clean before recurring visits?",
    a: "Not always, but usually. If your house has been cleaned regularly and you are simply changing who does it, a standard visit is enough. If it has been a year, or it has never had a professional clean, starting recurring visits without a deep clean means paying the recurring rate for work that is really a deep clean, and nobody ends up happy.",
  },
  {
    q: "What is the difference between a deep clean and a standard clean?",
    a: "A standard clean handles the surfaces you touch and see every day. A deep clean handles everything behind and beneath them: baseboards, door frames, grout, vents, ceiling fans, inside the oven, inside the refrigerator, cabinet fronts and the build-up around hardware. It is the same house, cleaned to a different depth.",
  },
  {
    q: "Do you move furniture?",
    a: "We clean behind and under anything two people can move safely without tools. Sofas, chairs, side tables and lighter dressers, yes. A loaded bookcase, a piano or an appliance plumbed into the wall, no. Tell us in advance if something specific matters and we will say whether it is realistic.",
  },
  {
    q: "Will a deep clean remove hard water stains?",
    a: "Usually a lot of it, and sometimes not all of it. Las Cruces water is hard, and mineral scale that has been on glass or chrome for years can etch the surface underneath. We will get it back as far as cleaning goes and tell you honestly when what is left is damage rather than dirt.",
  },
  {
    q: "How often does a house need a deep clean?",
    a: "Once at the start, then roughly once a year if recurring visits are keeping up in between. A house on biweekly cleaning that skips a lot of visits will want one sooner.",
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
        title="The reset clean, from $320."
        lede="For a house that has gone a while, or one that has never been cleaned professionally. It is the visit that makes the recurring rate possible."
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
            "Inside the oven and inside the refrigerator",
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
          Three situations account for nearly all of them. A house that has never
          had a professional clean. A house where the last one was a year or more
          ago. And a house about to go on the market, where the buyer walkthrough
          is the deadline.
        </p>
        <p>
          A deep clean takes most of a day in a typical Las Cruces house. We
          quote it as one job rather than by the hour, so a slow morning is our
          problem rather than yours.
        </p>
      </Section>

      <Section title="What it costs, and why">
        <p>
          A deep clean starts at $320 for a house of roughly 1,400 to 1,600
          square feet. The figure moves with size, with the number of bathrooms,
          and most of all with how long it has been. There is a real difference
          between a house cleaned last spring and one that has never had a
          professional clean, and the second takes closer to twice the time.
        </p>
        <p>
          We give you the number on the phone from a description rather than
          insisting on a walkthrough first. It is a fixed price for the job, so
          the figure does not move once we are inside and can see the oven.
        </p>
      </Section>

      <Section title="How to get the most out of it">
        <p>
          Clear the surfaces you want cleaned. A deep clean is about reaching
          what a normal visit cannot reach, and every counter covered in objects
          is a surface we have to work around rather than through. The same goes
          for closet floors and the area under beds.
        </p>
        <p>
          If there is a specific problem driving the booking, say so when you
          call. A shower that has gone green, an oven nobody has opened in two
          years, a house being handed to a buyer next week. Knowing the real
          reason changes how we plan the day, and it is more useful to us than a
          square footage number on its own.
        </p>
      </Section>

      <Section title="Common questions">
        <Faq items={faq} />
      </Section>

      <CallToAction line={`Call ${site.phone} and describe the house.`} />
    </>
  );
}
