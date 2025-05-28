import { IProject } from "@/types/project";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import ResourceLink from "./ResourceLink";
import { ResourceType } from "@/lib/constants";
import { getResourceIcon } from "./Resource";

interface ProjectDetailProps {
  project: IProject;
}
const ProjectOverview = ({ project }: ProjectDetailProps) => {
  const t = useTranslations();
  return (
    <div>
      {project.videoDemo ? (
        <video
          className="w-full aspect-video"
          controls
          preload="none"
          poster={project.videoThumbnail}
        >
          <source src={project.videoDemo} type="video/mp4" />
          {/* <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      /> */}
          {t("Empty.video.description")}
        </video>
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
