"use client";

import { IProject } from "@/types/project";
import ProjectMetrics from "./ProjectMetrics";
import ProjectOverview from "./ProjectOverview";
import ProjectInformation from "./ProjectInformation";
import Gallery from "./Gallery";

interface ProjectDetailProps {
  project: IProject;
}
const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className="space-y-4">
      <ProjectOverview project={project} />
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Project Information */}
        <div className="md:w-4/6 w-full space-y-5">
          <ProjectInformation project={project} />
        </div>
        <div className="md:w-2/6 w-full">
          {/* Metrics */}
          <ProjectMetrics project={project} />
        </div>
      </div>
      {/* Project Gallery */}
      {/* Gallery */}
      {project.images.length > 1 && (
        <Gallery
          images={project.images.slice(1, project.images.length) ?? []}
          title="ProjectDetail.webPreview"
          alt={`View image of ${project.title}`}
        />
      )}
      {project.mobileImages && project.mobileImages.length > 0 && (
        <Gallery
          images={project.mobileImages ?? []}
          title="ProjectDetail.mobileAppPreview"
          alt={`View image of ${project.title}`}
          type="mobile"
        />
      )}
    </div>
  );
};

export default ProjectDetail;
