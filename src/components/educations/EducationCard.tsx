import { cn } from "@/lib/utils";
import { IEducation } from "@/types/education";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { RefObject, useEffect, useState } from "react";

interface EducationCardProps {
  education: IEducation;
  sectionRef: RefObject<HTMLDivElement | null>;
  index: number;
  educationLength: number;
}
const EducationCard = ({
  education,
  sectionRef,
  index,
  educationLength,
}: EducationCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const tEdu = useTranslations("Education");
  const tEducation = useTranslations(`EducationData.${education.code}`);

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
        "group transition-all cursor-default hover:bg-primary/5 py-3",
        index === educationLength - 1 ? "" : "border-b"
      )}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      {/* Content */}
      <div>
        <div className="transition-all space-y-3">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-xl font-semibold">
              {tEducation("title", {
                degree: tEducation("degree", { fallback: education.degree }),
                field: tEducation("field", { fallback: education.field }),
              })}
            </h3>
            {/* Date - visible on small screens */}
            <span className="flex items-center text-muted-foreground">
              {education.startDate} - {education.endDate}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center font-medium text-gray-700 dark:text-gray-300">
              {tEducation("institution", { fallback: education.institution })}
            </div>
            <div className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <MapPin className="mr-1 h-4 w-4" />
              <span>
                {tEducation("location", { fallback: education.location })}
              </span>
            </div>
          </div>
          {education.gpa && (
            <div className="text-sm font-medium">
              <span>{tEdu("gpa")}: </span>
              <span className="text-gray-700 dark:text-gray-300">
                {education.gpa}
              </span>
            </div>
          )}

          {education.description && (
            <span className="list-disc space-y-1 text-gray-600 dark:text-gray-400">
              {tEducation("description")}
            </span>
          )}
          {education.achievements && education.achievements.length > 0 && (
            <div className="mt-3">
              <h5 className="mb-2 text-sm font-semibold">
                {tEdu("achievements")}
              </h5>
              <ul className="list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400">
                {education.achievements &&
                  education.achievements.map((_, i) => (
                    <li key={i}>{tEducation(`achievements.${i}`)}</li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
