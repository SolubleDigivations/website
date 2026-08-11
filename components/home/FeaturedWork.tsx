import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowBigRight, ArrowRight } from "lucide-react";

export const featuredProjects = [
  {
    image: "/assets/featured-works/e-commerce.jpg",
    title: "Lumé",
    type: "E-commerce",
    tags: ["ecommerce"],
  },
  {
    image: "/assets/featured-works/restaurant-website.jpg",
    title: "Maido",
    type: "Restaurant Website",
    tags: ["website", "figma"],
  },
  {
    image: "/assets/featured-works/real-state-website.webp",
    title: "Urbanix",
    type: "Real Estate",
    tags: ["website"],
  },
  {
    image: "/assets/featured-works/b2b-sas.webp",
    title: "Flowly",
    type: "SaaS Platform",
    tags: ["app", "figma"],
  },
  {
    image: "/assets/featured-works/fitness.jpg",
    title: "Fitora",
    type: "Fitness Platform",
    tags: ["app"],
  },
  {
    image: "/assets/featured-works/eduflow.webp",
    title: "Learnova",
    type: "Education Platform",
    tags: ["figma", "website"],
  },
];

function FeaturedWork() {
  return (
    <div className="w-full py-5">
      <h2 className="px-16 font-outfit-500 mb-8">Featured Works</h2>
      <div className="grid grid-cols-3 gap-4 gap-y-12 w-[90%] mx-auto">
        {featuredProjects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex-col items-center px-4 py-4 bg-white rounded-lg relative">
              <div className="relative w-full h-125 overflow-hidden mx-auto rounded-t-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <h3 className="font-outfit-500 text-2xl mt-4">{project.title}</h3>
              <p className="my-2 text-[#7A7A7A]">{project.type}</p>

              <div className="mt-8 flex-row items-center justify-start">
              {project.tags.map((tag) => {
                return <span className="bg-gray-100 px-3 py-2 rounded-md mr-4">{tag}</span>;
              })}
              </div>
              <div className="bg-[#f4f4f2] p-4 absolute bottom-0 right-0 rounded-tl-lg flex-row items-end justify-end">
                <Button variant='outline' className='size-6 p-5
                 bg-blue-400'>
                    <ArrowRight/>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedWork;
