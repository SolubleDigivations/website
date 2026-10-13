import Image from "next/image";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { SectionHeading } from "./AboutShared";
import { Sunburst3 } from "../graphics/Sunburst3";
import { Sunburst4 } from "../graphics/Sunburst4";
import CurvedArrow2 from "../graphics/CurvedArrow2";

const team = [
  {
    name: "Adarsh",
    role: (
      <>
        Co-founder
        <br />
        Designer & Developer
      </>
    ),
    decoration: (
      <>
        <div className="absolute bottom-[-7%] left-[-8%] bg-linear-to-r from-soluble-purple/10 via-soluble-purple/40 to-soluble-purple/30 rounded-full aspect-square w-full"></div>

        <div className="absolute top-[-13%] left-[-12%] aspect-square w-full">
          <svg viewBox="0 0 500 670" fill="none" className="w-full h-auto">
            <defs>
              <linearGradient id="blobGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#D5C5FF" />
                <stop offset="100%" stopColor="#A889FF" />
              </linearGradient>
            </defs>
            <path
              fill="url(#blobGradient)"
              d="M 56.547 62.545 C 56.547 62.545 -42.336 240.437 96.245 262.745 C 234.826 285.053 131.06 128.683 224.19 149.649 C 317.32 170.615 316.025 125.185 330.716 65.972 L 56.547 62.545 Z"
            />
          </svg>
        </div>
        <div className={`absolute top-1 z-10 right-1`}>
          <Sunburst4 className="h-8 w-16 text-foreground rotate-32" />
        </div>
      </>
    ),
    image: "/assets/images/about/Adarsh.png",
    description:
      "Full-stack developer with a passion for building web and mobile applications. Loves turning ideas into real products.",
    skills: ["Next.js", "React", "Node.js", "MongoDB"],
    color: "bg-[#DDD6FE]",
    position: "object-[15%_bottom]",
    doodle: "right-2",
  },
  {
    name: "Kushal",
    role: (
      <>
        Co-founder
        <br />
        Devloper & Strategist
      </>
    ),
    decoration: (
      <>
        <div className="absolute bottom-[-7%] left-[-8%] bg-linear-to-r from-soluble-mint/20 via-soluble-mint/60 to-soluble-mint/40 rounded-full aspect-square w-full"></div>

        <div className="absolute top-[-13%] left-[-12%] aspect-square w-full">
          <svg viewBox="0 0 500 670" fill="none" className="w-full h-auto">
            <defs>
              <linearGradient id="blobGradient2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#A7E8D2" />
                <stop offset="100%" stopColor="#52D9AD" />
              </linearGradient>
            </defs>
            <path
              fill="url(#blobGradient2)"
              d="M 56.547 62.545 C 56.547 62.545 -58.329 370.668 71.113 301.586 C 200.555 232.504 93.361 186.944 194.488 163.358 C 295.615 139.772 316.025 125.185 330.716 65.972 L 56.547 62.545 Z"
            />
          </svg>
        </div>
        <div className={`absolute top-1 z-10 right-1`}>
          <CurvedArrow2 className="h-8 w-16 text-foreground rotate-180" />
        </div>
      </>
    ),
    image: "/assets/images/about/Kushal.png",
    description:
      "Focused on UI/UX design, product strategy and client collaboration. Ensures every project is visually appealing and impactful.",
    skills: ["Python", "AI/ML", "Product Strategy"],
    color: "bg-[#A7F3D0]",
    position: "object-[85%_bottom]",
    doodle: "left-2",
  },
];

function SocialLinks({ name }: { name: string }) {
  return (
    <div className="mt-5 flex items-center gap-3 text-foreground/80">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} GitHub`}
        className="flex h-9 w-9 items-center justify-center rounded-full shadow-md text-foreground transition-all bg-white hover:bg-foreground hover:text-white"
      >
        <SiGithub size={20} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} LinkedIn`}
        className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-all bg-white hover:bg-foreground hover:text-white shadow-lg"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href="mailto:contact@solubledigivations.com"
        aria-label={`${name} Email`}
        className="flex h-9 w-9 items-center justify-center rounded-full shadow-lg bg-white text-foreground transition-all hover:bg-foreground hover:text-white"
      >
        <Mail size={20} />
      </a>
    </div>
  );
}

export function AboutTeam() {
  return (
    <section className="container-soluble py-16 md:py-24">
      <SectionHeading label="The team" title="Meet the team">
        <p className="max-w-xs text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Two people with a shared passion for building digital products and
          helping businesses grow.
        </p>
      </SectionHeading>
      <div className="grid gap-6 md:grid-cols-2">
        {team.map((member) => (
          <article
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-linear-to-br from-white to-background shadow-sm transition-all hover:shadow-md sm:flex-row"
            key={member.name}
          >
            <div
              className={`relative h-[220px] w-full shrink-0 overflow-hidden rounded-l-2xl sm:h-auto sm:w-[42%] pt-4`}
            >
              {member.decoration}

              <div className="relative aspect-square w-full">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className={`object-cover transition-transform duration-400 group-hover:scale-105 ${member.position}`}
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                    {member.name}
                  </h3>
                  <span className="rounded-lg bg-[#F4F4F0] px-2.5 py-1 text-right text-[10.5px] font-semibold leading-tight text-muted-foreground">
                    {member.role}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {member.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/40 bg-[#F4F4F0] px-3 py-1 text-[14px] font-semibold text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <SocialLinks name={member.name} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
