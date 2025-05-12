"use client";

import { useTranslations } from "next-intl";
import React from "react";
import DownloadResume from "../shared/DownloadResume";

const Hero = () => {
  const t = useTranslations();
  return (
    <section className="py-4" id="hero">
      <div className="flex flex-col gap-3">
        <div className="space-y-2">
          <h3 className="font-bold tracking-tight text-xl sm:text-3xl md:text-4xl lg:text-5xl">
            {t("Hero.hi")} {t("config.myName")}
          </h3>
          <span className="text-muted-foreground text-lg lg:text-4xl md:text-3xl sm:text-2xl font-semibold">
            {t("Hero.i")}
          </span>
          <span className="text-xl lg:text-5xl md:text-4xl sm:text-3xl font-semibold bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
            {t("Hero.jobTitle")}
          </span>
        </div>
        <span className="sm:text-base lg:text-lg text-sm font-medium text-muted-foreground text-justify">
          {t("Hero.description")}
        </span>
        <div className="flex flex-1">
          <DownloadResume />
        </div>
      </div>
    </section>
  );
};

export default Hero;
