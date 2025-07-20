import { cn } from "@/lib/utils";
import { IExperience } from "@/types/experience";
import { Briefcase, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { RefObject, useEffect, useState } from "react";

interface ExperienceCardProps {
  experience: IExperience;
  sectionRef: RefObject<HTMLDivElement | null>;
  index: number;
  experienceLength: number;
}
const ExperienceCard = ({
  experience,
  sectionRef,
  index,
  experienceLength,
}: ExperienceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const tExp = useTranslations("Experience");
  const tProject = useTranslations("ProjectData");
  const tExperience = useTranslations(`ExperienceData.${experience.code}`);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className={cn(
        "group transition-all cursor-default py-3 hover:bg-primary/5",
        index === experienceLength - 1 ? "" : "border-b"
      )}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      {/* Content */}
      <div className="flex justify-between items-center gap-2">
        <div className="transition-all space-y-3 w-4/5">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold">{experience.position}</h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Briefcase className="mr-1 h-4 w-4" />
                <span>
                  {tExperience("company", { fallback: experience.company })}
                </span>
              </div>
              <div className="mt-1 flex items-center text-gray-500 dark:text-gray-400 sm:mt-0">
                <MapPin className="mr-1 h-4 w-4" />
                <span>
                  {tExperience("location", { fallback: experience.location })}
                </span>
              </div>
            </div>
          </div>
          <ul className="ml-5 list-disc space-y-1 text-gray-600 dark:text-gray-400 text-justify">
            {experience.description.map((_, i) => (
              <li key={i}>{tExperience(`description.${i}`)}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            <span className="font-semibold">{tExp("projects")}:</span>
            {experience.projects.length === 0
              ? "-"
              : experience.projects.map((project) => (
                  <Link
                    href={`/portfolio/project/${project.id}`}
                    key={project.id}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                  >
                    {tProject(`${project.code}.title`)}
                  </Link>
                ))}
          </div>
        </div>

        {/* Date - visible on small screens */}
        <span className="flex items-center justify-end font-semibold text-lg w-1/6">
          {experience.startDate} - {experience.endDate}
        </span>
      </div>
    </div>
  );
};

export default ExperienceCard;
