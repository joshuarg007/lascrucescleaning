export const site = {
  name: "Las Cruces Cleaning",
  domain: "lascrucescleaning.com",
  url: "https://lascrucescleaning.com",
  phone: "(575) 386-5714",
  phoneHref: "tel:+15753865714",
  city: "Las Cruces",
  region: "NM",
  areaServed: "Las Cruces, Mesilla and nearby areas",
  areaServedShort: "Las Cruces and Mesilla",
  hours: "Monday through Saturday, 8 a.m. to 6 p.m.",
  smsHref: "sms:+15753865714",
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
      "Kitchen, bathrooms, floors, dusting and surfaces throughout. Oven and refrigerator interiors are optional add-ons.",
  },
  {
    service: "One-time standard clean",
    from: 180,
    unit: "one time",
    detail:
      "The same work as a recurring visit, booked once. It costs more per visit because there is no next visit keeping the home from drifting.",
  },
  {
    service: "First-time deep clean",
    from: 320,
    unit: "one time",
    detail:
      "Baseboards, grout, vents and the build-up a standard clean cannot reach. Oven and refrigerator interiors are included.",
  },
  {
    service: "Move-out clean",
    from: 350,
    unit: "one time",
    detail:
      "An empty home cleaned to hand back to a landlord or a buyer. Inside cabinets, inside the oven and refrigerator, every fixture.",
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
