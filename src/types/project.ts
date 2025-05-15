import {
  BackendTech,
  DatabaseTech,
  DevOpsTech,
  FrontendTech,
  MobileTech,
  OtherTech,
  ProjectCategory,
  ProjectPlatform,
  ResourceType,
  Role,
  TechStackCategory,
} from "@/lib/constants";
import { IIdentifiable } from "./identifiable";

export interface IProjectCore extends IIdentifiable {
  images: string[];
  videoDemo?: string;
  videoThumbnail?: string;
  techStack: ITechStack[];
  platform: ProjectPlatform[];
  category: ProjectCategory[];
  resources?: IResource[];
  startTime: string;
  endTime: string;
  metrics?: {
    users: IUserMetric[];
    retentionRate?: number;
    loadTime?: number;
    revenue?: number;
    githubStars?: number;
    forks?: number;
    contributors?: number;
    downloads?: number;
    uptime?: number;
    costSavings?: number;
    testCoverage?: number;
  };
  contribution?: {
    percentage: number;
    role: Role[];
  };
  team?: ITeam[];
}
export interface ITranslatableProject {
  title: string;
  summary: string;
  description: string;
  problemStatement: string;
  solutionOverview: string;
  responsibilities: string[];
  features: string[];
  achievements?: string[];
  lessonsLearned?: string[];
  futurePlans?: string[];
}

export interface IProject extends IProjectCore, ITranslatableProject {}

export interface IPreviewProject extends IIdentifiable {
  title: string;
}

export interface ITeam {
  role: Role;
  members: number;
}

export interface ITechStack {
  category: TechStackCategory;
  tech: (
    | MobileTech
    | FrontendTech
    | BackendTech
    | DevOpsTech
    | DatabaseTech
    | OtherTech
  )[];
}

export interface IUserMetric {
  platform: ProjectPlatform;
  count: number;
}

export interface IResource {
  type: ResourceType;
  url: string;
}
