"use client";

import { projects } from "@/lib/data";
import { ProjectCategory, ProjectPlatform } from "@/lib/constants";
import { useTranslations } from "next-intl";
import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const ProjectGrid = () => {
  const t = useTranslations();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState(t("Common.all"));
  const [selectedPlatform, setSelectedPlatform] = useState(t("Common.all"));

  const allExitsCategory = [
    t("Common.all"),
    ...Array.from(new Set(projects.flatMap((project) => project.category))),
  ];
  const allExitsPlatform = [
    t("Common.all"),
    ...Array.from(new Set(projects.flatMap((project) => project.platform))),
  ];

  const filterProjects =
    selectedCategory === t("Common.all") && selectedPlatform === t("Common.all")
      ? projects
      : selectedCategory !== t("Common.all") &&
        selectedPlatform !== t("Common.all")
      ? projects
          .filter((project) =>
            project.category.includes(selectedCategory as ProjectCategory)
          )
          .filter((project) =>
            project.platform.includes(selectedPlatform as ProjectPlatform)
          )
      : selectedCategory !== t("Common.all")
      ? projects.filter((project) =>
          project.category.includes(selectedCategory as ProjectCategory)
        )
      : projects.filter((project) =>
          project.platform.includes(selectedPlatform as ProjectPlatform)
        );

  return (
    <div ref={sectionRef} className="py-4 space-y-4" id="projectGrid">
      <div className="flex items-center gap-4">
        {allExitsPlatform.map((platform) => (
          <Button
            className={cn(
              "rounded-xs hover:text-primary/80 hover:bg-transparent",
              selectedPlatform === platform && "border-b-2 border-primary"
            )}
            variant={"ghost"}
            onClick={() => setSelectedPlatform(platform)}
            key={platform}
          >
            {platform}
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {allExitsCategory.map((category) => (
          <Button
            className={cn(
              "rounded-full",
              selectedCategory === category
                ? "hover:bg-primary/80"
                : "border-primary hover:bg-muted hover:text-primary",
              selectedCategory === category &&
                category !== t("Common.all") &&
                "hover:line-through"
            )}
            onClick={() => {
              if (category !== selectedCategory) {
                setSelectedCategory(category);
              } else {
                setSelectedCategory(t("Common.all"));
              }
            }}
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {filterProjects.map((project, index) => (
          <ProjectCard
            sectionRef={sectionRef}
            index={index}
            project={project}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
