"use client";

import { IProject } from "@/types/project";
import Image from "next/image";
import React, { RefObject, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Resource from "./Resource";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: IProject;
  sectionRef: RefObject<HTMLDivElement | null>;
  index: number;
}

const ProjectCard = ({ project, sectionRef, index }: ProjectCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const tProject = useTranslations(`ProjectData.${project.code}`);
  const t = useTranslations("");

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
      className="group overflow-hidden rounded-md shadow-inner transition-all border h-full"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      <div className="p-2 h-full">
        {/* Images */}
        <div className="relative h-36 overflow-hidden sm:h-52 rounded-md">
          <Link href={`/portfolio/project/${project.id}`}>
            <Image
              src={project.images[0]}
              alt={tProject("title", { fallback: project.title })}
              fill
              className="object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute flex items-center gap-1 right-1 top-1">
              {project.category.map((cate) => (
                <span
                  key={cate}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                >
                  {cate}
                </span>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </Link>
          <div className="absolute bottom-0 left-0 right-0 flex justify-end gap-2 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Resource
              resources={project.resources ?? []}
              title={project.title}
            />
          </div>
        </div>

        {/* Content */}
        <Link href={`/portfolio/project/${project.id}`}>
          <div className="mt-3 pb-2">
            <h3 className="font-bold">
              {tProject("title", { fallback: project.title })}
            </h3>

            <p className="mb-3 text-gray-600 dark:text-gray-400 text-justify sm:text-sm text-xs">
              {tProject("summary", { fallback: project.summary })}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.platform.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="font-medium flex items-center gap-1 text-sm mt-3 hover:opacity-80">
              <span>{t("ProjectDetail.viewProjectDetail")}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform hover:scale-110" />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
