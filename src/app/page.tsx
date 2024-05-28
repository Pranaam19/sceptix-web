import Image from "next/image";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Domains from "@/components/Domains";

export default function Home() {
  return (
    <>
      {/* <div>Home</div> */}
      <Hero />
      <AboutUs />
      <Domains />
    </>
  );
}
