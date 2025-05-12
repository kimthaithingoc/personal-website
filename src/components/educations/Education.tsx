"use client";

import { useTranslations } from "next-intl";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import EducationCard from "./EducationCard";
import { educations } from "@/lib/data";

const Education = () => {
  const t = useTranslations("Education");
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

      {educations.map((education, index) => (
        <EducationCard
          key={education.id}
          education={education}
          sectionRef={sectionRef}
          index={index}
          educationLength={educations.length}
        />
      ))}
    </section>
  );
};

export default Education;
