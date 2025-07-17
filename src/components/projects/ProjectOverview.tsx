import { IProject } from "@/types/project";
import Image from "next/image";
import React from "react";
import ResourceLink from "./ResourceLink";
import { ResourceType } from "@/lib/constants";
import { getResourceIcon } from "./Resource";

interface ProjectDetailProps {
  project: IProject;
}
const ProjectOverview = ({ project }: ProjectDetailProps) => {
  return (
    <div>
      {project.videoDemo ? (
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full rounded-md"
            src={project.videoDemo}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="w-full aspect-video relative">
          <Image
            className="object-cover rounded-md aspect-video"
            fill
            src={project.videoThumbnail ?? project.images[0]}
            alt={project.title}
          />
        </div>
      )}
      <div className="flex items-center gap-1">
        <h3 className="text-2xl font-bold mt-4 mb-2">{project.title}</h3>
        {project.resources?.find((r) => r.type === ResourceType.Demo) && (
          <ResourceLink
            ariaLabel={`View resource of ${project.title} on Demo`}
            href={
              project.resources?.find((r) => r.type === ResourceType.Demo)?.url
            }
            icon={getResourceIcon(ResourceType.Demo)}
          />
        )}
      </div>

      <span className="text-muted-foreground">{project.summary}</span>
    </div>
  );
};

export default ProjectOverview;
