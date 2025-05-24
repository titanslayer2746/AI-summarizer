import BgGradient from "@/components/common/BgGradient";
import HeroSection from "@/components/home/HeroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
      </div>

      {/* <DemoSection /> */}
      {/* <HowItWorksSection /> */}
      {/* <PricingSection /> */}
      {/* <CTASection/> */}
    </div>
  );
}
