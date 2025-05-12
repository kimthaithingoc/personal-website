"use client";

import { IProject } from "@/types/project";
import ProjectMetrics from "./ProjectMetrics";
import ProjectOverview from "./ProjectOverview";
import ProjectInformation from "./ProjectInformation";

interface ProjectDetailProps {
  project: IProject;
}
const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className="space-y-4">
      <ProjectOverview project={project} />
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Project  */}
        <div className="md:w-4/6 w-full space-y-5">
          <ProjectInformation project={project} />
        </div>
        <div className="md:w-2/6 w-full">
          {/* Metrics */}
          <ProjectMetrics project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
