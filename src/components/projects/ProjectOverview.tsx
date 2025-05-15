import { IProject } from "@/types/project";
import { useTranslations } from "next-intl";
import React from "react";

interface ProjectDetailProps {
  project: IProject;
}
const ProjectOverview = ({ project }: ProjectDetailProps) => {
  const t = useTranslations();
  return (
    <div>
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
      <h3 className="text-2xl font-bold mt-4 mb-2">{project.title}</h3>
      <span className="text-muted-foreground">{project.summary}</span>
    </div>
  );
};

export default ProjectOverview;
