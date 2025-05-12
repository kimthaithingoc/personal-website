"use client";

import { IProject } from "@/types/project";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface RelatedProjectProps {
  relatedProjects: IProject[];
}
const RelatedProject = ({ relatedProjects }: RelatedProjectProps) => {
  const t = useTranslations();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;

    const updateButtons = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateButtons();
    api.on("select", updateButtons);
    api.on("reInit", updateButtons);

    return () => {
      api.off("select", updateButtons);
      api.off("reInit", updateButtons);
    };
  }, [api]);

  return relatedProjects && relatedProjects.length > 0 ? (
    <section ref={sectionRef} id="relatedProjects" className="space-y-3">
      <h4 className="font-semibold text-lg">
        {t("ProjectDetail.relatedProjects")}
      </h4>
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {relatedProjects.map((project, index) => (
            <CarouselItem
              key={project.id}
              className="flex basis-1/2 lg:basis-1/3"
            >
              <div className="w-full">
                <ProjectCard
                  index={index}
                  project={project}
                  sectionRef={sectionRef}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {canScrollPrev && (
          <CarouselPrevious className="left-2 bg-muted text-muted-foreground" />
        )}
        {canScrollNext && (
          <CarouselNext className="right-2 bg-muted text-muted-foreground" />
        )}
      </Carousel>
    </section>
  ) : null;
};

export default RelatedProject;
