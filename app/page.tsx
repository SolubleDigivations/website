import Expertise from "@/components/home/Expertise";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Expertise/>
    </div>
  );
}
