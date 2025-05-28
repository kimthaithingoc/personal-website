import { IProject } from "@/types/project";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { MoveLeft, MoveRight } from "lucide-react";

interface ProjectNavigationProps {
  prevProject: IProject | null;
  nextProject: IProject | null;
}
const ProjectNavigation = ({
  prevProject,
  nextProject,
}: ProjectNavigationProps) => {
  const t = useTranslations();
  return (
    <div className="flex items-center justify-between">
      {prevProject && (
        <Link
          href={`/portfolio/project/${prevProject.id}`}
          className="font-semibold hover:text-primary/80 flex items-center gap-2"
        >
          <MoveLeft />
          {t("Common.prev")}: {prevProject.title}
        </Link>
      )}
      {nextProject && (
        <Link
          href={`/portfolio/project/${nextProject.id}`}
          className="font-semibold hover:text-primary/80 flex items-center gap-2 ml-auto"
        >
          {t("Common.next")}: {nextProject.title}
          <MoveRight />
        </Link>
      )}
    </div>
  );
};

export default ProjectNavigation;
