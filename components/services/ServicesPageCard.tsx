import { GoCheckCircleFill } from "react-icons/go";
import Reveal from "../motion/Reveal";
import { ArrowUpRight } from "lucide-react";
import { IconType } from "react-icons";
import { CSSProperties } from "react";
import Image from "next/image";

interface ServiceCardProps {
  index: number;
  title: string;
  subtitle: string;
  icon: IconType;
  color: string;
  list: readonly string[];
  image:string
}

export default function ServicesPageCard({
  index,
  title,
  subtitle,
  icon: ServiceIcon,
  color,
  list,
  image
}: ServiceCardProps) {
  return (
    <div className="">
      <Reveal>
        <div className="bg-white py-8 px-10 rounded-lg flex flex-col  shadow-md group border-2 hover:border-muted-foreground/20 cursor-pointer h-112.5 relative">
          <div className="flex gap-8">
            <div>
              <Reveal delay={index * 0.05}>
                <div
                  className="mb-8 flex h-18 w-18 items-center justify-center rounded-full border border-border"
                  style={
                    {
                      backgroundImage:
                        "linear-gradient(to bottom right, var(--background), color-mix(in srgb, var(--service-color) 70%, transparent), var(--service-color))",
                      "--service-color": color,
                    } as CSSProperties
                  }
                >
                  <ServiceIcon size={35} />
                </div>
              </Reveal>
            </div>
            <div className="flex flex-col">
              <div className="pt-2 pb-6 font-medium text-muted-foreground">
                0{index}
              </div>
              <div className="font-manrope  tracking-[-0.01em]">
                <Reveal delay={index * 0.15}>
                  <h1 className="font-extrabold text-4xl pb-4 tracking-[-0.06em]">
                    {title}
                  </h1>
                </Reveal>
                <Reveal delay={index * 0.18}>
                  <p>{subtitle}</p>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="flex mt-auto justify-between">
            <div className="pt-8">
              <ul className="space-y-2">
                {list.map((listItem, liIndex) => (
                  <Reveal key={liIndex} delay={liIndex * 0.05}>
                    <li className="flex gap-2 items-center" >
                      <GoCheckCircleFill size={20} color={color} />
                      {listItem}
                    </li>
                  </Reveal>
                ))}
              </ul>
              <div className="mt-10 flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm transition-all duration-300 shadow-2xs group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:bg-foreground group-hover:text-background">
                <ArrowUpRight size={20} />
              </div>
            </div>
            <div className="absolute bottom-0 right-0">
                <Image src={image} alt={title} width={200} height={100
                } className="w-[400px]"/>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
