"use client";

import { useTranslations } from "next-intl";
import React, { useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/lib/data";
import { Button } from "../ui/button";

const Experience = () => {
  const t = useTranslations("Experience");
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section ref={sectionRef} className="py-4 space-y-4" id="experience">
      <Button
        className="hover:bg-primary/5 relative text-sm px-5 py-0.5 bg-background rounded-full text-foreground font-medium transition-all duration-300 border border-transparent"
        style={{
          backgroundClip: "padding-box",
        }}
      >
        <span className="relative z-10">{t("title")}</span>
        <span className="absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-primary to-background p-0.5 -m-0.5" />
      </Button>

      {experiences.map((experience, index) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          sectionRef={sectionRef}
          index={index}
          experienceLength={experiences.length}
        />
      ))}
    </section>
  );
};

export default Experience;
