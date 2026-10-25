import React from "react";
import { servicesPage } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export default function ServicesList() {
  const handleServiceClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    event.preventDefault();
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="pt-8">
      <div className="">
        {servicesPage.map((service) => (
          <a
            href={`#${service.id}`}
            key={service.index}
            onClick={(event) => handleServiceClick(event, service.id)}
          >
            <ServiceItem
              index={service.index}
              title={service.title}
              subtitle={service.subtitle}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

interface ServiceItemProps {
  index: number;
  title: string;
  subtitle: string;
}

function ServiceItem({ index, title, subtitle }: ServiceItemProps) {
  return (
    <div className="flex flex-col gap-5 border-t border-gray-300 py-8 group cursor-pointer sm:flex-row sm:items-center sm:py-10">
      <div className="flex w-full flex-row items-center sm:w-[45%]">
        <div className="mx-3 flex size-12 shrink-0 items-center justify-center rounded-full bg-muted font-outfit text-muted-foreground transition-all group-hover:bg-soluble-blue group-hover:text-white sm:mx-8">
          0{index}
        </div>
        <div className="ml-2 text-2xl font-extrabold tracking-tighter transition-all group-hover:translate-x-2 sm:ml-4 sm:text-3xl">
          {title}
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-between sm:w-[55%]">
        <div className="pr-4 text-sm font-medium text-muted-foreground sm:pr-0 sm:text-base">
          {subtitle}
        </div>
        <div className="mr-2 flex size-11 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white transition-all group-hover:translate-x-4 group-hover:border-soluble-blue sm:mr-8">
          <ArrowRight className="group-hover:text-soluble-blue transition-colors ease-in" />
        </div>
      </div>
    </div>
  );
}
