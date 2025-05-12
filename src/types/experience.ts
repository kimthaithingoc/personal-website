import { IIdentifiable } from "./identifiable";

export interface IExperienceCore extends IIdentifiable {
  startDate: string;
  endDate: string;
  technologies?: string[];
  projects: IIdentifiable[];
  roles: string[];
}

export interface ITranslatableExperience {
  company: string;
  position: string;
  location: string;
  description: string[];
}

export interface IExperience extends IExperienceCore, ITranslatableExperience {}
