"use client";

import { projects } from "@/lib/data";
import React, { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import ProjectCard from "./ProjectCard";

const FeaturedProject = () => {
  const [isHover, setIsHover] = useState(false);
  const t = useTranslations("FeaturedProject");
  const tButton = useTranslations("Button");
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-4 space-y-4" id="featuredProject">
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
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            sectionRef={sectionRef}
            index={index}
          />
        ))}
      </div>
      <Link
        href="/portfolio/"
        className="font-semibold flex items-center gap-1 hover:opacity-80"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <span>{tButton("viewMore")}</span>
        <MoveRight
          className="w-4 h-4 transition-transform"
          style={{
            transform: isHover ? "translateX(4px)" : "translateX(0)",
            transition: `opacity 0.3s ease, transform 0.3s ease 0.3s`,
          }}
        />
      </Link>
    </section>
  );
};

export default FeaturedProject;
