export interface Testimonial {
  id: number;
  quote: string;
  client: string;
  company: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Soluble didn't just build what we asked for. They helped us figure out what we actually needed.",
    client: "Client Name",
    company: "Company Name",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The process was clear from start to finish. We always knew what was happening and why.",
    client: "Client Name",
    company: "Company Name",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "They took our idea, challenged the right things and turned it into something we were genuinely proud of.",
    client: "Client Name",
    company: "Company Name",
    rating: 5,
  },
];