export const aboutStats = [
  ["2", "Team members", "Small team. Big focus."],
  ["10+", "Projects built", "From ideas to real products."],
  ["100%", "Client satisfaction", "Long-term relationships."],
  ["∞", "Ideas in progress", "Always building."],
] as const;

export const aboutHighlights = [
  { title: "Direct communication with founders", icon: "users" as const },
  { title: "Fast iterations and quick delivery", icon: "clock" as const },
  { title: "Design and engineering under one roof", icon: "layers" as const },
  { title: "Obsession with quality and performance", icon: "target" as const },
] as const;

export const aboutValues = [
  ["Quality First", "We care about details and deliver work we're proud of.", "target"],
  ["Client Focused", "Your goals become our goals. We work closely with you.", "users"],
  ["Continuous Learning", "We keep exploring new technologies and better ways to build.", "bulb"],
  ["Long-Term Partnerships", "We believe in lasting relationships, not one-time projects.", "handshake"],
] as const;

export const technologies = [
  "Next.js", "React", "Node.js", "MongoDB", "React Native", "TypeScript",
  "JavaScript", "Tailwind CSS", "Figma", "Docker", "AWS", "Cloudinary",
  "Razorpay", "GitHub",
] as const;

export const team = [
  {
    name: "Adarsh",
    role: "Co-founder\nDeveloper",
    description: "Full-stack developer with a passion for building web and mobile applications. Loves turning ideas into real products.",
    skills: ["Next.js", "React", "Node.js", "MongoDB"],
    position: "left",
  },
  {
    name: "Kushal",
    role: "Co-founder\nDesigner & Strategist",
    description: "Focused on UI/UX design, product strategy and client collaboration. Ensures every project is visually appealing and impactful.",
    skills: ["Figma", "UI/UX", "Product Strategy"],
    position: "right",
  },
] as const;