export const insightCategories = [
  "All",
  "Design",
  "Development",
  "Products",
  "Case Studies",
  "Tips & Guides",
  "Company",
] as const;

export type InsightCategory = (typeof insightCategories)[number];

export type InsightBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "section";
      id: string;
      eyebrow: string;
      title: string;
      paragraphs: string[];
      points?: string[];
    }
  | {
      type: "quote";
      text: string;
      attribution?: string;
    }
  | {
      type: "list";
      id: string;
      eyebrow: string;
      title: string;
      items: string[];
    };

export interface Insight {
  slug: string;
  title: string;
  description: string;
  category: Exclude<InsightCategory, "All">;
  readTime: string;
  image: string;
  accent: string;
  href: string;
  content: InsightBlock[];
}

export const insights: Insight[] = [
  {
    slug: "designing-user-centric-experiences",
    title: "How We Design User-Centric Experiences",
    description:
      "Our approach to UI/UX design, from research and wireframes to high-fidelity designs that solve real user problems.",
    category: "Design",
    readTime: "6 min read",
    image: "/assets/images/projects/stoneza/stoneza-homepage.png",
    accent: "#ff91d4",
    href: "/insights/designing-user-centric-experiences",
    content: [
      { type: "paragraph", text: "Good interfaces do more than look polished. They help people understand what is possible, make confident decisions and move through a product without friction." },
      { type: "section", id: "start-with-people", eyebrow: "The starting point", title: "Start with the person, not the pixels.", paragraphs: ["We begin by understanding who is using the product, what they are trying to accomplish and where the current experience gets in their way.", "This can mean reviewing analytics, speaking with customers or simply mapping the journey with the people closest to the problem."], points: ["Clarify the user’s goal", "Expose moments of uncertainty", "Define what a successful outcome feels like"] },
      { type: "section", id: "make-it-tangible", eyebrow: "Our approach", title: "Make the thinking tangible early.", paragraphs: ["Wireframes give a team something concrete to react to before visual detail makes a direction feel too precious. We explore several routes, test the hierarchy and keep the strongest idea moving."], },
      { type: "quote", text: "The best interface is the one that lets people focus on their goal instead of the interface.", attribution: "A principle we bring to every project" },
      { type: "section", id: "details-build-trust", eyebrow: "What we learned", title: "Details are how the experience earns trust.", paragraphs: ["Clear feedback, useful empty states and thoughtful transitions turn a functional product into one people enjoy using. We treat those details as part of the core experience, not decoration added at the end."] },
    ],
  },
  {
    slug: "nextjs-modern-web-apps",
    title: "Why We Love Next.js for Modern Web Apps",
    description:
      "How Next.js helps us build fast, scalable and maintainable web applications for modern businesses.",
    category: "Development",
    readTime: "7 min read",
    image: "/assets/featured-works/b2b-sas.webp",
    accent: "#ffd65a",
    href: "/insights/nextjs-modern-web-apps",
    content: [
      { type: "paragraph", text: "A modern web application needs to feel fast for its users and calm to maintain for its team. Next.js gives us a practical foundation for balancing both." },
      { type: "section", id: "one-framework", eyebrow: "Why it works", title: "One framework for the whole experience.", paragraphs: ["Routing, rendering, data fetching and deployment conventions live close together. That shared mental model helps a small team spend less time wiring infrastructure and more time improving the product."], points: ["Server-render content that should be fast", "Keep interactive pieces close to the user", "Share a consistent project structure"] },
      { type: "list", id: "performance-by-default", eyebrow: "Performance", title: "Performance is a product feature.", items: ["Ship less JavaScript to the browser.", "Load important content as early as possible.", "Use image and font optimization without custom plumbing.", "Measure real user experience after launch."] },
      { type: "section", id: "choose-with-care", eyebrow: "A considered approach", title: "Use the framework where it helps.", paragraphs: ["The best stack is not the one with the most features. We choose the rendering strategy and integrations that make a product easier to understand, test and evolve."] },
      { type: "quote", text: "Good architecture should make the next useful change feel obvious.", attribution: "Our rule for choosing tools" },
    ],
  },
  {
    slug: "idea-to-mvp",
    title: "From Idea to MVP: A Practical Guide",
    description:
      "Key steps, tools and lessons for turning your product idea into a validated MVP without overcomplicating things.",
    category: "Products",
    readTime: "5 min read",
    image: "/assets/featured-works/eduflow.webp",
    accent: "#52d9ad",
    href: "/insights/idea-to-mvp",
    content: [
      { type: "paragraph", text: "An MVP is not a smaller version of every possible feature. It is the clearest version of one valuable promise, built so that real people can test it." },
      { type: "section", id: "define-promise", eyebrow: "Step one", title: "Define the promise you need to prove.", paragraphs: ["Write down the user, their problem and the outcome your product will provide. If the promise cannot fit into one sentence, the first version probably includes too much."], points: ["Who is this for?", "What problem happens today?", "What would make them come back?"] },
      { type: "section", id: "prototype-risk", eyebrow: "Step two", title: "Prototype the riskiest assumption.", paragraphs: ["A clickable prototype or a manual service can answer an important question before you invest in a complete build. Learn what could invalidate the idea first."] },
      { type: "list", id: "build-measure-learn", eyebrow: "Step three", title: "Build a tight learning loop.", items: ["Choose one measurable behaviour.", "Release to a small, relevant audience.", "Watch what people do, not only what they say.", "Use the evidence to decide what comes next."] },
      { type: "quote", text: "The first release is successful when it replaces a guess with evidence.", },
    ],
  },
  {
    slug: "cineverse-movie-discovery-experience",
    title: "CineVerse: A Movie Discovery Experience",
    description:
      "How we built CineVerse — a cross-platform mobile app for movie lovers with a clean, modern and engaging experience.",
    category: "Case Studies",
    readTime: "6 min read",
    image: "/assets/images/projects/stoneza/cineverse-1.jpg",
    accent: "#b18cff",
    href: "/insights/cineverse-movie-discovery-experience",
    content: [
      { type: "paragraph", text: "CineVerse began with a familiar frustration: finding something great to watch can take longer than watching it. We designed the experience around discovery, not endless browsing." },
      { type: "section", id: "discovery-first", eyebrow: "The challenge", title: "Turn a large catalogue into a personal invitation.", paragraphs: ["Movie lovers want variety, but too much choice creates decision fatigue. The product needed to make recommendations feel useful while leaving room for surprise."] },
      { type: "list", id: "experience-pillars", eyebrow: "Experience pillars", title: "Three choices shaped the product.", items: ["Lead with visual storytelling and strong artwork.", "Make context available without interrupting discovery.", "Let people save, share and return to ideas easily."] },
      { type: "section", id: "from-screen-to-screen", eyebrow: "Cross-platform design", title: "Consistency without making every screen identical.", paragraphs: ["The mobile experience prioritises quick, one-handed decisions. Larger screens create room for comparison and richer details. The visual system connects both without forcing the same layout everywhere."] },
      { type: "quote", text: "Discovery should feel like a good recommendation from a friend, not a database search.", attribution: "The CineVerse product principle" },
    ],
  },
  {
    slug: "choosing-the-right-tech-stack",
    title: "A Simple Guide to Choosing the Right Tech Stack",
    description:
      "Things to consider when selecting technologies for your next web or mobile application.",
    category: "Tips & Guides",
    readTime: "4 min read",
    image: "/assets/featured-works/real-state-website.webp",
    accent: "#6c8cff",
    href: "/insights/choosing-the-right-tech-stack",
    content: [
      { type: "paragraph", text: "There is no universally best technology stack. The right choice is the one that matches the product’s risks, the team’s strengths and the pace at which the business needs to learn." },
      { type: "section", id: "start-with-context", eyebrow: "Start with context", title: "Choose for the product you are building.", paragraphs: ["Before comparing tools, understand the expected users, data, integrations, traffic and team. A small product and a regulated platform should not begin with the same assumptions."] },
      { type: "list", id: "decision-factors", eyebrow: "Decision factors", title: "Ask better questions.", items: ["How quickly do we need to validate the idea?", "Which parts need the strongest guarantees?", "Who will own this system six months from now?", "What can stay simple until there is evidence it needs to scale?"] },
      { type: "section", id: "avoid-fashion", eyebrow: "Avoid the hype cycle", title: "Boring is often a competitive advantage.", paragraphs: ["Familiar, well-supported tools reduce onboarding time and make problems easier to solve. Use new technology when it creates a meaningful advantage, not simply because it is new."] },
      { type: "quote", text: "The best stack is the one that leaves your team with more attention for the customer.", },
    ],
  },
  {
    slug: "website-performance",
    title: "How to Optimize Your Website for Better Performance",
    description:
      "Practical tips and techniques we use to make websites faster, smoother and more reliable.",
    category: "Development",
    readTime: "5 min read",
    image: "/assets/featured-works/fitness.webp",
    accent: "#52d9ad",
    href: "/insights/website-performance",
    content: [
      { type: "paragraph", text: "Performance is part of the experience, not a score to chase after launch. A fast site helps people understand, trust and use a business with less effort." },
      { type: "section", id: "measure-first", eyebrow: "Start with evidence", title: "Measure the journey before changing it.", paragraphs: ["Use real-user data and the browser’s performance tools to find the moments that matter. Optimising a page nobody struggles with is busywork."] },
      { type: "list", id: "practical-wins", eyebrow: "Practical wins", title: "Small improvements compound.", items: ["Serve correctly sized images.", "Prioritise the content visible on first load.", "Remove scripts that do not earn their cost.", "Keep layouts stable as content arrives."] },
      { type: "section", id: "keep-it-fast", eyebrow: "After launch", title: "Make performance part of the system.", paragraphs: ["Set a lightweight budget, check it in CI and review changes with the same care as visual design. Performance stays healthy when it belongs to the team, not one cleanup project."] },
    ],
  },
  {
    slug: "typography-in-web-design",
    title: "Typography in Web Design: Small Details, Big Impact",
    description:
      "Why typography matters and how to use it effectively to create clean, modern and engaging digital experiences.",
    category: "Design",
    readTime: "6 min read",
    image: "/assets/featured-works/restaurant-website.webp",
    accent: "#ffd65a",
    href: "/insights/typography-in-web-design",
    content: [
      { type: "paragraph", text: "Typography is the voice of an interface. It creates rhythm, establishes hierarchy and determines how much effort it takes to understand a page." },
      { type: "section", id: "hierarchy", eyebrow: "The foundation", title: "Give every level a clear job.", paragraphs: ["A strong type system makes the important parts easy to find and the supporting parts easy to scan. Contrast comes from size, weight, spacing and placement working together."] },
      { type: "list", id: "type-checklist", eyebrow: "A useful checklist", title: "Make the words easier to use.", items: ["Keep body copy at a comfortable reading width.", "Use line-height to create breathing room.", "Check hierarchy at mobile sizes.", "Test real content instead of placeholder text."] },
      { type: "section", id: "personality-and-clarity", eyebrow: "The balance", title: "Personality should never cost clarity.", paragraphs: ["Expressive type can make a brand memorable, but the words still need to work. We pair characterful display styles with dependable reading styles and let the content lead."] },
      { type: "quote", text: "Good typography disappears just enough for the idea to come forward.", },
    ],
  },
  {
    slug: "two-people-one-obsession",
    title: "Two People. One Obsession.",
    description:
      "The story behind Soluble — our journey, our values and what drives us to build meaningful digital products.",
    category: "Company",
    readTime: "3 min read",
    image: "/assets/images/about/founders.png",
    accent: "#6c8cff",
    href: "/insights/two-people-one-obsession",
    content: [
      { type: "paragraph", text: "Soluble started with two people who wanted to make digital work feel more thoughtful, more useful and more human. We are still guided by that same obsession." },
      { type: "section", id: "why-soluble", eyebrow: "Why we started", title: "Make complexity feel possible.", paragraphs: ["Businesses often have good ideas trapped behind unclear journeys, scattered systems or a lack of time. We bring design and development together to turn that complexity into something people can use."] },
      { type: "list", id: "our-values", eyebrow: "What guides us", title: "The values behind the work.", items: ["Be curious before being certain.", "Make decisions visible and collaborative.", "Care about the last 10 percent.", "Build things that remain useful."] },
      { type: "section", id: "the-road-ahead", eyebrow: "Looking ahead", title: "Keep learning in public.", paragraphs: ["Every project gives us a new question. Sharing what we learn helps us stay honest, improves the work and hopefully gives other teams a useful starting point too."] },
      { type: "quote", text: "We do not want to make more noise. We want to make better things.", attribution: "The Soluble point of view" },
    ],
  },
  {
    slug: "business-ideas-to-digital-products",
    title: "How We Turn Business Ideas into Digital Products",
    description:
      "Our end-to-end process for transforming ideas into real, useful and scalable digital solutions.",
    category: "Products",
    readTime: "5 min read",
    image: "/assets/featured-works/e-commerce.webp",
    accent: "#52d9ad",
    href: "/insights/business-ideas-to-digital-products",
    content: [
      { type: "paragraph", text: "Turning an idea into a product is a process of making decisions visible. The goal is not to predict every detail; it is to create enough clarity to take the next useful step." },
      { type: "section", id: "find-the-opportunity", eyebrow: "Understand the opportunity", title: "Start with the change you want to create.", paragraphs: ["We map the business goal, user need and constraints together. This reveals where the opportunity is real and which assumptions need testing before a solution is designed."] },
      { type: "list", id: "delivery-loop", eyebrow: "Our delivery loop", title: "Move from idea to product in stages.", items: ["Align on the problem and success measures.", "Prototype the core journey.", "Build a focused first release.", "Learn from usage and improve deliberately."] },
      { type: "section", id: "design-for-change", eyebrow: "Build for the next version", title: "A useful first product leaves room to grow.", paragraphs: ["We create a clear foundation without pretending we know the future. Flexible patterns, documented decisions and a healthy technical baseline make the next stage easier."] },
      { type: "quote", text: "A product becomes real when an idea starts helping someone.", },
    ],
  },
];

export const topics = [
  { name: "Design", count: 12, color: "#ff91d4" },
  { name: "Development", count: 18, color: "#6c8cff" },
  { name: "Products", count: 10, color: "#52d9ad" },
  { name: "Case Studies", count: 6, color: "#ffd65a" },
  { name: "Tips & Guides", count: 14, color: "#b18cff" },
  { name: "Company", count: 5, color: "#ff8b3d" },
];
