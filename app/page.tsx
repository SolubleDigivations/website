import Expertise from "@/components/home/Expertise";
import FeaturedWork from "@/components/home/FeaturedWork";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import QuoteBand from "@/components/home/QuoteBand";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Expertise/>
      <FeaturedWork/>
      <QuoteBand/>
    </div>
  );
}
