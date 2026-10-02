import React from "react";
import { servicesPage } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export default function ServicesList() {
  return (
    <div className="pt-8">
      <div className="">
        {servicesPage.map((service) => (
          <a href={`#${service.id}`} key={service.index}>
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
    <div
      className="flex flex-row py-10 border-t border-gray-300 group cursor-pointer"
    >
      <div className="w-[45%] flex flex-row items-center">
        <div className="size-12 rounded-full bg-muted flex items-center justify-center font-outfit text-muted-foreground mx-8 group-hover:bg-soluble-blue group-hover:text-white transition-all ">
          0{index}
        </div>
        <div className="text-3xl font-extrabold tracking-tighter group-hover:translate-x-2 transition-all ml-4">
          {title}
        </div>
      </div>
      <div className="flex flex-row items-center w-[55%] justify-between">
        <div className="font-semibold tracking-tight text-muted-foreground">
          {subtitle}
        </div>
        <div className="border border-gray-300 bg-white rounded-full size-11 flex items-center justify-center mr-8 group-hover:translate-x-4 group-hover:border-soluble-blue transition-all">
          <ArrowRight className="group-hover:text-soluble-blue transition-colors ease-in" />
        </div>
      </div>
    </div>
  );
}
