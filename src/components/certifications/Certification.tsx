"use client";

import { useTranslations } from "next-intl";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import CertificationCard from "./CertificationCard";
import { certifications } from "@/lib/data";

const Certification = () => {
  const t = useTranslations("Certification");
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
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification, index) => (
          <CertificationCard
            key={certification.id}
            certification={certification}
            sectionRef={sectionRef}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Certification;
