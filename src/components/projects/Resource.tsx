import { IResource } from "@/types/project";
import React from "react";
import ResourceLink from "./ResourceLink";
import { ResourceType } from "@/lib/constants";
import { ExternalLink, FileText, Link } from "lucide-react";
import { Figma, Github } from "../icons";

interface ResourceProps {
  resources: IResource[] | [];
  title: string;
}
export const getResourceIcon = (type: ResourceType) => {
  let icon: React.ElementType;
  switch (type) {
    case ResourceType.Demo:
      icon = ExternalLink;
      break;
    case ResourceType.Document:
      icon = FileText;
      break;
    case ResourceType.Github:
      icon = Github;
      break;
    case ResourceType.Figma:
      icon = Figma;
      break;
    default:
      icon = Link;
      break;
  }
  return icon;
};
const Resource = ({ resources, title }: ResourceProps) => {
  return (
    resources &&
    resources.length > 0 &&
    resources.map((resource) => (
      <ResourceLink
        ariaLabel={`View resource of ${title} on ${resource.type}`}
        href={resource.url}
        icon={getResourceIcon(resource.type)}
        key={resource.type}
      />
    ))
  );
};

export default Resource;
