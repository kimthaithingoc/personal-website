"use client";

import { IProject } from "@/types/project";
import { Calendar } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import TeamSizeChart from "./TeamSizeChart";
import { Badge } from "../ui/badge";
import { UserChart } from "./UserChart";
import { ContributionChart } from "./ContributionChart";
import Resource from "./Resource";

interface ProjectDetailProps {
  project: IProject;
}
const ProjectMetrics = ({ project }: ProjectDetailProps) => {
  const t = useTranslations();

  return (
    <div className="space-y-3 p-4 border rounded-sm">
      {/* Start & End time */}
      <div className="space-y-2">
        <p className="text-muted-foreground font-semibold">
          {t("ProjectDetail.timeline")}
        </p>
        <p className="space-x-2 text-muted-foreground flex items-center text-sm">
          <p className="space-x-1 flex items-center">
            <Calendar className="w-4 h-4" />
            <span>
              {t("Date.normal", { value: new Date(project.startTime) })}
            </span>
          </p>
          <span>-</span>
          <p className="space-x-1 flex items-center">
            <Calendar className="w-4 h-4" />
            <span>
              {project.endTime
                ? t(
                    "Date.short",
                    { value: new Date(project.endTime) },
                    {
                      dateTime: {
                        short: {
                          day: "numeric",
                          month: "numeric",
                          year: "numeric",
                        },
                      },
                    }
                  )
                : "Present"}
            </span>
          </p>
        </p>
      </div>
      {/* Categories */}
      <span className="text-muted-foreground font-semibold">
        {t("ProjectDetail.categories")}
      </span>
      <div className="space-x-1">
        {project.category.map((category) => (
          <Badge variant="secondary" key={category}>
            {category}
          </Badge>
        ))}
      </div>

      {/* Platforms */}
      <div className="space-y-2">
        <p className="text-muted-foreground font-semibold">
          {t("ProjectDetail.platforms")}
        </p>
        <div className="space-x-1">
          {project.platform.map((platform) => (
            <Badge variant="secondary" key={platform}>
              {platform}
            </Badge>
          ))}
        </div>
        {/* User */}
        {project.metrics && project.metrics.users && (
          <UserChart users={project.metrics.users} />
        )}
      </div>

      {/* Team size */}
      <div className="space-y-2">
        <span className="text-muted-foreground font-semibold">
          {t("ProjectDetail.teamSize")} {!project.team && ": 1"}
        </span>
        {project.team && <TeamSizeChart team={project.team} />}
      </div>

      <div className="flex flex-col sm:flex-row md:flex-col gap-2">
        {/* Role */}
        {project.contribution && project.contribution.role && (
          <div className="space-y-2 md:w-full sm:w-3/4 w-full">
            <p>
              <span className="text-muted-foreground font-semibold">
                {t("ProjectDetail.roles")}
              </span>
            </p>
            <div className="flex items-center flex-wrap gap-1">
              {project.contribution.role.map((role) => (
                <Badge variant="secondary" key={role}>
                  {role}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Contribution */}
        {project.contribution && project.contribution.percentage && (
          <div className="space-y-2 md:w-full sm:w-1/4 w-full">
            <span className="text-muted-foreground font-semibold">
              {t("ProjectDetail.contribution")}
            </span>
            <ContributionChart percentage={project.contribution.percentage} />
          </div>
        )}
      </div>

      {/* Tech stack */}
      <div className="space-y-2">
        <span className="text-muted-foreground font-semibold">
          {t("ProjectDetail.techStack")}
        </span>
        <div className="space-y-2">
          {project.techStack.map((techStack) => (
            <div
              key={techStack.category}
              className="flex items-center flex-wrap space-x-1"
            >
              <span className="text-sm text-muted-foreground font-medium">
                {techStack.category}:
              </span>
              <p className="space-x-1">
                {techStack.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div>
        <div className="space-y-2">
          <span className="text-muted-foreground font-semibold">
            {t("ProjectDetail.resources")}
          </span>
          <div>
            {!project.resources ||
              (project.resources.length === 0 && <span> {t("Empty.na")}</span>)}
          </div>
          <div className="flex flex-wrap gap-1">
            <Resource
              resources={project.resources ?? []}
              title={project.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMetrics;
