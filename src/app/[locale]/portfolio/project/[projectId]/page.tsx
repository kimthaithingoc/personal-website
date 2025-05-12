import { projects } from "@/lib/data";
import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectNavigation from "@/components/projects/ProjectNavigation";
import RelatedProject from "@/components/projects/RelatedProject";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

interface Props {
  params: { projectId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((project) => project.id === params.projectId);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: `${project.title} | Portfolio`,
    description: project.summary,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export default function ProjectPage({ params }: Props) {
  const t = useTranslations();
  const currentProject = projects.find((p) => p.id === params.projectId);

  if (!currentProject) {
    notFound();
  }

  const currentIndex = projects.findIndex(
    (project) => project.id === params.projectId
  );
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  const relatedProjects = projects
    .filter((project) => project.id !== params.projectId)
    .filter((project) =>
      project.category.some((cat) => currentProject.category.includes(cat))
    );

  return (
    <div className="container mx-auto px-4 sm:px-10 lg:px-28 xl:px-44 2xl:px-56 space-y-8 mb-8">
      <Link
        href="/portfolio"
        className="font-semibold hover:opacity-80 flex items-center gap-1"
      >
        <MoveLeft />
        {t("ProjectDetail.backToPortfolio")}
      </Link>
      <ProjectDetail project={currentProject} />
      <RelatedProject relatedProjects={relatedProjects} />
      <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
    </div>
  );
}
