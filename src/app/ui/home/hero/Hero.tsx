"use client";

import Image from "next/image";
import { useHeroStore } from "@/store/hero-store";
import PrimaryHeadingComponent from "@/app/ui/components/PrimaryHeadingComponent";
import BadgeComponent from "@/app/ui/components/BadgeComponent";
import TextComponent from "@/app/ui/components/TextComponent";
import SocialLinks from "@/app/ui/home/hero/SocialLinks";
import ContactLinks from "@/app/ui/home/hero/ContactLinks";

const Hero = () => {
  const { findYoe } = useHeroStore();

  return (
    <section id="home" className="flex flex-col pt-44 overflow-hidden">
      <div className="flex justify-start items-center gap-10 mb-10">
        <Image
          src="/caballerorandy.webp"
          alt="caballerorandy Image"
          width={150}
          height={150}
          priority
          quality={100}
          className="mix-blend-overlay object-cover w-20 h-20 transparent-gradient rounded-full"
        />

        <ContactLinks />
      </div>

      <div className="w-full">
        <div className="flex justify-start items-center gap-4 mb-2">
          <PrimaryHeadingComponent>
            <span>Randy Caballero</span>
          </PrimaryHeadingComponent>
          <BadgeComponent>
            <span>Open to work</span>
          </BadgeComponent>
        </div>

        <TextComponent>
          <p className="w-full text-gray-300 opacity-90 font-semibold text-xl mx-auto font-roboto mb-10">
            +{findYoe()} years of experience.{" "}
            <span className="text-gold">Software Engineer</span> specialized in
            the development of unique web applications.
          </p>
        </TextComponent>

        <SocialLinks />

        {/* <ExperienceComponent /> */}
      </div>
    </section>
  );
};

export default Hero;
