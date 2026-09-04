export const site = {
  name: "Las Cruces Cleaning",
  domain: "lascrucescleaning.com",
  url: "https://lascrucescleaning.com",
  phone: "(575) 200-4717",
  phoneHref: "tel:+15752004717",
  city: "Las Cruces",
  region: "NM",
  areaServed: "Las Cruces, New Mexico",
  hours: "Monday through Saturday, 8am to 6pm",
};

export type Price = {
  service: string;
  from: number;
  unit: string;
  detail: string;
};

export const prices: Price[] = [
  {
    service: "Recurring clean, every two weeks",
    from: 160,
    unit: "per visit",
    detail:
      "Kitchen, bathrooms, floors, dusting and surfaces throughout. The rate holds as long as the schedule does.",
  },
  {
    service: "One-time standard clean",
    from: 180,
    unit: "one time",
    detail:
      "The same work as a recurring visit, booked once. It costs more per visit because there is no second visit keeping the house from drifting.",
  },
  {
    service: "First-time deep clean",
    from: 320,
    unit: "one time",
    detail:
      "Baseboards, inside appliances, grout, vents and the build-up a standard clean does not reach. Most recurring clients start here.",
  },
  {
    service: "Move-out clean",
    from: 350,
    unit: "one time",
    detail:
      "An empty house cleaned to hand back to a landlord or a buyer. Inside cabinets, inside the oven and refrigerator, every fixture.",
  },
];

export const services = [
  {
    slug: "house-cleaning",
    title: "House Cleaning",
    blurb: "Recurring and one-time cleaning for homes in Las Cruces.",
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    blurb: "The reset clean, for a house that has gone a while.",
  },
  {
    slug: "move-out-cleaning",
    title: "Move-Out Cleaning",
    blurb: "Empty houses cleaned for the walkthrough.",
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    blurb: "Offices and small commercial spaces, after hours.",
  },
];
